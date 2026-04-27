import SectionHeading from '../components/SectionHeading'
import { useLanguage } from '../context/LanguageContext'

function LibraryPage() {
  const { content } = useLanguage()

  return (
    <section className="page-card">
      <SectionHeading
        eyebrow={content.languageCode === 'fr' ? 'Lecture & curiosité' : 'Reading & curiosity'}
        title={content.library.title}
        intro={content.library.intro}
      />

      <div className="library-grid">
        {content.library.shelves.map((shelf) => (
          <article className="library-card" key={shelf.title}>
            <h3>{shelf.title}</h3>
            <ul className="bullet-list">
              {shelf.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

export default LibraryPage
