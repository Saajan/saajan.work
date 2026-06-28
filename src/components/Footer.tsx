import { Github, Linkedin, Mail } from 'lucide-react'

export function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <p className="footer-copyright">
          © {new Date().getFullYear()} saajan.work. Built with passion &amp; code.
        </p>
        <div className="footer-socials">
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="footer-social-link"
          >
            <Github size={18} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="footer-social-link"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="mailto:contact@saajan.work"
            aria-label="Email"
            className="footer-social-link"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  )
}
