import { Link, createFileRoute, useNavigate } from '@tanstack/react-router'
import { useEffect, useState, type MouseEvent } from 'react'
import { Code2, Heart } from 'lucide-react'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  const navigate = useNavigate()
  const [expandingPanel, setExpandingPanel] = useState<'professional' | 'personal' | null>(null)
  const [collapsingPanel, setCollapsingPanel] = useState<'professional' | 'personal' | null>(null)
  const [slidingPanel, setSlidingPanel] = useState<'professional' | 'personal' | null>(null)
  const [isReturning, setIsReturning] = useState(false)
  const [isReturnReveal, setIsReturnReveal] = useState(false)

  const resetHomeState = () => {
    setExpandingPanel(null)
    setSlidingPanel(null)
    setCollapsingPanel(null)
    setIsReturning(false)
    setIsReturnReveal(false)
  }

  useEffect(() => {
    resetHomeState()
    const panel = sessionStorage.getItem('home-panel-close')
    if (panel === 'professional' || panel === 'personal') {
      setCollapsingPanel(panel)
      setIsReturning(true)
      const revealTimer = window.setTimeout(() => {
        setIsReturnReveal(true)
      }, 140)
      const resetTimer = window.setTimeout(() => {
        resetHomeState()
      }, 860)
      sessionStorage.removeItem('home-panel-close')
      return () => {
        window.clearTimeout(revealTimer)
        window.clearTimeout(resetTimer)
      }
    }
    return undefined
  }, [])

  useEffect(() => {
    const onPageShow = () => resetHomeState()
    window.addEventListener('pageshow', onPageShow)
    return () => window.removeEventListener('pageshow', onPageShow)
  }, [])

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
    collapsingPanel === 'professional' ? 'is-collapsing' : '',
    collapsingPanel === 'personal' ? 'is-fading' : '',
  ]
    .filter(Boolean)
    .join(' ')

  const personalClasses = [
    'home-card',
    'home-card-personal',
    expandingPanel === 'personal' ? 'is-expanding' : '',
    expandingPanel === 'professional' ? 'is-fading' : '',
    collapsingPanel === 'personal' ? 'is-collapsing' : '',
    collapsingPanel === 'professional' ? 'is-fading' : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <main className={`home-layout ${slidingPanel ? 'is-sliding' : ''} ${isReturning ? 'is-returning' : ''} ${isReturnReveal ? 'is-return-reveal' : ''}`}>
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
