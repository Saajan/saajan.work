import { Link, createFileRoute } from '@tanstack/react-router'
import { BookOpen, CalendarDays } from 'lucide-react'
import { getPostBySlug } from '../../../blog/professional/posts'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export const Route = createFileRoute('/professional/blog/$blogid')({
  component: ProfessionalBlogPost,
})

function ProfessionalBlogPost() {
  const { blogid } = Route.useParams()
  const post = getPostBySlug(blogid)

  return (
    <>
      <section className="hero-section">
        <p className="eyebrow"><BookOpen size={16} /> Blog</p>
        <h1>
          {post?.title ?? 'Post not found'}
        </h1>
        <p>
          <span className="post-meta">
            <CalendarDays size={16} />
            {post?.date ?? '—'}
          </span>
        </p>
      </section>

      <section className="content-section">
        {post ? (
          <div className="markdown">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
            components={{
              a: ({ href, children, ...rest }) => (
                <a href={href} target="_blank" rel="noreferrer" {...rest}>
                  {children}
                </a>
              ),
              // The page hero already shows the title.
              h1: ({ children }) => <h2>{children}</h2>,
            }}
          >
            {post.raw}
          </ReactMarkdown>
          </div>
        ) : (
          <p className="post-missing">
            Could not find this post. Go back to the <Link to="/professional/blog" className="section-link">blog index</Link>.
          </p>
        )}
      </section>
    </>
  )
}
