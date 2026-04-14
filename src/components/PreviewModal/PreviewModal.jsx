import React, { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { usePreview } from '../../contexts/PreviewContext'
import { useLanguage } from '../../contexts/LanguageContext'
import './PreviewModal.css'

function isVideoUrl(url) {
  return typeof url === 'string' && /\.(mp4|webm|ogg)(\?.*)?$/i.test(url)
}

function PreviewModal() {
  const { preview, closePreview } = usePreview()
  const { t } = useLanguage()
  const closeRef = useRef(null)
  const [slide, setSlide] = useState(0)
  const [isMobileViewport, setIsMobileViewport] = useState(false)

  useEffect(() => {
    setSlide(0)
  }, [preview])

  useEffect(() => {
    if (preview && closeRef.current) {
      closeRef.current.focus()
    }
  }, [preview])

  useEffect(() => {
    const mql = window.matchMedia('(max-width: 768px)')
    const onChange = (e) => setIsMobileViewport(e.matches)
    setIsMobileViewport(mql.matches)
    if (mql.addEventListener) {
      mql.addEventListener('change', onChange)
      return () => mql.removeEventListener('change', onChange)
    }
    mql.addListener(onChange)
    return () => mql.removeListener(onChange)
  }, [])

  useEffect(() => {
    if (!preview || preview.mediaType !== 'gallery' || !preview.galleryUrls?.length) return undefined
    const { galleryUrls: urls } = preview
    const onKey = (e) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault()
        setSlide((s) => (s <= 0 ? urls.length - 1 : s - 1))
      }
      if (e.key === 'ArrowRight') {
        e.preventDefault()
        setSlide((s) => (s >= urls.length - 1 ? 0 : s + 1))
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [preview])

  if (!preview) return null

  const { previewUrl, title, mediaType, galleryUrls } = preview
  const isPdf = mediaType === 'pdf'
  const isGallery = mediaType === 'gallery' && Array.isArray(galleryUrls) && galleryUrls.length > 0
  const slides = isGallery ? galleryUrls : []
  const currentUrl = isGallery ? slides[Math.min(slide, slides.length - 1)] : previewUrl
  const currentIsVideo = isGallery && isVideoUrl(currentUrl)

  const openInNewTab = () => {
    window.open(currentUrl, '_blank', 'noopener,noreferrer')
  }

  const goPrev = () => {
    setSlide((s) => (s <= 0 ? slides.length - 1 : s - 1))
  }

  const goNext = () => {
    setSlide((s) => (s >= slides.length - 1 ? 0 : s + 1))
  }

  const hintText = isGallery ? t.preview.galleryHint : t.preview.hint

  const node = (
    <div className="preview-modal-root" role="presentation">
      <button type="button" className="preview-modal-backdrop" aria-label={t.preview.close} onClick={closePreview} />
      <div className="preview-modal-dialog" role="dialog" aria-modal="true" aria-labelledby="preview-modal-title">
        <header className="preview-modal-header">
          <h2 id="preview-modal-title" className="preview-modal-title">
            {title}
          </h2>
          <div className="preview-modal-actions">
            <button type="button" className="preview-modal-btn preview-modal-btn-secondary" onClick={openInNewTab}>
              {t.preview.openNewTab}
            </button>
            <button ref={closeRef} type="button" className="preview-modal-btn preview-modal-btn-close" onClick={closePreview}>
              {t.preview.close}
            </button>
          </div>
        </header>
        <div className="preview-modal-body">
          {isPdf ? (
            isMobileViewport ? (
              <object data={previewUrl} type="application/pdf" className="preview-modal-frame">
                <div className="preview-modal-pdf-fallback">
                  <p>{t.preview.hint}</p>
                  <button type="button" className="preview-modal-btn preview-modal-btn-secondary" onClick={openInNewTab}>
                    {t.preview.openNewTab}
                  </button>
                </div>
              </object>
            ) : (
              <iframe title={title} src={previewUrl} className="preview-modal-frame" />
            )
          ) : isGallery ? (
            <div className="preview-modal-gallery">
              <div
                className={`preview-modal-image-wrap preview-modal-gallery-main ${currentIsVideo ? 'preview-modal-gallery-main--video' : ''}`}
              >
                {currentIsVideo ? (
                  <video key={currentUrl} className="preview-modal-video" src={currentUrl} controls playsInline preload="metadata" muted />
                ) : (
                  <img src={currentUrl} alt="" className="preview-modal-image" />
                )}
              </div>
              <div className="preview-modal-gallery-bar">
                <button type="button" className="preview-modal-gallery-nav" onClick={goPrev} aria-label={t.preview.prev}>
                  ‹
                </button>
                <span className="preview-modal-gallery-counter">
                  {slide + 1} / {slides.length}
                </span>
                <button type="button" className="preview-modal-gallery-nav" onClick={goNext} aria-label={t.preview.next}>
                  ›
                </button>
              </div>
              <div className="preview-modal-thumbs" role="tablist" aria-label={title}>
                {slides.map((url, i) => (
                  <button
                    key={url}
                    type="button"
                    role="tab"
                    aria-selected={i === slide}
                    aria-label={isVideoUrl(url) ? t.preview.videoSlide : undefined}
                    className={`preview-modal-thumb ${i === slide ? 'is-active' : ''} ${isVideoUrl(url) ? 'is-video' : ''}`}
                    onClick={() => setSlide(i)}
                  >
                    {isVideoUrl(url) ? (
                      <span className="preview-modal-thumb-video-inner">
                        <svg className="preview-modal-play-svg" viewBox="0 0 24 24" aria-hidden>
                          <polygon points="8,5 19,12 8,19" />
                        </svg>
                      </span>
                    ) : (
                      <img src={url} alt="" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="preview-modal-image-wrap">
              <img src={previewUrl} alt="" className="preview-modal-image" />
            </div>
          )}
          <p className="preview-modal-hint">{hintText}</p>
        </div>
      </div>
    </div>
  )

  return createPortal(node, document.body)
}

export default PreviewModal
