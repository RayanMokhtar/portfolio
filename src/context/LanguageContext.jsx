import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { siteContent } from '../content/siteContent'

const LanguageContext = createContext(null)

function getInitialLanguage() {
  const savedLanguage = localStorage.getItem('portfolio-language')
  if (savedLanguage === 'fr' || savedLanguage === 'en') {
    return savedLanguage
  }
  return 'fr'
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(getInitialLanguage)

  useEffect(() => {
    localStorage.setItem('portfolio-language', language)
    document.documentElement.lang = siteContent[language].languageCode
  }, [language])

  const value = useMemo(() => {
    const toggleLanguage = () => {
      setLanguage((current) => (current === 'fr' ? 'en' : 'fr'))
    }

    return {
      language,
      toggleLanguage,
      content: siteContent[language],
    }
  }, [language])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used inside LanguageProvider')
  }
  return context
}
