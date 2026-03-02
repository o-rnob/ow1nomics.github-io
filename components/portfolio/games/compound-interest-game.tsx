'use client';

import { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { RotateCcw } from 'lucide-react';

export function CompoundInterestGame() {
  const [principal, setPrincipal] = useState(10000);
  const [rate, setRate] = useState(7);
  const [years, setYears] = useState(20);
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    // Calculate compound interest data
    const chartData = [];
    for (let year = 0; year <= years; year++) {
      const amount = principal * Math.pow(1 + rate / 100, year);
      chartData.push({
        year,
        amount: Math.round(amount),
        principal,
      });
    }
    setData(chartData);
  }, [principal, rate, years]);

  const finalAmount = principal * Math.pow(1 + rate / 100, years);
  const totalInterest = finalAmount - principal;

  const handleReset = () => {
    setPrincipal(10000);
    setRate(7);
    setYears(20);
  };

  return (
    <div className="w-full bg-card rounded-lg border border-border p-6 md:p-8">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold text-foreground">Compound Interest Machine</h3>
        <button
          onClick={handleReset}
          className="p-2 hover:bg-muted rounded-lg transition-colors"
          title="Reset values"
        >
          <RotateCcw className="w-5 h-5 text-primary" />
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Controls */}
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">
              Initial Investment: ${principal.toLocaleString()}
            </label>
            <input
              type="range"
              min="1000"
              max="100000"
              step="1000"
              value={principal}
              onChange={(e) => setPrincipal(Number(e.target.value))}
              className="w-full h-2 bg-border rounded-lg appearance-none cursor-pointer accent-primary"
            />
            <div className="flex justify-between text-xs text-foreground/50 mt-1">
              <span>$1K</span>
              <span>$100K</span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">
              Annual Rate: {rate.toFixed(1)}%
            </label>
            <input
              type="range"
              min="0"
              max="20"
              step="0.1"
              value={rate}
              onChange={(e) => setRate(Number(e.target.value))}
              className="w-full h-2 bg-border rounded-lg appearance-none cursor-pointer accent-primary"
            />
            <div className="flex justify-between text-xs text-foreground/50 mt-1">
              <span>0%</span>
              <span>20%</span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">
              Time Period: {years} years
            </label>
            <input
              type="range"
              min="1"
              max="50"
              step="1"
              value={years}
              onChange={(e) => setYears(Number(e.target.value))}
              className="w-full h-2 bg-border rounded-lg appearance-none cursor-pointer accent-primary"
            />
            <div className="flex justify-between text-xs text-foreground/50 mt-1">
              <span>1 year</span>
              <span>50 years</span>
            </div>
          </div>

          {/* Results Summary */}
          <div className="pt-6 border-t border-border space-y-4">
            <h4 className="font-semibold text-foreground">Results</h4>
            
            <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
              <p className="text-sm text-foreground/70 mb-1">Initial Investment</p>
              <p className="text-2xl font-bold text-primary">
                ${principal.toLocaleString()}
              </p>
            </div>

            <div className="p-4 rounded-lg bg-secondary/5 border border-secondary/20">
              <p className="text-sm text-foreground/70 mb-1">Total Interest Earned</p>
              <p className="text-2xl font-bold text-secondary">
                ${Math.round(totalInterest).toLocaleString()}
              </p>
            </div>

            <div className="p-4 rounded-lg bg-accent/5 border border-accent/20">
              <p className="text-sm text-foreground/70 mb-1">Final Amount</p>
              <p className="text-2xl font-bold text-accent">
                ${Math.round(finalAmount).toLocaleString()}
              </p>
              <p className="text-xs text-foreground/50 mt-2">
                That's {((finalAmount / principal - 1) * 100).toFixed(1)}% growth!
              </p>
            </div>
          </div>
        </div>

        {/* Chart */}
        <div className="flex flex-col justify-center">
          {data.length > 0 && (
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={data} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                <XAxis
                  dataKey="year"
                  stroke="var(--foreground)"
                  style={{ fontSize: '12px' }}
                />
                <YAxis
                  stroke="var(--foreground)"
                  style={{ fontSize: '12px' }}
                  tickFormatter={(value) => `$${(value / 1000).toFixed(0)}K`}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'var(--card)',
                    border: `1px solid var(--border)`,
                    borderRadius: '8px',
                    color: 'var(--foreground)',
                  }}
                  formatter={(value: number) => `$${value.toLocaleString()}`}
                />
                <Legend wrapperStyle={{ color: 'var(--foreground)' }} />
                <Line
                  type="monotone"
                  dataKey="amount"
                  stroke="var(--primary)"
                  dot={false}
                  strokeWidth={2}
                  name="Total Value"
                />
              </LineChart>
            </ResponsiveContainer>
          )}
        </div>
      </div>
    </div>
  );
}
