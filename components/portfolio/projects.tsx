import { ExternalLink } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: 'Portfolio Optimization Model',
      description: 'A comprehensive tool for analyzing and optimizing investment portfolios using modern portfolio theory and efficient frontier analysis.',
      tags: ['Python', 'Financial Theory', 'Optimization'],
      details: 'Implements Markowitz model with real-time data integration and visualization of efficient frontiers.',
    },
    {
      title: 'Risk Assessment Framework',
      description: 'Advanced risk management system that calculates Value at Risk (VaR), Conditional VaR, and various other risk metrics.',
      tags: ['Quantitative Analysis', 'Risk Management', 'Statistics'],
      details: 'Supports multiple calculation methods including historical simulation and Monte Carlo approaches.',
    },
    {
      title: 'Market Analysis Dashboard',
      description: 'Interactive dashboard for real-time market data analysis with technical indicators and correlation matrices.',
      tags: ['Data Visualization', 'Finance', 'Analytics'],
      details: 'Provides comprehensive market insights with automated analysis and reporting capabilities.',
    },
    {
      title: 'Option Pricing Engine',
      description: 'Sophisticated option pricing calculator supporting multiple models including Black-Scholes and binomial trees.',
      tags: ['Derivatives', 'Mathematical Modeling', 'Finance'],
      details: 'Includes Greeks calculation, implied volatility analysis, and scenario analysis tools.',
    },
    {
      title: 'Time Series Forecasting',
      description: 'Advanced forecasting models for financial time series using ARIMA, GARCH, and machine learning approaches.',
      tags: ['Machine Learning', 'Time Series', 'Prediction'],
      details: 'Achieves high accuracy in predicting price movements and volatility patterns.',
    },
    {
      title: 'Backtesting Platform',
      description: 'Comprehensive backtesting framework for evaluating trading strategies against historical market data.',
      tags: ['Trading', 'Strategy Analysis', 'Performance'],
      details: 'Includes transaction costs, slippage simulation, and detailed performance metrics.',
    },
  ];

  return (
    <section
      id="projects"
      className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background to-secondary/5"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Featured Projects</span>
        </h2>
        <p className="text-center text-foreground/60 mb-12 max-w-2xl mx-auto">
          A selection of my quantitative finance research and development projects
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <div
              key={project.title}
              className="group relative p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-200 hover:shadow-lg hover:-translate-y-1 animate-slide-up"
              style={{ animationDelay: `${(idx % 3) * 0.1}s` }}
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-secondary/0 group-hover:from-primary/5 group-hover:to-secondary/5 rounded-lg transition-all duration-200" />

              <div className="relative z-10">
                <h3 className="text-xl font-bold text-foreground mb-2">{project.title}</h3>
                <p className="text-foreground/70 text-sm mb-3">{project.description}</p>

                <p className="text-foreground/60 text-xs mb-4 italic">{project.details}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors duration-200 font-semibold text-sm">
                  Learn More <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 p-8 rounded-lg bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-3">Interested in Collaboration?</h3>
          <p className="text-foreground/70 mb-6 max-w-2xl mx-auto">
            I'm always open to discussing new quantitative finance projects, research collaborations, and innovative ideas.
          </p>
          <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200">
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  );
}
