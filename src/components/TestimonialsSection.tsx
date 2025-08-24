import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star, Quote } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const TestimonialsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const testimonials = [
    {
      name: 'Emily Rodriguez',
      initials: 'ER',
      image: undefined,
      role: 'Student',
      course: 'Web Development',
      rating: 5,
      comment: 'The instructors at LITECH Academy are exceptional. They break down complex concepts into understandable pieces and provide real-world examples. I\'ve learned more here in 3 months than I did in a year of self-study.',
    },
    {
      name: 'John Smith',
      initials: 'JS',
      image: undefined,
      role: 'Parent',
      course: 'Computer Literacy',
      rating: 5,
      comment: 'My daughter gained confidence and practical skills through the computer literacy course. The patient teaching approach and structured curriculum made all the difference. Highly recommend!',
    },
    {
      name: 'Lisa Wang',
      initials: 'LW',
      image: undefined,
      role: 'Student',
      course: 'English Language',
      rating: 5,
      comment: 'The English course transformed my communication skills. Small class sizes, personalized attention, and practical conversation practice helped me achieve fluency faster than expected.',
    },
    {
      name: 'Ahmed Hassan',
      initials: 'AH',
      image: undefined,
      role: 'Student',
      course: 'Graphic Design',
      rating: 5,
      comment: 'LITECH Academy\'s graphic design course exceeded my expectations. The hands-on projects, industry-standard tools, and expert feedback prepared me for a successful design career.',
    },
    {
      name: 'Svetlana Petrov',
      initials: 'SP',
      image: undefined,
      role: 'Parent',
      course: 'Russian Language',
      rating: 5,
      comment: 'My son loves his Russian classes! The interactive teaching methods and cultural immersion approach make learning enjoyable. We\'ve seen remarkable progress in just a few months.',
    },
    {
      name: 'Michael Chen',
      initials: 'MC',
      image: undefined,
      role: 'Student',
      course: 'Fullstack Development',
      rating: 5,
      comment: 'The fullstack program is comprehensive and well-structured. From fundamentals to advanced topics, every module builds perfectly on the previous one. The career support was invaluable.',
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What Our <span className="text-gradient">Students Say</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real feedback from our students and parents about their learning experience
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-6xl mx-auto"
        >
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              bulletClass: 'swiper-pagination-bullet !bg-primary/30',
              bulletActiveClass: 'swiper-pagination-bullet-active !bg-primary',
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="pb-12"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <Card className="h-full border-border/50 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <Quote className="h-8 w-8 text-primary/20 mb-4" />
                    
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                      ))}
                    </div>

                    <p className="text-muted-foreground mb-6 italic">
                      "{testimonial.comment}"
                    </p>

                    <div className="flex items-center gap-3 pt-4 border-t border-border">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={testimonial.image} alt={testimonial.name} />
                        <AvatarFallback className="bg-gradient-primary text-white text-sm font-bold">
                          {testimonial.initials}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.role} • {testimonial.course}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;