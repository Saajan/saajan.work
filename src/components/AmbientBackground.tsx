import { useRouterState } from '@tanstack/react-router'

export function AmbientBackground() {
  const pathname = useRouterState({ select: (state) => state.location.pathname })
  
  let theme: 'home' | 'professional' | 'personal' = 'home'
  if (pathname.startsWith('/professional')) {
    theme = 'professional'
  } else if (pathname.startsWith('/personal')) {
    theme = 'personal'
  }

  return (
    <div className={`ambient-bg theme-${theme}`}>
      <div className="ambient-blob blob-1" />
      <div className="ambient-blob blob-2" />
      <div className="ambient-blob blob-3" />
      <div className="ambient-grid-overlay" />
    </div>
  )
}

