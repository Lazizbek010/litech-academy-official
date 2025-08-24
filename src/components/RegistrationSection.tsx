import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { User, Phone, BookOpen, MessageSquare, Send } from 'lucide-react';

const RegistrationSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { toast } = useToast();

  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    course: '',
    notes: '',
  });

  const courses = [
    'Computer Literacy',
    'Frontend Development',
    'Backend Development',
    'Fullstack Development',
    'Graphic Design',
    'Web Design',
    'Foundation Course',
    'Russian Language',
    'English Language',
    'Korean Language',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would normally send the data to your backend
    console.log('Form submitted:', formData);
    
    toast({
      title: "Registration Successful!",
      description: "We'll contact you within 24 hours to confirm your enrollment.",
    });
    
    // Reset form
    setFormData({
      fullName: '',
      phoneNumber: '',
      course: '',
      notes: '',
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <section id="registration" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Start Your <span className="text-gradient">Learning Journey</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Register now and take the first step towards your new career
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <Card className="border-border/50 shadow-xl">
            <CardHeader className="text-center bg-gradient-primary text-white rounded-t-lg">
              <CardTitle className="text-2xl">Registration Form</CardTitle>
              <CardDescription className="text-white/90">
                Fill out the form below and we'll get back to you soon
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="fullName" className="flex items-center gap-2">
                    <User className="h-4 w-4 text-primary" />
                    Full Name *
                  </Label>
                  <Input
                    id="fullName"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={(e) => handleChange('fullName', e.target.value)}
                    required
                    className="border-input focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phoneNumber" className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-primary" />
                    Phone Number *
                  </Label>
                  <Input
                    id="phoneNumber"
                    type="tel"
                    placeholder="+1 (234) 567-8900"
                    value={formData.phoneNumber}
                    onChange={(e) => handleChange('phoneNumber', e.target.value)}
                    required
                    className="border-input focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="course" className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4 text-primary" />
                    Select Course *
                  </Label>
                  <Select
                    value={formData.course}
                    onValueChange={(value) => handleChange('course', value)}
                    required
                  >
                    <SelectTrigger className="border-input focus:border-primary">
                      <SelectValue placeholder="Choose your preferred course" />
                    </SelectTrigger>
                    <SelectContent>
                      {courses.map((course) => (
                        <SelectItem key={course} value={course}>
                          {course}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="notes" className="flex items-center gap-2">
                    <MessageSquare className="h-4 w-4 text-primary" />
                    Additional Notes (Optional)
                  </Label>
                  <Textarea
                    id="notes"
                    placeholder="Tell us about your goals or any questions you have..."
                    value={formData.notes}
                    onChange={(e) => handleChange('notes', e.target.value)}
                    rows={4}
                    className="border-input focus:border-primary resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-primary hover:opacity-90 text-white font-semibold"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Submit Registration
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default RegistrationSection;