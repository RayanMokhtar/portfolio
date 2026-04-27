import { useLanguage } from '../context/LanguageContext'

function Footer() {
  const { content } = useLanguage()
  const year = new Date().getFullYear()

  return (
    <footer className="footer-shell">
      <p>{content.footer.text}</p>
      <small>{year} · GitHub Pages deployment</small>
    </footer>
  )
}

export default Footer
