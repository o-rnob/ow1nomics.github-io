export function Skills() {
  const skillCategories = [
    {
      name: 'Financial Theory',
      skills: ['Portfolio Theory', 'Option Pricing', 'Risk Management', 'Asset Allocation', 'Derivatives'],
    },
    {
      name: 'Quantitative Methods',
      skills: ['Statistical Analysis', 'Stochastic Modeling', 'Time Series Analysis', 'Monte Carlo Simulation', 'Regression Analysis'],
    },
    {
      name: 'Programming & Tools',
      skills: ['Python', 'R', 'MATLAB', 'Excel VBA', 'Data Visualization'],
    },
    {
      name: 'Research & Analysis',
      skills: ['Academic Writing', 'Data Mining', 'Backtesting', 'Performance Analysis', 'Market Research'],
    },
  ];

  return (
    <section
      id="skills"
      className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-background"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Skills & Expertise</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <div
              key={category.name}
              className="p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-200 hover:shadow-lg animate-slide-up"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <h3 className="text-xl font-bold text-primary mb-4">{category.name}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full text-sm font-medium bg-secondary/10 text-primary border border-primary/20 hover:bg-secondary/20 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Proficiency Section */}
        <div className="mt-12 p-8 rounded-lg bg-gradient-to-r from-primary/5 to-secondary/5 border border-primary/20">
          <h3 className="text-2xl font-bold text-foreground mb-8">Proficiency Levels</h3>
          
          <div className="space-y-6">
            {[
              { name: 'Financial Analysis & Research', level: 95 },
              { name: 'Quantitative Modeling', level: 90 },
              { name: 'Programming & Data Science', level: 85 },
              { name: 'Academic Writing & Presentation', level: 88 },
            ].map((item) => (
              <div key={item.name}>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold text-foreground">{item.name}</span>
                  <span className="text-primary font-bold">{item.level}%</span>
                </div>
                <div className="w-full bg-border rounded-full h-2 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-500"
                    style={{ width: `${item.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
