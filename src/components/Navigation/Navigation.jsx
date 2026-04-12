import React, { useState, useEffect } from 'react'
import { useLanguage } from '../../contexts/LanguageContext'
import './Navigation.css'

function Navigation() {
  const { language, setLanguage, t } = useLanguage()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      const sections = ['home', 'about', 'projects', 'contact']
      const scrollPosition = window.scrollY + 200

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i])
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  const toggleLanguage = () => {
    setLanguage(language === 'he' ? 'en' : 'he')
  }

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`} dir="ltr">
      <div className="nav-container">
        <div className="nav-logo" onClick={() => scrollToSection('home')} role="button" tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && scrollToSection('home')}>
          {t.hero.name}
        </div>
        <div className="nav-right">
          <div className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('home')
              }}
              className={activeSection === 'home' ? 'active' : ''}
            >
              {t.nav.home}
            </a>
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('about')
              }}
              className={activeSection === 'about' ? 'active' : ''}
            >
              {t.nav.about}
            </a>
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('projects')
              }}
              className={activeSection === 'projects' ? 'active' : ''}
            >
              {t.nav.projects}
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('contact')
              }}
              className={activeSection === 'contact' ? 'active' : ''}
            >
              {t.nav.contact}
            </a>
          </div>
          <button type="button" className="language-switcher" onClick={toggleLanguage}>
            {language === 'he' ? 'EN' : 'עב'}
          </button>
        </div>
        <button
          type="button"
          className="nav-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="תפריט"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  )
}

export default Navigation
