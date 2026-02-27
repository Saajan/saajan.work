import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { useState, type MouseEvent } from 'react'
import { ArrowLeft, Briefcase, Calendar, Code2, Layers, Sparkles } from 'lucide-react'

export const Route = createFileRoute('/professional')({
  component: Professional,
})

const skills = [
  'React.js', 'Next.js', 'Node.js', 'Express', 'GraphQL',
  'TypeScript', 'JavaScript', 'Angular.js', 'Python', 'Django',
  'MongoDB', 'MySQL', 'ElasticSearch', 'PostgreSQL',
  'AWS', 'Docker', 'Kubernetes', 'Nginx', 'Git',
  'Puppeteer', 'Socket.io', 'D3.js', 'Chart.js',
  'Material-UI', 'Styled-Components', 'Sass', 'Tailwind',
  'React-Native', 'PWA', 'LLMs', 'AI/ML', 'RAG',
]

const timeline = [
  {
    year: '2024 - Present',
    role: 'Staff Engineer',
    company: 'Conviva',
    description: 'Leading AI initiatives with LLM features, RAG pipelines, and agentic systems for streaming media intelligence.',
  },
  {
    year: '2020 - 2024',
    role: 'Senior Software Engineer',
    company: 'Conviva',
    description: 'Built real-time dashboards, led migration from Django to React, and contributed to core platform development.',
  },
  {
    year: '2015 - 2020',
    role: 'Fullstack Engineer',
    company: 'Penser Analytics',
    description: 'Built dashboard products, developed a Bot Framework chatbot, and created API frameworks using Node.js and GraphQL.',
  },
  {
    year: '2014 - 2015',
    role: 'Software Engineer',
    company: 'Sportskeeda',
    description: 'Created micro-sites for 30 sports and built React.js live scoreboards for football and cricket.',
  },
  {
    year: '2013 - 2014',
    role: 'Intern',
    company: 'Applied Cognition Systems',
    description: 'Built a SPA framework in vanilla JavaScript with HTML5 APIs including IndexedDB, WebSockets, and Web Workers.',
  },
]

function Professional() {
  const navigate = useNavigate()
  const [isLeaving, setIsLeaving] = useState(false)

  const handleBack = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    if (isLeaving) return
    setIsLeaving(true)
    sessionStorage.setItem('home-panel-close', 'professional')
    window.setTimeout(() => navigate({ to: '/' }), 360)
  }

  return (
    <main className={`page page-professional ${isLeaving ? 'is-leaving' : ''}`}>
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
        <p className="eyebrow"><Code2 size={16} /> Professional</p>
        <h1>
          Building <span>impactful</span> software
        </h1>
        <p>
          Staff Engineer with <strong>10+ years</strong> in the JavaScript ecosystem. Currently leading AI
          initiatives at Conviva with LLM-powered features, RAG pipelines, and agentic AI systems.
        </p>
      </section>

      <section className="content-section">
        <p className="pill"><Sparkles size={14} /> AI &amp; Machine Learning</p>
      </section>

      <section className="content-section">
        <h2><Layers size={18} /> Tech Stack</h2>
        <div className="chips">
          {skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </section>

      <section className="content-section">
        <h2><Calendar size={18} /> Journey</h2>
        <div className="timeline">
          {timeline.map((item) => (
            <article key={`${item.year}-${item.role}`}>
              <p>{item.year}</p>
              <div>
                <h3>{item.role}</h3>
                <h4>{item.company}</h4>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section">
        <h2><Briefcase size={18} /> Education</h2>
        <div className="education-grid">
          <article>
            <h3>MSc Tech</h3>
            <p>Manipal University</p>
          </article>
          <article>
            <h3>BE</h3>
            <p>KVG College of Engineering, Sullia</p>
          </article>
        </div>
      </section>
    </main>
  )
}
