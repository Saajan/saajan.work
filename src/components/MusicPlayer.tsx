import { useState, useEffect } from 'react'
import { Play, Pause, SkipBack, SkipForward, Volume2, Music } from 'lucide-react'

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(32) // static-ish start
  const duration = 184 // 3:04

  useEffect(() => {
    let interval: NodeJS.Timeout
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= duration) {
            setIsPlaying(false)
            return 0
          }
          return prev + 1
        })
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [isPlaying, duration])

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60)
    const remainingSecs = secs % 60
    return `${mins}:${remainingSecs < 10 ? '0' : ''}${remainingSecs}`
  }

  // Generate mock frequency bars for visualizer
  const barsCount = 28
  const bars = Array.from({ length: barsCount })

  return (
    <div className={`music-player-card ${isPlaying ? 'is-playing' : ''}`}>
      <div className="player-body">
        {/* Vinyl disk decoration */}
        <div className="vinyl-container">
          <div className="vinyl-record">
            <div className="vinyl-center">
              <Music size={16} className="vinyl-icon" />
            </div>
          </div>
          <div className="vinyl-arm" />
        </div>

        {/* Track details */}
        <div className="track-info">
          <span className="track-eyebrow">Now Simulating</span>
          <h3 className="track-title">Shakaleshpur NYE Set (Live Mix)</h3>
          <p className="track-artist">The Beatlog</p>

          {/* Visualizer bars */}
          <div className="visualizer-container">
            {bars.map((_, i) => {
              // Create randomized transition delays for a natural visualizer look
              const delay = isPlaying ? `${(i % 5) * 0.15}s` : '0s'
              const height = isPlaying ? `clamp(10%, ${Math.sin(i) * 50 + 50}%, 100%)` : '20%'
              return (
                <div
                  key={i}
                  className="visualizer-bar"
                  style={{
                    height,
                    animationDelay: delay,
                  }}
                />
              )
            })}
          </div>

          {/* Timeline and scrubber */}
          <div className="timeline-wrapper">
            <span className="time-display">{formatTime(progress)}</span>
            <div className="timeline-scrubber-bg">
              <div
                className="timeline-scrubber-fill"
                style={{ width: `${(progress / duration) * 100}%` }}
              />
            </div>
            <span className="time-display">{formatTime(duration)}</span>
          </div>

          {/* Player controls */}
          <div className="player-controls">
            <button className="control-btn" aria-label="Previous Track">
              <SkipBack size={18} />
            </button>
            <button
              className="control-btn play-btn"
              onClick={() => setIsPlaying(!isPlaying)}
              aria-label={isPlaying ? 'Pause' : 'Play'}
            >
              {isPlaying ? <Pause size={20} fill="currentColor" /> : <Play size={20} fill="currentColor" />}
            </button>
            <button className="control-btn" aria-label="Next Track">
              <SkipForward size={18} />
            </button>
            <div className="volume-indicator">
              <Volume2 size={16} />
              <div className="volume-slider" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
