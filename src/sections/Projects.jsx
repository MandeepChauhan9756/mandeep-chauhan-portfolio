import SectionHeading from '../components/SectionHeading'
import ProjectCard from '../components/ProjectCard'
import { backendProjects } from '../data/projects'

export default function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-24 border-t border-base-border">
      <div className="container-page">
        <SectionHeading
          eyebrow="04 · Backend Projects"
          title="APIs & backend systems"
          description="Production-style backend builds covering authentication, data modelling, third-party integrations and deployment."
        />

        <div className="mt-10 grid sm:grid-cols-2 gap-6">
          {backendProjects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
