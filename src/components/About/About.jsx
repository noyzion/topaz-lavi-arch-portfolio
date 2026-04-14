import React from 'react'
import { useLanguage } from '../../contexts/LanguageContext'
import { usePreview } from '../../contexts/PreviewContext'
import './About.css'

const ABOUT_ASSETS = {
  profile: '/images/profile.png',
  diplomaThumb: '/images/diploma.png',
  diplomaPdf: '/pdfs/diploma.pdf',
  portfolioPdf: '/pdfs/portfolio.pdf',
  cv: null,
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
            <div className="about-mobile-diploma">
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
            </div>
            <div className="about-text-wrapper">
              <div className="about-text">
                <p>{t.about.text1}</p>
                <p>{t.about.text2}</p>
                {t.about.text3 ? <p>{t.about.text3}</p> : null}

                <div className="about-credentials">
                  <h3 className="about-credentials-title">{t.about.credentialsTitle}</h3>
                  <div className="about-credentials-row">
                    <button
                      type="button"
                      className="about-diploma-trigger about-diploma-desktop"
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
                      {ABOUT_ASSETS.cv ? (
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
                      ) : null}
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
