import React from 'react'
import { useLanguage } from '../../contexts/LanguageContext'
import { usePreview } from '../../contexts/PreviewContext'
import './About.css'

const ABOUT_ASSETS = {
  profile:
    'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_68e2426b76e0e549ab309cbc/13f5cf80e_profilepicture.png',
  diplomaPdf:
    'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e24fc86e0bdc96192dbc0d/3461d2f80_diploma.pdf',
  diplomaThumb:
    'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e24fc86e0bdc96192dbc0d/ef1ab6d3a_diploma.png',
  cv:
    'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e24fc86e0bdc96192dbc0d/6c921675e_topazlavicv.jpg',
  portfolioPdf:
    'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_68e2426b76e0e549ab309cbc/00e0ff3c3_TOPAZLAVI-PORTFOLIO.pdf',
}

function About() {
  const { t } = useLanguage()
  const { openPreview } = usePreview()

  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-content">
          <h2 className="section-title">{t.about.title}</h2>
          <div className="about-intro">
            <div className="about-photo-wrap">
              <img
                src={ABOUT_ASSETS.profile}
                alt={t.about.profileAlt}
                className="about-photo"
                width={400}
                height={500}
                loading="lazy"
              />
            </div>
            <div className="about-text-wrapper">
              <div className="about-text">
                <p>{t.about.text1}</p>
                <p>{t.about.text2}</p>

                <div className="about-credentials">
                  <h3 className="about-credentials-title">{t.about.credentialsTitle}</h3>
                  <div className="about-credentials-row">
                    <button
                      type="button"
                      className="about-diploma-trigger"
                      onClick={() =>
                        openPreview({
                          previewUrl: ABOUT_ASSETS.diplomaPdf,
                          title: t.about.diplomaCaption,
                          mediaType: 'pdf',
                        })
                      }
                    >
                      <div className="about-diploma-thumb-wrap">
                        <img
                          src={ABOUT_ASSETS.diplomaThumb}
                          alt=""
                          className="about-diploma-thumb"
                          loading="lazy"
                        />
                      </div>
                      <span className="about-diploma-caption">{t.about.diplomaCaption}</span>
                    </button>
                    <div className="about-credentials-meta">
                      <p className="about-engineer-title">{t.about.engineerTitle}</p>
                      <p className="about-engineer-field">{t.about.engineerField}</p>
                      <p className="about-engineer-school">{t.about.engineerSchool}</p>
                      <button
                        type="button"
                        className="about-text-link"
                        onClick={() =>
                          openPreview({
                            previewUrl: ABOUT_ASSETS.cv,
                            title: t.about.viewCv,
                            mediaType: 'image',
                          })
                        }
                      >
                        {t.about.viewCv}
                      </button>
                    </div>
                  </div>
                </div>

                <div className="about-portfolio-cta">
                  <button
                    type="button"
                    className="about-portfolio-button"
                    onClick={() =>
                      openPreview({
                        previewUrl: ABOUT_ASSETS.portfolioPdf,
                        title: t.about.viewPortfolio,
                        mediaType: 'pdf',
                      })
                    }
                  >
                    {t.about.viewPortfolio}
                  </button>
                </div>
              </div>
              <div className="about-side-element" aria-hidden />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
