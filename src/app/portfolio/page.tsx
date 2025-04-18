export default function PortfolioPage() {
  return (
    <div className="px-8 py-6 bg-[#f9fafb] min-h-screen font-sans">
      <header className="flex justify-between items-center mb-8">
        <div className="flex gap-8 text-sm font-medium text-gray-600">
          <span className="font-semibold text-black">Portfolio Dashboard</span>
          <span className="hover:text-black cursor-pointer">Overview</span>
          <span className="hover:text-black cursor-pointer">Holdings</span>
          <span className="hover:text-black cursor-pointer">Transactions</span>
        </div>
        <div className="flex items-center gap-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-4 rounded">+ Add Funds</button>
          <img src="/avatar.png" alt="Profile" className="w-8 h-8 rounded-full" />
        </div>
      </header>

      {/* Summary Cards */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-5 rounded-xl shadow">
          <h4 className="text-sm text-gray-500">Total Portfolio Value</h4>
          <p className="text-2xl font-bold mt-1">₹5,25,000</p>
        </div>
        <div className="bg-white p-5 rounded-xl shadow">
          <h4 className="text-sm text-gray-500">Daily Change</h4>
          <p className="text-green-600 font-semibold mt-1">▲ ₹3,250 (+0.62%)</p>
        </div>
        <div className="bg-white p-5 rounded-xl shadow">
          <h4 className="text-sm text-gray-500">Overall Return</h4>
          <p className="text-green-600 font-semibold mt-1">▲ ₹25,000 (+5.0%)</p>
        </div>
        <div className="bg-white p-5 rounded-xl shadow">
          <h4 className="text-sm text-gray-500">Cash Balance</h4>
          <p className="text-xl font-semibold mt-1">₹50,000</p>
        </div>
      </section>

      {/* Charts */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-5 rounded-xl shadow">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-base font-semibold">Portfolio Performance</h3>
            <div className="flex gap-2 text-sm">
              <button className="bg-blue-600 text-white px-3 py-1 rounded">1D</button>
              <button className="text-gray-600 px-3 py-1">1W</button>
              <button className="text-gray-600 px-3 py-1">1M</button>
              <button className="text-gray-600 px-3 py-1">3M</button>
              <button className="text-gray-600 px-3 py-1">1Y</button>
              <button className="text-gray-600 px-3 py-1">All</button>
            </div>
          </div>
          <div className="h-40 bg-gray-100 flex items-center justify-center text-gray-400">
            [Graph Placeholder]
          </div>
        </div>
        <div className="bg-white p-5 rounded-xl shadow">
          <h3 className="text-base font-semibold mb-4">Portfolio Allocation</h3>
          <div className="h-40 bg-gray-100 flex items-center justify-center text-gray-400">
            [Allocation Chart Placeholder]
          </div>
        </div>
      </section>

      {/* Holdings */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Holdings</h3>
        <div className="overflow-x-auto bg-white rounded-xl shadow">
          <table className="min-w-full">
            <thead className="bg-gray-100 text-sm">
              <tr>
                <th className="px-4 py-3 text-left">Company</th>
                <th className="px-4 py-3 text-left">Qty</th>
                <th className="px-4 py-3 text-left">Avg Price</th>
                <th className="px-4 py-3 text-left">Current Price</th>
                <th className="px-4 py-3 text-left">P/L</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="px-4 py-3 flex items-center gap-2">
                  <img src="/infy.png" alt="Infosys" className="w-6 h-6 rounded-full" /> Infosys
                </td>
                <td className="px-4 py-3">10</td>
                <td className="px-4 py-3">₹1,400</td>
                <td className="px-4 py-3">₹1,520</td>
                <td className="px-4 py-3 text-green-600">+₹1,200 (8.5%)</td>
              </tr>
              <tr>
                <td className="px-4 py-3 flex items-center gap-2">
                  <img src="/tcs.png" alt="TCS" className="w-6 h-6 rounded-full" /> TCS Ltd.
                </td>
                <td className="px-4 py-3">5</td>
                <td className="px-4 py-3">₹3,200</td>
                <td className="px-4 py-3">₹3,050</td>
                <td className="px-4 py-3 text-red-500">-₹750 (-4.7%)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Recent Activity */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Recent Activity</h3>
        <div className="space-y-3">
          <div className="bg-white p-5 rounded-xl shadow flex justify-between items-center">
            <div className="flex items-center gap-3">
              <img src="/buy.png" alt="Buy Icon" className="w-6 h-6" />
              <div>
                <p className="font-medium">Bought AAPL</p>
                <span className="text-sm text-gray-500">14 Apr 2025</span>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium">2 Shares</p>
              <p className="text-sm text-gray-600">₹12,450</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl shadow flex justify-between items-center">
            <div className="flex items-center gap-3">
              <img src="/dividend.png" alt="Dividend Icon" className="w-6 h-6" />
              <div>
                <p className="font-medium">Dividend Received (INFY)</p>
                <span className="text-sm text-gray-500">13 Apr 2025</span>
              </div>
            </div>
            <div className="text-right text-sm text-gray-600 font-medium">₹300</div>
          </div>
        </div>
      </section>

      {/* Portfolio Insights */}
      <section>
        <h3 className="text-xl font-semibold mb-4">Portfolio Insights</h3>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="bg-yellow-50 p-5 rounded-xl text-yellow-800 text-sm font-medium">
            Your portfolio is 70% Tech — Consider diversifying to reduce sector risk
          </div>
          <div className="bg-green-50 p-5 rounded-xl text-green-800 text-sm font-medium">
            Top performer this month: HDFC Bank (+12.5%)
          </div>
        </div>
      </section>
    </div>
  );
}
