import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import CoursesSection from '@/components/CoursesSection';
import WhyLitechSection from '@/components/WhyLitechSection';
import TeachersSection from '@/components/TeachersSection';
import GraduatesSection from '@/components/GraduatesSection';
import GallerySection from '@/components/GallerySection';
import TestimonialsSection from '@/components/TestimonialsSection';
import RegistrationSection from '@/components/RegistrationSection';
import LocationSection from '@/components/LocationSection';
import Footer from '@/components/Footer';
import ChatAssistant from '@/components/ChatAssistant';

const Index = () => {
  useEffect(() => {
    // Smooth scroll behavior for the entire page
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <CoursesSection />
        <WhyLitechSection />
        <TeachersSection />
        <GraduatesSection />
        <GallerySection />
        <TestimonialsSection />
        <RegistrationSection />
        <LocationSection />
      </main>
      <Footer />
      <ChatAssistant />
    </div>
  );
};

export default Index;
