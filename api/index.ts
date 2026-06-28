// @ts-expect-error server.js is generated dynamically by the build process and lacks static type declarations
import server from '../dist/server/server.js'

export const config = {
  runtime: 'edge',
}

export default async function handler(request: Request): Promise<Response> {
  return server.fetch(request)
}
