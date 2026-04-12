import React from 'react'
import { useLanguage } from '../../contexts/LanguageContext'
import './Contact.css'

function Contact() {
  const { t } = useLanguage()

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="contact-header">
          <h2 className="section-title contact-title">{t.contact.title}</h2>
          {t.contact.subtitle ? (
            <p className="section-subtitle contact-subtitle">{t.contact.subtitle}</p>
          ) : null}
        </div>
        <div className="contact-layout">
          <div className="contact-cards">
            <a href={`mailto:${t.contact.emailValue}`} className="contact-card" aria-label={t.contact.email}>
              <div className="card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div className="card-content">
                <h3 className="card-label">{t.contact.email}</h3>
                <p className="card-value">{t.contact.emailValue}</p>
              </div>
            </a>
            <a href="tel:+972522288080" className="contact-card" aria-label={t.contact.phone}>
              <div className="card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div className="card-content">
                <h3 className="card-label">{t.contact.phone}</h3>
                <p className="card-value">{t.contact.phoneDisplay}</p>
              </div>
            </a>
            <a
              href="https://www.instagram.com/lavi.arch/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
              aria-label={t.contact.instagram}
            >
              <div className="card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </div>
              <div className="card-content">
                <h3 className="card-label">{t.contact.instagram}</h3>
                <p className="card-value">{t.contact.instagramHandle}</p>
              </div>
            </a>
          </div>
          <div className="contact-aside">
            <p className="contact-aside-label">{t.contact.basedIn}</p>
            <p className="contact-aside-text">{t.contact.availability}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
