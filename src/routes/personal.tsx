import { Route } from '@tanstack/react-router'
import { ArrowLeft, Heart, Music, Instagram, Facebook, Twitter } from 'lucide-react'

export const Route = Route.createRoute({
  path: '/personal',
  component: Personal,
})

function Personal() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 bg-zinc-950/80 backdrop-blur-sm">
        <a href="/" className="flex items-center gap-2 text-zinc-400 hover:text-pink-500 transition-colors">
          <ArrowLeft className="w-5 h-5" />
          <span className="text-sm font-medium">Back</span>
        </a>
        <div className="flex items-center gap-2">
          <span className="text-zinc-500">saajan.</span>
          <span className="text-pink-500">work</span>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-pink-500/10">
              <Heart className="w-5 h-5 text-pink-500" />
            </div>
            <span className="text-pink-500 font-medium">Personal</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Beyond the <span className="bg-gradient-to-r from-pink-400 via-rose-500 to-red-400 bg-clip-text text-transparent">code</span>
          </h1>
          
          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl leading-relaxed">
            When I'm not building software, I'm making music. Electronic Dance Music 
            enthusiast, DJ, and Music Producer.
          </p>
        </div>
      </section>

      <section className="py-16 px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <Music className="w-5 h-5 text-zinc-500" />
            <h2 className="text-xl font-semibold">Music Production</h2>
          </div>
          
          <div className="flex flex-col md:flex-row bg-zinc-900/50 border border-zinc-800 rounded-2xl overflow-hidden hover:border-pink-500/30 transition-colors">
            <div className="w-full md:w-1/3 min-h-[200px] relative bg-zinc-800">
              <div className="absolute inset-0 flex items-center justify-center text-zinc-600">
                <Music className="w-16 h-16" />
              </div>
            </div>
            
            <div className="w-full md:w-2/3 p-6">
              <h3 className="text-2xl font-bold mb-2">The Beatlog</h3>
              <p className="text-zinc-400 mb-4">
                EDM freak who took up DJing as a hobby. Completed DJing and Music Production 
                course from <strong>Resonance Studios</strong> in 2017.
              </p>
              <p className="text-zinc-400 mb-4">
                Mentored by <strong>DJ Shahil</strong> (DJing) and <strong>DJ Pawas Gupta</strong> (Music Production).
                Collaborated with <strong>Jaideep Shetty</strong> to form "The Beatlog".
              </p>
              <p className="text-zinc-500 text-sm mb-6">
                Gave couple of gigs for New Year's Eve in Shakaleshpur. Stay tuned for updates!
              </p>
              
              <div className="flex gap-4">
                <a href="https://twitter.com/" target="_blank" rel="noreferrer" className="p-3 rounded-full bg-zinc-800 hover:bg-pink-500/20 text-zinc-400 hover:text-pink-400 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="https://www.facebook.com/thebeatlog/" target="_blank" rel="noreferrer" className="p-3 rounded-full bg-zinc-800 hover:bg-pink-500/20 text-zinc-400 hover:text-pink-400 transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="https://www.instagram.com/thebeatlog/" target="_blank" rel="noreferrer" className="p-3 rounded-full bg-zinc-800 hover:bg-pink-500/20 text-zinc-400 hover:text-pink-400 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-8 pb-32">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <span className="w-8 h-px bg-zinc-700" />
            Based in
          </h2>
          <p className="text-zinc-400 text-lg">
            Sullia, Karnataka, India 🇮🇳
          </p>
        </div>
      </section>
    </main>
  )
}
