import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { useState, type MouseEvent } from 'react'
import { ArrowLeft, Facebook, Heart, Instagram, Music, Twitter } from 'lucide-react'

export const Route = createFileRoute('/personal')({
  component: Personal,
})

function Personal() {
  const navigate = useNavigate()
  const [isLeaving, setIsLeaving] = useState(false)

  const handleBack = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    if (isLeaving) return
    setIsLeaving(true)
    sessionStorage.setItem('home-panel-close', 'personal')
    window.setTimeout(() => navigate({ to: '/' }), 360)
  }

  return (
    <main className={`page page-personal ${isLeaving ? 'is-leaving' : ''}`}>
      <nav className="top-nav">
        <a href="/" className="back-link" onClick={handleBack}>
          <ArrowLeft size={18} />
          Back
        </a>
        <p className="brand">
          <span>saajan.</span>
          <strong>work</strong>
        </p>
      </nav>

      <section className="hero-section">
        <p className="eyebrow"><Heart size={16} /> Personal</p>
        <h1>
          Beyond the <span>code</span>
        </h1>
        <p>
          When I am not building software, I am making music. Electronic dance music enthusiast, DJ,
          and music producer.
        </p>
      </section>

      <section className="content-section">
        <h2><Music size={18} /> Music Production</h2>
        <article className="feature-card">
          <div className="feature-media">
            <Music size={54} />
          </div>
          <div className="feature-copy">
            <h3>The Beatlog</h3>
            <p>
              Picked up DJing as a hobby and completed DJing and music production coursework at
              <strong> Resonance Studios</strong> in 2017.
            </p>
            <p>
              Mentored by <strong>DJ Shahil</strong> (DJing) and <strong>DJ Pawas Gupta</strong> (music production).
              Collaborated with <strong>Jaideep Shetty</strong> to form The Beatlog.
            </p>
            <p className="muted">Played a couple of New Year&apos;s Eve gigs in Shakaleshpur. More updates soon.</p>
            <div className="social-links">
              <a href="https://twitter.com/" target="_blank" rel="noreferrer" aria-label="Twitter">
                <Twitter size={18} />
              </a>
              <a href="https://www.facebook.com/thebeatlog/" target="_blank" rel="noreferrer" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="https://www.instagram.com/thebeatlog/" target="_blank" rel="noreferrer" aria-label="Instagram">
                <Instagram size={18} />
              </a>
            </div>
          </div>
        </article>
      </section>

      <section className="content-section">
        <h2>Based in</h2>
        <p>Sullia, Karnataka, India</p>
      </section>
    </main>
  )
}
