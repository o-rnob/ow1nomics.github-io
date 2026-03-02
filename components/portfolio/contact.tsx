'use client';

import { useState } from 'react';
import { Mail, Linkedin, Twitter, Github, Send } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  const socialLinks = [
    { icon: Mail, label: 'Email', href: 'mailto:contact@ow1nomics.com', color: 'hover:text-primary' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com', color: 'hover:text-secondary', external: true },
    { icon: Twitter, label: 'Twitter', href: 'https://twitter.com', color: 'hover:text-accent', external: true },
    { icon: Github, label: 'GitHub', href: 'https://github.com', color: 'hover:text-primary', external: true },
  ];

  return (
    <section
      id="contact"
      className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-background"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Get in Touch</span>
        </h2>
        <p className="text-center text-foreground/60 mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate on research? I'd love to hear from you!
        </p>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Form */}
          <div className="animate-slide-up">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-card border border-border text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-card border border-border text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-foreground mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-card border border-border text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 rounded-lg bg-card border border-border text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200 resize-none"
                  placeholder="Your message here..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                Send Message
              </button>

              {submitted && (
                <div className="p-4 rounded-lg bg-green-500/20 border border-green-500 text-green-600 text-center font-semibold animate-pulse">
                  Message sent successfully! 🎉
                </div>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            {/* Direct Contact */}
            <div className="p-6 rounded-lg bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/20">
              <h3 className="text-lg font-bold text-foreground mb-4">Let's Connect</h3>
              <p className="text-foreground/70 mb-4">
                Whether you want to discuss research, collaborate on a project, or just chat about quantitative finance, I'm always open to conversations.
              </p>
              <p className="text-sm text-foreground/60 mb-4">
                <span className="font-semibold">Response time:</span> Usually within 24 hours
              </p>
            </div>

            {/* Social Links */}
            <div className="p-6 rounded-lg bg-card border border-border">
              <h3 className="text-lg font-bold text-foreground mb-4">Social Media</h3>
              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target={link.external ? '_blank' : undefined}
                      rel={link.external ? 'noopener noreferrer' : undefined}
                      className="p-4 rounded-lg bg-muted border border-border hover:border-primary/50 transition-all duration-200 flex items-center justify-center gap-2 group"
                    >
                      <Icon className={`w-5 h-5 ${link.color} transition-colors`} />
                      <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                        {link.label}
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Quick Info */}
            <div className="p-6 rounded-lg bg-accent/5 border border-accent/20">
              <h3 className="text-lg font-bold text-foreground mb-4">Quick Facts</h3>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li>📍 Based in Bangladesh</li>
                <li>🔬 Quantitative Finance Researcher</li>
                <li>📚 Passionate about Financial Education</li>
                <li>🎯 Building Interactive Learning Tools</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
