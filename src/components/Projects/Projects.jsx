import React from 'react'
import { useLanguage } from '../../contexts/LanguageContext'
import './Projects.css'

function Projects() {
  const { t } = useLanguage()

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2 className="section-title projects-title">{t.projects.title}</h2>
        {t.projects.subtitle ? (
          <p className="section-subtitle">{t.projects.subtitle}</p>
        ) : null}
        <div className="projects-grid">
          {t.projects.items.map((project, index) => (
            <a
              key={index}
              href={project.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card"
            >
              <div className="project-image">
                {project.image ? (
                  <img src={project.image} alt={project.title} className="project-img" loading="lazy" />
                ) : (
                  <div className="project-placeholder">
                    <span className="placeholder-icon">🏗️</span>
                  </div>
                )}
                <div className="project-overlay">
                  <div className="project-overlay-content">
                    <span className="project-category">{project.category}</span>
                    <h3 className="project-overlay-title">{project.title}</h3>
                  </div>
                </div>
              </div>
              <div className="project-info">
                <span className="project-category-inline">{project.category}</span>
                <h3 className="project-title">{project.title}</h3>
                {project.description ? <p className="project-description">{project.description}</p> : null}
                <span className="project-view-link">{t.projects.viewProject}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
