import { Link } from 'react-router-dom'
import { FaLocationDot } from 'react-icons/fa6'
import cvPdf from '../assets/CV_MOKHTARI_RAYAN_Datascientist_aiengineer.pdf'
import { useLanguage } from '../context/LanguageContext'

function HomePage() {
  const { content } = useLanguage()

  return (
    <section className="page-card hero-card">
      <p className="hero-badge">{content.home.badge}</p>
      <h1 className="hero-name">{content.home.title}</h1>
      <p className="hero-subtitle">{content.home.subtitle}</p>
      <p className="hero-summary">{content.home.summary}</p>

      <div className="hero-meta">
        <p>
          <FaLocationDot />
          <span>{content.header.location}</span>
        </p>
        <strong>{content.header.cdiLabel}</strong>
      </div>

      <div className="hero-actions">
        <a className="btn-primary" href={cvPdf} target="_blank" rel="noreferrer">
          {content.home.cta.cv}
        </a>
        <Link className="btn-ghost" to="/projects">
          {content.home.cta.projects}
        </Link>
      </div>

      <div className="stats-grid">
        {content.home.stats.map((stat) => (
          <article key={stat.label} className="stat-card">
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </article>
        ))}
      </div>

      <div className="experience-grid">
        {content.home.highlights.map((item) => (
          <article key={item.title} className="experience-card">
            <div className="experience-head">
              <h3>{item.title}</h3>
              <span>{item.period}</span>
            </div>
            <p className="experience-role">{item.role}</p>
            <ul className="bullet-list">
              {item.details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

export default HomePage
