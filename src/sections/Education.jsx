import SectionHeading from '../components/SectionHeading'
import { education } from '../data/education'

export default function Education() {
  return (
    <section id="education" className="py-20 sm:py-24 border-t border-base-border">
      <div className="container-page">
        <SectionHeading eyebrow="06 · Education" title="Education" />

        <div className="mt-10 space-y-5">
          {education.map((item) => (
            <div key={item.degree} className="card p-6 flex flex-wrap items-baseline justify-between gap-2">
              <div>
                <h3 className="font-display text-base sm:text-lg font-semibold text-ink">
                  {item.degree}
                </h3>
                <p className="text-sm text-ink-muted mt-1">{item.school}</p>
              </div>
              {item.period ? (
                <span className="font-mono text-xs text-ink-faint whitespace-nowrap">{item.period}</span>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
