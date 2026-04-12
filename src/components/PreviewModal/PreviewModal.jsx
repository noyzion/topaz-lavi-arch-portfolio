import React, { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { usePreview } from '../../contexts/PreviewContext'
import { useLanguage } from '../../contexts/LanguageContext'
import './PreviewModal.css'

function PreviewModal() {
  const { preview, closePreview } = usePreview()
  const { t } = useLanguage()
  const closeRef = useRef(null)

  useEffect(() => {
    if (preview && closeRef.current) {
      closeRef.current.focus()
    }
  }, [preview])

  if (!preview) return null

  const { previewUrl, title, mediaType } = preview
  const isPdf = mediaType === 'pdf'

  const openInNewTab = () => {
    window.open(previewUrl, '_blank', 'noopener,noreferrer')
  }

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
            <iframe
              title={title}
              src={`${previewUrl}#view=FitH`}
              className="preview-modal-frame"
            />
          ) : (
            <div className="preview-modal-image-wrap">
              <img src={previewUrl} alt="" className="preview-modal-image" />
            </div>
          )}
          <p className="preview-modal-hint">{t.preview.hint}</p>
        </div>
      </div>
    </div>
  )

  return createPortal(node, document.body)
}

export default PreviewModal
