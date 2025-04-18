"use client";
import React from "react";
import Link from "next/link";

const PremiumPage = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-6xl mx-auto py-2 px-6 md:px-10 lg:px-20">
        {/* Header */}
        <header className="flex items-center justify-between py-1 mb-4 md:mb-6">
          <Link href="/" className="text-base font-semibold text-blue-600">
            Premium
          </Link>

          <nav className="hidden md:flex items-center space-x-4">
            <Link href="/features" className="text-gray-600 hover:text-blue-600 text-sm">
              Features
            </Link>
            <Link href="/pricing" className="text-gray-600 hover:text-blue-600 text-sm">
              Pricing
            </Link>
            <Link href="/support" className="text-gray-600 hover:text-blue-600 text-sm">
              Support
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-2">
            <Link
              href="/login"
              className="text-blue-600 font-medium hover:underline text-sm"
            >
              Sign In
            </Link>
            <Link
              href="/get-started"
              className="bg-blue-600 text-white py-1 px-2.5 rounded-md font-medium hover:bg-blue-700 transition text-sm"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            {/* Add your mobile menu icon here */}
          </div>
        </header>
      </div>

      {/* Hero Section - Full Width */}
      <section className="text-center py-12 mb-16 bg-indigo-50">
        <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-20">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Unlock Premium Features
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Get access to exclusive features and take your experience to the next
            level
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-blue-600 text-white py-3 px-8 rounded-md font-medium hover:bg-blue-700 transition">
              Start Free Trial
            </button>
            <button className="text-blue-600 font-medium hover:underline">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Premium Features Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-20 text-center mb-10">
          <h2 className="text-3xl font-semibold text-gray-900">Premium Features</h2>
        </div>
        <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Advanced Analytics */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-indigo-100 text-indigo-500 mb-4">
              {/* Replace with your rocket icon */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-2m6.553-4.197L12 14.5m-6.553 2.803L12 16.5m6.553-4.197L12 9.5m-6.553 2.803L12 11.5m-5 5.707l1.5-1.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Advanced Analytics</h3>
            <p className="text-gray-600 text-sm">Get detailed insights and analytics to make data-driven decisions.</p>
          </div>

          {/* Enhanced Security */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-indigo-100 text-indigo-500 mb-4">
              {/* Replace with your shield icon */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Enhanced Security</h3>
            <p className="text-gray-600 text-sm">Advanced security features to protect your data and privacy.</p>
          </div>

          {/* 24/7 Support */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-indigo-100 text-indigo-500 mb-4">
              {/* Replace with your clock icon */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">24/7 Support</h3>
            <p className="text-gray-600 text-sm">Get help whenever you need it with our round-the-clock support.</p>
          </div>
        </div>
      </section>

      {/* What Our Premium Users Say Section */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-20 text-center mb-10">
          <h2 className="text-3xl font-semibold text-gray-900">What Our Premium Users Say</h2>
        </div>
        <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-20 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-gray-50 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
                {/* Replace with John Anderson's image */}
                <img src="https://via.placeholder.com/40" alt="John Anderson" className="w-full h-full object-cover" />
              </div>
              <div className="ml-3">
                <h4 className="text-sm font-semibold text-gray-900">John Anderson</h4>
                <p className="text-xs text-gray-600">CEO, Tech Corp</p>
              </div>
            </div>
            <p className="text-sm text-gray-700 italic">
              "The premium features have transformed how we work. The advanced analytics alone have paid for themselves multiple times over."
            </p>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-gray-50 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
                {/* Replace with Sarah Miller's image */}
                <img src="https://via.placeholder.com/40" alt="Sarah Miller" className="w-full h-full object-cover" />
              </div>
              <div className="ml-3">
                <h4 className="text-sm font-semibold text-gray-900">Sarah Miller</h4>
                <p className="text-xs text-gray-600">Product Manager</p>
              </div>
            </div>
            <p className="text-sm text-gray-700 italic">
              "The premium support is exceptional. Having access to priority support has saved us countless hours of troubleshooting."
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-20">
        {/* Pricing Plans */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 py-16">
          {/* Basic Plan */}
          <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Basic</h3>
            <div className="text-center mb-6">
              <span className="text-3xl font-bold text-gray-900">$9</span>
              <span className="text-gray-600">/month</span>
            </div>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li className="flex items-center">
                <img src="/check.svg" alt="Checkmark" className="h-5 w-5 mr-2" />
                Basic features
              </li>
              <li className="flex items-center">
                <img src="/check.svg" alt="Checkmark" className="h-5 w-5 mr-2" />
                5 projects
              </li>
              <li className="flex items-center">
                <img src="/check.svg" alt="Checkmark" className="h-5 w-5 mr-2" />
                Community support
              </li>
            </ul>
            <button className="w-full bg-gray-100 text-blue-600 py-3 rounded-md font-medium hover:bg-gray-200 transition">
              Choose Basic
            </button>
          </div>

          {/* Pro Plan */}
          <div className="bg-indigo-600 rounded-xl shadow-md p-8 relative overflow-hidden hover:shadow-lg transition text-white">
            <div className="absolute top-4 right-4 bg-emerald-500 text-white text-xs py-1 px-2 rounded-full font-semibold">
              Popular
            </div>
            <h3 className="text-xl font-semibold mb-4">Pro</h3>
            <div className="text-center mb-6">
              <span className="text-3xl font-bold">$29</span>
              <span>/month</span>
            </div>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center">
                <img src="/check-white.svg" alt="Checkmark" className="h-5 w-5 mr-2" />
                All Basic features
              </li>
              <li className="flex items-center">
                <img src="/check-white.svg" alt="Checkmark" className="h-5 w-5 mr-2" />
                Unlimited projects
              </li>
              <li className="flex items-center">
                <img src="/check-white.svg" alt="Checkmark" className="h-5 w-5 mr-2" />
                Priority support
              </li>
              <li className="flex items-center">
                <img src="/check-white.svg" alt="Checkmark" className="h-5 w-5 mr-2" />
                Advanced analytics
              </li>
            </ul>
            <button className="w-full bg-indigo-500 text-white py-3 rounded-md font-medium hover:bg-indigo-700 transition">
              Choose Pro
            </button>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Enterprise
            </h3>
            <div className="text-center mb-6">
              <span className="text-3xl font-bold text-gray-900">$99</span>
              <span className="text-gray-600">/month</span>
            </div>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li className="flex items-center">
                <img src="/check.svg" alt="Checkmark" className="h-5 w-5 mr-2" />
                All Pro features
              </li>
              <li className="flex items-center">
                <img src="/check.svg" alt="Checkmark" className="h-5 w-5 mr-2" />
                Custom solutions
              </li>
              <li className="flex items-center">
                <img src="/check.svg" alt="Checkmark" className="h-5 w-5 mr-2" />
                Dedicated support
              </li>
              <li className="flex items-center">
                <img src="/check.svg" alt="Checkmark" className="h-5 w-5 mr-2" />
                SLA guarantee
              </li>
            </ul>
            <button className="w-full bg-gray-100 text-blue-600 py-3 rounded-md font-medium hover:bg-gray-200 transition">
              Contact Sales
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PremiumPage;