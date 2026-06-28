import type { IncomingMessage, ServerResponse } from 'node:http'
// @ts-expect-error server.js is generated dynamically by the build process and lacks static type declarations
import server from '../dist/server/server.js'

export const config = {
  runtime: 'nodejs',
}

export default async function handler(req: IncomingMessage, res: ServerResponse) {
  try {
    // 1. Construct the absolute URL from incoming headers and URL path
    const protocol = req.headers['x-forwarded-proto'] || 'http'
    const host = req.headers['x-forwarded-host'] || req.headers.host || 'localhost'
    const url = `${protocol}://${host}${req.url || ''}`

    // 2. Extract request body for writing operations
    let body: Buffer | undefined = undefined
    if (req.method !== 'GET' && req.method !== 'HEAD') {
      body = await getRequestBody(req)
    }

    // 3. Create Web Standard Request
    const webRequest = new Request(url, {
      method: req.method,
      headers: new Headers(req.headers as Record<string, string>),
      body: body,
      duplex: body ? 'half' : undefined,
    } as RequestInit)

    // 4. Invoke TanStack SSR server fetch handler
    const webResponse = await server.fetch(webRequest)

    // 5. Apply Web Response details back to Node's ServerResponse
    res.statusCode = webResponse.status
    res.statusMessage = webResponse.statusText

    webResponse.headers.forEach((value, key) => {
      if (key.toLowerCase() === 'set-cookie') {
        const cookies = webResponse.headers.getSetCookie()
        res.setHeader(key, cookies)
      } else {
        res.setHeader(key, value)
      }
    })

    // 6. Write Web Response body stream into Node's ServerResponse stream
    if (webResponse.body) {
      const reader = webResponse.body.getReader()
      while (true) {
        const { done, value } = await reader.read()
        if (done) {
          break
        }
        res.write(value)
      }
    }
    res.end()
  } catch (err: unknown) {
    const error = err as Error
    console.error('Error handling request in api/index:', error)
    res.statusCode = 500
    res.end(`Internal Server Error: ${error.message || 'Unknown error'}`)
  }
}

function getRequestBody(req: IncomingMessage): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    const chunks: Buffer[] = []
    req.on('data', (chunk) => chunks.push(chunk))
    req.on('end', () => resolve(Buffer.concat(chunks)))
    req.on('error', (err) => reject(err))
  })
}
