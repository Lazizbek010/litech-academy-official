import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Mail, Linkedin } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const TeachersSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const teachers = [
    {
      name: 'Dr. Sarah Johnson',
      specialization: 'Web Development',
      bio: '10+ years of experience in full-stack development. Former lead developer at tech giants.',
      skills: ['React', 'Node.js', 'TypeScript'],
      image: null,
      initials: 'SJ',
    },
    {
      name: 'Prof. Michael Chen',
      specialization: 'Graphic Design',
      bio: 'Award-winning designer with 15 years in the industry. Adobe Certified Expert.',
      skills: ['Photoshop', 'Illustrator', 'UI/UX'],
      image: null,
      initials: 'MC',
    },
    {
      name: 'Anna Petrova',
      specialization: 'Russian Language',
      bio: 'Native Russian speaker with PhD in Linguistics. Specialized in business Russian.',
      skills: ['Grammar', 'Conversation', 'Business Russian'],
      image: null,
      initials: 'AP',
    },
    {
      name: 'James Williams',
      specialization: 'English Language',
      bio: 'CELTA certified instructor with expertise in IELTS and Business English.',
      skills: ['IELTS', 'Business English', 'Academic Writing'],
      image: null,
      initials: 'JW',
    },
    {
      name: 'Kim Ji-hoon',
      specialization: 'Korean Language',
      bio: 'Native Korean instructor with experience teaching all proficiency levels.',
      skills: ['TOPIK', 'K-Culture', 'Conversation'],
      image: null,
      initials: 'KJ',
    },
    {
      name: 'David Martinez',
      specialization: 'Backend Development',
      bio: 'Cloud architect and backend specialist with expertise in scalable systems.',
      skills: ['Python', 'AWS', 'Databases'],
      image: null,
      initials: 'DM',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="teachers" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Meet Our <span className="text-gradient">Expert Teachers</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Learn from industry professionals and experienced educators dedicated to your success
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {teachers.map((teacher, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border/50 overflow-hidden group">
                <div className="h-2 bg-gradient-primary" />
                <CardHeader className="text-center pb-0">
                  <Avatar className="w-24 h-24 mx-auto mb-4 ring-4 ring-primary/20 group-hover:ring-primary/40 transition-all">
                    <AvatarImage src={teacher.image || undefined} alt={teacher.name} />
                    <AvatarFallback className="bg-gradient-primary text-white text-2xl font-bold">
                      {teacher.initials}
                    </AvatarFallback>
                  </Avatar>
                  <CardTitle className="text-xl">{teacher.name}</CardTitle>
                  <CardDescription className="text-primary font-semibold">
                    {teacher.specialization}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-4">{teacher.bio}</p>
                  <div className="flex flex-wrap gap-2 justify-center mb-4">
                    {teacher.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex justify-center gap-4 pt-4 border-t border-border">
                    <button className="text-muted-foreground hover:text-primary transition-colors">
                      <Mail className="h-5 w-5" />
                    </button>
                    <button className="text-muted-foreground hover:text-primary transition-colors">
                      <Linkedin className="h-5 w-5" />
                    </button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TeachersSection;