import { Link } from '@tanstack/react-router'
import { Briefcase, Heart, BookOpen, ChevronLeft } from 'lucide-react'

export function Navbar() {
  return (
    <header className="navbar-container">
      <nav className="navbar-content">
        <Link to="/" className="navbar-brand">
          <ChevronLeft className="back-chevron" size={16} />
          <span>saajan.</span>
          <strong>work</strong>
        </Link>
        <div className="navbar-links">
          <Link
            to="/professional"
            activeProps={{ className: 'active' }}
            className="navbar-link-item"
            activeOptions={{ exact: true }}
          >
            <Briefcase size={15} />
            <span>Professional</span>
          </Link>
          <Link
            to="/personal"
            activeProps={{ className: 'active' }}
            className="navbar-link-item"
            activeOptions={{ exact: true }}
          >
            <Heart size={15} />
            <span>Personal</span>
          </Link>
          <Link
            to="/professional/blog"
            activeProps={{ className: 'active' }}
            className="navbar-link-item"
          >
            <BookOpen size={15} />
            <span>Blog</span>
          </Link>
        </div>
      </nav>
    </header>
  )
}
