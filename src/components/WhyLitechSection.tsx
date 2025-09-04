import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Users, 
  Globe, 
  Briefcase, 
  Award, 
  TrendingUp,
  BookOpen,
  Target
} from 'lucide-react';

const reasons = [
  {
    icon: GraduationCap,
    title: 'Modern Teaching Methods',
    description: 'Interactive learning with latest educational technologies and hands-on practice'
  },
  {
    icon: Users,
    title: 'Experienced Instructors',
    description: 'Learn from industry professionals with years of real-world experience'
  },
  {
    icon: Briefcase,
    title: 'Real-World Projects',
    description: 'Work on actual projects that build your portfolio and practical skills'
  },
  {
    icon: Globe,
    title: 'International Languages',
    description: 'Master English, Russian, and Korean for global career opportunities'
  },
  {
    icon: Award,
    title: 'Certified Programs',
    description: 'Receive recognized certificates upon successful course completion'
  },
  {
    icon: TrendingUp,
    title: 'Career Support',
    description: 'Job placement assistance and internship opportunities with partner companies'
  },
  {
    icon: BookOpen,
    title: 'Comprehensive Curriculum',
    description: 'Up-to-date courses aligned with current industry standards and demands'
  },
  {
    icon: Target,
    title: 'Student Success Focus',
    description: 'Personalized attention and support to ensure every student achieves their goals'
  }
];

const WhyLitechSection = () => {
  return (
    <section id="why-litech" className="py-20 bg-accent/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Why Choose <span className="text-primary">LITECH</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover what makes LITECH Academy the perfect choice for your educational journey
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-background rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="mb-4">
                  <div className="w-14 h-14 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground">
                  {reason.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a 
            href="#registration"
            className="inline-block px-8 py-4 bg-gradient-primary text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
          >
            Start Your Journey Today
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyLitechSection;