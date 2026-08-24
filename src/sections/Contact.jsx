import SectionHeading from '../components/SectionHeading'
import { profile } from '../data/profile'

const rows = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/[^\d+]/g, '')}` },
  { label: 'LinkedIn', value: profile.linkedinLabel, href: profile.linkedin },
  { label: 'GitHub', value: profile.githubLabel, href: profile.github },
  { label: 'Location', value: profile.location, href: null },
]

export default function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-24 border-t border-base-border">
      <div className="container-page">
        <SectionHeading
          eyebrow="09 · Contact"
          title="Let's build something useful."
          description="Open to Python backend, Django/FastAPI and data science / ML roles. Reach out directly — no forms, no middlemen."
        />

        <div className="mt-10 card divide-y divide-base-border overflow-hidden max-w-2xl">
          {rows.map((row) => (
            <div key={row.label} className="flex items-center justify-between px-5 py-4">
              <span className="font-mono text-xs uppercase tracking-wider text-ink-faint">
                {row.label}
              </span>
              {row.href ? (
                <a
                  href={row.href}
                  target={row.href.startsWith('http') ? '_blank' : undefined}
                  rel={row.href.startsWith('http') ? 'noreferrer' : undefined}
                  className="text-sm text-ink hover:text-signal-soft link-underline"
                >
                  {row.value}
                </a>
              ) : (
                <span className="text-sm text-ink-muted">{row.value}</span>
              )}
            </div>
          ))}
        </div>

        <a href={`mailto:${profile.email}`} className="btn-primary mt-8">
          Say hello
        </a>
      </div>
    </section>
  )
}
