import SectionHeading from '../components/SectionHeading'
import ProjectCard from '../components/ProjectCard'
import { dataScienceProjects } from '../data/projects'

export default function DataScience() {
  return (
    <section id="data-science" className="py-20 sm:py-24 border-t border-base-border bg-base-soft/40">
      <div className="container-page">
        <SectionHeading
          eyebrow="05 · Data Science & Machine Learning"
          title="Applied ML, project by project"
          description="Hands-on data science work — from cleaning and EDA through model comparison and deployment — that complements the backend engineering above."
        />

        <div className="mt-10 grid sm:grid-cols-2 gap-6">
          {dataScienceProjects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
