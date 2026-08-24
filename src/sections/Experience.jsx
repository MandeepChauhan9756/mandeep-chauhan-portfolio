import SectionHeading from '../components/SectionHeading'
import TechBadge from '../components/TechBadge'
import { experience } from '../data/experience'

export default function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-24 border-t border-base-border">
      <div className="container-page">
        <SectionHeading eyebrow="03 · Experience" title="Professional experience" />

        <div className="mt-10 space-y-8">
          {experience.map((job) => (
            <div key={job.company} className="card p-6 sm:p-8">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <div>
                  <h3 className="font-display text-lg sm:text-xl font-semibold text-ink">
                    {job.role}
                  </h3>
                  <p className="text-signal-soft text-sm mt-1">
                    {job.company} <span className="text-ink-faint">— {job.location}</span>
                  </p>
                </div>
                <span className="font-mono text-xs text-ink-faint whitespace-nowrap">{job.period}</span>
              </div>

              <ul className="mt-5 space-y-2.5">
                {job.highlights.map((point) => (
                  <li key={point} className="text-sm text-ink-muted leading-relaxed flex gap-2.5">
                    <span className="text-signal mt-1.5 h-1 w-1 rounded-full bg-signal shrink-0" aria-hidden="true" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-2">
                {job.stack.map((tech) => (
                  <TechBadge key={tech}>{tech}</TechBadge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
