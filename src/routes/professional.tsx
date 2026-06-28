import { Link, Outlet, createFileRoute, useRouterState } from '@tanstack/react-router'
import { BookOpen, Briefcase, Calendar, Code2, Layers, Mail, ArrowRight } from 'lucide-react'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'

export const Route = createFileRoute('/professional')({
  component: Professional,
})

const skillCategories = [
  {
    title: 'AI & Machine Learning',
    description: 'Agentic workflows, retrieval systems, and predictive models',
    skills: ['LLMs', 'RAG', 'AI/ML', 'Python', 'Django'],
  },
  {
    title: 'Frontend Architecture',
    description: 'Interactive interfaces, data visualizations, and state systems',
    skills: ['React.js', 'Next.js', 'TypeScript', 'JavaScript', 'D3.js', 'Chart.js', 'Tailwind', 'Sass', 'PWA', 'Material-UI', 'Angular.js'],
  },
  {
    title: 'Backend & Data Systems',
    description: 'High-throughput APIs, databases, and microservices',
    skills: ['Node.js', 'Express', 'GraphQL', 'PostgreSQL', 'MongoDB', 'MySQL', 'ElasticSearch', 'Socket.io'],
  },
  {
    title: 'DevOps & Tooling',
    description: 'Containerization, cloud infrastructure, and deployment pipelines',
    skills: ['AWS', 'Docker', 'Kubernetes', 'Nginx', 'Git', 'Puppeteer', 'React-Native'],
  },
]

const timeline = [
  {
    year: '2024 - Present',
    role: 'Staff Engineer',
    company: 'Conviva',
    description: 'Leading AI initiatives with LLM features, advanced RAG pipelines, and orchestrating multi-agent systems for real-time streaming intelligence.',
    tags: ['AI Agents', 'LLMs', 'RAG', 'System Design'],
  },
  {
    year: '2020 - 2024',
    role: 'Senior Software Engineer',
    company: 'Conviva',
    description: 'Architected critical real-time observability dashboards. Led global migration from Django legacy stacks to modern React systems, optimizing render speeds by 40%.',
    tags: ['React', 'TypeScript', 'Django', 'Performance'],
  },
  {
    year: '2015 - 2020',
    role: 'Fullstack Engineer',
    company: 'Penser Analytics',
    description: 'Designed and implemented end-to-end data products, built an intelligent chatbot assistant framework, and built high-performance Node.js GraphQL APIs.',
    tags: ['Node.js', 'GraphQL', 'Chatbots', 'Databases'],
  },
  {
    year: '2014 - 2015',
    role: 'Software Engineer',
    company: 'Sportskeeda',
    description: 'Created dynamic micro-sites serving millions of sports fans. Developed optimized live scoreboard widgets for Football and Cricket during high-traffic tournaments.',
    tags: ['React.js', 'Realtime Data', 'High-Traffic Web'],
  },
  {
    year: '2013 - 2014',
    role: 'Software Engineer Intern',
    company: 'Applied Cognition Systems',
    description: 'Researched single-page application frameworks using pure Vanilla JavaScript, utilizing local database stores (IndexedDB) and asynchronous Web Workers.',
    tags: ['Vanilla JS', 'WebSockets', 'Web Workers', 'IndexedDB'],
  },
]

function Professional() {
  const pathname = useRouterState({ select: (state) => state.location.pathname })
  const isInBlog = pathname.startsWith('/professional/blog')

  return (
    <>
      <Navbar />
      <main className={`page page-professional ${isInBlog ? 'page-blog' : ''}`}>
        {isInBlog ? (
          <div className="blog-outlet-wrapper">
            <Outlet />
          </div>
        ) : (
          <>
            <section className="hero-section glass-panel">
              <div className="section-glow-glow pro-glow" />
              <p className="eyebrow">
                <Code2 size={15} /> Professional
              </p>
              <h1>
                Building <span>impactful</span> software
              </h1>
              <p className="lead-text">
                Staff Engineer with <strong>10+ years</strong> of hands-on experience in the web ecosystem. 
                Currently designing AI-driven analytics, advanced search pipelines, and agentic integrations at Conviva.
              </p>
              <div className="hero-actions">
                <a href="mailto:contact@saajan.work" className="primary-cta-btn">
                  <Mail size={16} /> Get in Touch
                </a>
                <Link to="/professional/blog" className="secondary-cta-btn">
                  <BookOpen size={16} /> Read Engineering Blog <ArrowRight size={14} className="hover-arrow" />
                </Link>
              </div>
            </section>

            <section className="content-section glass-panel">
              <h2>
                <Layers size={18} /> Technical Capabilities
              </h2>
              <div className="skills-categorized-grid">
                {skillCategories.map((cat) => (
                  <div key={cat.title} className="skill-cat-card">
                    <h4>{cat.title}</h4>
                    <p className="skill-cat-desc">{cat.description}</p>
                    <div className="chips">
                      {cat.skills.map((skill) => (
                        <span key={skill} className="skill-chip">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="content-section glass-panel">
              <h2>
                <Calendar size={18} /> Career Journey
              </h2>
              <div className="professional-timeline">
                {timeline.map((item, index) => (
                  <article key={`${item.year}-${item.role}`} className="timeline-node">
                    <div className="timeline-spine">
                      <div className="timeline-dot">
                        <span className="dot-pulse" />
                      </div>
                      {index < timeline.length - 1 && <div className="timeline-line" />}
                    </div>
                    <div className="timeline-card glass-panel-inner">
                      <span className="timeline-year">{item.year}</span>
                      <h3>{item.role}</h3>
                      <h4 className="timeline-company">{item.company}</h4>
                      <p>{item.description}</p>
                      <div className="timeline-tags">
                        {item.tags.map((tag) => (
                          <span key={tag} className="timeline-tag">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section className="content-section glass-panel">
              <h2>
                <Briefcase size={18} /> Academic History
              </h2>
              <div className="education-grid">
                <article className="education-card glass-panel-inner">
                  <span className="degree-badge">Postgraduate</span>
                  <h3>MSc Tech</h3>
                  <p className="school">Manipal University</p>
                  <p className="edu-desc">Advanced software engineering, distributed applications, and systems design.</p>
                </article>
                <article className="education-card glass-panel-inner">
                  <span className="degree-badge">Graduate</span>
                  <h3>Bachelor of Engineering</h3>
                  <p className="school">KVG College of Engineering, Sullia</p>
                  <p className="edu-desc">Computer Science &amp; Engineering core principles, algorithms, and logic.</p>
                </article>
              </div>
            </section>
          </>
        )}
      </main>
      <Footer />
    </>
  )
}
