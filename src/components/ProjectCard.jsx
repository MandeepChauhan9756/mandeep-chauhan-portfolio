import TechBadge from './TechBadge'

export default function ProjectCard({ project }) {
  const hasLinks = project.github || project.demo

  return (
    <article className="card p-6 flex flex-col gap-4 hover:border-signal-dim transition-colors">
      <div>
        <p className="font-mono text-[11px] uppercase tracking-wider text-signal">{project.tagline}</p>
        <h3 className="font-display text-lg font-semibold text-ink mt-1">{project.name}</h3>
      </div>

      <p className="text-sm text-ink-muted leading-relaxed">{project.description}</p>

      <ul className="space-y-1.5">
        {project.highlights.slice(0, 4).map((point) => (
          <li key={point} className="text-sm text-ink-muted flex gap-2">
            <span className="text-signal mt-1.5 h-1 w-1 rounded-full bg-signal shrink-0" aria-hidden="true" />
            <span>{point}</span>
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2 pt-1">
        {project.stack.map((tech) => (
          <TechBadge key={tech}>{tech}</TechBadge>
        ))}
      </div>

      {hasLinks ? (
        <div className="flex gap-3 pt-2">
          {project.github ? (
            <a href={project.github} target="_blank" rel="noreferrer" className="btn-secondary !px-3 !py-2 text-xs">
              GitHub
            </a>
          ) : null}
          {project.demo ? (
            <a href={project.demo} target="_blank" rel="noreferrer" className="btn-primary !px-3 !py-2 text-xs">
              Live Demo
            </a>
          ) : null}
        </div>
      ) : (
        <p className="pt-1 text-xs font-mono text-ink-faint">Source coming soon</p>
      )}
    </article>
  )
}
