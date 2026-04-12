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
    image: '/images/project-hotel-1.png',
    previewUrl: '/pdfs/project-tel-aviv-port-hotel.pdf',
    mediaType: 'pdf',
  },
  {
    image: '/images/project-urban.png',
    previewUrl: '/pdfs/project-neve-tzedek.pdf',
    mediaType: 'pdf',
  },
  {
    image: '/images/project-hotel-2.png',
    previewUrl: '/pdfs/project-rothschild-interior.pdf',
    mediaType: 'pdf',
  },
  {
    image: '/images/project-interior-2.png',
    previewUrl: '/images/project-interior-1.png',
    mediaType: 'gallery',
    galleryUrls: [
      '/images/project-interior-1.png',
      '/images/project-interior-2.png',
      '/images/project-interior-3.png',
      '/images/project-interior-4.png',
    ],
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
      theme: {
        useDark: 'מעבר למצב כהה',
        useLight: 'מעבר למצב בהיר',
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
          'בוגרת הנדסאית למעשה באדריכלות מהמכללה האקדמית להנדסה, לעיצוב ולאמנות ע״ש שנקר. אני מביאה לכל פרויקט שילוב ייחודי של דיוק טכני וחזון יצירתי. עבודתי נפרשת על פני מתחמי מגורים, עיצוב אירוח ואדריכלות פנים, עם דגש על יצירת חללים שמאזנים בין פונקציונליות לרמה אסתטית מעודנת.',
        text2:
          'כל פרויקט בתיק העבודות שלי משקף מחויבות לעיצוב מושכל, לתשומת לב לפרטים ולהבנה עמוקה של יחסי חלל. מהאדריכלות האלגנטית בהשראה אסלאמית של מלון נמל תל אביב ועד לתכנון המגורים המודרני בנווה צדק, אני שואפת ליצור סביבות שמעצימות את חוויית האדם בחלל.',
        credentialsTitle: 'השכלה והסמכות',
        diplomaCaption: 'תצוגה מקדימה - תעודה',
        engineerTitle: 'הנדסאית',
        engineerField: 'אדריכלות ועיצוב פנים',
        engineerSchool: 'שנקר - 2025',
        viewCv: 'תצוגה מקדימה - קו״ח',
        viewPortfolio: 'פורטפוליו מלא',
      },
      preview: {
        close: 'סגירה',
        openNewTab: 'פתיחה בלשונית חדשה',
        prev: 'הקודם',
        next: 'הבא',
        hint: 'אם התצוגה לא נטענת, השתמשי ב״פתיחה בלשונית חדשה״.',
        galleryHint: 'מעבר בין תמונות הפרויקט. ניתן לפתוח כל תמונה בלשונית נפרדת.',
      },
      projects: {
        title: 'פרויקטים',
        subtitle: 'בחירה מפרויקטי אדריכלות ועיצוב פנים',
        viewProject: 'תצוגה מקדימה',
        items: mergeProjectItems([
          {
            title: 'פרויקט גמר - מלון נמל תל אביב',
            description:
              'תכנון אדריכלי של מלון בנמל תל אביב: חזיתות וחללים בהשראה אסלאמית, קונספט אירוח יוקרתי וקשר עיצובי לים ולקו הרקיע של העיר.',
            category: 'אדריכלות',
          },
          {
            title: 'מתחם מגורים - נווה צדק (ארבע משפחות)',
            description:
              'תכנון מתחם מגורים ליצירת ארבע יחידות דיור בשכונת נווה צדק: התאמה לקנה המידה העירוני, לשימורי בנייה ולחיי השכונה.',
            category: 'אדריכלות',
          },
          {
            title: 'עיצוב פנים - דירה ברוטשילד, תל אביב',
            description:
              'עיצוב פנים לדירת מגורים ברחוב רוטשילד: קו נקי, חומרים איכותיים ותכנון פונקציונלי למגורים עירוניים מודרניים.',
            category: 'עיצוב פנים',
          },
          {
            title: 'עיצוב פנים - בית פרטי',
            description:
              'עיצוב פנים לבית פרטי בסגנון מינימליסטי־עדין: פלטת צבעים נייטרלית, רהיטים מודולריים, אקסנטים מתכתיים ותאורה רכה לחלל מרגיע ועכשווי.',
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
        tagline: 'הנדסאית באדריכלות - שנקר',
      },
    },
    en: {
      nav: {
        home: 'Home',
        about: 'About Me',
        projects: 'Projects',
        contact: 'Contact Me',
      },
      theme: {
        useDark: 'Switch to dark mode',
        useLight: 'Switch to light mode',
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
        diplomaCaption: 'Preview diploma',
        engineerTitle: 'Practical Engineer',
        engineerField: 'Architecture & Interior Design',
        engineerSchool: 'Shenkar College - 2025',
        viewCv: 'Preview résumé',
        viewPortfolio: 'Full portfolio',
      },
      preview: {
        close: 'Close',
        openNewTab: 'Open in new tab',
        prev: 'Previous',
        next: 'Next',
        hint: 'If the preview does not load, use “Open in new tab”.',
        galleryHint: 'Browse project images. You can open any image in a new tab.',
      },
      projects: {
        title: 'Projects',
        subtitle: 'Selected architecture and interior work',
        viewProject: 'Preview',
        items: mergeProjectItems([
          {
            title: 'Final Project - Tel Aviv Port Hotel',
            description:
              'Architectural design for a Tel Aviv Port hotel: façades and volumes with Islamic-inspired geometry, a refined hospitality concept, and a strong relationship to the sea and the city skyline.',
            category: 'Architecture',
          },
          {
            title: 'Residential Complex - Neve Tzedek (Four Units)',
            description:
              'Planning of a residential complex creating four housing units in Neve Tzedek - balancing urban scale, preservation context, and neighborhood character.',
            category: 'Architecture',
          },
          {
            title: 'Interior Design - Rothschild Boulevard Apartment',
            description:
              'Interior design for a Rothschild Boulevard residence: clean lines, quality materials, and a functional layout tailored to contemporary urban living.',
            category: 'Interior Design',
          },
          {
            title: 'Interior Design - Private Residence',
            description:
              'Private home interior design in a calm, minimalist language: a neutral palette, modular seating, metallic accents, and soft lighting for a serene contemporary atmosphere.',
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
        tagline: 'Practical Architectural Engineering - Shenkar',
      },
    },
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  )
}
