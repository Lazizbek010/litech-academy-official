import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'uz' | 'ru' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('litech_language');
    return (saved as Language) || 'uz';
  });

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('litech_language', lang);
  };

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[language];
    
    for (const k of keys) {
      if (value && typeof value === 'object') {
        value = value[k];
      } else {
        return key;
      }
    }
    
    return typeof value === 'string' ? value : key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

const translations = {
  uz: {
    nav: {
      courses: 'Kurslar',
      teachers: 'O\'qituvchilar',
      gallery: 'Galereya',
      news: 'Yangiliklar',
      blog: 'Blog',
      contact: 'Aloqa',
    },
    hero: {
      title: 'LITECH Academy',
      subtitle: 'Sifatli ta\'lim va zamonaviy yondashuv',
      cta: 'Hoziroq Qo\'shiling',
    },
    courses: {
      title: 'Bizning Kurslarimiz',
      subtitle: 'IT va Til kurslari bilan o\'z karyerangizni boshlang',
      it: 'IT Kurslari',
      language: 'Til Kurslari',
      register: 'Ro\'yxatdan O\'tish',
    },
    teachers: {
      title: 'Bizning O\'qituvchilarimiz',
      subtitle: 'Tajribali mutaxassislar bilan o\'rganing',
    },
    graduates: {
      title: 'Bitiruvchilar Hikoyal ari',
      subtitle: 'Bizning bitiruvchilar sohada muvaffaqiyatlarga erishmoqda',
    },
    testimonials: {
      title: 'Talabalar Fikrlari',
      subtitle: 'O\'quv tajribalari haqida haqiqiy fikrlar',
    },
    whyLitech: {
      title: 'Nega LITECH?',
      subtitle: 'LITECH Academy-ni tanlashning asosiy sabablari',
    },
    gallery: {
      title: 'Galereya',
      subtitle: 'Akademiyamizdan lavhalarni ko\'ring',
    },
    registration: {
      title: 'Ro\'yxatdan O\'tish',
      subtitle: 'Bugun o\'z kelajagingizni boshlang',
    },
    location: {
      title: 'Bizni Shu Yerda Toping',
      subtitle: 'Kampusimizga tashrif buyuring',
    },
    footer: {
      quickLinks: 'Tezkor Havolalar',
      rights: 'Barcha huquqlar himoyalangan',
    },
    news: {
      title: 'Yangiliklar',
      subtitle: 'LITECH Academy-dan so\'nggi yangiliklar',
      readMore: 'Batafsil',
    },
    blog: {
      title: 'Blog',
      subtitle: 'IT va ta\'lim haqida foydali maqolalar',
      readMore: 'Batafsil',
      relatedPosts: 'Tegishli Maqolalar',
    },
  },
  ru: {
    nav: {
      courses: 'Курсы',
      teachers: 'Преподаватели',
      gallery: 'Галерея',
      news: 'Новости',
      blog: 'Блог',
      contact: 'Контакты',
    },
    hero: {
      title: 'LITECH Academy',
      subtitle: 'Качественное образование и современный подход',
      cta: 'Присоединяйтесь',
    },
    courses: {
      title: 'Наши Курсы',
      subtitle: 'Начните свою карьеру с IT и языковых курсов',
      it: 'IT Курсы',
      language: 'Языковые Курсы',
      register: 'Записаться',
    },
    teachers: {
      title: 'Наши Преподаватели',
      subtitle: 'Учитесь у опытных специалистов',
    },
    graduates: {
      title: 'Истории Успеха Выпускников',
      subtitle: 'Наши выпускники делают большие успехи в индустрии',
    },
    testimonials: {
      title: 'Отзывы Студентов',
      subtitle: 'Реальные отзывы об опыте обучения',
    },
    whyLitech: {
      title: 'Почему LITECH?',
      subtitle: 'Основные причины выбрать LITECH Academy',
    },
    gallery: {
      title: 'Галерея',
      subtitle: 'Моменты из нашей академии',
    },
    registration: {
      title: 'Регистрация',
      subtitle: 'Начните свое будущее сегодня',
    },
    location: {
      title: 'Найдите Нас Здесь',
      subtitle: 'Посетите наш кампус',
    },
    footer: {
      quickLinks: 'Быстрые Ссылки',
      rights: 'Все права защищены',
    },
    news: {
      title: 'Новости',
      subtitle: 'Последние новости от LITECH Academy',
      readMore: 'Подробнее',
    },
    blog: {
      title: 'Блог',
      subtitle: 'Полезные статьи об IT и образовании',
      readMore: 'Подробнее',
      relatedPosts: 'Похожие Статьи',
    },
  },
  en: {
    nav: {
      courses: 'Courses',
      teachers: 'Teachers',
      gallery: 'Gallery',
      news: 'News',
      blog: 'Blog',
      contact: 'Contact',
    },
    hero: {
      title: 'LITECH Academy',
      subtitle: 'Quality education and modern approach',
      cta: 'Join Now',
    },
    courses: {
      title: 'Our Courses',
      subtitle: 'Start your career with IT and Language courses',
      it: 'IT Courses',
      language: 'Language Courses',
      register: 'Register Now',
    },
    teachers: {
      title: 'Our Teachers',
      subtitle: 'Learn from experienced professionals',
    },
    graduates: {
      title: 'Graduate Success Stories',
      subtitle: 'Our alumni are making waves in the industry',
    },
    testimonials: {
      title: 'Student Testimonials',
      subtitle: 'Real feedback about learning experience',
    },
    whyLitech: {
      title: 'Why LITECH?',
      subtitle: 'Key reasons to choose LITECH Academy',
    },
    gallery: {
      title: 'Gallery',
      subtitle: 'Moments from our academy',
    },
    registration: {
      title: 'Registration',
      subtitle: 'Start your future today',
    },
    location: {
      title: 'Find Us Here',
      subtitle: 'Visit our campus',
    },
    footer: {
      quickLinks: 'Quick Links',
      rights: 'All rights reserved',
    },
    news: {
      title: 'News',
      subtitle: 'Latest news from LITECH Academy',
      readMore: 'Read More',
    },
    blog: {
      title: 'Blog',
      subtitle: 'Useful articles about IT and education',
      readMore: 'Read More',
      relatedPosts: 'Related Posts',
    },
  },
};
