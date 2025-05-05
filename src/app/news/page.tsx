"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";

// Type definition
type NewsItem = {
  title: string;
  link: string;
  summary: string;
  image: string;
  publisher: string;
  sentiment: string;
  time: string;
};

const NewsPage: React.FC = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(3); // initially show 3 news after featured

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch("/api/news", { cache: "no-store" });
        const data = await res.json();
        if (Array.isArray(data)) setNews(data);
        else setNews([]);
      } catch (err) {
        setNews([]);
      } finally {
        setLoading(false);
      }
    };
    fetchNews();
  }, []);

  const featured = news[0];
  const today = news.slice(1, visibleCount + 1); // show visibleCount items after featured

  return (
    <div className="min-h-screen bg-white text-black font-sans">
      {/* Header */}
      <div className="border-b py-4 px-8 flex items-center justify-between bg-white">
  <div className="flex items-center gap-10">
    <h1 className="text-xl font-bold text-black">TradingNews</h1>
    <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-700">
      <a href="#">Home</a>
      <a href="#">Markets</a>
      <a href="#">Watchlist</a>
      <a href="#">Analysis</a>
    </nav>
  </div>
  <div className="flex gap-4 items-center">
    <Input placeholder="Search news, symbols..." className="w-64" />
    <Avatar className="w-8 h-8" src="/path/to/image.jpg" alt="User Avatar" />
  </div>
</div>


      {/* Filters
      <div className="px-8 py-4 flex gap-4 flex-wrap items-center border-b bg-white">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button variant="outline">All Categories</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Stocks</DropdownMenuItem>
            <DropdownMenuItem>Crypto</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Input placeholder="$AAPL, $TSLA..." className="w-56" />
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button variant="outline">Today</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>This Week</DropdownMenuItem>
            <DropdownMenuItem>This Month</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button variant="outline">All Sources</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Bloomberg</DropdownMenuItem>
            <DropdownMenuItem>CNBC</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div> */}

      {/* Main Grid */}
      <main className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 px-8 py-8">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-6">
          {/* Featured Article */}
          {featured && (
            <Card className="overflow-hidden relative h-96 rounded-xl">
              <img
                src={featured.image}
                alt="featured"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-6 flex flex-col justify-end">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-red-600 text-white text-xs px-2 py-0.5 rounded">
                    {featured.sentiment || "Negative Impact"}
                  </span>
                  <span className="text-xs text-white">{featured.time}</span>
                </div>
                <h2 className="text-white text-2xl font-bold leading-snug">
                  {featured.title}
                </h2>
                <p className="text-white text-sm mt-1">{featured.summary}</p>
              </div>
            </Card>
          )}

          {/* Today Label */}
          <h3 className="text-lg font-semibold">Today</h3>
          {loading ? (
            <p>Loading...</p>
          ) : (
            today.map((item, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="flex gap-4 p-4">
                  <img
                    src={item.image}
                    alt="news"
                    className="w-28 h-28 rounded-md object-cover"
                  />
                  <div className="flex-1 text-sm">
                    <div className="flex gap-2 mb-1">
                      <span className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded text-xs font-medium">
                        #{item.publisher}
                      </span>
                      <span className="bg-purple-100 text-purple-800 px-2 py-0.5 rounded text-xs font-medium">
                        #Earnings
                      </span>
                    </div>
                    <h4 className="font-semibold text-base mb-1">{item.title}</h4>
                    <p className="text-gray-600 text-xs line-clamp-2">{item.summary}</p>
                    <div className="text-gray-400 text-xs mt-2">
                      {item.publisher} · {item.time}
                    </div>
                    <Link
                      href={item.link}
                      className="text-xs text-blue-600 mt-1 block"
                      target="_blank"
                    >
                      Read More →
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))
          )}

          {/* Load More */}
          {visibleCount + 1 < news.length && (
            <div className="flex justify-center">
              <Button
                className="bg-blue-600 hover:bg-blue-700 text-white px-6"
                onClick={() => setVisibleCount((prev) => prev + 3)}
              >
                Load More
              </Button>
            </div>
          )}
        </div>

        {/* Right Sidebar */}
        <aside className="space-y-6">
          {/* Sentiment Cards */}
          <div className="space-y-4">
            <SentimentCard
              type="positive"
              title="Tesla Q1 Earnings Exceed Expectations"
              summary="Electric vehicle maker reports record deliveries..."
              time="4 hours ago"
            />
            <SentimentCard
              type="neutral"
              title="Apple Announces New Product Launch Date"
              summary="Tech giant schedules special event for next month..."
              time="6 hours ago"
            />
          </div>

          {/* Market Overview */}
          <div className="bg-gray-50 p-4 rounded-lg shadow">
            <h4 className="font-semibold text-sm mb-2">Market Overview</h4>
            <div className="flex justify-between text-sm">
              <span>S&P 500</span>
              <span className="text-green-600">+0.8%</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>NASDAQ</span>
              <span className="text-red-600">-0.3%</span>
            </div>
          </div>

          {/* Trending Tickers */}
          <div className="bg-gray-50 p-4 rounded-lg shadow">
            <h4 className="font-semibold text-sm mb-2">Trending Tickers</h4>
            <div className="flex justify-between text-sm">
              <span>$AAPL</span>
              <span className="text-green-600">+2.4%</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>$MSFT</span>
              <span className="text-red-600">-1.2%</span>
            </div>
          </div>

          {/* Analyst Takes */}
          <div className="bg-gray-50 p-4 rounded-lg shadow">
  <h4 className="font-semibold text-sm mb-2">Analyst Takes</h4>
  <div className="flex items-start gap-2">
    <Avatar className="w-8 h-8" src="/path/to/image.jpg" alt="John Smith's Avatar" />
    <div className="text-xs">
      <strong>John Smith</strong>
      <p className="text-gray-500">
        Tech sector showing strong momentum despite macro headwinds...
      </p>
      <p className="text-gray-400 mt-1">1 hour ago</p>
    </div>
  </div>
</div>

        </aside>
      </main>

      {/* Footer */}
      <footer className="border-t mt-12 py-6 px-8 text-sm text-gray-500 grid grid-cols-2 md:grid-cols-4 gap-4">
        <div>
          <h5 className="font-semibold mb-2">About</h5>
          <p>About Us</p>
          <p>Careers</p>
          <p>Contact</p>
        </div>
        <div>
          <h5 className="font-semibold mb-2">Products</h5>
          <p>Market Data</p>
          <p>Analysis Tools</p>
          <p>API</p>
        </div>
        <div>
          <h5 className="font-semibold mb-2">Resources</h5>
          <p>Blog</p>
          <p>Help Center</p>
          <p>Documentation</p>
        </div>
        <div>
          <h5 className="font-semibold mb-2">Follow Us</h5>
          <p>Twitter</p>
          <p>LinkedIn</p>
        </div>
      </footer>
      <div className="text-center text-xs py-2 border-t">
        © 2025 TradingNews. All rights reserved.
      </div>
    </div>
  );
};

const SentimentCard = ({
  type,
  title,
  summary,
  time,
}: {
  type: "positive" | "negative" | "neutral";
  title: string;
  summary: string;
  time: string;
}) => {
  const colorMap = {
    positive: "bg-green-100 text-green-700",
    negative: "bg-red-100 text-red-700",
    neutral: "bg-yellow-100 text-yellow-800",
  };
  const labelMap = {
    positive: "Positive Impact",
    negative: "Negative Impact",
    neutral: "Neutral",
  };
  return (
    <div className="bg-white p-4 rounded shadow">
      <span className={`text-xs px-2 py-0.5 rounded ${colorMap[type]}`}>
        {labelMap[type]}
      </span>
      <h5 className="font-semibold text-sm mt-2">{title}</h5>
      <p className="text-xs text-gray-500 mt-1">{summary}</p>
      <p className="text-xs text-gray-400 mt-1">{time}</p>
    </div>
  );
};

export default NewsPage;
