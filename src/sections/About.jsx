import SectionHeading from '../components/SectionHeading'
import { profile } from '../data/profile'

const pillars = [
  { label: '3+ Years', detail: 'Professional backend engineering experience' },
  { label: 'REST APIs', detail: 'FastAPI, Django, DRF & Flask in production' },
  { label: 'Data Layer', detail: 'PostgreSQL, MySQL, Redis, query optimisation' },
  { label: 'Applied ML', detail: 'EDA, feature engineering, model deployment' },
]

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-24 border-t border-base-border">
      <div className="container-page grid lg:grid-cols-[0.9fr_1.1fr] gap-12">
        <SectionHeading eyebrow="01 · About" title="Backend-first, data-curious" />

        <div>
          <p className="text-ink-muted leading-relaxed text-sm sm:text-base" style={{ color: "rgb(183, 185, 191)" }}>
            {profile.summary}
          </p>

          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            {pillars.map((p) => (
              <div key={p.label} className="card p-4">
                <p className="font-display text-signal-soft font-semibold">{p.label}</p>
                <p className="text-xs text-ink-muted mt-1">{p.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
