'use client';

import { useState } from 'react';
import { Check, RotateCcw } from 'lucide-react';

interface Transaction {
  id: string;
  name: string;
  amount: number;
  type: 'income' | 'expense';
  placed: boolean;
}

export function BalanceBooksGame() {
  const initialTransactions: Transaction[] = [
    { id: '1', name: 'Monthly Salary', amount: 5000, type: 'income', placed: false },
    { id: '2', name: 'Freelance Project', amount: 1500, type: 'income', placed: false },
    { id: '3', name: 'Rent', amount: 1200, type: 'expense', placed: false },
    { id: '4', name: 'Groceries', amount: 400, type: 'expense', placed: false },
    { id: '5', name: 'Utilities', amount: 150, type: 'expense', placed: false },
    { id: '6', name: 'Investment', amount: 2000, type: 'expense', placed: false },
  ];

  const [transactions, setTransactions] = useState<Transaction[]>(initialTransactions);
  const [gameWon, setGameWon] = useState(false);

  const totalIncome = transactions
    .filter((t) => t.type === 'income' && t.placed)
    .reduce((sum, t) => sum + t.amount, 0);

  const totalExpense = transactions
    .filter((t) => t.type === 'expense' && t.placed)
    .reduce((sum, t) => sum + t.amount, 0);

  const balance = totalIncome - totalExpense;
  const isBalanced = balance === 0 && transactions.every((t) => t.placed);

  const handlePlaceTransaction = (id: string) => {
    const updated = transactions.map((t) =>
      t.id === id ? { ...t, placed: !t.placed } : t
    );
    setTransactions(updated);

    // Check if game is won
    const allPlaced = updated.every((t) => t.placed);
    const balanced = updated.filter((t) => t.type === 'income' && t.placed)
      .reduce((sum, t) => sum + t.amount, 0) ===
      updated.filter((t) => t.type === 'expense' && t.placed)
        .reduce((sum, t) => sum + t.amount, 0);

    if (allPlaced && balanced) {
      setGameWon(true);
    }
  };

  const handleReset = () => {
    setTransactions(initialTransactions);
    setGameWon(false);
  };

  return (
    <div className="w-full bg-card rounded-lg border border-border p-6 md:p-8">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold text-foreground">Balance the Books</h3>
        <button
          onClick={handleReset}
          className="p-2 hover:bg-muted rounded-lg transition-colors"
          title="Reset game"
        >
          <RotateCcw className="w-5 h-5 text-primary" />
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-6 md:gap-8">
        {/* Income Section */}
        <div className="p-4 rounded-lg bg-accent/5 border border-accent/20">
          <h4 className="font-semibold text-foreground mb-4">Income</h4>
          <div className="space-y-2 mb-4">
            {transactions
              .filter((t) => t.type === 'income')
              .map((transaction) => (
                <button
                  key={transaction.id}
                  onClick={() => handlePlaceTransaction(transaction.id)}
                  className={`w-full p-3 rounded-lg text-left text-sm font-medium transition-all duration-200 ${
                    transaction.placed
                      ? 'bg-accent/20 border-2 border-accent text-accent'
                      : 'bg-muted border border-border text-foreground hover:border-accent'
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <span>{transaction.name}</span>
                    <div className="flex items-center gap-2">
                      <span>${transaction.amount}</span>
                      {transaction.placed && <Check className="w-4 h-4" />}
                    </div>
                  </div>
                </button>
              ))}
          </div>
          <div className="p-3 rounded-lg bg-accent/10 border border-accent/30">
            <p className="text-xs text-foreground/70 mb-1">Total Income</p>
            <p className="text-xl font-bold text-accent">
              ${totalIncome.toLocaleString()}
            </p>
          </div>
        </div>

        {/* Expense Section */}
        <div className="p-4 rounded-lg bg-secondary/5 border border-secondary/20">
          <h4 className="font-semibold text-foreground mb-4">Expenses</h4>
          <div className="space-y-2 mb-4">
            {transactions
              .filter((t) => t.type === 'expense')
              .map((transaction) => (
                <button
                  key={transaction.id}
                  onClick={() => handlePlaceTransaction(transaction.id)}
                  className={`w-full p-3 rounded-lg text-left text-sm font-medium transition-all duration-200 ${
                    transaction.placed
                      ? 'bg-secondary/20 border-2 border-secondary text-secondary'
                      : 'bg-muted border border-border text-foreground hover:border-secondary'
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <span>{transaction.name}</span>
                    <div className="flex items-center gap-2">
                      <span>${transaction.amount}</span>
                      {transaction.placed && <Check className="w-4 h-4" />}
                    </div>
                  </div>
                </button>
              ))}
          </div>
          <div className="p-3 rounded-lg bg-secondary/10 border border-secondary/30">
            <p className="text-xs text-foreground/70 mb-1">Total Expenses</p>
            <p className="text-xl font-bold text-secondary">
              ${totalExpense.toLocaleString()}
            </p>
          </div>
        </div>

        {/* Balance Section */}
        <div className="p-4 rounded-lg bg-primary/5 border border-primary/20 flex flex-col justify-between">
          <div>
            <h4 className="font-semibold text-foreground mb-4">Balance</h4>
            <div className="space-y-4">
              <div className="text-center p-3 rounded-lg bg-accent/20 border border-accent/30">
                <p className="text-xs text-foreground/70 mb-1">Income</p>
                <p className="text-lg font-bold text-accent">
                  ${totalIncome.toLocaleString()}
                </p>
              </div>

              <div className="text-center text-2xl font-bold text-foreground">−</div>

              <div className="text-center p-3 rounded-lg bg-secondary/20 border border-secondary/30">
                <p className="text-xs text-foreground/70 mb-1">Expenses</p>
                <p className="text-lg font-bold text-secondary">
                  ${totalExpense.toLocaleString()}
                </p>
              </div>

              <div className="text-center text-2xl font-bold text-foreground">=</div>

              <div
                className={`text-center p-4 rounded-lg border-2 transition-all duration-300 ${
                  isBalanced
                    ? 'bg-green-500/20 border-green-500 text-green-600'
                    : balance === 0
                      ? 'bg-primary/20 border-primary text-primary'
                      : 'bg-muted border-border text-foreground'
                }`}
              >
                <p className="text-xs text-foreground/70 mb-1">Balance</p>
                <p className="text-2xl font-bold">
                  ${balance.toLocaleString()}
                </p>
              </div>
            </div>
          </div>

          {gameWon && (
            <div className="mt-4 p-3 rounded-lg bg-green-500/20 border border-green-500 text-center">
              <p className="font-bold text-green-600">Perfect! Books Balanced!</p>
            </div>
          )}
        </div>
      </div>

      <div className="mt-6 p-4 rounded-lg bg-muted/30 border border-border">
        <p className="text-sm text-foreground/70">
          <span className="font-semibold">Goal:</span> Click on all transactions to place them. Your income must equal your expenses to balance the books!
        </p>
      </div>
    </div>
  );
}
