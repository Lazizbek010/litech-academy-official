import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase, MapPin, Calendar } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const GraduatesSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const graduates = [
    {
      name: 'Alex Thompson',
      initials: 'AT',
      image: undefined,
      course: 'Fullstack Development',
      graduationYear: '2023',
      currentPosition: 'Senior Developer',
      company: 'Tech Solutions Inc.',
      location: 'San Francisco, CA',
      story: 'After completing the fullstack course, I landed my dream job. The practical projects and mentorship were invaluable.',
    },
    {
      name: 'Maria Garcia',
      initials: 'MG',
      image: undefined,
      course: 'Graphic Design',
      graduationYear: '2023',
      currentPosition: 'Creative Director',
      company: 'Design Studio Pro',
      location: 'New York, NY',
      story: 'LITECH Academy transformed my passion into a profession. The hands-on approach helped me build a strong portfolio.',
    },
    {
      name: 'Zhang Wei',
      initials: 'ZW',
      image: undefined,
      course: 'English Language',
      graduationYear: '2022',
      currentPosition: 'International Sales Manager',
      company: 'Global Trade Corp',
      location: 'Shanghai, China',
      story: 'Business English course opened international opportunities. Now I manage global clients with confidence.',
    },
    {
      name: 'Natasha Ivanova',
      initials: 'NI',
      image: undefined,
      course: 'Frontend Development',
      graduationYear: '2023',
      currentPosition: 'UI/UX Developer',
      company: 'Digital Agency',
      location: 'Moscow, Russia',
      story: 'The frontend course gave me the skills to transition from traditional design to digital product development.',
    },
    {
      name: 'Park Min-jun',
      initials: 'PM',
      image: undefined,
      course: 'Korean Language',
      graduationYear: '2022',
      currentPosition: 'Cultural Exchange Coordinator',
      company: 'Korea Foundation',
      location: 'Seoul, Korea',
      story: 'Learning Korean at LITECH opened doors to work in cultural exchange programs between countries.',
    },
    {
      name: 'David Brown',
      initials: 'DB',
      image: undefined,
      course: 'Backend Development',
      graduationYear: '2023',
      currentPosition: 'Cloud Architect',
      company: 'CloudTech Solutions',
      location: 'Austin, TX',
      story: 'The backend course prepared me for enterprise-level development. Now I design scalable cloud solutions.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="graduates" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Graduate <span className="text-gradient">Success Stories</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our alumni are making waves in the industry. Here are their inspiring journeys
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {graduates.map((graduate, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full hover:shadow-lg transition-all duration-300 border-border/50 overflow-hidden group">
                <CardHeader className="pb-3">
                  <div className="flex items-start gap-4">
                    <Avatar className="w-16 h-16 ring-2 ring-primary/20">
                      <AvatarImage src={graduate.image} alt={graduate.name} />
                      <AvatarFallback className="bg-gradient-primary text-white font-bold">
                        {graduate.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg">{graduate.name}</h3>
                      <Badge variant="secondary" className="mb-1">
                        {graduate.course}
                      </Badge>
                      <p className="text-sm text-muted-foreground flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        Class of {graduate.graduationYear}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="mb-3">
                    <p className="font-semibold text-primary flex items-center">
                      <Briefcase className="h-4 w-4 mr-2" />
                      {graduate.currentPosition}
                    </p>
                    <p className="text-sm text-muted-foreground">{graduate.company}</p>
                    <p className="text-sm text-muted-foreground flex items-center mt-1">
                      <MapPin className="h-3 w-3 mr-1" />
                      {graduate.location}
                    </p>
                  </div>
                  <blockquote className="border-l-2 border-primary pl-4 italic text-muted-foreground">
                    "{graduate.story}"
                  </blockquote>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default GraduatesSection;