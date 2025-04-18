"use client";
import React from "react";
import Link from "next/link";
import { Avatar } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";

const NewsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Navbar */}
      <nav className="bg-gray-100 shadow-sm py-3 px-6 flex justify-between items-center">
      <h1 className="text-xl font-bold text-black pl-6 ml-28">TradingNews</h1>

  
  <div className="flex items-center gap-6">
    <Link href="/">Home</Link>
    <Link href="/markets">Markets</Link>
    <Link href="/watchlist">Watchlist</Link>
    <Link href="/analysis">Analysis</Link>
  </div>

  <div className="flex items-center gap-4">
    <Input placeholder="Search news, symbols..." className="w-72 h-10" />
    <Avatar className="w-8 h-28">
      <img src="/avtar.png" alt="User" className="rounded-full" />
    </Avatar>
  </div>
</nav>


      {/* Main Content */}
      <main className="px-6 py-8 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Side - Main News & Filters */}
        <div className="lg:col-span-2 space-y-6">
          {/* Hero News */}
          <Card className="overflow-hidden rounded-xl h-800">
  <CardContent className="p-0 h-full">
    <div className="relative w-full h-full">
      <img
        src="/news1.jpg"
        alt="Fed News"
        className="w-full h-full object-cover"
      />
      <div className="absolute top-4 left-4 bg-red-100 text-red-700 text-xs font-semibold px-3 py-1 rounded-full">
        🔴 Negative Impact
      </div>
      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-transparent to-transparent p-6 text-white">
        <h2 className="text-xl font-bold">Fed Signals Potential Rate Hike Amid Inflation Concerns</h2>
        <p className="text-sm mt-1">Markets react as Federal Reserve chairman suggests more aggressive monetary policy ahead.</p>
      </div>
    </div>
  </CardContent>
