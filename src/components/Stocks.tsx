import { useEffect, useState } from 'react';
import TradingViewWidget from "./TradingViewWidget";
import TradingViewHeatmapWidget from "./TradingViewHeatmapWidget";
import StockChart from '@/components/StockChart'
import StockHeatmap from './ui/StockHeatmap';

type MarketIndex = {
  name: string;
  c: number;
  d: number;
};

type TopMover = {
  symbol: string;
  description: string;
  currency: string;
};

type MarketChart = {
  c: number;
  d: number;
};

type HeatmapItem = {
  symbol: string;
  c: number;
  d: number;
};

const Stocks = () => {
  const [marketIndices, setMarketIndices] = useState<MarketIndex[]>([]);
  const [topMovers, setTopMovers] = useState<TopMover[]>([]);
  const [marketChart, setMarketChart] = useState<MarketChart | null>(null);
  const [marketHeatmap, setMarketHeatmap] = useState<HeatmapItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [indicesRes, moversRes, chartRes, heatmapRes] = await Promise.all([
          fetch("https://backend-7xk0.onrender.com/stocks/market-indices"),
          fetch("https://backend-7xk0.onrender.com/stocks/top-movers"),
          fetch("https://backend-7xk0.onrender.com/stocks/market-chart"),
          fetch("https://backend-7xk0.onrender.com/stocks/market-heatmap"),
        ]);

        const [indicesData, moversData, chartData, heatmapData] = await Promise.all([
          indicesRes.json() as Promise<{ success: boolean; data: MarketIndex[] }>,
          moversRes.json() as Promise<{ success: boolean; data: TopMover[] }>,
          chartRes.json() as Promise<{ success: boolean; data: MarketChart }>,
          heatmapRes.json() as Promise<{ success: boolean; data: HeatmapItem[] }>,
        ]);

        setMarketIndices(indicesData.success ? indicesData.data : []);
        setTopMovers(moversData.success ? moversData.data : []);
        setMarketChart(chartData.success ? chartData.data : null);
        setMarketHeatmap(heatmapData.success ? heatmapData.data : []);
      } catch (err) {
        console.error("Fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 20000);
    return () => clearInterval(interval);
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      {/* Market Indices */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-xl font-semibold mb-6">Market Indices</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {marketIndices.map((market, index) => (
              <div key={index} className="p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow transition">
                <div className="text-sm text-gray-500 uppercase tracking-wide mb-1">{market.name}</div>
                <div className="text-2xl font-bold mb-1">{market.c.toFixed(2)}</div>
                <div className={`text-sm font-semibold ${market.d > 0 ? "text-green-500" : "text-red-500"}`}>
                  {market.d > 0 ? `+${market.d.toFixed(2)}` : market.d.toFixed(2)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Movers */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-xl font-semibold mb-6">Top Movers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {topMovers.map((mover, index) => (
              <div key={index} className="p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow transition">
                <div className="text-sm text-gray-500 uppercase tracking-wide mb-1">{mover.description}</div>
                <div className="text-2xl font-bold mb-1">{mover.symbol}</div>
                <div className="text-sm font-semibold text-blue-500">{mover.currency}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      

      {/* Market Chart Widget (Live) */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-xl font-semibold mb-4">Market Chart (Live)</h2>
          <div className="bg-gray-50 rounded-xl p-6 h-[600px] shadow-sm">
            {/* <TradingViewWidget /> */}
            <StockChart />
          </div>
        </div>
      </section>

      {/* Market Heatmap Widget */}
      {/* <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-xl font-semibold mb-4">Market Heatmap (Live)</h2>
          <div className="bg-white p-6 h-[600px] rounded-xl flex items-center justify-center text-gray-400 shadow-sm"> */}
            {/* <TradingViewHeatmapWidget /> */}
            {/* <StockHeatmap/> */}
          {/* </div>
        </div>
      </section> */}
    </div>
  );
};

export default Stocks;

