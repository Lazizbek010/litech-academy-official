import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, DollarSign, Code, Palette, Globe, Monitor, Layers, BookOpen } from 'lucide-react';

const CoursesSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const itCourses = [
    {
      icon: Monitor,
      title: 'Computer Literacy',
      description: 'Master essential computer skills from basics to advanced office applications',
      price: '$150',
      duration: '2 months',
      level: 'Beginner',
    },
    {
      icon: Code,
      title: 'Frontend Development',
      description: 'Learn HTML, CSS, JavaScript, React, and modern web development',
      price: '$450',
      duration: '4 months',
      level: 'Intermediate',
    },
    {
      icon: Layers,
      title: 'Backend Development',
      description: 'Master server-side programming with Node.js, databases, and APIs',
      price: '$500',
      duration: '5 months',
      level: 'Intermediate',
    },
    {
      icon: Code,
      title: 'Fullstack Development',
      description: 'Complete web development journey from frontend to backend',
      price: '$800',
      duration: '8 months',
      level: 'Advanced',
    },
    {
      icon: Palette,
      title: 'Graphic Design',
      description: 'Adobe Creative Suite mastery for professional design work',
      price: '$350',
      duration: '3 months',
      level: 'Beginner',
    },
    {
      icon: Palette,
      title: 'Web Design',
      description: 'UI/UX design principles, Figma, and responsive design',
      price: '$300',
      duration: '3 months',
      level: 'Beginner',
    },
    {
      icon: BookOpen,
      title: 'Foundation Course',
      description: 'Programming fundamentals and computer science basics',
      price: '$200',
      duration: '2 months',
      level: 'Beginner',
    },
  ];

  const languageCourses = [
    {
      icon: Globe,
      title: 'Russian Language',
      description: 'From basics to fluency with native speakers',
      price: '$250',
      duration: '6 months',
      level: 'All Levels',
    },
    {
      icon: Globe,
      title: 'English Language',
      description: 'General English, Business English, and IELTS preparation',
      price: '$280',
      duration: '6 months',
      level: 'All Levels',
    },
    {
      icon: Globe,
      title: 'Korean Language',
      description: 'Learn Korean language and culture with experienced instructors',
      price: '$300',
      duration: '6 months',
      level: 'All Levels',
    },
  ];

  const handleRegister = (courseName: string) => {
    const element = document.querySelector('#registration');
    element?.scrollIntoView({ behavior: 'smooth' });
    // You could also pre-fill the form with the course name here
  };

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="courses" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-gradient">Courses</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose from our comprehensive range of IT and Language courses designed to accelerate your career
          </p>
        </motion.div>

        {/* IT Courses */}
        <div ref={ref} className="mb-16">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-3xl font-bold mb-8 flex items-center"
          >
            <Code className="mr-3 h-8 w-8 text-primary" />
            IT Courses
          </motion.h3>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {itCourses.map((course, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50 bg-gradient-card">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <course.icon className="h-10 w-10 text-primary" />
                      <Badge variant="secondary">{course.level}</Badge>
                    </div>
                    <CardTitle className="text-xl">{course.title}</CardTitle>
                    <CardDescription className="mt-2">
                      {course.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center text-muted-foreground">
                        <Clock className="h-4 w-4 mr-1" />
                        {course.duration}
                      </div>
                      <div className="flex items-center font-bold text-primary text-lg">
                        <DollarSign className="h-5 w-5" />
                        {course.price.replace('$', '')}
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button 
                      className="w-full bg-gradient-primary hover:opacity-90"
                      onClick={() => handleRegister(course.title)}
                    >
                      Register Now
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Language Courses */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl md:text-3xl font-bold mb-8 flex items-center"
          >
            <Globe className="mr-3 h-8 w-8 text-primary" />
            Language Courses
          </motion.h3>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {languageCourses.map((course, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50 bg-gradient-card">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <course.icon className="h-10 w-10 text-primary" />
                      <Badge variant="secondary">{course.level}</Badge>
                    </div>
                    <CardTitle className="text-xl">{course.title}</CardTitle>
                    <CardDescription className="mt-2">
                      {course.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center text-muted-foreground">
                        <Clock className="h-4 w-4 mr-1" />
                        {course.duration}
                      </div>
                      <div className="flex items-center font-bold text-primary text-lg">
                        <DollarSign className="h-5 w-5" />
                        {course.price.replace('$', '')}
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button 
                      className="w-full bg-gradient-primary hover:opacity-90"
                      onClick={() => handleRegister(course.title)}
                    >
                      Register Now
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;