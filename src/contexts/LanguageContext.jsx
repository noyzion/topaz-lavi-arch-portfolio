import React, { createContext, useContext, useState, useEffect } from 'react'

const LanguageContext = createContext()

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return context
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
        about: 'אודות',
        projects: 'פרויקטים',
        contact: 'צור קשר'
      },
      hero: {
        name: 'טופז לביא',
        subtitle: 'אדריכלות ועיצוב',
        description: 'יוצרת חללים פונקציונליים ואסתטיים המשלבים חדשנות עם קלאסיקה',
        button: 'צפה בפרויקטים'
      },
      about: {
        title: 'אודות',
        profileAlt: 'טופז לביא, אדריכלית',
        diplomaAlt: 'תעודת הנדסאי באדריכלות ועיצוב פנים',
        text1: 'אדריכלית מקצועית המתמחה בעיצוב חללים מודרניים ופונקציונליים. עם ניסיון רב שנים בתכנון ועיצוב, אני מביאה גישה ייחודית המשלבת חדשנות עם קלאסיקה, תוך התחשבות מלאה בצרכי הלקוח והסביבה.',
        text2: 'כל פרויקט הוא הזדמנות ליצור משהו מיוחד - חלל שמשקף את האישיות והצרכים של הדיירים, תוך שמירה על אסתטיקה מודרנית ואיכות ביצוע גבוהה.',
        skill1: {
          title: 'תכנון אדריכלי',
          desc: 'תכנון מפורט של מבנים וחללים'
        },
        skill2: {
          title: 'עיצוב פנים',
          desc: 'עיצוב חללים פנימיים מודרניים'
        },
        skill3: {
          title: 'שיפוץ ושיקום',
          desc: 'שיפוץ מבנים קיימים ושיקומם'
        }
      },
      projects: {
        title: 'פרויקטים',
        subtitle: 'מבחר מתוך הפרויקטים שביצעתי לאורך השנים',
        items: [
          {
            title: 'בית פרטי מודרני',
            description: 'תכנון ועיצוב בית פרטי מודרני עם דגש על תאורה טבעית וחללים פתוחים',
            category: 'תכנון אדריכלי',
            image: '/images/project-villa.png'
          },
          {
            title: 'דירת פנטהאוז',
            description: 'עיצוב פנים לדירת פנטהאוז עם נוף פנורמי, שילוב של אלגנטיות ופונקציונליות',
            category: 'עיצוב פנים',
            image: '/images/project-interior-4.png'
          },
          {
            title: 'שיפוץ מבנה היסטורי',
            description: 'שיקום ושיפוץ מבנה היסטורי תוך שמירה על אופיו המקורי והתאמה לצרכים מודרניים',
            category: 'שיפוץ ושיקום',
            image: '/images/project-hotel-4.png'
          },
          {
            title: 'משרדים מודרניים',
            description: 'תכנון חללי עבודה מודרניים המשלבים פונקציונליות עם עיצוב חדשני',
            category: 'תכנון אדריכלי',
            image: '/images/project-urban.png'
          },
          {
            title: 'וילה יוקרתית',
            description: 'תכנון מלא של וילה יוקרתית עם גינה מתוכננת ופינות ישיבה חיצוניות',
            category: 'תכנון אדריכלי',
            image: '/images/project-hotel-2.png'
          },
          {
            title: 'דירה קומפקטית',
            description: 'עיצוב חכם של דירה קטנה עם מקסימום פונקציונליות וניצול מיטבי של החלל',
            category: 'עיצוב פנים',
            image: '/images/project-plan.png'
          }
        ]
      },
      contact: {
        title: 'צור קשר',
        subtitle: 'מעוניין בפגישת ייעוץ? אשמח לשמוע ממך',
        humanText: 'מעוניינת ללוות אתכם מהרעיון ועד הביצוע',
        email: 'אימייל',
        phone: 'טלפון',
        address: 'כתובת',
        addressValue: 'תל אביב, ישראל',
        form: {
          name: 'שם מלא',
          email: 'אימייל',
          phone: 'טלפון',
          message: 'הודעה',
          submit: 'שלח הודעה',
          sending: 'שולח...',
          success: 'תודה על פנייתך! אחזור אליך בהקדם.',
          error: 'שגיאה בשליחת ההודעה. נסה שוב מאוחר יותר.'
        }
      }
    },
    en: {
      nav: {
        about: 'About',
        projects: 'Projects',
        contact: 'Contact'
      },
      hero: {
        name: 'Topaz Lavi',
        subtitle: 'Architecture & Design',
        description: 'Creating functional and aesthetic spaces that combine innovation with classicism',
        button: 'View Projects'
      },
      about: {
        title: 'About',
        profileAlt: 'Topaz Lavi, architect',
        diplomaAlt: 'Practical engineer diploma in architecture and interior design',
        text1: 'Professional architect specializing in modern and functional space design. With years of experience in planning and design, I bring a unique approach that combines innovation with classicism, while fully considering the needs of the client and the environment.',
        text2: 'Every project is an opportunity to create something special - a space that reflects the personality and needs of the residents, while maintaining modern aesthetics and high execution quality.',
        skill1: {
          title: 'Architectural Planning',
          desc: 'Detailed planning of buildings and spaces'
        },
        skill2: {
          title: 'Interior Design',
          desc: 'Design of modern interior spaces'
        },
        skill3: {
          title: 'Renovation & Restoration',
          desc: 'Renovation and restoration of existing buildings'
        }
      },
      projects: {
        title: 'Projects',
        subtitle: 'A selection of projects I have completed over the years',
        items: [
          {
            title: 'Modern Private House',
            description: 'Planning and design of a modern private house with emphasis on natural lighting and open spaces',
            category: 'Architectural Planning',
            image: '/images/project-villa.png'
          },
          {
            title: 'Penthouse Apartment',
            description: 'Interior design for a penthouse apartment with panoramic views, combining elegance and functionality',
            category: 'Interior Design',
            image: '/images/project-interior-4.png'
          },
          {
            title: 'Historic Building Renovation',
            description: 'Restoration and renovation of a historic building while preserving its original character and adapting to modern needs',
            category: 'Renovation & Restoration',
            image: '/images/project-hotel-4.png'
          },
          {
            title: 'Modern Offices',
            description: 'Planning of modern workspaces that combine functionality with innovative design',
            category: 'Architectural Planning',
            image: '/images/project-urban.png'
          },
          {
            title: 'Luxury Villa',
            description: 'Complete planning of a luxury villa with designed garden and outdoor seating areas',
            category: 'Architectural Planning',
            image: '/images/project-hotel-2.png'
          },
          {
            title: 'Compact Apartment',
            description: 'Smart design of a small apartment with maximum functionality and optimal space utilization',
            category: 'Interior Design',
            image: '/images/project-plan.png'
          }
        ]
      },
        contact: {
          title: 'Contact',
          subtitle: 'Interested in a consultation? I would love to hear from you',
          humanText: 'Ready to guide you from concept to completion',
        email: 'Email',
        phone: 'Phone',
        address: 'Address',
        addressValue: 'Tel Aviv, Israel',
        form: {
          name: 'Full Name',
          email: 'Email',
          phone: 'Phone',
          message: 'Message',
          submit: 'Send Message',
          sending: 'Sending...',
          success: 'Thank you for your message! I will get back to you soon.',
          error: 'Error sending message. Please try again later.'
        }
      }
    }
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  )
}

