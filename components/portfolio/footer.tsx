import { Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const links = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Games', href: '#games' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-card border-t border-border py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold">
                OW
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                OW1NOMICS
              </span>
            </div>
            <p className="text-foreground/70 text-sm">
              Quantitative Finance Research & Interactive Learning
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Navigation</h3>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-foreground/70 hover:text-primary transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Get in Touch</h3>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li>📧 contact@ow1nomics.com</li>
              <li>📍 Bangladesh</li>
              <li>🔗 Follow on Social Media</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border mb-6" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-foreground/60">
          <p>
            © {currentYear} OW1NOMICS. All rights reserved.
          </p>
          <p className="flex items-center gap-1 mt-4 md:mt-0">
            Built with
            <Heart className="w-4 h-4 text-primary fill-primary" />
            and quantitative thinking
          </p>
        </div>
      </div>
    </footer>
  );
}
