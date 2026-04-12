import React from 'react'
import { useLanguage } from '../../contexts/LanguageContext'
import { usePreview } from '../../contexts/PreviewContext'
import './Projects.css'

function Projects() {
  const { t } = useLanguage()
  const { openPreview } = usePreview()

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <header className="projects-header">
          <h2 className="section-title projects-title">{t.projects.title}</h2>
          {t.projects.subtitle ? <p className="projects-lead">{t.projects.subtitle}</p> : null}
        </header>
        <ul className="projects-list">
          {t.projects.items.map((project, index) => (
            <li key={index} className="projects-list-item">
              <button
                type="button"
                className="project-card"
                onClick={() =>
                  openPreview({
                    previewUrl: project.previewUrl,
                    title: project.title,
                    mediaType: project.mediaType,
                    galleryUrls: project.galleryUrls,
                  })
                }
              >
                <div className="project-card-media">
                  {project.image ? (
                    <img src={project.image} alt="" className="project-card-img" loading="lazy" />
                  ) : (
                    <div className="project-placeholder">
                      <span className="placeholder-icon" aria-hidden>
                        ·
                      </span>
                    </div>
                  )}
                  <div className="project-card-media-overlay" aria-hidden>
                    <span className="project-overlay-cta">{t.projects.viewProject}</span>
                  </div>
                </div>
                <div className="project-card-body">
                  <span className="project-card-eyebrow">{project.category}</span>
                  <h3 className="project-card-heading">{project.title}</h3>
                  {project.description ? <p className="project-card-desc">{project.description}</p> : null}
                  <span className="project-card-foot">{t.projects.viewProject}</span>
                </div>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Projects
