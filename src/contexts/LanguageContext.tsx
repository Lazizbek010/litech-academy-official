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
  const [language, setLanguage] = useState<Language>('uz');

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
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
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
      price: 'Narxi',
      duration: 'Davomiyligi',
      month: 'oy',
      foundation: {
        title: 'Foundation',
        desc: 'Kompyuter va Internet asoslari',
      },
      webdev: {
        title: 'Web Development',
        desc: 'Frontend, Backend va Fullstack dasturlash',
      },
      graphicdesign: {
        title: 'Graphic Design',
        desc: 'Adobe Photoshop, Illustrator va boshqalar',
      },
      english: {
        title: 'Ingliz tili',
        desc: 'Boshlang\'ich dan Yuqori darajagacha',
      },
      russian: {
        title: 'Rus tili',
        desc: 'Umumiy va biznes rus tili',
      },
      korean: {
        title: 'Koreys tili',
        desc: 'TOPIK tayyorgarlik va oddiy suhbat',
      },
    },
    teachers: {
      title: 'Bizning O\'qituvchilarimiz',
      subtitle: 'Tajribali mutaxassislar bilan o\'rganing',
    },
    testimonials: {
      title: 'Talabalar Fikrlari',
      subtitle: 'Bizning talabalar va ota-onalar nima deyishadi',
    },
    whyLitech: {
      title: 'Nega LITECH?',
      subtitle: 'LITECH Academy-ni tanlashning asosiy sabablari',
      modern: {
        title: 'Zamonaviy O\'qitish Usullari',
        desc: 'Eng so\'nggi texnologiyalar va o\'qitish metodlari',
      },
      experienced: {
        title: 'Tajribali O\'qituvchilar',
        desc: 'Sohadagi professional mutaxassislar',
      },
      projects: {
        title: 'Real Loyihalar',
        desc: 'Amaliy tajriba olish imkoniyati',
      },
      international: {
        title: 'Xalqaro Til Kurslari',
        desc: 'Ingliz, Rus va Koreys tillari',
      },
      success: {
        title: 'Muvaffaqiyatli Bitiruvchilar',
        desc: 'Ko\'plab talabalar muvaffaqiyatga erishdi',
      },
    },
    gallery: {
      title: 'Galereya',
      subtitle: 'LITECH Academy hayotidan lavhalar',
    },
    registration: {
      title: 'Ro\'yxatdan O\'tish',
      subtitle: 'Bugun o\'z kelajagingizni boshlang',
      fullName: 'To\'liq Ism',
      phone: 'Telefon Raqam',
      selectCourse: 'Kursni tanlang',
      notes: 'Qo\'shimcha Izohlar',
      submit: 'Yuborish',
      success: 'Ro\'yxatdan o\'tdingiz! Tez orada siz bilan bog\'lanamiz.',
    },
    location: {
      title: 'Bizning Joylashuvimiz',
      subtitle: 'LITECH Academy-ga tashrif buyuring',
      address: 'Toshkent, O\'zbekiston',
      phone: 'Telefon',
      email: 'Email',
    },
    footer: {
      quickLinks: 'Tezkor Havolalar',
      courses: 'Kurslar',
      about: 'Biz Haqimizda',
      contact: 'Aloqa',
      news: 'Yangiliklar',
      blog: 'Blog',
      gallery: 'Galereya',
      followUs: 'Bizni Kuzatib Boring',
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
      price: 'Цена',
      duration: 'Длительность',
      month: 'мес',
      foundation: {
        title: 'Основы',
        desc: 'Основы компьютера и интернета',
      },
      webdev: {
        title: 'Веб-разработка',
        desc: 'Frontend, Backend и Fullstack программирование',
      },
      graphicdesign: {
        title: 'Графический дизайн',
        desc: 'Adobe Photoshop, Illustrator и другие',
      },
      english: {
        title: 'Английский язык',
        desc: 'От начального до продвинутого уровня',
      },
      russian: {
        title: 'Русский язык',
        desc: 'Общий и деловой русский',
      },
      korean: {
        title: 'Корейский язык',
        desc: 'Подготовка к TOPIK и разговорный',
      },
    },
    teachers: {
      title: 'Наши Преподаватели',
      subtitle: 'Учитесь у опытных специалистов',
    },
    testimonials: {
      title: 'Отзывы Студентов',
      subtitle: 'Что говорят наши студенты и родители',
    },
    whyLitech: {
      title: 'Почему LITECH?',
      subtitle: 'Основные причины выбрать LITECH Academy',
      modern: {
        title: 'Современные Методы Обучения',
        desc: 'Новейшие технологии и методики преподавания',
      },
      experienced: {
        title: 'Опытные Преподаватели',
        desc: 'Профессиональные специалисты в своей области',
      },
      projects: {
        title: 'Реальные Проекты',
        desc: 'Возможность получить практический опыт',
      },
      international: {
        title: 'Международные Языковые Курсы',
        desc: 'Английский, русский и корейский языки',
      },
      success: {
        title: 'Успешные Выпускники',
        desc: 'Многие студенты достигли успеха',
      },
    },
    gallery: {
      title: 'Галерея',
      subtitle: 'Моменты из жизни LITECH Academy',
    },
    registration: {
      title: 'Регистрация',
      subtitle: 'Начните свое будущее сегодня',
      fullName: 'Полное имя',
      phone: 'Телефон',
      selectCourse: 'Выберите курс',
      notes: 'Дополнительные заметки',
      submit: 'Отправить',
      success: 'Вы зарегистрированы! Мы скоро свяжемся с вами.',
    },
    location: {
      title: 'Наше Местоположение',
      subtitle: 'Посетите LITECH Academy',
      address: 'Ташкент, Узбекистан',
      phone: 'Телефон',
      email: 'Email',
    },
    footer: {
      quickLinks: 'Быстрые Ссылки',
      courses: 'Курсы',
      about: 'О нас',
      contact: 'Контакты',
      news: 'Новости',
      blog: 'Блог',
      gallery: 'Галерея',
      followUs: 'Следите за нами',
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
      price: 'Price',
      duration: 'Duration',
      month: 'months',
      foundation: {
        title: 'Foundation',
        desc: 'Computer and Internet basics',
      },
      webdev: {
        title: 'Web Development',
        desc: 'Frontend, Backend and Fullstack programming',
      },
      graphicdesign: {
        title: 'Graphic Design',
        desc: 'Adobe Photoshop, Illustrator and more',
      },
      english: {
        title: 'English Language',
        desc: 'From beginner to advanced level',
      },
      russian: {
        title: 'Russian Language',
        desc: 'General and business Russian',
      },
      korean: {
        title: 'Korean Language',
        desc: 'TOPIK preparation and conversation',
      },
    },
    teachers: {
      title: 'Our Teachers',
      subtitle: 'Learn from experienced professionals',
    },
    testimonials: {
      title: 'Student Testimonials',
      subtitle: 'What our students and parents say',
    },
    whyLitech: {
      title: 'Why LITECH?',
      subtitle: 'Key reasons to choose LITECH Academy',
      modern: {
        title: 'Modern Teaching Methods',
        desc: 'Latest technologies and teaching methodologies',
      },
      experienced: {
        title: 'Experienced Teachers',
        desc: 'Professional specialists in their field',
      },
      projects: {
        title: 'Real Projects',
        desc: 'Opportunity to gain practical experience',
      },
      international: {
        title: 'International Language Courses',
        desc: 'English, Russian and Korean languages',
      },
      success: {
        title: 'Successful Graduates',
        desc: 'Many students have achieved success',
      },
    },
    gallery: {
      title: 'Gallery',
      subtitle: 'Moments from LITECH Academy life',
    },
    registration: {
      title: 'Registration',
      subtitle: 'Start your future today',
      fullName: 'Full Name',
      phone: 'Phone Number',
      selectCourse: 'Select Course',
      notes: 'Additional Notes',
      submit: 'Submit',
      success: 'You are registered! We will contact you soon.',
    },
    location: {
      title: 'Our Location',
      subtitle: 'Visit LITECH Academy',
      address: 'Tashkent, Uzbekistan',
      phone: 'Phone',
      email: 'Email',
    },
    footer: {
      quickLinks: 'Quick Links',
      courses: 'Courses',
      about: 'About',
      contact: 'Contact',
      news: 'News',
      blog: 'Blog',
      gallery: 'Gallery',
      followUs: 'Follow Us',
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
