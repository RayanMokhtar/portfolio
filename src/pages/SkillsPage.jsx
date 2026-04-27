import SectionHeading from '../components/SectionHeading'
import { useLanguage } from '../context/LanguageContext'

function SkillsPage() {
  const { content } = useLanguage()

  return (
    <section className="page-card">
      <SectionHeading
        eyebrow={content.languageCode === 'fr' ? 'Expertise' : 'Expertise'}
        title={content.skills.title}
        intro={content.skills.intro}
      />

      <div className="stack-overview-grid">
        {content.skills.stackGroups.map((group) => (
          <article className="stack-group" key={group.title}>
            <h3>{group.title}</h3>
            <div className="stack-tags">
              {group.values.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </article>
        ))}
      </div>

      <div className="skills-grid-page">
        {content.skills.blocks.map((block) => (
          <article key={block.title} className="skill-card-page">
            <h3>{block.title}</h3>
            <ul className="bullet-list">
              {block.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

export default SkillsPage
