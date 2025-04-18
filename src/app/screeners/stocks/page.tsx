export default function StockScreenerPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="w-full mb-6 flex items-center justify-between bg-gray-100 p-4 rounded">
  <h2 className="text-2xl font-semibold">Stock Screener</h2>
  <button className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
    Save Screener
  </button>
</div>



      {/* Layout */}
      <div className="flex gap-6">
        {/* Sidebar */}
        <aside className="w-64 rounded-lg bg-white p-4 shadow-sm">
          {/* Market Filter */}
          <div className="mb-6">
            <h4 className="mb-2 text-xs font-semibold text-gray-500 uppercase">Market</h4>
            <div className="flex flex-wrap gap-2">
              {['Stocks', 'Crypto', 'Forex', 'Commodities'].map((item, i) => (
                <button
                  key={i}
                  className={`rounded-full border px-3 py-1 text-sm ${
                    item === 'Stocks'
                      ? 'bg-blue-100 text-blue-600 border-blue-200'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Quick Filters */}
          <div className="mb-6">
            <h4 className="mb-2 text-xs font-semibold text-gray-500 uppercase">Quick Filters</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2 rounded-md bg-gray-100 px-2 py-1">
                <span>📈</span> Top Gainers
              </li>
              <li className="flex items-center gap-2 px-2 py-1 hover:bg-gray-100 cursor-pointer">
                <span>📉</span> Oversold Stocks
              </li>
              <li className="flex items-center gap-2 px-2 py-1 hover:bg-gray-100 cursor-pointer">
                <span>📊</span> Breakout Alerts
              </li>
              <li className="flex items-center gap-2 px-2 py-1 hover:bg-gray-100 cursor-pointer">
                <span>💡</span> High Volume Movers
              </li>
            </ul>
          </div>

          {/* Exchange Select */}
          <div className="mb-6">
            <label className="mb-1 block text-xs font-semibold text-gray-500">Exchange</label>
            <select className="w-full rounded border-gray-300 text-sm">
              <option>All Exchanges</option>
            </select>
          </div>

          {/* Market Cap Checkboxes */}
          <div className="mb-6">
            <h4 className="mb-1 text-xs font-semibold text-gray-500">Market Cap</h4>
            <div className="space-y-1 text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" /> Large Cap (&gt;$10B)
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" /> Mid Cap ($2B-$10B)
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" /> Small Cap (&lt;$2B)
              </label>
            </div>
          </div>

          {/* Price Range */}
          <div className="mb-6">
            <label className="block text-xs font-semibold text-gray-500 mb-1">Price Range</label>
            <div className="flex items-center gap-2">
              <input
                type="number"
                placeholder="Min"
                className="w-full rounded border border-gray-300 p-1 text-sm"
              />
              <span className="text-gray-500">to</span>
              <input
                type="number"
                placeholder="Max"
                className="w-full rounded border border-gray-300 p-1 text-sm"
              />
            </div>
          </div>

          {/* Technical Indicators */}
          <div>
            <label className="block text-xs font-semibold text-gray-500 mb-1">Technical Indicators</label>
            <select className="mb-2 w-full rounded border-gray-300 text-sm">
              <option>RSI</option>
            </select>
            <select className="w-full rounded border-gray-300 text-sm">
              <option>Overbought</option>
              <option>Oversold</option>
            </select>
          </div>
        </aside>

       {/* Main Content Card */}
       <main className="flex-1 rounded-2xl bg-[#fafafa] p-6 shadow-sm border border-gray-200">
          {/* Top Bar */}
          <div className="mb-4 flex items-center justify-between">
            <p className="text-sm text-gray-600">Showing 150 results</p>
            <select className="rounded border-gray-300 text-sm">
              <option>Sort by: Volume</option>
            </select>
          </div>

          {/* Table */}
          <table className="w-full text-left text-sm">
            <thead className="border-b border-gray-200 text-gray-500">
              <tr>
                <th className="py-2">Ticker</th>
                <th>Name</th>
                <th>Price</th>
                <th>% Change</th>
                <th>Volume</th>
                <th>Market Cap</th>
                <th>P/E</th>
                <th>RSI</th>
                <th>Signal</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  ticker: "TSLA",
                  name: "Tesla Inc",
                  price: "$712.34",
                  change: "+3.45%",
                  volume: "12.5M",
                  cap: "$500B",
                  pe: "22.5",
                  rsi: "65",
                  signal: "Buy",
                },
                {
                  ticker: "AAPL",
                  name: "Apple Inc",
                  price: "$175.34",
                  change: "-1.23%",
                  volume: "8.2M",
                  cap: "$2.8T",
                  pe: "28.4",
                  rsi: "48",
                  signal: "Hold",
                },
              ].map((stock, i) => (
                <tr key={i} className="border-b text-sm">
                  <td className="py-2 font-bold">{stock.ticker}</td>
                  <td>{stock.name}</td>
                  <td>{stock.price}</td>
                  <td className={stock.change.startsWith("+") ? "text-green-500" : "text-red-500"}>
                    {stock.change}
                  </td>
                  <td>{stock.volume}</td>
                  <td>{stock.cap}</td>
                  <td>{stock.pe}</td>
                  <td>{stock.rsi}</td>
                  <td>
                    <span
                      className={`rounded px-2 py-0.5 text-xs font-medium ${
                        stock.signal === "Buy"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {stock.signal}
                    </span>
                  </td>
                  <td>
                    <button className="text-gray-400 hover:text-gray-600">☆</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination */}
          <div className="mt-6 flex justify-end space-x-2 text-sm">
            {[1, 2, 3].map((page, idx) => (
              <button
                key={page}
                className={`w-8 h-8 rounded-full border ${
                  idx === 0
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {page}
              </button>
            ))}
            <button className="w-8 h-8 rounded-full border text-gray-700 hover:bg-gray-100">
              &gt;
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}
