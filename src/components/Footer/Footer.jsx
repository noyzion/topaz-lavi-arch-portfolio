import React from 'react'
import { useLanguage } from '../../contexts/LanguageContext'
import './Footer.css'

function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <p className="site-footer-line">{t.footer.rights}</p>
        <p className="site-footer-line">{t.footer.tagline}</p>
      </div>
    </footer>
  )
}

export default Footer
