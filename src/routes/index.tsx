import { Link, createFileRoute, useNavigate } from '@tanstack/react-router'
import { useState, type MouseEvent } from 'react'
import { Code2, Heart } from 'lucide-react'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  const navigate = useNavigate()
  const [expandingPanel, setExpandingPanel] = useState<'professional' | 'personal' | null>(null)
  const [slidingPanel, setSlidingPanel] = useState<'professional' | 'personal' | null>(null)

  const handlePanelClick = (panel: 'professional' | 'personal', to: '/professional' | '/personal') =>
    (event: MouseEvent) => {
      event.preventDefault()
      if (expandingPanel || slidingPanel) return
      setExpandingPanel(panel)
      setSlidingPanel(panel)
      window.setTimeout(() => navigate({ to }), 560)
    }

  const professionalClasses = [
    'home-card',
    'home-card-professional',
    expandingPanel === 'professional' ? 'is-expanding' : '',
    expandingPanel === 'personal' ? 'is-fading' : '',
  ]
    .filter(Boolean)
    .join(' ')

  const personalClasses = [
    'home-card',
    'home-card-personal',
    expandingPanel === 'personal' ? 'is-expanding' : '',
    expandingPanel === 'professional' ? 'is-fading' : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <main className={`home-layout ${slidingPanel ? 'is-sliding' : ''}`}>
      <Link to="/professional" className={professionalClasses} onClick={handlePanelClick('professional', '/professional')}>
        <div className="home-card-glow" />
        <div className="home-corner home-corner-tl" />
        <div className="home-corner home-corner-br" />
        <div className="home-card-content">
          <div className="home-icon-shell">
            <Code2 className="home-icon" />
          </div>
          <h1>Professional</h1>
          <p>Skills, experience and projects</p>
        </div>
      </Link>

      <Link to="/personal" className={personalClasses} onClick={handlePanelClick('personal', '/personal')}>
        <div className="home-card-glow" />
        <div className="home-corner home-corner-tr" />
        <div className="home-corner home-corner-bl" />
        <div className="home-card-content">
          <div className="home-icon-shell">
            <Heart className="home-icon" />
          </div>
          <h1>Personal</h1>
          <p>Music, life and more</p>
        </div>
      </Link>
      <div className="home-divider" />
      {slidingPanel === 'professional' ? (
        <div className="home-slide home-slide-professional" aria-hidden="true">
          <div className="home-slide-content">
            <p>Professional</p>
            <h2>Building impactful software</h2>
            <span>Skills, experience and projects</span>
          </div>
        </div>
      ) : null}
      {slidingPanel === 'personal' ? (
        <div className="home-slide home-slide-personal" aria-hidden="true">
          <div className="home-slide-content">
            <p>Personal</p>
            <h2>Beyond the code</h2>
            <span>Music, life and more</span>
          </div>
        </div>
      ) : null}
    </main>
  )
}
