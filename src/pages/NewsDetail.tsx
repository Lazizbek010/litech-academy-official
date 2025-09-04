import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getNewsBySlug, getRelatedNews } from '@/data/newsPosts';

const NewsDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const news = getNewsBySlug(slug || '');
  const relatedNews = news ? getRelatedNews(news.id) : [];

  if (!news) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-32 text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">News Not Found</h1>
          <Link to="/news">
            <Button variant="default">Back to News</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <article className="container mx-auto px-4 max-w-4xl">
          {/* Back Button */}
          <Link to="/news">
            <Button variant="ghost" className="mb-8 hover:bg-accent">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to News
            </Button>
          </Link>

          {/* Hero Image */}
          <div className="relative h-96 rounded-xl overflow-hidden mb-8">
            <img 
              src={news.thumbnail} 
              alt={news.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>

          {/* News Header */}
          <header className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              {news.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {new Date(news.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                {news.category}
              </span>
            </div>
          </header>

          {/* News Content */}
          <div className="prose prose-lg max-w-none text-foreground">
            {news.content.split('\n').map((paragraph, index) => {
              if (paragraph.startsWith('##')) {
                return (
                  <h2 key={index} className="text-2xl font-bold mt-8 mb-4 text-foreground">
                    {paragraph.replace('## ', '')}
                  </h2>
                );
              } else if (paragraph.startsWith('###')) {
                return (
                  <h3 key={index} className="text-xl font-semibold mt-6 mb-3 text-foreground">
                    {paragraph.replace('### ', '')}
                  </h3>
                );
              } else if (paragraph.startsWith('-')) {
                return (
                  <li key={index} className="ml-6 mb-2 text-foreground/90">
                    {paragraph.replace('- ', '')}
                  </li>
                );
              } else if (paragraph.trim()) {
                return (
                  <p key={index} className="mb-4 text-foreground/90 leading-relaxed">
                    {paragraph}
                  </p>
                );
              }
              return null;
            })}
          </div>

          {/* Related News */}
          {relatedNews.length > 0 && (
            <section className="mt-16 pt-8 border-t border-border">
              <h2 className="text-3xl font-bold text-foreground mb-8">Related News</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedNews.map((related) => (
                  <Link key={related.id} to={`/news/${related.slug}`}>
                    <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300">
                      <div className="relative h-48 overflow-hidden">
                        <img 
                          src={related.thumbnail} 
                          alt={related.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                          {related.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {new Date(related.date).toLocaleDateString('en-US', { 
                            month: 'short', 
                            day: 'numeric'
                          })}
                        </p>
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default NewsDetail;