import Image from "next/image";
import Link from "next/link";
import DarkModeToggle from "@/components/DarkModeToggle";

export default function HomePage() {
  return (
    <div className="bg-white text-gray-900">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-4 border-b">
        <div className="flex items-center space-x-12">
          <Link href="/" className="text-2xl font-bold text-blue-600">ALTRA</Link>
          <div className="hidden md:flex items-center space-x-6 text-sm">
          <Link href="/markets">Markets</Link>
          <Link href="/screeners/stocks">Screeners</Link>
          <Link href="/news">News</Link>
          <Link href="/learn">Learn</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/premium">Premium</Link>
          <Link href="/profile">Profile</Link>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button className="hover:text-blue-600">
            <i className="fas fa-search"></i>
          </button>
          <button className="hover:text-blue-600">
            <i className="fas fa-bell"></i>
          </button>
          <Link href="/login" className="text-sm hover:underline">Log In</Link>
          <Link href="signup" className="px-4 py-1.5 rounded-md bg-blue-600 text-white text-sm font-semibold">Sign Up</Link>
        </div>
      </nav>

{/* Hero Section */}
<section className="flex flex-col md:flex-row w-full min-h-[500px]">
  {/* Left (Text) Side */}
  <div className="md:w-1/2 bg-blue-600 text-white px-8 md:px-20 flex flex-col justify-center">
    <div className="space-y-6 py-16">
      <h1 className="text-4xl md:text-5xl font-bold leading-tight">
        Trade Smarter with <br /> Advanced Analytics
      </h1>
      <p className="text-lg">
        Professional-grade trading platform with real-time data,
        advanced charting, and powerful screening tools.
      </p>
      <div className="flex space-x-4">
        <button className="px-5 py-2.5 rounded-md bg-white text-blue-600 font-medium">Get Started</button>
        <button className="px-5 py-2.5 rounded-md border border-white font-medium">View Demo</button>
      </div>
    </div>
  </div>

  {/* Right (Image) Side */}
  <div className="md:w-1/2 bg-sky-300 flex items-center justify-center p-8">
    <Image
      src="/hero.png"
      alt="Trading dashboard"
      width={600}
      height={400}
      className="rounded-lg shadow-lg"
    />
  </div>
</section>

{/* Everything You Need Section */}
<section className="px-6 md:px-20 py-16 text-center" style={{ backgroundColor: '#f9fafb' }}>
  <h2 className="text-2xl md:text-3xl font-semibold mb-12">
    Everything You Need to Trade Successfully
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {/* Card 1 */}
    <div className="bg-white p-6 rounded-xl shadow-sm border text-left">
      <div className="mb-4">
        <Image src="/AdvancedCharting.png" alt="Advanced Charting" width={32} height={32} />
      </div>
      <h3 className="text-md font-semibold mb-1">Advanced Charting</h3>
      <p className="text-sm text-gray-600">
        Professional-grade charts with 100+ technical indicators and drawing tools.
      </p>
    </div>

    {/* Card 2 */}
    <div className="bg-white p-6 rounded-xl shadow-sm border text-left">
      <div className="mb-4">
        <Image src="/SmartScreeners.png" alt="Smart Screeners" width={32} height={32} />
      </div>
      <h3 className="text-md font-semibold mb-1">Smart Screeners</h3>
      <p className="text-sm text-gray-600">
        Find trading opportunities across stocks, crypto, and forex markets.
      </p>
    </div>

    {/* Card 3 */}
    <div className="bg-white p-6 rounded-xl shadow-sm border text-left">
      <div className="mb-4">
        <Image src="/PortfolioTracking.png" alt="Portfolio Tracking" width={32} height={32} />
      </div>
      <h3 className="text-md font-semibold mb-1">Portfolio Tracking</h3>
      <p className="text-sm text-gray-600">
        Monitor your investments and analyze performance in real-time.
      </p>
    </div>
  </div>
</section>






      {/* Markets Overview */}
      <section className="px-6 md:px-20 py-16 bg-white">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Markets Overview</h2>
          <div className="space-x-3 text-sm">
            <button className="px-3 py-1 rounded-full bg-blue-600 text-white">Stocks</button>
            <button className="px-3 py-1 rounded-full text-gray-600">Crypto</button>
            <button className="px-3 py-1 rounded-full text-gray-600">Forex</button>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[{ symbol: "AAPL", price: "$175.34", change: "+2.45%" },
            { symbol: "TSLA", price: "$242.68", change: "-1.23%" },
            { symbol: "MSFT", price: "$328.45", change: "+1.87%" },
            { symbol: "AMZN", price: "$142.56", change: "+0.95%" }
          ].map((stock, i) => (
            <div key={i} className="bg-gray-50 p-4 rounded-xl border">
              <h3 className="font-semibold text-sm">{stock.symbol}</h3>
              <p className="text-2xl font-semibold">{stock.price}</p>
              <p className={`text-sm ${stock.change.includes("-") ? "text-red-500" : "text-green-600"}`}>{stock.change}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Market News */}
<section className="px-6 md:px-20 py-16 bg-gray-50">
  <div className="flex justify-between items-center mb-6">
    <h2 className="text-xl font-semibold">Latest Market News</h2>
    <Link href="#" className="text-sm text-blue-600 hover:underline">
      View All News
    </Link>
  </div>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {[1, 2, 3].map((n, i) => (
      <div key={i} className="bg-white rounded-xl border overflow-hidden">
        <Image
          src={`/news${n}.jpg`} // Make sure these are in the /public folder
          alt={`Market news ${n}`}
          width={400}
          height={160}
          className="w-full h-40 object-cover"
        />
        <div className="p-4">
          <p className="text-xs text-gray-500 mb-2">Markets • 2 hours ago</p>
          <h3 className="font-semibold text-sm mb-1">Sample News Headline</h3>
          <p className="text-sm text-gray-600">
            Short description of the market news goes here...
          </p>
        </div>
      </div>
    ))}
  </div>
</section>

      {/* Professional Trading Tools */}
<section className="px-6 md:px-20 py-16 bg-white">
  <h2 className="text-xl font-semibold text-center mb-10">Professional Trading Tools</h2>
  <div className="grid md:grid-cols-2 gap-8">
    {/* Card 1 */}
    <div className="bg-gray-900 text-white rounded-xl overflow-hidden shadow-md">
      <div className="w-full h-64 relative">
        <Image
          src="/AdvancedTechnicalAnalysis.png"
          alt="Advanced Chart"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="p-6">
        <h3 className="font-semibold text-lg">Advanced Technical Analysis</h3>
        <p className="text-sm text-gray-300 mb-2">
          Powerful charting with 100+ technical indicators
        </p>
        <Link href="#" className="text-blue-400 text-sm font-medium">
          Learn more →
        </Link>
      </div>
    </div>

    {/* Card 2 */}
    <div className="bg-gray-900 text-white rounded-xl overflow-hidden shadow-md">
      <div className="w-full h-64 relative">
        <Image
          src="/ProfessionALTRAdingTools.png"
          alt="Market Screeners"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="p-6">
        <h3 className="font-semibold text-lg">Smart Market Screeners</h3>
        <p className="text-sm text-gray-300 mb-2">
          Find opportunities across multiple markets
        </p>
        <Link href="#" className="text-blue-400 text-sm font-medium">
          Learn more →
        </Link>
      </div>
    </div>
  </div>
</section>


    {/* CTA Section */}
<section className="px-6 md:px-20 py-20 bg-[#0b1120] text-white text-center">
  <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Trading?</h2>
  <p className="text-lg text-gray-400 mb-8">
    Join thousands of traders who trust our platform
  </p>
  <div className="flex flex-col sm:flex-row justify-center gap-4">
    <button className="px-6 py-2.5 rounded-md bg-blue-600 hover:bg-blue-700 font-medium">
      Create Free Account
    </button>
    <button className="px-6 py-2.5 rounded-md border border-gray-500 hover:border-gray-300 text-white font-medium">
      View Pricing
    </button>
  </div>
</section>

{/* Horizontal Divider */}
<hr className="border-t border-gray-800" />

{/* Footer */}
<footer className="bg-[#0b1120] text-gray-400 px-6 md:px-20 py-14 text-sm">
  <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-10">
    <div>
      <h4 className="text-white font-semibold mb-2">ALTRA</h4>
      <p>
        Professional-grade trading platform for stocks, crypto, and forex
        markets.
      </p>
    </div>
    <div>
      <h4 className="text-white font-semibold mb-2">Products</h4>
      <ul className="space-y-1">
        <li><a href="#">Charts</a></li>
        <li><a href="#">Screeners</a></li>
        <li><a href="#">Portfolio</a></li>
        <li><a href="#">API</a></li>
      </ul>
    </div>
    <div>
      <h4 className="text-white font-semibold mb-2">Resources</h4>
      <ul className="space-y-1">
        <li><a href="#">Documentation</a></li>
        <li><a href="#">Education</a></li>
        <li><a href="#">Market News</a></li>
        <li><a href="#">Help Center</a></li>
      </ul>
    </div>
    <div>
      <h4 className="text-white font-semibold mb-2">Company</h4>
      <ul className="space-y-1">
        <li><a href="#">About</a></li>
        <li><a href="#">Careers</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">Blog</a></li>
      </ul>
    </div>
  </div>
  <div className="text-center border-t border-gray-800 pt-6">
    <p>© 2025 ALTRA. All rights reserved.</p>
  </div>
</footer>


    </div>
  );
}
