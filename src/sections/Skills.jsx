import SectionHeading from '../components/SectionHeading'
import TechBadge from '../components/TechBadge'
import { skillGroups } from '../data/skills'

export default function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-24 border-t border-base-border">
      <div className="container-page">
        <SectionHeading
          eyebrow="02 · Skills"
          title="Technical toolkit"
          description="Organised by how it's actually used day-to-day: building APIs, managing data, shipping infrastructure, and running ML experiments."
        />

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group) => (
            <div key={group.category} className="card p-5">
              <h3 className="font-mono text-xs uppercase tracking-wider text-signal">
                {group.category}
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <TechBadge key={item}>{item}</TechBadge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
