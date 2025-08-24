import { GraduationCap, Facebook, Instagram, Send, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Courses', href: '#courses' },
    { name: 'About Us', href: '#teachers' },
    { name: 'Contact', href: '#contact' },
  ];

  const courses = [
    { name: 'Web Development', href: '#courses' },
    { name: 'Graphic Design', href: '#courses' },
    { name: 'English Language', href: '#courses' },
    { name: 'Russian Language', href: '#courses' },
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Send, href: 'https://t.me/', label: 'Telegram' },
    { icon: Youtube, href: 'https://youtube.com', label: 'YouTube' },
  ];

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-foreground text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <GraduationCap className="h-8 w-8 text-primary-light" />
              <span className="font-bold text-xl">
                <span className="text-primary-light">LITECH</span> Academy
              </span>
            </div>
            <p className="text-white/70 mb-4">
              Empowering students with quality IT and Language education for a brighter future.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-white/70 hover:text-primary-light transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Courses */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Popular Courses</h3>
            <ul className="space-y-2">
              {courses.map((course) => (
                <li key={course.name}>
                  <button
                    onClick={() => handleNavClick(course.href)}
                    className="text-white/70 hover:text-primary-light transition-colors"
                  >
                    {course.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-3 text-white/70">
              <li>
                <strong>Phone:</strong><br />
                +1 (555) 123-4567
              </li>
              <li>
                <strong>Email:</strong><br />
                info@litechacademy.edu
              </li>
              <li>
                <strong>Address:</strong><br />
                123 Education Street<br />
                Tech District, City 12345
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-white/20" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
          <p>© 2024 LITECH Academy. All rights reserved.</p>
          <div className="flex gap-4">
            <button className="hover:text-primary-light transition-colors">
              Privacy Policy
            </button>
            <button className="hover:text-primary-light transition-colors">
              Terms of Service
            </button>
            <button className="hover:text-primary-light transition-colors">
              Cookie Policy
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;