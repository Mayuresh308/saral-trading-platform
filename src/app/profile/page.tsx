"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const ProfilePage = () => {
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    avatar: "/avtar.png", // Add an avatar image to the public folder
    status: "Enabled",
    badges: ["Verified", "Pro Trader"],
    twoFA: true,
  };

  const holdings = [
    { ticker: "AAPL", quantity: 50, price: "$175.34", change: "+2.4%", value: "$8,767.00" },
    { ticker: "GOOGL", quantity: 15, price: "$2,834.50", change: "-0.8%", value: "$42,517.50" },
    { ticker: "TSLA", quantity: 30, price: "$242.78", change: "+1.2%", value: "$7,283.40" },
  ];

  const watchlist = [
    { symbol: "MSFT", name: "Microsoft Corp.", price: "$384.30", change: "+1.2%", isUp: true },
    { symbol: "AMZN", name: "Amazon.com Inc.", price: "$153.45", change: "-0.5%", isUp: false },
  ];

  const trades = [
    { action: "Buy", symbol: "AAPL", quantity: 10, price: "$175.34", date: "Jan 15, 2025" },
    { action: "Sell", symbol: "TSLA", quantity: 5, price: "$242.78", date: "Jan 14, 2025" },
  ];

  return (
    <>
      {/* Navbar */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Image src="/avtar.png" alt="Logo" width={32} height={32} />
            <span className="text-lg font-bold text-gray-800">ALTRA</span>
          </div>
          <nav className="hidden md:flex gap-6 text-sm text-gray-600">
            <Link href="#" className="hover:text-black">Dashboard</Link>
            <Link href="#" className="hover:text-black">Markets</Link>
            <Link href="#" className="hover:text-black">News</Link>
            <Link href="#" className="hover:text-black">Profile</Link>
          </nav>
          <div className="flex items-center gap-3">
            <Image src={user.avatar} alt="Avatar" width={36} height={36} className="rounded-full" />
            <span className="hidden sm:block text-sm font-medium text-gray-700">{user.name}</span>
          </div>
        </div>
      </header>

      {/* Page Content */}
      <div className="bg-gray-50 text-black min-h-screen py-10 px-4 md:px-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Sidebar */}
          <aside className="bg-white p-6 rounded-xl shadow col-span-1">
            <div className="flex flex-col items-center text-center">
              <Image
                src={user.avatar}
                alt="Avatar"
                width={80}
                height={80}
                className="rounded-full mb-3"
              />
              <h2 className="text-xl font-semibold">{user.name}</h2>
              <p className="text-sm text-gray-500 mb-2">Premium Member</p>
              <div className="flex gap-2 flex-wrap justify-center">
                {user.badges.map((badge, i) => (
                  <span
                    key={i}
                    className={`text-xs px-2 py-1 rounded-full font-medium ${
                      badge === "Verified"
                        ? "bg-green-100 text-green-700"
                        : "bg-blue-100 text-blue-700"
                    }`}
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
            <nav className="mt-6 space-y-3">
              {[
                "Account Info",
                "Portfolio",
                "Settings",
                "Billing",
                "Security",
              ].map((item) => (
                <div
                  key={item}
                  className={`px-4 py-2 rounded-lg text-sm font-medium ${
                    item === "Account Info"
                      ? "bg-blue-50 text-blue-700"
                      : "hover:bg-gray-100"
                  }`}
                >
                  {item}
                </div>
              ))}
            </nav>
          </aside>

          {/* Main content */}
          <main className="col-span-1 md:col-span-3 space-y-6">
            {/* Account Info */}
            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="text-lg font-semibold mb-4">
                Account & Personal Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="text-gray-500">Full Name</div>
                  <div className="font-medium">{user.name}</div>
                </div>
                <div>
                  <div className="text-gray-500">Phone Number</div>
                  <div className="font-medium">{user.phone}</div>
                </div>
                <div>
                  <div className="text-gray-500">Email</div>
                  <div className="font-medium">{user.email}</div>
                </div>
                <div>
                  <div className="text-gray-500">2FA Status</div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-600 font-medium">Enabled</span>
                    <button className="text-blue-600 text-sm underline">Configure</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Portfolio Overview */}
            <div className="bg-white rounded-xl shadow p-6 space-y-6">
              <h3 className="text-lg font-semibold">Portfolio Overview</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-xl">
                  <div className="text-gray-500 text-sm">Total Value</div>
                  <div className="text-2xl font-bold">$124,567.89</div>
                  <div className="text-green-600 text-sm">+2.4% today</div>
                </div>
                <div className="bg-green-50 p-4 rounded-xl">
                  <div className="text-gray-500 text-sm">Cash Balance</div>
                  <div className="text-2xl font-bold">$12,345.67</div>
                  <div className="text-sm">Available for trading</div>
                </div>
                <div className="bg-purple-50 p-4 rounded-xl">
                  <div className="text-gray-500 text-sm">Unrealized P/L</div>
                  <div className="text-2xl font-bold text-green-600">
                    +$4,567.89
                  </div>
                  <div className="text-green-600 text-sm">+3.8%</div>
                </div>
              </div>

              {/* Holdings Table */}
              <div>
                <h4 className="font-semibold mb-2">Holdings Summary</h4>
                <table className="w-full text-sm text-left">
                  <thead className="text-gray-500 border-b">
                    <tr>
                      <th className="py-2">Ticker</th>
                      <th>Quantity</th>
                      <th>Price</th>
                      <th>Change</th>
                      <th>Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    {holdings.map((item, idx) => (
                      <tr key={idx} className="border-b">
                        <td className="py-2 font-medium">{item.ticker}</td>
                        <td>{item.quantity}</td>
                        <td>{item.price}</td>
                        <td
                          className={
                            item.change.includes("-") ? "text-red-600" : "text-green-600"
                          }
                        >
                          {item.change}
                        </td>
                        <td>{item.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Trading Activity */}
            <div className="bg-white rounded-xl shadow p-6 space-y-4">
              <h3 className="text-lg font-semibold">Trading Activity</h3>
              <div className="space-y-2">
                {trades.map((trade, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between items-center bg-gray-50 p-4 rounded-lg"
                  >
                    <div>
                      <div className="font-semibold">
                        {trade.action} {trade.symbol}
                      </div>
                      <div className="text-sm text-gray-500">
                        {trade.quantity} shares @ {trade.price}
                      </div>
                    </div>
                    <div className="text-green-600 font-medium text-sm">Completed</div>
                    <div className="text-sm text-gray-500">{trade.date}</div>
                  </div>
                ))}
              </div>

              {/* Watchlist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {watchlist.map((item, idx) => (
                  <div key={idx} className="p-4 border rounded-xl">
                    <div className="font-semibold">{item.symbol}</div>
                    <div className="text-sm text-gray-500 mb-1">{item.name}</div>
                    <div className="flex justify-between items-center">
                      <div className="font-bold">{item.price}</div>
                      <div
                        className={`text-sm font-medium ${
                          item.isUp ? "text-green-600" : "text-red-600"
                        }`}
                      >
                        {item.change}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Preferences */}
            <div className="bg-white rounded-xl shadow p-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Theme</h4>
                <div className="flex gap-4">
                  <button className="px-4 py-2 bg-white border rounded-lg">Light</button>
                  <button className="px-4 py-2 bg-gray-800 text-white rounded-lg">Dark</button>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Language & Timezone</h4>
                <select className="border rounded-lg px-4 py-2 w-full mb-2">
                  <option>English (US)</option>
                </select>
                <select className="border rounded-lg px-4 py-2 w-full">
                  <option>UTC-05:00 Eastern Time</option>
                </select>
              </div>
            </div>

            {/* Footer */}
            <footer className="text-center text-sm text-gray-500 mt-10">
              <div>© 2025 ALTRA. All rights reserved.</div>
              <div className="mt-2 flex justify-center gap-4">
                <Link href="#">Terms</Link>
                <Link href="#">Privacy</Link>
                <Link href="#">Support</Link>
              </div>
            </footer>
          </main>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
