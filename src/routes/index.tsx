import { createFileRoute } from '@tanstack/react-router'
import { Code2, Heart } from 'lucide-react'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <main className="min-h-screen flex">
      <a href="/professional" className="flex-1 relative group cursor-pointer overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900" />
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_rgba(250,204,21,0.15),transparent_50%)]" />
        </div>
        
        <div className="relative h-full flex flex-col justify-center items-center p-12">
          <div className="text-center">
            <div className="mb-6 inline-flex p-4 rounded-2xl bg-zinc-800/50 border border-zinc-700/50">
              <Code2 className="w-10 h-10 text-yellow-400" />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              <span className="bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 bg-clip-text text-transparent">
                Professional
              </span>
            </h1>
            
            <p className="text-zinc-400 text-lg md:text-xl max-w-md mx-auto">
              Skills, experience & projects
            </p>
          </div>
        </div>

        <div className="absolute top-8 left-8 w-20 h-20 border-l-2 border-t-2 border-yellow-400/30 rounded-tl-lg" />
        <div className="absolute bottom-8 right-8 w-20 h-20 border-r-2 border-b-2 border-yellow-400/30 rounded-br-lg" />
      </a>

      <a href="/personal" className="flex-1 relative group cursor-pointer overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900" />
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,_rgba(236,72,153,0.15),transparent_50%)]" />
        </div>
        
        <div className="relative h-full flex flex-col justify-center items-center p-12">
          <div className="text-center">
            <div className="mb-6 inline-flex p-4 rounded-2xl bg-zinc-800/50 border border-zinc-700/50">
              <Heart className="w-10 h-10 text-pink-500" />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              <span className="bg-gradient-to-r from-pink-400 via-rose-500 to-red-400 bg-clip-text text-transparent">
                Personal
              </span>
            </h1>
            
            <p className="text-zinc-400 text-lg md:text-xl max-w-md mx-auto">
              Music, life & more
            </p>
          </div>
        </div>

        <div className="absolute top-8 right-8 w-20 h-20 border-r-2 border-t-2 border-pink-500/30 rounded-tr-lg" />
        <div className="absolute bottom-8 left-8 w-20 h-20 border-l-2 border-b-2 border-pink-500/30 rounded-bl-lg" />
      </a>

      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-zinc-700 to-transparent" />
    </main>
  )
}