</Card>



          {/* Filters */}
          <div className="flex flex-wrap gap-3">
            <DropdownMenu>
              <DropdownMenuTrigger>
                <button className="border px-4 h-10 text-sm rounded">🏷️ All Categories</button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Stocks</DropdownMenuItem>
                <DropdownMenuItem>Crypto</DropdownMenuItem>
                <DropdownMenuItem>Forex</DropdownMenuItem>
                <DropdownMenuItem>Commodities</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Input placeholder="$AAPL, $TSLA..." className="pl-10 h-10 w-56 text-sm border rounded" />
            <DropdownMenu>
              <DropdownMenuTrigger>
                <button className="border px-4 h-10 text-sm rounded">📅 Today</button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Today</DropdownMenuItem>
                <DropdownMenuItem>Past 7 Days</DropdownMenuItem>
                <DropdownMenuItem>Past Month</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <button className="border px-4 h-10 text-sm rounded">📰 All Sources</button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Bloomberg</DropdownMenuItem>
                <DropdownMenuItem>Reuters</DropdownMenuItem>
                <DropdownMenuItem>CNBC</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Daily News */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Today</h2>
            <Card>
              <CardContent className="flex gap-4 items-start p-4">
                <img src="/news2.jpg" alt="Tesla" className="w-24 h-24 object-cover rounded-md" />
                <div>
                  <div className="flex gap-2 mb-1">
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">#TSLA</span>
                    <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded">#Earnings</span>
                  </div>
                  <h3 className="font-semibold text-sm">Tesla Soars 5% After Q1 Earnings Beat</h3>
                  <p className="text-xs text-gray-500 mt-1">Electric vehicle maker Tesla reported stronger-than-expected Q1 earnings, driven by record deliveries and improved margins...</p>
                  <div className="flex items-center gap-2 text-xs text-gray-400 mt-2">
                    <Avatar className="w-4 h-4" /> Bloomberg <span>• 2 hours ago</span>
                  </div>
                  <Link href="#" className="text-xs text-blue-600 mt-2 block">Read More →</Link>
                </div>
              </CardContent>
            </Card>
            <div className="text-center">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded">Load More</Button>
            </div>
          </div>

          {/* Yesterday */}
          <section>
            <h2 className="text-lg font-semibold mb-3">Yesterday</h2>
            <p className="text-gray-400 text-sm">No articles available.</p>
          </section>
        </div>

        {/* Right Side - Widgets */}
        <div className="space-y-4">
          {/* Tesla Card */}
          <Card className="rounded-xl">
            <CardContent className="p-5 space-y-1">
              <div className="flex justify-between items-center">
                <span className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">✅ Positive Impact</span>
                <span className="text-sm text-gray-400">4 hours ago</span>
              </div>
              <h4 className="font-semibold text-base mt-1">Tesla Q1 Earnings Exceed Expectations</h4>
              <p className="text-sm text-gray-500">Electric vehicle maker reports record deliveries...</p>
            </CardContent>
          </Card>

          {/* Apple Card */}
          <Card className="rounded-xl">
            <CardContent className="p-5 space-y-1">
              <div className="flex justify-between items-center">
                <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-3 py-1 rounded-full">⚠️ Neutral</span>
                <span className="text-sm text-gray-400">6 hours ago</span>
              </div>
              <h4 className="font-semibold text-base mt-1">Apple Announces New Product Launch Date</h4>
              <p className="text-sm text-gray-500">Tech giant schedules special event for next month...</p>
            </CardContent>
          </Card>

          {/* Trending Tickers */}
          <Card>
            <CardContent className="p-4">
              <h3 className="text-sm font-semibold mb-2">Trending Tickers</h3>
              <div className="text-sm space-y-1">
                <div className="flex justify-between">
                  <span className="font-semibold text-green-600">$AAPL +2.4%</span>
                  <span>174.32</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-red-600">$MSFT -1.2%</span>
                  <span>285.76</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Market Overview */}
          <Card>
            <CardContent className="p-4">
              <h3 className="text-sm font-semibold mb-2">Market Overview</h3>
              <div className="text-sm space-y-2">
                <div className="flex justify-between">
                  <span>S&P 500</span>
                  <span className="text-green-600 font-semibold">+0.8%</span>
                </div>
                <div className="flex justify-between">
                  <span>NASDAQ</span>
                  <span className="text-red-600 font-semibold">-0.3%</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Analyst Takes */}
          <Card>
            <CardContent className="p-4 flex gap-3 items-start">
              <Avatar className="w-8 h-8" />
              <div>
                <h3 className="text-sm font-semibold">John Smith</h3>
                <p className="text-xs text-gray-500">Tech sector showing strong momentum despite macro headwinds...</p>
                <p className="text-xs text-gray-400 mt-1">1 hour ago</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t mt-12 pt-6 text-sm text-gray-500">
        <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 px-6">
          <div>
            <h4 className="font-semibold mb-2">About</h4>
            <ul className="space-y-1">
              <li>About Us</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Products</h4>
            <ul className="space-y-1">
              <li>Market Data</li>
              <li>Analysis Tools</li>
              <li>API</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Resources</h4>
            <ul className="space-y-1">
              <li>Blog</li>
              <li>Help Center</li>
              <li>Documentation</li>
            </ul>
          </div>
          <div>
  <h4 className="font-semibold mb-2">Follow Us</h4>
  <ul className="flex gap-3 items-center">
    <li>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <img src="/twitter.png" alt="Twitter" className="w-5 h-5 hover:opacity-80" />
      </a>
    </li>
    <li>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <img src="/linkedin.png" alt="LinkedIn" className="w-5 h-5 hover:opacity-80" />
      </a>
    </li>
    <li>
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <img src="/facebook.png" alt="Facebook" className="w-5 h-5 hover:opacity-80" />
      </a>
    </li>
  </ul>
</div>

        </div>
        <p className="text-center mt-8 pb-6">© 2025 TradingNews. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default NewsPage;
