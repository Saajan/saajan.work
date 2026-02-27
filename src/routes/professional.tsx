import { Route } from '@tanstack/react-router'
import { ArrowLeft, Code2, Calendar, Briefcase, Layers, Sparkles } from 'lucide-react'

export const Route = Route.createRoute({
  path: '/professional',
  component: Professional,
})

const skills = [
  "React.js", "Next.js", "Node.js", "Express", "GraphQL",
  "TypeScript", "JavaScript", "Angular.js", "Python", "Django",
  "MongoDB", "MySQL", "ElasticSearch", "PostgreSQL",
  "AWS", "Docker", "Kubernetes", "Nginx", "Git",
  "Puppeteer", "Socket.io", "D3.js", "Chart.js",
  "Material-UI", "Styled-Components", "Sass", "Tailwind",
  "React-Native", "PWA", "LLMs", "AI/ML", "RAG"
]

const timeline = [
  {
    year: "2024 - Present",
    role: "Staff Engineer",
    company: "Conviva",
    description: "Leading AI initiatives. Building LLM-powered features, RAG pipelines, and agentic AI solutions for streaming media intelligence."
  },
  {
    year: "2020 - 2024",
    role: "Senior Software Engineer",
    company: "Conviva",
    description: "Real-time dashboard development. Migration from Django to React. Core platform development."
  },
  {
    year: "2015 - 2020",
    role: "Fullstack Engineer",
    company: "Penser Analytics",
    description: "Built web dashboards with charts. Developed chatbot using Bot Framework. API framework with Node.js & GraphQL."
  },
  {
    year: "2014 - 2015",
    role: "Software Engineer",
    company: "Sportskeeda",
    description: "Created micro-sites for 30 sports. Implemented React.js based live scoreboard for football and cricket."
  },
  {
    year: "2013 - 2014",
    role: "Intern",
    company: "Applied Cognition Systems",
    description: "Built SPA framework using vanilla JS with HTML5 APIs (IndexedDB, WebSockets, Web Workers)."
  }
]

function Professional() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 bg-zinc-950/80 backdrop-blur-sm">
        <a href="/" className="flex items-center gap-2 text-zinc-400 hover:text-yellow-400 transition-colors">
          <ArrowLeft className="w-5 h-5" />
          <span className="text-sm font-medium">Back</span>
        </a>
        <div className="flex items-center gap-2">
          <span className="text-zinc-500">saajan.</span>
          <span className="text-yellow-400">work</span>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-yellow-400/10">
              <Code2 className="w-5 h-5 text-yellow-400" />
            </div>
            <span className="text-yellow-400 font-medium">Professional</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Building <span className="bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 bg-clip-text text-transparent">impactful</span> software
          </h1>
          
          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl leading-relaxed">
            Staff Engineer with <strong>10+ years</strong> of experience in the JavaScript ecosystem. 
            Currently leading AI initiatives at Conviva — building LLM-powered features, RAG pipelines, 
            and agentic AI solutions for streaming media intelligence.
          </p>
        </div>
      </section>

      <section className="py-8 px-8">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-purple-400 text-sm font-medium">AI & Machine Learning</span>
          </div>
        </div>
      </section>

      <section className="py-12 px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <Layers className="w-5 h-5 text-zinc-500" />
            <h2 className="text-xl font-semibold">Tech Stack</h2>
          </div>
          
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span key={skill} className="px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 text-sm hover:border-yellow-400/50 hover:text-yellow-400 transition-all cursor-default">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <Calendar className="w-5 h-5 text-zinc-500" />
            <h2 className="text-xl font-semibold">Journey</h2>
          </div>
          
          <div className="space-y-8">
            {timeline.map((item) => (
              <div key={item.year} className="flex gap-6 items-start">
                <div className="w-32 flex-shrink-0">
                  <span className="text-yellow-400 font-mono text-sm">{item.year}</span>
                </div>
                <div className="flex-1 pb-8 border-b border-zinc-800">
                  <h3 className="text-lg font-medium text-zinc-200">{item.role}</h3>
                  <p className="text-zinc-500 mb-2">{item.company}</p>
                  <p className="text-zinc-400 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-8 pb-32">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <Briefcase className="w-5 h-5 text-zinc-500" />
            <h2 className="text-xl font-semibold">Education</h2>
          </div>
          
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-zinc-900/30 border border-zinc-800">
              <h3 className="font-medium text-zinc-200">MSc Tech</h3>
              <p className="text-zinc-500">Manipal University</p>
            </div>
            <div className="p-6 rounded-2xl bg-zinc-900/30 border border-zinc-800">
              <h3 className="font-medium text-zinc-200">BE</h3>
              <p className="text-zinc-500">KVG College of Engineering, Sullia</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
