"use client";
import React from "react";
import Link from "next/link";

const marketData = [
  {
    name: "S&P 500",
    value: "4,350.32",
    change: "+1.25%",
    isUp: true,
    info: "Standard & Poor’s 500 Index – top 500 US stocks.",
  },
  {
    name: "NASDAQ",
    value: "13,450.67",
    change: "-0.82%",
    isUp: false,
    info: "Tech-heavy stock exchange index.",
  },
  {
    name: "Bitcoin",
    value: "$65,200",
    change: "+0.56%",
    isUp: true,
    info: "Leading cryptocurrency by market cap.",
  },
  {
    name: "EUR/USD",
    value: "1.0934",
    change: "-0.14%",
    isUp: false,
    info: "Euro to US Dollar exchange rate.",
  },
];

export default function MarketOverview() {
  return (
    <section className="bg-gray-900 text-white p-6 max-w-6xl mx-auto rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-2xl font-semibold">Market Overview</h3>
        <Link
          href="/markets"
          className="text-sm text-blue-400 hover:underline"
        >
          View All Markets →
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {marketData.map((market, index) => (
          <div
            key={index}
            className="bg-gray-800 p-4 rounded shadow"
          >
            <div className="text-lg font-medium">{market.name}</div>
            <div className="text-xl">{market.value}</div>
            <div
              className={`text-sm mt-1 ${
                market.isUp ? "text-green-400" : "text-red-400"
              }`}
            >
              {market.change}
            </div>
          </div>
        ))}
      </div>

      {/* Customization Placeholder */}
      <div className="mt-6 text-right">
        <button className="bg-gray-700 hover:bg-gray-600 px-4 py-2 text-sm rounded">
          ⚙️ Customize Tickers
        </button>
      </div>
    </section>
  );
}
