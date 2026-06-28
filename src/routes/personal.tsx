import { createFileRoute } from '@tanstack/react-router'
import { Facebook, Heart, Instagram, Music, Twitter, MapPin } from 'lucide-react'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { MusicPlayer } from '../components/MusicPlayer'

export const Route = createFileRoute('/personal')({
  component: Personal,
})

function Personal() {
  return (
    <>
      <Navbar />
      <main className="page page-personal">
        <section className="hero-section glass-panel">
          <div className="section-glow-glow pro-glow" />
          <p className="eyebrow">
            <Heart size={15} /> Personal
          </p>
          <h1>
            Beyond the <span>code</span>
          </h1>
          <p className="lead-text">
            When I am not designing scalable software and building AI systems, I spend my time exploring music, DJing, and producing electronic dance music.
          </p>
        </section>

        <section className="content-section glass-panel">
          <div className="section-head">
            <h2>
              <Music size={18} /> Music Production
            </h2>
            <span className="project-badge">Side Project</span>
          </div>

          <div className="personal-showcase-grid">
            {/* Real simulated player widget */}
            <MusicPlayer />

            <article className="feature-copy">
              <h3>The Beatlog</h3>
              <p>
                Picked up DJing as a creative outlet and completed coursework in DJing and electronic music production at <strong>Resonance Studios</strong> in 2017.
              </p>
              <p>
                Mentored by industry veterans <strong>DJ Shahil</strong> (DJing) and <strong>DJ Pawas Gupta</strong> (music production). Later collaborated with <strong>Jaideep Shetty</strong> to form the duo <strong>The Beatlog</strong>.
              </p>
              <div className="gig-history-card">
                <span className="gig-dot" />
                <p>Played several New Year's Eve sets in Shakaleshpur. Producing melodic techno &amp; progressive house mixes.</p>
              </div>

              <div className="beatlog-social-connect">
                <span className="social-label">Follow The Beatlog:</span>
                <div className="social-links-row">
                  <a
                    href="https://twitter.com/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Twitter"
                    className="artist-social-link twitter"
                  >
                    <Twitter size={16} />
                  </a>
                  <a
                    href="https://www.facebook.com/thebeatlog/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Facebook"
                    className="artist-social-link facebook"
                  >
                    <Facebook size={16} />
                  </a>
                  <a
                    href="https://www.instagram.com/thebeatlog/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram"
                    className="artist-social-link instagram"
                  >
                    <Instagram size={16} />
                  </a>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section className="content-section location-section glass-panel">
          <h2>
            <MapPin size={18} /> Based In
          </h2>
          <div className="location-info">
            <h3>Sullia, Karnataka, India</h3>
            <p className="muted">An energetic coastal region surrounded by lush Western Ghats forests.</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
