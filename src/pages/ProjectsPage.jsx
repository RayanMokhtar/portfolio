import SectionHeading from '../components/SectionHeading'
import ProjectCard from '../components/ProjectCard'
import { useLanguage } from '../context/LanguageContext'

function ProjectsPage() {
  const { content } = useLanguage()

  return (
    <section className="page-card">
      <SectionHeading
        eyebrow={content.languageCode === 'fr' ? 'Réalisations' : 'Portfolio'}
        title={content.projects.title}
        intro={content.projects.intro}
      />

      <div className="project-grid-page">
        {content.projects.items.map((project) => (
          <ProjectCard
            key={project.name}
            project={project}
            stackLabel={content.projects.stackLabel}
            linkLabel={content.projects.linkLabel}
          />
        ))}
      </div>
    </section>
  )
}

export default ProjectsPage
