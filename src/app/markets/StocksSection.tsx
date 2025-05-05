import React from "react";
import TradingViewWidget from "../../components/TradingViewWidget";
import TradingViewHeatmapWidget from "../../components/TradingViewHeatmapWidget";

export default function StocksSection() {
  return (
    <div className="space-y-12">
      <section className="bg-white p-6 rounded-xl shadow-sm">
        <h2 className="text-xl font-semibold mb-4">Market Indices</h2>
        {/* Your detailed stocks content here */}
        <p>Placeholder for stocks market data...</p>
      </section>

      <section className="bg-white p-6 rounded-xl shadow-sm">
        <h2 className="text-xl font-semibold mb-4">Trading Chart</h2>
        <div className="h-[400px]">
          <TradingViewWidget />
        </div>
      </section>

      <section className="bg-white p-6 rounded-xl shadow-sm">
        <h2 className="text-xl font-semibold mb-4">Market Heatmap</h2>
        <div className="h-[400px]">
          <TradingViewHeatmapWidget />
        </div>
      </section>
    </div>
  );
}
