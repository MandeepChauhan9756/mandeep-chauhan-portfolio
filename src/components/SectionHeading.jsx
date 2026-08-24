export default function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  return (
    <div className={align === 'center' ? 'text-center' : 'text-left'}>
      <p className="section-eyebrow">{eyebrow}</p>
      <h2 className="section-title">{title}</h2>
      {description ? (
        <p className="mt-3 max-w-2xl text-ink-muted text-sm sm:text-base leading-relaxed">
          {description}
        </p>
      ) : null}
    </div>
  )
}
