import cvPdf from '../assets/CV_MOKHTARI_RAYAN_Datascientist_aiengineer.pdf'
import SectionHeading from '../components/SectionHeading'
import { useLanguage } from '../context/LanguageContext'

function CvPage() {
  const { content } = useLanguage()

  return (
    <section className="page-card">
      <SectionHeading
        eyebrow={content.languageCode === 'fr' ? 'Parcours' : 'Journey'}
        title={content.cv.title}
        intro={content.cv.intro}
      />

      <div className="cv-actions-row">
        <a className="btn-primary" href={cvPdf} target="_blank" rel="noreferrer">
          {content.cv.openCv}
        </a>
        <a className="btn-ghost" href={cvPdf} download="CV_MOKHTARI_Rayan.pdf">
          {content.cv.downloadCv}
        </a>
      </div>

      <div className="cv-object-wrap">
        <object className="cv-object" data={cvPdf} type="application/pdf">
          <p>
            PDF preview unavailable.
            <a href={cvPdf} target="_blank" rel="noreferrer">
              Open CV
            </a>
          </p>
        </object>
      </div>

      <div className="timeline-grid-page">
        {content.cv.timeline.map((step) => (
          <article className="timeline-card" key={`${step.year}-${step.title}`}>
            <div className="timeline-head">
              <h3>{step.year}</h3>
              <span>{step.title}</span>
            </div>
            <ul className="bullet-list">
              {step.items.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div className="language-strip">
        <p>{content.cv.languagesTitle}</p>
        <div>
          {content.cv.languages.map((lang) => (
            <span key={lang}>{lang}</span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CvPage
