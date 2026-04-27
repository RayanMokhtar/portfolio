import { FaExternalLinkAlt } from 'react-icons/fa'

function ProjectCard({ project, stackLabel, linkLabel }) {
  return (
    <article className="project-tile">
      <div className="project-head">
        <h3>{project.name}</h3>
        <span>{project.period}</span>
      </div>

      <p className="project-objective">{project.objective}</p>

      <div className="stack-block">
        <p>{stackLabel}</p>
        <div className="stack-tags">
          {project.stack.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>

      <ul className="bullet-list">
        {project.achievements.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <a className="project-link" href={project.url} target="_blank" rel="noreferrer">
        {linkLabel}
        <FaExternalLinkAlt />
      </a>
    </article>
  )
}

export default ProjectCard
