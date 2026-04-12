import React from 'react'
import { useLanguage } from '../../contexts/LanguageContext'
import './About.css'

function About() {
  const { t } = useLanguage()

  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-content">
          <h2 className="section-title">{t.about.title}</h2>
          <div className="about-intro">
            <div className="about-photo-wrap">
              <img
                src="/images/profile.png"
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
                <p className="about-highlight">{t.about.text2}</p>
              </div>
              <div className="about-side-element"></div>
            </div>
          </div>
          <div className="about-diploma-wrap">
            <img
              src="/images/diploma.png"
              alt={t.about.diplomaAlt}
              className="about-diploma"
              loading="lazy"
            />
          </div>
          <div className="about-skills">
            <div className="skill-item">
              <h3>{t.about.skill1.title}</h3>
              <p>{t.about.skill1.desc}</p>
            </div>
            <div className="skill-item skill-item-tall">
              <h3>{t.about.skill2.title}</h3>
              <p>{t.about.skill2.desc}</p>
            </div>
            <div className="skill-item">
              <h3>{t.about.skill3.title}</h3>
              <p>{t.about.skill3.desc}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

