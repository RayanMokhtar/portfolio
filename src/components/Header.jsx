import { NavLink } from 'react-router-dom'
import { FaEnvelope, FaGithub, FaGlobeEurope, FaLinkedin, FaPhoneAlt } from 'react-icons/fa'
import { profileLinks } from '../content/siteContent'
import { useLanguage } from '../context/LanguageContext'

function Header() {
  const { content, language, toggleLanguage } = useLanguage()

  return (
    <header className="header-bar">
      <div className="brand-zone">
        <div className="brand-mark">RM</div>
        <div>
          <p className="brand-name">MOKHTARI Rayan</p>
          <p className="brand-role">{content.header.role}</p>
        </div>
      </div>

      <nav className="nav-zone" aria-label="Main navigation">
        {content.navigation.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              isActive ? 'nav-link nav-link-active' : 'nav-link'
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>

      <div className="utility-zone">
        <div className="icon-links" aria-label="Quick contact links">
          <a href={profileLinks.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href={profileLinks.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href={profileLinks.email} aria-label="Email">
            <FaEnvelope />
          </a>
          <a href={profileLinks.phone} aria-label="Phone">
            <FaPhoneAlt />
          </a>
        </div>

        <button className="language-switch" type="button" onClick={toggleLanguage}>
          <FaGlobeEurope />
          <span>{language === 'fr' ? 'EN' : 'FR'}</span>
          <small>{content.header.languageSwitch}</small>
        </button>
      </div>
    </header>
  )
}

export default Header
