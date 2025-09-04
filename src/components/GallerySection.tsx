import { useState } from 'react';
import { motion } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';

const galleryImages = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071',
    title: 'Students Collaborating',
    category: 'Classroom'
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070',
    title: 'Team Project Work',
    category: 'Projects'
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070',
    title: 'Modern Classroom',
    category: 'Facilities'
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070',
    title: 'Group Discussion',
    category: 'Learning'
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070',
    title: 'Workshop Session',
    category: 'Events'
  },
  {
    id: 6,
    url: 'https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?q=80&w=2070',
    title: 'Graduation Ceremony',
    category: 'Events'
  },
  {
    id: 7,
    url: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070',
    title: 'Instructor Teaching',
    category: 'Classroom'
  },
  {
    id: 8,
    url: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070',
    title: 'Computer Lab',
    category: 'Facilities'
  }
];

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Gallery / <span className="text-primary">Lavhalar</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore moments from our academy - students, classrooms, and events
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="relative group cursor-pointer overflow-hidden rounded-lg"
              onClick={() => setSelectedImage(image)}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-semibold text-lg">{image.title}</h3>
                  <p className="text-white/80 text-sm">{image.category}</p>
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <ZoomIn className="w-8 h-8 text-white" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox Modal */}
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-4xl p-0 overflow-hidden">
            {selectedImage && (
              <div className="relative">
                <img
                  src={selectedImage.url}
                  alt={selectedImage.title}
                  className="w-full h-auto"
                />
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-white text-2xl font-bold">{selectedImage.title}</h3>
                  <p className="text-white/80">{selectedImage.category}</p>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default GallerySection;