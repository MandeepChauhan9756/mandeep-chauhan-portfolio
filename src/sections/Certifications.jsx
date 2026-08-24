import SectionHeading from '../components/SectionHeading'
import TechBadge from '../components/TechBadge'
import { certifications } from '../data/certifications'
import { achievements } from '../data/achievements'

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 sm:py-24 border-t border-base-border">
      <div className="container-page grid lg:grid-cols-2 gap-12">
        <div>
          <SectionHeading eyebrow="07 · Certifications" title="Certifications" />
          <div className="mt-8 space-y-4">
            {certifications.map((cert) => (
              <div key={cert.name} className="card p-5">
                <h3 className="font-display text-sm sm:text-base font-semibold text-ink" style={{ color: "rgb(150, 159, 182)" }}>
                  {cert.name}
                </h3>
                <p className="text-signal-soft text-xs mt-1 font-mono">{cert.issuer}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {cert.tags.map((tag) => (
                    <TechBadge key={tag}>{tag}</TechBadge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <SectionHeading eyebrow="08 · Achievements" title="Achievements" />
          <div className="mt-8 space-y-4">
            {achievements.map((item) => (
              <div key={item.title} className="card p-5">
                <h3 className="font-display text-sm sm:text-base font-semibold text-ink" style={{ color: "rgb(150, 159, 182)" }}>
                  {item.title}
                </h3>
                <p className="text-signal-soft text-xs mt-1 font-mono">{item.org}</p>
                <p className="text-sm text-ink-muted mt-2 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
