'use client';

import { useState } from 'react';
import { CompoundInterestGame } from './games/compound-interest-game';
import { BalanceBooksGame } from './games/balance-books-game';
import { RiskReturnGame } from './games/risk-return-game';

export function GamesSection() {
  const [activeGame, setActiveGame] = useState('compound');

  const games = [
    { id: 'compound', name: 'Compound Interest', description: 'See how your money grows over time' },
    { id: 'balance', name: 'Balance the Books', description: 'Master budget allocation' },
    { id: 'risk-return', name: 'Risk vs Return', description: 'Optimize your portfolio' },
  ];

  return (
    <section id="games" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Interactive Financial Games
          </span>
        </h2>
        <p className="text-center text-foreground/60 mb-12 max-w-2xl mx-auto">
          Learn quantitative finance principles through interactive simulations and games
        </p>

        {/* Game Selector */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-2 sm:gap-3 mb-8">
          {games.map((game) => (
            <button
              key={game.id}
              onClick={() => setActiveGame(game.id)}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold transition-all duration-200 w-full sm:w-auto ${
                activeGame === game.id
                  ? 'bg-primary text-primary-foreground shadow-lg'
                  : 'bg-card text-foreground border border-border hover:border-primary/50'
              }`}
            >
              <div className="text-center sm:text-left">
                <p className="font-bold text-sm sm:text-base">{game.name}</p>
                <p className="text-xs opacity-75 hidden sm:block">{game.description}</p>
              </div>
            </button>
          ))}
        </div>

        {/* Game Content */}
        <div className="animate-slide-up">
          {activeGame === 'compound' && <CompoundInterestGame />}
          {activeGame === 'balance' && <BalanceBooksGame />}
          {activeGame === 'risk-return' && <RiskReturnGame />}
        </div>

        {/* Game Info */}
        <div className="mt-12 p-8 rounded-lg bg-gradient-to-r from-primary/5 to-secondary/5 border border-primary/20">
          <h3 className="text-xl font-bold text-foreground mb-4">Why These Games?</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold text-primary mb-2">Learn by Doing</h4>
              <p className="text-foreground/70 text-sm">
                Interactive simulations help you understand financial concepts through hands-on experience.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-primary mb-2">Visual Insights</h4>
              <p className="text-foreground/70 text-sm">
                Charts and visualizations make complex relationships clear and memorable.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-primary mb-2">Real Scenarios</h4>
              <p className="text-foreground/70 text-sm">
                Practice with scenarios you'll encounter in real financial decision-making.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
