import { useState, useEffect } from 'react';
import { Menu, X, GraduationCap, Phone, Globe, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  const languages = [
    { code: 'uz' as const, label: '🇺🇿 O\'zbek', flag: '🇺🇿' },
    { code: 'ru' as const, label: '🇷🇺 Русский', flag: '🇷🇺' },
    { code: 'en' as const, label: '🇬🇧 English', flag: '🇬🇧' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: t('nav.courses'), href: '/#courses' },
    { name: t('nav.teachers'), href: '/#teachers' },
    { name: t('nav.gallery'), href: '/#gallery' },
    { name: t('nav.news'), href: '/news' },
    { name: t('nav.blog'), href: '/blog' },
    { name: t('nav.contact'), href: '/#contact' },
  ];

  const handleNavClick = (href: string) => {
    if (href.startsWith('/#')) {
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const element = document.querySelector(href.substring(1));
          element?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const element = document.querySelector(href.substring(1));
        element?.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (href === '/') {
      navigate('/');
    } else {
      navigate(href);
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-sm shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <GraduationCap className="h-8 w-8 text-primary" />
            <span className="font-bold text-xl md:text-2xl">
              <span className="text-primary">LITECH</span>
              <span className="text-foreground"> Academy</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className="text-foreground/80 hover:text-primary transition-colors font-medium"
              >
                {item.name}
              </button>
            ))}
            <a 
              href="tel:+998901234567" 
              className="flex items-center gap-2 text-primary hover:text-primary-dark transition-colors font-medium"
            >
              <Phone className="h-4 w-4" />
              <span>+998 90 123 45 67</span>
            </a>
            <Button 
              onClick={() => handleNavClick('/#registration')}
              className="bg-gradient-primary hover:opacity-90"
            >
              {t('hero.cta')}
            </Button>
            
            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="flex items-center gap-2 p-2 hover:bg-accent rounded-lg transition-colors"
              >
                <Globe className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">{languages.find(l => l.code === language)?.flag}</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${isLangMenuOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {isLangMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute right-0 mt-2 w-48 bg-background border border-border rounded-lg shadow-lg overflow-hidden z-50"
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setLanguage(lang.code);
                          setIsLangMenuOpen(false);
                        }}
                        className={`w-full text-left px-4 py-3 hover:bg-accent transition-colors flex items-center gap-2 ${
                          language === lang.code ? 'bg-primary/10 text-primary' : 'text-foreground'
                        }`}
                      >
                        <span className="text-lg">{lang.flag}</span>
                        <span className="font-medium">{lang.label.split(' ')[1]}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-t border-border"
          >
            <div className="container mx-auto px-4 py-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="block w-full text-left py-3 text-foreground/80 hover:text-primary transition-colors font-medium"
                >
                  {item.name}
                </button>
              ))}
              <a 
                href="tel:+998901234567" 
                className="flex items-center gap-2 text-primary hover:text-primary-dark transition-colors font-medium py-3"
              >
                <Phone className="h-4 w-4" />
                <span>+998 90 123 45 67</span>
              </a>
              <Button 
                onClick={() => handleNavClick('/#registration')}
                className="w-full mt-4 bg-gradient-primary hover:opacity-90"
              >
                {t('hero.cta')}
              </Button>
              
              {/* Mobile Language Switcher */}
              <div className="mt-4 pt-4 border-t border-border">
                <p className="text-sm text-muted-foreground mb-2 px-3">Language / Til / Язык</p>
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`w-full text-left py-3 px-3 transition-colors flex items-center gap-2 ${
                      language === lang.code ? 'bg-primary/10 text-primary font-semibold' : 'text-foreground hover:bg-accent'
                    }`}
                  >
                    <span className="text-lg">{lang.flag}</span>
                    <span>{lang.label.split(' ')[1]}</span>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;