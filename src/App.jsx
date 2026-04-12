import React, { useEffect } from 'react'
import { LanguageProvider } from './contexts/LanguageContext'
import { PreviewProvider } from './contexts/PreviewContext'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import Navigation from './components/Navigation/Navigation'
import Footer from './components/Footer/Footer'
import PreviewModal from './components/PreviewModal/PreviewModal'
import './styles/App.css'

function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth'
    return () => {
      document.documentElement.style.scrollBehavior = 'auto'
    }
  }, [])

  return (
    <LanguageProvider>
      <PreviewProvider>
        <div className="App">
          <Navigation />
          <Hero />
          <About />
          <Projects />
          <Contact />
          <Footer />
        </div>
        <PreviewModal />
      </PreviewProvider>
    </LanguageProvider>
  )
}

export default App
