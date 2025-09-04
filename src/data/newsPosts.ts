export interface NewsPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  thumbnail: string;
  date: string;
  category: string;
}

export const newsPosts: NewsPost[] = [
  {
    id: '1',
    slug: 'new-web-development-course-launch',
    title: 'LITECH Academy Launches Advanced Web Development Course',
    excerpt: 'We are excited to announce our new comprehensive web development program featuring the latest technologies.',
    content: `LITECH Academy is proud to announce the launch of our new Advanced Web Development Course, designed to meet the growing demand for skilled web developers in Uzbekistan and beyond.

## Course Highlights

The new program covers cutting-edge technologies including React, Next.js, TypeScript, and modern backend frameworks. Students will work on real-world projects throughout the 6-month intensive program.

### What Students Will Learn
- Modern JavaScript and TypeScript
- React and Next.js for frontend development
- Node.js and Express for backend
- Database design with PostgreSQL and MongoDB
- Cloud deployment with AWS and Vercel
- DevOps practices and CI/CD pipelines

## Industry Partnership

We've partnered with leading IT companies in Tashkent to provide internship opportunities for our top-performing students. This ensures our graduates have practical experience before entering the job market.

## Enrollment Now Open

Classes begin on April 1st, 2024. Early bird registration offers a 20% discount for the first 30 students who enroll. Visit our registration section or contact us directly to secure your spot.`,
    thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070',
    date: '2024-03-18',
    category: 'Course Launch'
  },
  {
    id: '2',
    slug: 'student-success-story-international-job',
    title: 'LITECH Graduate Lands International Remote Position',
    excerpt: 'Our recent graduate shares their journey from beginner to landing a remote developer position.',
    content: `We're thrilled to share the success story of Aziz Karimov, a recent graduate of our Full-Stack Development program who has secured a remote position with a European tech company.

## The Journey

Aziz joined LITECH Academy with basic computer knowledge and a dream to become a professional developer. Through dedication and our comprehensive curriculum, he transformed his career in just 8 months.

### Key Milestones
- Started with our Foundation Course in June 2023
- Progressed to Full-Stack Development program
- Built 5 portfolio projects during the course
- Completed internship with local IT company
- Received job offer from European startup in February 2024

## Advice for Current Students

"The key is consistency and practice. Don't just learn the theory – build projects every day. The instructors at LITECH are always ready to help, and the community support is incredible," says Aziz.

## Your Success Story Starts Here

Every student at LITECH Academy has the potential to achieve similar success. With our industry-focused curriculum and dedicated support, your dream career in tech is within reach.`,
    thumbnail: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071',
    date: '2024-03-16',
    category: 'Student Success'
  },
  {
    id: '3',
    slug: 'english-speaking-club-launch',
    title: 'Free English Speaking Club Every Saturday',
    excerpt: 'Join our weekly English speaking club to practice conversational skills in a friendly environment.',
    content: `LITECH Academy is launching a free English Speaking Club open to all students and the community. Starting this Saturday, join us for engaging conversations and language practice.

## Club Details

Every Saturday from 3:00 PM to 5:00 PM, our experienced English instructors will facilitate discussion groups, debates, and interactive activities designed to improve conversational fluency.

### Activities Include
- Topic-based discussions on technology and current events
- Mock job interviews in English
- Presentation skills workshop
- Business English scenarios
- Cultural exchange sessions

## Open to Everyone

While priority is given to LITECH students, we welcome community members who want to improve their English speaking skills. This is a great opportunity to network with like-minded individuals.

## Registration

No advance registration required. Simply show up at our main campus on Saturday afternoon. Refreshments will be provided.`,
    thumbnail: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070',
    date: '2024-03-14',
    category: 'Events'
  },
  {
    id: '4',
    slug: 'partnership-with-tech-companies',
    title: 'LITECH Partners with Leading Tech Companies for Student Internships',
    excerpt: 'New partnerships ensure our students get real-world experience before graduation.',
    content: `LITECH Academy has signed partnership agreements with five leading technology companies in Uzbekistan to provide guaranteed internship opportunities for our students.

## Partnership Benefits

These partnerships will provide our students with invaluable real-world experience, mentorship from industry professionals, and potential full-time employment opportunities upon graduation.

### Partner Companies
- TechnoSoft Solutions - Software Development
- Digital Innovations Lab - Mobile App Development
- CloudTech Systems - Cloud Infrastructure
- DataMind Analytics - Data Science
- CyberGuard Security - Cybersecurity

## Internship Program Structure

The 3-month internship program includes hands-on project work, mentorship from senior developers, exposure to agile methodologies, and performance-based job offers.

## Student Preparation

LITECH Academy will prepare students for these internships through mock interviews, portfolio development workshops, soft skills training, and technical assessment preparation.`,
    thumbnail: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=2072',
    date: '2024-03-12',
    category: 'Partnerships'
  },
  {
    id: '5',
    slug: 'graphic-design-exhibition',
    title: 'Student Graphic Design Exhibition Next Week',
    excerpt: 'Showcasing the creative works of our Graphic Design students in a public exhibition.',
    content: `LITECH Academy's Graphic Design department is hosting its annual student exhibition, featuring outstanding works created by our talented students throughout the year.

## Exhibition Details

The exhibition will run from March 25-27 at our main campus gallery. Visitors can view digital art, branding projects, UI/UX designs, and multimedia presentations created by our students.

### Featured Works
- Brand identity packages for local businesses
- Mobile app UI designs
- Digital illustrations and concept art
- Motion graphics and animations
- Print design portfolios

## Industry Judges

Professional designers from leading agencies will judge the works and provide feedback. Awards will be given for Best Overall Design, Most Creative Concept, and Best Technical Execution.

## Open to Public

The exhibition is free and open to the public. This is a great opportunity to see the talent being developed at LITECH Academy and potentially hire designers for your projects.`,
    thumbnail: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2070',
    date: '2024-03-10',
    category: 'Events'
  }
];

export const getRelatedNews = (currentNewsId: string, limit: number = 3): NewsPost[] => {
  const currentNews = newsPosts.find(news => news.id === currentNewsId);
  if (!currentNews) return [];
  
  return newsPosts
    .filter(news => news.id !== currentNewsId && news.category === currentNews.category)
    .slice(0, limit);
};

export const getNewsBySlug = (slug: string): NewsPost | undefined => {
  return newsPosts.find(news => news.slug === slug);
};