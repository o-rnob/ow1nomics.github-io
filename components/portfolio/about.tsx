export function About() {
  return (
    <section
      id="about"
      className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background to-secondary/5"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
          About <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div className="space-y-6 animate-slide-up">
            <p className="text-lg text-foreground/80 leading-relaxed">
              I'm K. M. Miad Hasan Ornob, a passionate Quantitative Finance Researcher based in Bangladesh. With a deep interest in mathematical modeling and financial analysis, I'm dedicated to making complex financial concepts accessible through interactive experiences and innovative research.
            </p>

            <p className="text-lg text-foreground/80 leading-relaxed">
              My journey combines rigorous academic training with practical applications of quantitative methods. I believe that financial literacy and understanding market dynamics are crucial for informed decision-making.
            </p>

            <p className="text-lg text-foreground/80 leading-relaxed">
              Through OW1NOMICS, I explore the intersection of finance, mathematics, and technology. My goal is to create interactive tools and educational content that demystify quantitative finance and empower others to understand the financial world better.
            </p>
          </div>

          {/* Key Facts */}
          <div className="space-y-4">
            <div className="p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors duration-200 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <h3 className="font-semibold text-primary mb-2">Research Focus</h3>
              <p className="text-foreground/70">Quantitative Finance, Mathematical Modeling, Risk Analysis</p>
            </div>

            <div className="p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors duration-200 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <h3 className="font-semibold text-primary mb-2">Location</h3>
              <p className="text-foreground/70">Bangladesh</p>
            </div>

            <div className="p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors duration-200 animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <h3 className="font-semibold text-primary mb-2">Expertise</h3>
              <p className="text-foreground/70">Portfolio Theory, Derivatives, Financial Analysis</p>
            </div>

            <div className="p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors duration-200 animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <h3 className="font-semibold text-primary mb-2">Mission</h3>
              <p className="text-foreground/70">Making finance accessible through interactive learning</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
