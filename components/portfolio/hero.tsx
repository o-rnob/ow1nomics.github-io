'use client';

import Image from 'next/image';
import { ArrowDown } from 'lucide-react';

export function Hero() {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-20 md:pt-0 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-background to-secondary/5 relative overflow-hidden"
    >
      {/* Decorative particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.2}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12 relative z-10">
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left animate-slide-up">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              Quantitative Finance
            </span>
            <br />
            <span className="text-foreground">Reimagined</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-foreground/70 mb-6 sm:mb-8 max-w-md mx-auto md:mx-0">
            Welcome to OW1NOMICS. Explore interactive financial games, cutting-edge research, and innovative approaches to quantitative finance.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button
              onClick={scrollToAbout}
              className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Explore
            </button>
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-3 border-2 border-secondary text-secondary rounded-lg font-semibold hover:bg-secondary/10 transition-colors duration-200"
            >
              Get in Touch
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center items-center">
          <div className="relative w-full max-w-md h-96 md:h-full md:max-h-600px">
            {/* Decorative circle background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-3xl animate-pulse-glow" />

            {/* Character Image */}
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src="/professor-owl.jpg"
                alt="K. M. Miad Hasan Ornob - OW1NOMICS"
                width={400}
                height={500}
                className="object-contain drop-shadow-xl animate-float"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer hover:text-primary transition-colors"
        aria-label="Scroll to next section"
      >
        <ArrowDown className="w-6 h-6" />
      </button>
    </section>
  );
}
