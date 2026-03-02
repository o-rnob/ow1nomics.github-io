'use client';

import { useState, useEffect } from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ReferenceLine } from 'recharts';
import { RotateCcw } from 'lucide-react';

interface Asset {
  id: string;
  name: string;
  risk: number;
  return: number;
  color: string;
}

interface Portfolio {
  id: string;
  name: string;
  assets: { assetId: string; weight: number }[];
  risk: number;
  return: number;
}

const PREDEFINED_ASSETS: Asset[] = [
  { id: '1', name: 'Treasury Bonds', risk: 5, return: 3, color: '#8B5A99' },
  { id: '2', name: 'Corporate Bonds', risk: 12, return: 6, color: '#B084CC' },
  { id: '3', name: 'Growth Stocks', risk: 28, return: 14, color: '#D8B4E4' },
  { id: '4', name: 'Tech Stocks', risk: 35, return: 18, color: '#C5A3D8' },
  { id: '5', name: 'Real Estate', risk: 15, return: 8, color: '#9E6FB8' },
];

export function RiskReturnGame() {
  const [assets] = useState<Asset[]>(PREDEFINED_ASSETS);
  const [portfolio, setPortfolio] = useState<Portfolio>({
    id: '1',
    name: 'My Portfolio',
    assets: assets.map((a) => ({ assetId: a.id, weight: 100 / assets.length })),
    risk: 0,
    return: 0,
  });
  const [chartData, setChartData] = useState<any[]>([]);

  useEffect(() => {
    // Calculate portfolio metrics
    let portfolioReturn = 0;
    let portfolioRisk = 0;

    portfolio.assets.forEach((pAsset) => {
      const asset = assets.find((a) => a.id === pAsset.assetId);
      if (asset) {
        portfolioReturn += (asset.return * pAsset.weight) / 100;
        portfolioRisk += Math.sqrt((Math.pow(asset.risk, 2) * Math.pow(pAsset.weight, 2)) / 10000);
      }
    });

    setPortfolio((prev) => ({
      ...prev,
      risk: Math.round(portfolioRisk * 10) / 10,
      return: Math.round(portfolioReturn * 10) / 10,
    }));

    // Build chart data with efficient frontier simulation
    const data = assets.map((asset) => ({
      name: asset.name,
      risk: asset.risk,
      return: asset.return,
      fill: asset.color,
    }));

    // Add efficient frontier curve
    for (let risk = 5; risk <= 35; risk += 2) {
      const point = 0.4 + (risk / 35) * 0.6;
      data.push({
        name: `Frontier-${risk}`,
        risk,
        return: 2 + point * 16,
        isFrontier: true,
      });
    }

    setChartData(data);
  }, [portfolio, assets]);

  const handleAssetWeightChange = (assetId: string, newWeight: number) => {
    const otherAssetsCount = portfolio.assets.length - 1;
    const otherWeight = (100 - newWeight) / otherAssetsCount;

    const updated = portfolio.assets.map((a) =>
      a.assetId === assetId ? { ...a, weight: newWeight } : { ...a, weight: otherWeight }
    );

    setPortfolio((prev) => ({
      ...prev,
      assets: updated,
    }));
  };

  const handleReset = () => {
    setPortfolio((prev) => ({
      ...prev,
      assets: assets.map((a) => ({ assetId: a.id, weight: 100 / assets.length })),
    }));
  };

  const getAsset = (id: string) => assets.find((a) => a.id === id);

  return (
    <div className="w-full bg-card rounded-lg border border-border p-6 md:p-8">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold text-foreground">Risk vs Return Frontier</h3>
        <button
          onClick={handleReset}
          className="p-2 hover:bg-muted rounded-lg transition-colors"
          title="Reset portfolio"
        >
          <RotateCcw className="w-5 h-5 text-primary" />
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Controls */}
        <div className="space-y-6">
          <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
            <h4 className="font-semibold text-foreground mb-4">Portfolio Allocation</h4>
            <div className="space-y-4">
              {portfolio.assets.map((pAsset) => {
                const asset = getAsset(pAsset.assetId);
                return (
                  <div key={pAsset.assetId}>
                    <div className="flex justify-between mb-2">
                      <label className="text-sm font-medium text-foreground">
                        {asset?.name}
                      </label>
                      <span className="text-sm font-bold text-primary">
                        {pAsset.weight.toFixed(0)}%
                      </span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      step="5"
                      value={pAsset.weight}
                      onChange={(e) => handleAssetWeightChange(pAsset.assetId, Number(e.target.value))}
                      className="w-full h-2 bg-border rounded-lg appearance-none cursor-pointer accent-primary"
                    />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Portfolio Stats */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Portfolio Metrics</h4>

            <div className="p-4 rounded-lg bg-secondary/5 border border-secondary/20">
              <p className="text-sm text-foreground/70 mb-1">Expected Return</p>
              <p className="text-3xl font-bold text-secondary">
                {portfolio.return.toFixed(2)}%
              </p>
            </div>

            <div className="p-4 rounded-lg bg-accent/5 border border-accent/20">
              <p className="text-sm text-foreground/70 mb-1">Portfolio Risk</p>
              <p className="text-3xl font-bold text-accent">
                {portfolio.risk.toFixed(2)}%
              </p>
            </div>

            <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
              <p className="text-sm text-foreground/70 mb-1">Sharpe Ratio</p>
              <p className="text-3xl font-bold text-primary">
                {((portfolio.return - 2) / portfolio.risk).toFixed(2)}
              </p>
              <p className="text-xs text-foreground/50 mt-1">
                (Higher is better - Risk-adjusted returns)
              </p>
            </div>
          </div>

          <div className="p-4 rounded-lg bg-muted/30 border border-border text-sm text-foreground/70">
            <p>
              <span className="font-semibold">Tip:</span> Move along the efficient frontier to find the optimal balance between risk and return for your investment goals.
            </p>
          </div>
        </div>

        {/* Chart */}
        <div className="flex flex-col justify-center">
          {chartData.length > 0 && (
            <ResponsiveContainer width="100%" height={350}>
              <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                <XAxis
                  type="number"
                  dataKey="risk"
                  name="Risk (%)"
                  stroke="var(--foreground)"
                  style={{ fontSize: '12px' }}
                  domain={[0, 40]}
                  label={{ value: 'Risk (%)', position: 'insideBottomRight', offset: -10 }}
                />
                <YAxis
                  type="number"
                  dataKey="return"
                  name="Return (%)"
                  stroke="var(--foreground)"
                  style={{ fontSize: '12px' }}
                  domain={[0, 20]}
                  label={{ value: 'Return (%)', angle: -90, position: 'insideLeft' }}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'var(--card)',
                    border: `1px solid var(--border)`,
                    borderRadius: '8px',
                    color: 'var(--foreground)',
                  }}
                  cursor={{ strokeDasharray: '3 3' }}
                />
                <Legend
                  wrapperStyle={{ color: 'var(--foreground)', fontSize: '12px' }}
                  formatter={(value) => {
                    if (value === 'return') return 'Assets';
                    if (value === 'isFrontier') return 'Efficient Frontier';
                    return value;
                  }}
                />
                
                {/* Plot efficient frontier */}
                <Scatter
                  name="Efficient Frontier"
                  data={chartData.filter((d) => d.isFrontier)}
                  fill="var(--primary)"
                  line
                  stroke="var(--primary)"
                  isAnimationActive={false}
                />

                {/* Plot individual assets */}
                <Scatter
                  name="Assets"
                  data={chartData.filter((d) => !d.isFrontier)}
                  fill="var(--secondary)"
                  shape="circle"
                />

                {/* Plot current portfolio */}
                <Scatter
                  name="Your Portfolio"
                  data={[
                    {
                      risk: portfolio.risk,
                      return: portfolio.return,
                      name: 'Current Portfolio',
                    },
                  ]}
                  fill="var(--accent)"
                  shape="star"
                  fillOpacity={1}
                  isAnimationActive={false}
                />
              </ScatterChart>
            </ResponsiveContainer>
          )}
        </div>
      </div>
    </div>
  );
}
