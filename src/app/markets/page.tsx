"use client";

import React, { useState } from "react";
import Link from "next/link";
import TradingViewWidget from "../../components/TradingViewWidget";
import TradingViewHeatmapWidget from "../../components/TradingViewHeatmapWidget";
import Stocks from "@/components/Stocks"; // or adjust the path based on your project structure
// import stocksMarketChart from "@/components/StockChart"; // or adjust the path based on your project structure
// import StockChart from '@/components/StockChart'

export default function MarketsPage() {
  const [activeTab, setActiveTab] = useState("Stocks");
  const tabs = ["Stocks", "Crypto", "Forex", "Commodities"];

  return (
    <div className="bg-gray-100 text-gray-900 border-b shadow-sm">
      <div className="max-w-7xl mx-auto py-4 px-6">
        {/* Header + Tabs Row */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4 sm:mb-0">Markets</h1>
          <div className="flex space-x-3">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                  tab === activeTab
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

      {/* Conditional content */}
      {activeTab === "Stocks" && (
        <>

          <Stocks />     
         

          
          {/* Section 5: Global Indices */}
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
                        i.change.startsWith("+") ? "text-green-500" : "text-red-500"
                      }`}
                    >
                      {i.change}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section 6: Economic Calendar */}
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

          {/* Section 7: CTA */}
          {/* <section className="bg-gray-50 py-12">
            <div className="max-w-7xl mx-auto px-6 text-center">
              <Link
                href="/charts"
                className="inline-block mt-6 bg-blue-600 text-white px-6 py-3 rounded-xl hover:opacity-90 transition"
              >
                Explore Full Charts →
              </Link>
            </div>
          </section> */}
        </>
      )}

      {/* Conditional content */}
      {activeTab === "Crypto" && (
  <>
    {/* Section 1: Market Indices */}
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-xl font-semibold mb-6">Crypto Market Indices</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name: "BTC/USD", value: "$63,215", change: "+2.4%", isUp: true },
            { name: "ETH/USD", value: "$3,240", change: "+1.1%", isUp: true },
            { name: "BNB/USD", value: "$580", change: "-0.9%", isUp: false },
            { name: "Crypto Total Market Cap", value: "$2.38T", change: "+1.8%", isUp: true },
          ].map((market, index) => (
            <div
              key={index}
              className="p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow transition"
            >
              <div className="text-sm text-gray-500 uppercase tracking-wide mb-1">{market.name}</div>
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

    {/* Section 2: Top Movers */}
    <section className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-xl font-semibold mb-6">Top Crypto Movers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Top Gainers */}
          <div className="bg-white p-5 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Top Gainers</h3>
            <ul className="space-y-3">
              {[
                { symbol: "SOL", name: "Solana", price: "$145.50", change: "+9.75%" },
                { symbol: "AVAX", name: "Avalanche", price: "$36.20", change: "+7.60%" },
              ].map((coin, i) => (
                <li key={i} className="flex justify-between">
                  <div>
                    <div className="font-bold">{coin.symbol}</div>
                    <div className="text-sm text-gray-500">{coin.name}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold">{coin.price}</div>
                    <div className="text-green-500 text-sm">{coin.change}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Top Losers */}
          <div className="bg-white p-5 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Top Losers</h3>
            <ul className="space-y-3">
              {[
                { symbol: "DOGE", name: "Dogecoin", price: "$0.125", change: "-4.32%" },
                { symbol: "SHIB", name: "Shiba Inu", price: "$0.000023", change: "-3.58%" },
              ].map((coin, i) => (
                <li key={i} className="flex justify-between">
                  <div>
                    <div className="font-bold">{coin.symbol}</div>
                    <div className="text-sm text-gray-500">{coin.name}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold">{coin.price}</div>
                    <div className="text-red-500 text-sm">{coin.change}</div>
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
                { symbol: "BTC", name: "Bitcoin", price: "$63,215", change: "+2.4%" },
                { symbol: "ETH", name: "Ethereum", price: "$3,240", change: "+1.1%" },
              ].map((coin, i) => (
                <li key={i} className="flex justify-between">
                  <div>
                    <div className="font-bold">{coin.symbol}</div>
                    <div className="text-sm text-gray-500">{coin.name}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold">{coin.price}</div>
                    <div
                      className={`text-sm ${
                        coin.change.startsWith("+") ? "text-green-500" : "text-red-500"
                      }`}
                    >
                      {coin.change}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>

    {/* Section 3: Chart */}
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-xl font-semibold mb-4">Market Chart (Live)</h2>
        <div className="bg-gray-50 rounded-xl p-6 h-[600px] shadow-sm">
          <TradingViewWidget />
        </div>
      </div>
    </section>

    {/* Section 4: Heatmap */}
    <section className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-xl font-semibold mb-4">Crypto Heatmap</h2>
        <div className="bg-white p-6 h-[600px] rounded-xl flex items-center justify-center text-gray-400 shadow-sm">
          <TradingViewHeatmapWidget />
        </div>
      </div>
    </section>

    {/* Section 5: Global Crypto */}
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-xl font-semibold mb-4">Global Crypto Prices</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {[
            { name: "BTC", val: "$63,215", change: "+2.4%" },
            { name: "ETH", val: "$3,240", change: "+1.1%" },
            { name: "BNB", val: "$580", change: "-0.9%" },
            { name: "XRP", val: "$0.585", change: "+3.2%" },
            { name: "ADA", val: "$0.445", change: "+2.9%" },
          ].map((coin, idx) => (
            <div key={idx} className="bg-gray-50 p-4 rounded-lg shadow-sm">
              <div className="text-sm text-gray-500">{coin.name}</div>
              <div className="text-lg font-bold">{coin.val}</div>
              <div
                className={`text-sm ${
                  coin.change.startsWith("+") ? "text-green-500" : "text-red-500"
                }`}
              >
                {coin.change}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Section 6: Economic Calendar */}
    <section className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-xl font-semibold mb-6">Crypto Events Calendar</h2>
        <div className="bg-white rounded-xl overflow-hidden shadow-sm">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-gray-100 text-gray-600 uppercase text-xs">
              <tr>
                <th className="px-6 py-4 font-semibold">Time</th>
                <th className="px-6 py-4 font-semibold">Event</th>
                <th className="px-6 py-4 font-semibold">Status</th>
                <th className="px-6 py-4 font-semibold">Expected Impact</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              <tr className="border-t">
                <td className="px-6 py-4">11:00 AM</td>
                <td className="px-6 py-4 font-medium">Bitcoin Halving Update</td>
                <td className="px-6 py-4 text-green-600 font-semibold">Completed</td>
                <td className="px-6 py-4">High</td>
              </tr>
              <tr className="border-t">
                <td className="px-6 py-4">04:00 PM</td>
                <td className="px-6 py-4 font-medium">Ethereum Shanghai Upgrade</td>
                <td className="px-6 py-4 text-gray-500">Pending</td>
                <td className="px-6 py-4">Medium</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    {/* Section 7: CTA */}
    <section className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <Link
          href="/charts"
          className="inline-block mt-6 bg-blue-600 text-white px-6 py-3 rounded-xl hover:opacity-90 transition"
        >
          Explore Full Crypto Charts →
        </Link>
      </div>
    </section>
  </>
)}


      {/* Conditional content */}
      {activeTab === "Forex" && (
  <>
    {/* Section 1: Forex Pairs */}
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-xl font-semibold mb-6">Major Forex Pairs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name: "EUR/USD", value: "1.0867", change: "+0.45%", isUp: true },
            { name: "USD/JPY", value: "154.20", change: "-0.25%", isUp: false },
            { name: "GBP/USD", value: "1.2654", change: "+0.32%", isUp: true },
            { name: "USD/CHF", value: "0.9081", change: "-0.12%", isUp: false },
          ].map((pair, index) => (
            <div key={index} className="p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow transition">
              <div className="text-sm text-gray-500 uppercase tracking-wide mb-1">{pair.name}</div>
              <div className="text-2xl font-bold mb-1">{pair.value}</div>
              <div className={`text-sm font-semibold ${pair.isUp ? "text-green-500" : "text-red-500"}`}>
                {pair.change}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Section 2: Top Movers */}
    <section className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-xl font-semibold mb-6">Top Forex Movers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Top Gainers */}
          <div className="bg-white p-5 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Top Gainers</h3>
            <ul className="space-y-3">
              {[
                { symbol: "AUD/USD", name: "Australian Dollar", price: "0.6674", change: "+1.05%" },
                { symbol: "NZD/USD", name: "New Zealand Dollar", price: "0.6105", change: "+0.85%" },
              ].map((pair, i) => (
                <li key={i} className="flex justify-between">
                  <div>
                    <div className="font-bold">{pair.symbol}</div>
                    <div className="text-sm text-gray-500">{pair.name}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold">{pair.price}</div>
                    <div className="text-green-500 text-sm">{pair.change}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Top Losers */}
          <div className="bg-white p-5 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Top Losers</h3>
            <ul className="space-y-3">
              {[
                { symbol: "USD/CAD", name: "Canadian Dollar", price: "1.3642", change: "-0.73%" },
                { symbol: "USD/JPY", name: "Japanese Yen", price: "154.20", change: "-0.60%" },
              ].map((pair, i) => (
                <li key={i} className="flex justify-between">
                  <div>
                    <div className="font-bold">{pair.symbol}</div>
                    <div className="text-sm text-gray-500">{pair.name}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold">{pair.price}</div>
                    <div className="text-red-500 text-sm">{pair.change}</div>
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
                { symbol: "EUR/USD", name: "Euro", price: "1.0867", change: "+0.45%" },
                { symbol: "USD/JPY", name: "Japanese Yen", price: "154.20", change: "-0.25%" },
              ].map((pair, i) => (
                <li key={i} className="flex justify-between">
                  <div>
                    <div className="font-bold">{pair.symbol}</div>
                    <div className="text-sm text-gray-500">{pair.name}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold">{pair.price}</div>
                    <div
                      className={`text-sm ${
                        pair.change.startsWith("+") ? "text-green-500" : "text-red-500"
                      }`}
                    >
                      {pair.change}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>

    {/* Section 3: Chart (No Change) */}
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-xl font-semibold mb-4">Forex Chart (Live)</h2>
        <div className="bg-gray-50 rounded-xl p-6 h-[600px] shadow-sm">
          <TradingViewWidget />
        </div>
      </div>
    </section>

    {/* Section 4: Heatmap (No Change) */}
    <section className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-xl font-semibold mb-4">Forex Heatmap</h2>
        <div className="bg-white p-6 h-[600px] rounded-xl flex items-center justify-center text-gray-400 shadow-sm">
          <TradingViewHeatmapWidget />
        </div>
      </div>
    </section>

    {/* Section 5: Global Currencies */}
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-xl font-semibold mb-4">Global Currency Overview</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {[
            { name: "USD Index", val: "105.20", change: "+0.12%" },
            { name: "EUR Index", val: "112.80", change: "+0.25%" },
            { name: "JPY Index", val: "91.50", change: "-0.40%" },
            { name: "GBP Index", val: "128.45", change: "+0.18%" },
            { name: "AUD Index", val: "78.30", change: "+0.95%" },
          ].map((i, idx) => (
            <div key={idx} className="bg-gray-50 p-4 rounded-lg shadow-sm">
              <div className="text-sm text-gray-500">{i.name}</div>
              <div className="text-lg font-bold">{i.val}</div>
              <div
                className={`text-sm ${
                  i.change.startsWith("+") ? "text-green-500" : "text-red-500"
                }`}
              >
                {i.change}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Section 6: Economic Calendar (Forex Focus) */}
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
                <td className="px-6 py-4">08:00 AM</td>
                <td className="px-6 py-4 font-medium">ECB Rate Decision</td>
                <td className="px-6 py-4 text-green-600 font-semibold">4.00%</td>
                <td className="px-6 py-4">4.00%</td>
              </tr>
              <tr className="border-t">
                <td className="px-6 py-4">02:00 PM</td>
                <td className="px-6 py-4 font-medium">US NFP Data</td>
                <td className="px-6 py-4 text-red-500 font-semibold">190K</td>
                <td className="px-6 py-4">210K</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    {/* Section 7: CTA */}
    <section className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <Link
          href="/charts"
          className="inline-block mt-6 bg-blue-600 text-white px-6 py-3 rounded-xl hover:opacity-90 transition"
        >
          View Full Forex Charts →
        </Link>
      </div>
    </section>
  </>
)}


      {/* Conditional content */}
      {activeTab === "Commodities" && (
  <>
    {/* Section 1: Commodities Overview */}
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-xl font-semibold mb-6">Commodities Overview</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name: "Gold", value: "$2,325.10", change: "+0.75%", isUp: true },
            { name: "Silver", value: "$27.45", change: "-1.02%", isUp: false },
            { name: "Crude Oil (WTI)", value: "$78.32", change: "+1.12%", isUp: true },
            { name: "Natural Gas", value: "$2.59", change: "-0.88%", isUp: false },
          ].map((commodity, index) => (
            <div
              key={index}
              className="p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow transition"
            >
              <div className="text-sm text-gray-500 uppercase tracking-wide mb-1">{commodity.name}</div>
              <div className="text-2xl font-bold mb-1">{commodity.value}</div>
              <div
                className={`text-sm font-semibold ${
                  commodity.isUp ? "text-green-500" : "text-red-500"
                }`}
              >
                {commodity.change}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Section 2: Top Movers */}
    <section className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-xl font-semibold mb-6">Top Movers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Top Gainers */}
          <div className="bg-white p-5 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Top Gainers</h3>
            <ul className="space-y-3">
              {[
                { symbol: "HG1", name: "Copper Futures", price: "$4.16", change: "+3.25%" },
                { symbol: "PL1", name: "Platinum Futures", price: "$1,065.30", change: "+2.48%" },
              ].map((commodity, i) => (
                <li key={i} className="flex justify-between">
                  <div>
                    <div className="font-bold">{commodity.symbol}</div>
                    <div className="text-sm text-gray-500">{commodity.name}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold">{commodity.price}</div>
                    <div className="text-green-500 text-sm">{commodity.change}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Top Losers */}
          <div className="bg-white p-5 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Top Losers</h3>
            <ul className="space-y-3">
              {[
                { symbol: "NG1", name: "Natural Gas Futures", price: "$2.58", change: "-1.95%" },
                { symbol: "SI1", name: "Silver Futures", price: "$27.12", change: "-1.27%" },
              ].map((commodity, i) => (
                <li key={i} className="flex justify-between">
                  <div>
                    <div className="font-bold">{commodity.symbol}</div>
                    <div className="text-sm text-gray-500">{commodity.name}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold">{commodity.price}</div>
                    <div className="text-red-500 text-sm">{commodity.change}</div>
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
                { symbol: "CL1", name: "Crude Oil Futures", price: "$78.50", change: "+1.10%" },
                { symbol: "GC1", name: "Gold Futures", price: "$2,330.00", change: "+0.80%" },
              ].map((commodity, i) => (
                <li key={i} className="flex justify-between">
                  <div>
                    <div className="font-bold">{commodity.symbol}</div>
                    <div className="text-sm text-gray-500">{commodity.name}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold">{commodity.price}</div>
                    <div
                      className={`text-sm ${
                        commodity.change.startsWith("+") ? "text-green-500" : "text-red-500"
                      }`}
                    >
                      {commodity.change}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>

    {/* Section 3: Chart */}
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-xl font-semibold mb-4">Commodities Chart (Live)</h2>
        <div className="bg-gray-50 rounded-xl p-6 h-[600px] shadow-sm">
          <TradingViewWidget />
        </div>
      </div>
    </section>

    {/* Section 4: Heatmap */}
    <section className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-xl font-semibold mb-4">Commodities Heatmap</h2>
        <div className="bg-white p-6 h-[600px] rounded-xl flex items-center justify-center text-gray-400 shadow-sm">
          <TradingViewHeatmapWidget />
        </div>
      </div>
    </section>

    {/* Section 5: Global Commodities */}
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-xl font-semibold mb-4">Global Commodities</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {[
            { name: "Brent Crude", val: "$83.45", change: "+0.87%" },
            { name: "Iron Ore", val: "$108.25", change: "-1.15%" },
            { name: "LNG (Asia)", val: "$9.32", change: "+0.28%" },
            { name: "Coal", val: "$130.12", change: "-0.52%" },
            { name: "Rubber", val: "$1.45", change: "+1.04%" },
          ].map((i, idx) => (
            <div key={idx} className="bg-gray-50 p-4 rounded-lg shadow-sm">
              <div className="text-sm text-gray-500">{i.name}</div>
              <div className="text-lg font-bold">{i.val}</div>
              <div
                className={`text-sm ${
                  i.change.startsWith("+") ? "text-green-500" : "text-red-500"
                }`}
              >
                {i.change}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Section 6: Commodity Events Calendar */}
    <section className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-xl font-semibold mb-6">Commodity Events Calendar</h2>
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
                <td className="px-6 py-4">10:00 AM</td>
                <td className="px-6 py-4 font-medium">EIA Crude Oil Inventories</td>
                <td className="px-6 py-4 text-green-600 font-semibold">-3.2M</td>
                <td className="px-6 py-4">-2.8M</td>
              </tr>
              <tr className="border-t">
                <td className="px-6 py-4">12:30 PM</td>
                <td className="px-6 py-4 font-medium">Gold Reserve Update</td>
                <td className="px-6 py-4 text-gray-500">Pending</td>
                <td className="px-6 py-4">+2.5%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    {/* Section 7: CTA */}
    <section className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <Link
          href="/charts"
          className="inline-block mt-6 bg-blue-600 text-white px-6 py-3 rounded-xl hover:opacity-90 transition"
        >
          Explore Full Commodities Charts →
        </Link>
      </div>
    </section>
  </>
)}

      
    </div>
  );
}

