import { profile } from '../data/profile'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-base-border">
      <div className="container-page py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-ink-faint">
          © {year} {profile.name}. Built with React, Vite & Tailwind CSS.
        </p>
        <div className="flex items-center gap-5 text-xs font-mono text-ink-muted">
          <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-signal-soft">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-signal-soft">
            LinkedIn
          </a>
          <a href={`mailto:${profile.email}`} className="hover:text-signal-soft">
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}
