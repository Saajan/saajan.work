import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import appCss from '../styles.css?url'
import type { ReactNode } from 'react'
import { AmbientBackground } from '../components/AmbientBackground'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'Saajan | Portfolio' },
      { name: 'description', content: 'Staff Engineer and AI enthusiast portfolio' },
    ],
    links: [{ rel: 'stylesheet', href: appCss }],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <AmbientBackground />
        <div className="app-container">
          {children}
        </div>
        <Scripts />
      </body>
    </html>
  )
}

