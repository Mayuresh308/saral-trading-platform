"use client";
import React from "react";
import Link from "next/link";
import TradingViewWidget from "../../components/TradingViewWidget";

export default function MarketsPage() {
  return (
    <div className="bg-gray-100 text-gray-900 border-b shadow-sm">
      <div className="max-w-7xl mx-auto py-4 px-6">
        {/* Header + Tabs Row */}
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4 sm:mb-0">
        Markets
      </h1>

      {/* Filter Tabs */}
      <div className="flex space-x-3">
        {["Stocks", "Crypto", "Forex", "Commodities"].map((tab, i) => (
          <button
            key={i}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
              tab === "Stocks"
                ? "bg-blue-600 text-white shadow"
                : "text-gray-700 hover:text-gray-900 hover:bg-gray-200"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
      </div>

      {/* Section 1: Market Indices - WHITE */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "S&P 500", value: "4,532.15", change: "+1.2%", isUp: true },
              { name: "NASDAQ", value: "14,235.45", change: "-0.8%", isUp: false },
              { name: "DOW", value: "35,245.67", change: "+0.5%", isUp: true },
              { name: "VIX", value: "18.45", change: "-2.3%", isUp: false },
            ].map((market, index) => (
              <div
                key={index}
                className="p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow transition"
              >
                <div className="text-sm text-gray-500 uppercase tracking-wide mb-1">
                  {market.name}
                </div>
                <div className="text-2xl font-bold mb-1">{market.value}</div>
                <div
                  className={`text-sm font-semibold ${
                    market.isUp ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {market.change}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Top Movers - OFFWHITE */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-xl font-semibold mb-6">Top Movers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Gainers */}
            <div className="bg-white p-5 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold mb-4">Top Gainers</h3>
              <ul className="space-y-3">
                {[
                  {
                    symbol: "NVDA",
                    name: "NVIDIA Corp",
                    price: "$485.25",
                    change: "+8.45%",
                  },
                  {
                    symbol: "AMD",
                    name: "Advanced Micro Devices",
                    price: "$125.75",
                    change: "+6.23%",
                  },
                ].map((stock, i) => (
                  <li key={i} className="flex justify-between">
                    <div>
                      <div className="font-bold">{stock.symbol}</div>
                      <div className="text-sm text-gray-500">{stock.name}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold">{stock.price}</div>
                      <div className="text-green-500 text-sm">{stock.change}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Losers */}
            <div className="bg-white p-5 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold mb-4">Top Losers</h3>
              <ul className="space-y-3">
                {[
                  {
                    symbol: "META",
                    name: "Meta Platforms Inc",
                    price: "$285.35",
                    change: "-4.25%",
                  },
                  {
                    symbol: "NFLX",
                    name: "Netflix Inc",
                    price: "$375.45",
                    change: "-3.78%",
                  },
                ].map((stock, i) => (
                  <li key={i} className="flex justify-between">
                    <div>
                      <div className="font-bold">{stock.symbol}</div>
                      <div className="text-sm text-gray-500">{stock.name}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold">{stock.price}</div>
                      <div className="text-red-500 text-sm">{stock.change}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Most Active */}
            <div className="bg-white p-5 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold mb-4">Most Active</h3>
              <ul className="space-y-3">
                {[
                  {
                    symbol: "AAPL",
                    name: "Apple Inc",
                    price: "$175.34",
                    change: "+2.45%",
                  },
                  {
                    symbol: "TSLA",
                    name: "Tesla Inc",
                    price: "$242.68",
                    change: "-1.23%",
                  },
                ].map((stock, i) => (
                  <li key={i} className="flex justify-between">
                    <div>
                      <div className="font-bold">{stock.symbol}</div>
                      <div className="text-sm text-gray-500">{stock.name}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold">{stock.price}</div>
                      <div
                        className={`text-sm ${
                          stock.change.startsWith("+")
                            ? "text-green-500"
                            : "text-red-500"
                        }`}
                      >
                        {stock.change}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: TradingView Chart - WHITE */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-xl font-semibold mb-4">Market Chart (Live)</h2>
          <div className="bg-gray-50 rounded-xl p-6 h-[500px] shadow-sm">
            <TradingViewWidget />
          </div>
        </div>
      </section>

      {/* Section 4: Heatmap - OFFWHITE */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-xl font-semibold mb-4">Market Heatmap</h2>
          <div className="bg-white p-6 h-[300px] rounded-xl flex items-center justify-center text-gray-400 shadow-sm">
            <TradingViewWidget />
          </div>
        </div>
      </section>

      {/* Section 5: Global Indices - WHITE */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-xl font-semibold mb-4">Global Indices</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {[
              { name: "FTSE 100", val: "7,820", change: "+0.56%" },
              { name: "DAX", val: "15,200", change: "-0.28%" },
              { name: "Nikkei", val: "29,350", change: "+1.12%" },
              { name: "Hang Seng", val: "19,120", change: "-0.64%" },
              { name: "CAC 40", val: "6,720", change: "+0.40%" },
            ].map((i, idx) => (
              <div key={idx} className="bg-gray-50 p-4 rounded-lg shadow-sm">
                <div className="text-sm text-gray-500">{i.name}</div>
                <div className="text-lg font-bold">{i.val}</div>
                <div
                  className={`text-sm ${
                    i.change.startsWith("+")
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {i.change}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Economic Calendar - OFFWHITE */}
<section className="bg-gray-50 py-12">
  <div className="max-w-7xl mx-auto px-6">
    <h2 className="text-xl font-semibold mb-6">Economic Calendar</h2>
    <div className="bg-white rounded-xl overflow-hidden shadow-sm">
      <table className="min-w-full text-sm text-left">
        <thead className="bg-gray-100 text-gray-600 uppercase text-xs">
          <tr>
            <th className="px-6 py-4 font-semibold">Time</th>
            <th className="px-6 py-4 font-semibold">Event</th>
            <th className="px-6 py-4 font-semibold">Actual</th>
            <th className="px-6 py-4 font-semibold">Forecast</th>
          </tr>
        </thead>
        <tbody className="text-gray-700">
          <tr className="border-t">
            <td className="px-6 py-4">09:30 AM</td>
            <td className="px-6 py-4 font-medium">US GDP (Q4)</td>
            <td className="px-6 py-4 text-green-600 font-semibold">3.2%</td>
            <td className="px-6 py-4">3.0%</td>
          </tr>
          <tr className="border-t">
            <td className="px-6 py-4">02:00 PM</td>
            <td className="px-6 py-4 font-medium">FOMC Statement</td>
            <td className="px-6 py-4 text-gray-500">Pending</td>
            <td className="px-6 py-4">-</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</section>


      {/* Section 7: CTA - OFFWHITE */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <Link
            href="/charts"
            className="inline-block mt-6 bg-blue-600 text-white px-6 py-3 rounded-xl hover:opacity-90 transition"
          >
            Explore Full Charts →
          </Link>
        </div>
      </section>
    </div>
  );
}
