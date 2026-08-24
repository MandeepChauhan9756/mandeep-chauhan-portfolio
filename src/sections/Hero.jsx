import { useEffect, useState } from 'react'
import { profile } from '../data/profile'

const responseLines = [
  '{',
  '  "name": "Mandeep Chauhan",',
  '  "role": "Python Backend Developer",',
  '  "experience_years": 3,',
  '  "stack": ["FastAPI", "Django", "DRF", "Flask"],',
  '  "data_science": true,',
  '  "status": "available"',
  '}',
]

export default function Hero() {
  const [visibleLines, setVisibleLines] = useState(0)

  useEffect(() => {
    if (visibleLines >= responseLines.length) return
    const t = setTimeout(() => setVisibleLines((v) => v + 1), 140)
    return () => clearTimeout(t)
  }, [visibleLines])

  return (
    <section id="top" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-grid-fade" aria-hidden="true" />
      <div className="container-page relative pt-16 pb-20 sm:pt-24 sm:pb-28 grid lg:grid-cols-[1.15fr_0.85fr] gap-12 items-center">
        <div className="animate-rise">
          <p className="section-eyebrow">Backend Engineering · REST APIs · Applied ML</p>
          <h1 className="font-display font-semibold text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.08] text-ink mt-4">
            {profile.name}
          </h1>
          <p className="mt-3 font-mono text-signal-soft text-sm sm:text-base" style={{ color: "rgb(251 251 252)"}}>
            {profile.titlePrimary} <span className="text-ink-faint">|</span> {profile.titleSecondary}
          </p>
          <p className="mt-6 text-ink-muted text-base sm:text-lg leading-relaxed max-w-xl">
            {profile.heroIntro}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="btn-primary">
              View Projects
            </a>
            <a href={profile.resumeUrl} download className="btn-secondary">
              Download Resume
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="btn-secondary">
              GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="btn-secondary">
              LinkedIn
            </a>
            <a href="#contact" className="btn-secondary">
              Contact Me
            </a>
          </div>
        </div>

        <div className="animate-rise" style={{ animationDelay: '120ms' }}>
          <div className="card shadow-panel overflow-hidden">
            <div className="flex items-center gap-1.5 border-b border-base-border px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
              <span className="ml-3 font-mono text-[11px] text-ink-faint">profile.py</span>
            </div>
            <pre className="p-5 font-mono text-[13px] leading-relaxed overflow-x-auto">
              <code>
                <span className="text-ink-faint">$ </span>
                <span className="text-signal-soft">curl</span>
                <span className="text-ink-muted"> https://api.mandeep.dev/profile</span>
                {'\n\n'}
                {responseLines.slice(0, visibleLines).map((line, i) => (
                  <span key={i} className="block text-ok/90">
                    <span className="text-ink-muted">{line}</span>
                  </span>
                ))}
                {visibleLines < responseLines.length ? (
                  <span className="inline-block h-3.5 w-1.5 bg-signal animate-blink align-middle" />
                ) : (
                  <span className="block mt-2 text-ink-faint"># 200 OK · 42ms</span>
                )}
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  )
}
