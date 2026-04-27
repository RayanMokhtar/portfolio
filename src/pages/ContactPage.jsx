import { FaEnvelope, FaGithub, FaLinkedin, FaPhoneAlt } from 'react-icons/fa'
import SectionHeading from '../components/SectionHeading'
import { useLanguage } from '../context/LanguageContext'

const contactIcon = {
  Email: FaEnvelope,
  Téléphone: FaPhoneAlt,
  LinkedIn: FaLinkedin,
  GitHub: FaGithub,
  Phone: FaPhoneAlt,
}

function ContactPage() {
  const { content } = useLanguage()

  return (
    <section className="page-card">
      <SectionHeading
        eyebrow={content.languageCode === 'fr' ? 'Échange' : 'Let us connect'}
        title={content.contact.title}
        intro={content.contact.subtitle}
      />

      <div className="contact-grid-page">
        {content.contact.cards.map((card) => {
          const IconComponent = contactIcon[card.label] || FaEnvelope
          return (
            <a key={card.label} href={card.href} className="contact-card" target={card.href.startsWith('http') ? '_blank' : undefined} rel={card.href.startsWith('http') ? 'noreferrer' : undefined}>
              <div className="contact-icon">
                <IconComponent />
              </div>
              <div>
                <p>{card.label}</p>
                <strong>{card.value}</strong>
              </div>
            </a>
          )
        })}
      </div>

      <p className="contact-outro">{content.contact.outro}</p>
    </section>
  )
}

export default ContactPage
