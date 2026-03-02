import { Heart, MessageCircle, Share2, ExternalLink } from 'lucide-react';

export function InstagramFeed() {
  const posts = [
    {
      id: 1,
      caption: 'The power of compound interest: Start early, invest consistently! 📈',
      image: 'bg-gradient-to-br from-primary/20 to-secondary/20',
      likes: 1240,
      comments: 89,
    },
    {
      id: 2,
      caption: 'Understanding portfolio diversification is the key to managing risk. 🎯',
      image: 'bg-gradient-to-br from-secondary/20 to-accent/20',
      likes: 956,
      comments: 67,
    },
    {
      id: 3,
      caption: 'New research paper: "Quantitative Approaches to Modern Portfolio Management" 📊',
      image: 'bg-gradient-to-br from-accent/20 to-primary/20',
      likes: 2103,
      comments: 145,
    },
    {
      id: 4,
      caption: 'Market volatility decoded: How to analyze and interpret market movements 📉📈',
      image: 'bg-gradient-to-br from-primary/30 to-secondary/30',
      likes: 1567,
      comments: 102,
    },
    {
      id: 5,
      caption: 'Interactive games coming soon! Learn finance through hands-on experience 🎮',
      image: 'bg-gradient-to-br from-secondary/30 to-accent/30',
      likes: 3245,
      comments: 201,
    },
    {
      id: 6,
      caption: 'Q&A Session: Everything you wanted to know about quantitative finance 💬',
      image: 'bg-gradient-to-br from-accent/30 to-primary/30',
      likes: 1823,
      comments: 156,
    },
  ];

  return (
    <section
      id="instagram"
      className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background to-secondary/5"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Latest Updates
          </span>
        </h2>
        <p className="text-center text-foreground/60 mb-12 max-w-2xl mx-auto">
          Follow my journey and insights in quantitative finance
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post, idx) => (
            <div
              key={post.id}
              className="rounded-lg bg-card border border-border overflow-hidden hover:shadow-lg transition-all duration-200 hover:-translate-y-1 animate-slide-up"
              style={{ animationDelay: `${(idx % 3) * 0.1}s` }}
            >
              {/* Post Image */}
              <div className={`w-full h-48 ${post.image} flex items-center justify-center`}>
                <div className="text-center text-foreground/40">
                  <div className="text-4xl mb-2">📊</div>
                  <p className="text-sm font-medium">Post Content</p>
                </div>
              </div>

              {/* Post Content */}
              <div className="p-4">
                <p className="text-sm text-foreground/80 mb-4 line-clamp-2">
                  {post.caption}
                </p>

                {/* Stats */}
                <div className="flex justify-between text-sm text-foreground/60 mb-4 pb-4 border-b border-border">
                  <div className="flex items-center gap-1">
                    <Heart className="w-4 h-4" />
                    <span>{post.likes}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageCircle className="w-4 h-4" />
                    <span>{post.comments}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Share2 className="w-4 h-4" />
                  </div>
                </div>

                {/* View Button */}
                <button className="w-full px-4 py-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors duration-200 font-semibold flex items-center justify-center gap-2 text-sm">
                  <ExternalLink className="w-4 h-4" />
                  View Post
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Follow CTA */}
        <div className="mt-12 text-center">
          <p className="text-foreground/70 mb-4">
            Want to stay updated on the latest in quantitative finance?
          </p>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-200"
          >
            Follow on Instagram
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
