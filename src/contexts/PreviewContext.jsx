import React, { createContext, useContext, useState, useCallback, useEffect } from 'react'

const PreviewContext = createContext(null)

export function PreviewProvider({ children }) {
  const [preview, setPreview] = useState(null)

  const openPreview = useCallback((payload) => {
    setPreview(payload)
  }, [])

  const closePreview = useCallback(() => {
    setPreview(null)
  }, [])

  useEffect(() => {
    if (!preview) return undefined
    const onKey = (e) => {
      if (e.key === 'Escape') closePreview()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [preview, closePreview])

  useEffect(() => {
    if (!preview) {
      document.body.style.overflow = ''
      return undefined
    }
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [preview])

  return (
    <PreviewContext.Provider value={{ preview, openPreview, closePreview }}>
      {children}
    </PreviewContext.Provider>
  )
}

export function usePreview() {
  const ctx = useContext(PreviewContext)
  if (!ctx) {
    throw new Error('usePreview must be used within PreviewProvider')
  }
  return ctx
}
