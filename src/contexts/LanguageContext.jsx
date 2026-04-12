import React, { createContext, useContext, useState, useEffect } from 'react'

const LanguageContext = createContext()

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return context
}

const projectAssets = [
  {
    image:
      'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_68e2426b76e0e549ab309cbc/15993a4c5_hotel1.png',
    pdf: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_68e2426b76e0e549ab309cbc/d48af2dc3_4d72862ef_f8ba9505c_Topaz_Lavi_Project_Tel_Aviv_Port_Hotel.pdf',
  },
  {
    image:
      'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_68e2426b76e0e549ab309cbc/bef5e5ddb_nevetzesek.png',
    pdf: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_68e2426b76e0e549ab309cbc/57dcdf3f5_Topaz_Lavi_Project_Neve_Tzedek_Complex.pdf',
  },
  {
    image:
      'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_68e2426b76e0e549ab309cbc/407b6e3d1_rotchild.png',
    pdf: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e24fc86e0bdc96192dbc0d/def6e3707_Topaz_Lavi_Project_Rothschild_Interior.pdf',
  },
]

function mergeProjectItems(textItems) {
  return textItems.map((item, index) => ({
    ...item,
    ...projectAssets[index],
  }))
}

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem('language')
    return saved || 'he'
  })

  useEffect(() => {
    localStorage.setItem('language', language)
    document.documentElement.setAttribute('dir', language === 'he' ? 'rtl' : 'ltr')
    document.documentElement.setAttribute('lang', language)
  }, [language])

  const translations = {
    he: {
      nav: {
        home: 'בית',
        about: 'אודות',
        projects: 'פרויקטים',
        contact: 'צור קשר',
      },
      hero: {
        name: 'TOPAZ LAVI',
        subtitle: 'אדריכלות ועיצוב פנים',
        description: '',
        button: '',
      },
      about: {
        title: 'אודות',
        profileAlt: 'טופז לביא',
        text1:
          'בוגרת הנדסאית באדריכלות ועיצוב פנים מהמכללה האקדמית להנדסה ע״ש שנקר. אני משלבת דיוק הנדסי וחזון יצירתי בכל פרויקט. התמחותי כוללת מתחמי מגורים, אירוח ואדריכלות פנים, עם דגש על חללים פונקציונליים ומעודנים מבחינה אסתטית.',
        text2:
          'כל פרויקט בתיק עובדות כמחווה לתכנון מושכל, לפרטים קטנים ולהבנה עמוקה של יחסי חלל. מארכיטקטורה בהשראה אסלאמית במלון נמל תל אביב ועד תכנון מגורים מודרני בנווה צדק — המטרה היא לחזק את חוויית האדם בחלל.',
        credentialsTitle: 'השכלה והסמכות',
        diplomaCaption: 'צפייה בתעודה (PDF)',
        engineerTitle: 'הנדסאית',
        engineerField: 'אדריכלות ועיצוב פנים',
        engineerSchool: 'שנקר — 2025',
        downloadCv: 'הורדת קו״ח',
        downloadPortfolio: 'הורדת פורטפוליו מלא (PDF)',
      },
      projects: {
        title: 'פרויקטים',
        subtitle: '',
        viewProject: 'צפייה בפרויקט',
        items: mergeProjectItems([
          {
            title: 'פרויקט גמר — מלון נמל תל אביב',
            description: '',
            category: 'אדריכלות',
          },
          {
            title: 'מתחם נווה צדק — ארבע משפחות',
            description: '',
            category: 'אדריכלות',
          },
          {
            title: 'עיצוב פנים — רוטשילד, תל אביב',
            description: '',
            category: 'עיצוב פנים',
          },
        ]),
      },
      contact: {
        title: 'צור קשר',
        subtitle: '',
        email: 'אימייל',
        phone: 'טלפון',
        instagram: 'אינסטגרם',
        emailValue: 'topilavi0@gmail.com',
        phoneDisplay: '+972-52-228-8080',
        instagramHandle: '@lavi.arch',
        basedIn: 'מבוססת בתל אביב, ישראל',
        availability: 'זמינה לפרויקטים באדריכלות ועיצוב פנים',
      },
      footer: {
        rights: '© 2026 Topaz Lavi. כל הזכויות שמורות.',
        tagline: 'הנדסאית באדריכלות — שנקר',
      },
    },
    en: {
      nav: {
        home: 'Home',
        about: 'About Me',
        projects: 'Projects',
        contact: 'Contact Me',
      },
      hero: {
        name: 'TOPAZ LAVI',
        subtitle: 'Architecture & Interior Design',
        description: '',
        button: '',
      },
      about: {
        title: 'About Me',
        profileAlt: 'Topaz Lavi',
        text1:
          'As a graduate of Practical Architectural Engineering from Shenkar College of Engineering, Design and Art, I bring a unique blend of technical precision and creative vision to every project. My work spans residential complexes, hospitality design, and interior architecture, with a focus on creating spaces that are both functional and aesthetically refined.',
        text2:
          'Each project in my portfolio reflects a commitment to thoughtful design, attention to detail, and a deep understanding of spatial relationships. From the elegant Islamic-inspired architecture of the Tel Aviv Port Hotel to the modern residential planning of Neve Tzedek, I strive to create environments that enhance the human experience.',
        credentialsTitle: 'Credentials',
        diplomaCaption: 'View Diploma (PDF)',
        engineerTitle: 'Practical Engineer',
        engineerField: 'Architecture & Interior Design',
        engineerSchool: 'Shenkar College — 2025',
        downloadCv: 'Download CV',
        downloadPortfolio: 'Download Full Portfolio (PDF)',
      },
      projects: {
        title: 'Projects',
        subtitle: '',
        viewProject: 'View Project',
        items: mergeProjectItems([
          {
            title: 'Final Project — Tel Aviv Port Hotel',
            description: '',
            category: 'Architecture',
          },
          {
            title: 'Neve Tzedek Complex — 4 Families',
            description: '',
            category: 'Architecture',
          },
          {
            title: 'Interior Design — Rothschild, Tel Aviv',
            description: '',
            category: 'Interior Design',
          },
        ]),
      },
      contact: {
        title: 'Contact Me',
        subtitle: '',
        email: 'Email',
        phone: 'Phone',
        instagram: 'Instagram',
        emailValue: 'topilavi0@gmail.com',
        phoneDisplay: '+972-52-228-8080',
        instagramHandle: '@lavi.arch',
        basedIn: 'Based in Tel Aviv, Israel',
        availability: 'Available for architectural and interior design projects',
      },
      footer: {
        rights: '© 2026 Topaz Lavi. All rights reserved.',
        tagline: 'Practical Architectural Engineering — Shenkar',
      },
    },
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  )
}
