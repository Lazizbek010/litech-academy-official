import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import CoursesSection from '@/components/CoursesSection';
import TeachersSection from '@/components/TeachersSection';
import GraduatesSection from '@/components/GraduatesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import RegistrationSection from '@/components/RegistrationSection';
import LocationSection from '@/components/LocationSection';
import Footer from '@/components/Footer';

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
        <TeachersSection />
        <GraduatesSection />
        <TestimonialsSection />
        <RegistrationSection />
        <LocationSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
