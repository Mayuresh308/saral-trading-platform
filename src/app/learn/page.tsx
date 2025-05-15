import Image from 'next/image';
export default function LearnPage() {
  return (
    <div className="bg-gray-100 min-h-screen text-gray-800">
      {/* Header */}
      <header className="bg-gray-50 text-black px-6 py-4 flex justify-between items-center">
  <h1 className="text-xl font-bold">ALTRA</h1>
  <nav className="space-x-6 text-sm">
    <a href="#" className="hover:text-blue-600">Home</a>
    <a href="#" className="hover:text-blue-600">Markets Overview</a>
    <a href="#" className="hover:text-blue-600">Charting</a>
    <a href="#" className="hover:text-blue-600">Education</a>
    <a href="#" className="hover:text-blue-600">Pricing</a>
    <a href="#" className="hover:text-blue-600">Profile</a>
  </nav>
</header>


      <main className="p-6 max-w-7xl mx-auto space-y-10">
        
       {/* Video Tutorials */}
<section>
  <h2 className="text-xl font-semibold mb-4">Video Tutorials</h2>
  <div className="grid md:grid-cols-3 gap-4">
    {[
      {
        title: 'Understanding Trading Basics',
        img: '/UnderstandingTradingBasics.jpg',
        url: 'https://youtu.be/4CQzOXbkLqY?si=kf3mqog4Z6sRtKB3',
      },
      {
        title: 'Advanced Chart Patterns',
        img: '/advancedChartPatterns.jpg',
        url: 'https://youtu.be/ZX-Tp4zgJYc?si=fIIBspAcMEKpVT8H',
      },
      {
        title: 'Investment Strategies Explained',
        img: '/InvestmentStrategiesExplained.jpg',
        url: 'https://youtu.be/8zWQ9aXmeaY?si=3OVuqJDXAvd9Bi3a',
      },
    ].map((vid, i) => (
      <a
        key={i}
        href={vid.url}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white rounded-lg shadow hover:shadow-lg overflow-hidden block"
      >
        <img src={vid.img} alt={vid.title} className="w-full h-60 object-cover" />
        <p className="p-4 text-sm font-medium">{vid.title}</p>
      </a>
    ))}
  </div>
</section>



        {/* Articles */}
        <section>
  <h2 className="text-xl font-semibold mb-4">Articles</h2>
  <div className="grid md:grid-cols-2 gap-4">
    {[
      {
        title: 'How to Read Stock Market Trends',
        desc: 'Learn the essentials of reading stock market trends and making informed decisions.',
        link: 'https://groww.in/blog/how-to-read-stock-charts',
      },
      {
        title: 'Cryptocurrency for Beginners',
        desc: 'A comprehensive guide to getting started with cryptocurrency investing.',
        link: 'https://www.coursera.org/in/articles/how-does-cryptocurrency-work',
      },
      {
        title: 'The Psychology of Trading',
        desc: 'Explore how emotions can impact your trading decisions and how to manage them.',
        link: 'https://www.investopedia.com/terms/t/trading-psychology.asp#:~:text=Trading%20psychology%20is%20the%20emotional,that%20might%20be%20too%20risky.',
      },
      {
        title: 'Forex Market Insights',
        desc: 'Delve into the world of Forex trading and discover key insights.',
        link: 'https://www.forex.com/en/news-and-analysis/financial-market-insights/',
      },
    ].map((article, i) => (
      <div key={i} className="bg-white rounded-lg shadow p-4 hover:shadow-lg">
        <h3 className="font-semibold">{article.title}</h3>
        <p className="text-sm text-gray-600 mt-1">
          {article.desc}{' '}
          <a
            href={article.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Read more
          </a>
        </p>
      </div>
    ))}
  </div>
</section>


        {/* Quizzes */}
        <section>
  <h2 className="text-xl font-semibold mb-4">Quizzes</h2>
  <div className="grid md:grid-cols-2 gap-4">
    {[
      {
        title: 'Stock Market Basics Quiz',
        desc: 'Test your understanding of stock market fundamentals with this quiz.',
        link: 'https://www.eqsis.com/stock-market-quiz-level-1/',
      },
      {
        title: 'Cryptocurrency Knowledge Test',
        desc: 'Assess your knowledge of cryptocurrency with our interactive quiz.',
        link: 'https://www.babypips.com/crypto/quizzes',
      },
    ].map((quiz, i) => (
      <div key={i} className="bg-white rounded-lg shadow p-4 hover:shadow-lg flex flex-col justify-between">
        <div>
          <h3 className="font-semibold">{quiz.title}</h3>
          <p className="text-sm text-gray-600 mt-1">{quiz.desc}</p>
        </div>
        <a
          href={quiz.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 self-start"
        >
          <button className="bg-black text-white px-4 py-1 text-sm rounded hover:bg-gray-800">
            Start Quiz
          </button>
        </a>
      </div>
    ))}
  </div>
</section>

      </main>

      {/* Footer */}
      <footer className="bg-black text-gray-400 text-sm mt-10 px-6 py-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
          <div>
            <h4 className="text-white font-semibold mb-2">Resources</h4>
            <ul>
              <li><a href="#" className="hover:underline">Blog</a></li>
              <li><a href="#" className="hover:underline">Community Forum</a></li>
              <li><a href="#" className="hover:underline">Help Center</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">Company</h4>
            <ul>
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </div>
          <div className="flex items-start">
            <h4 className="text-white font-semibold mr-2">Follow Us</h4>
            <div className="flex space-x-4 ml-2 mt-1">
  <a href="#" className="hover:opacity-80">
    <img src="/facebook.png" alt="Facebook" className="w-5 h-5" />
  </a>
  <a href="#" className="hover:opacity-80">
    <img src="/twitter.png" alt="Twitter" className="w-5 h-5" />
  </a>
  <a href="#" className="hover:opacity-80">
    <img src="/linkedin.png" alt="LinkedIn" className="w-5 h-5" />
  </a>
</div>

          </div>
        </div>
        <p className="text-center mt-6 text-xs text-gray-600">© 2023 ALTRA. All rights reserved.</p>
      </footer>
    </div>
  );
}
