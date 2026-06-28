import { Link, createFileRoute } from '@tanstack/react-router'
import { BookOpen, CalendarDays } from 'lucide-react'
import { posts } from '../../../blog/professional/posts'

export const Route = createFileRoute('/professional/blog/')({
  component: ProfessionalBlogIndex,
})

function ProfessionalBlogIndex() {
  return (
    <>
      <section className="hero-section">
        <p className="eyebrow"><BookOpen size={16} /> Blog</p>
        <h1>
          Engineering <span>notes</span>
        </h1>
        <p>Short, practical write-ups on building web systems, AI features, and the day-to-day craft of shipping software.</p>
      </section>

      <section className="content-section">
        <div className="section-head">
          <h2><CalendarDays size={18} /> Posts</h2>
          <Link to="/professional" className="section-link">Professional</Link>
        </div>

        <div className="post-grid">
          {posts
            .slice()
            .sort((a, b) => b.date.localeCompare(a.date))
            .map((post) => (
              <article key={post.slug} className="post-card">
                <header className="post-card-head">
                  <p className="post-date">{post.date}</p>
                  <h3 className="post-title">{post.title}</h3>
                  <p className="post-summary">{post.summary}</p>
                </header>
                <footer className="post-card-foot">
                  <Link
                    className="post-read"
                    to="/professional/blog/$blogid"
                    params={{ blogid: post.slug }}
                  >
                    Read
                  </Link>
                </footer>
              </article>
            ))}
        </div>
      </section>
    </>
  )
}
