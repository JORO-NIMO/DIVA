'use client';

import Link from 'next/link';
import { useState } from 'react';
import Logo from './Logo';

export default function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              <Logo className="h-12" withText={true} />
            </Link>
          </div>
          <div className="hidden md:flex space-x-8 items-center">
            <Link href="/" className="text-gray-700 hover:text-primary-gold transition-colors uppercase text-sm font-medium">Home</Link>
            <Link href="/shop" className="text-gray-700 hover:text-primary-gold transition-colors uppercase text-sm font-medium">Shop</Link>
            <Link href="/about" className="text-gray-700 hover:text-primary-gold transition-colors uppercase text-sm font-medium">About</Link>
            <Link href="/contact" className="text-gray-700 hover:text-primary-gold transition-colors uppercase text-sm font-medium">Contact</Link>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              {isSearchOpen && (
                <input
                  type="text"
                  placeholder="Search watches..."
                  className="absolute right-8 top-1/2 transform -translate-y-1/2 w-48 border border-gray-300 rounded-md px-3 py-1 text-sm focus:outline-none focus:border-primary-gold"
                  autoFocus
                  onBlur={() => setIsSearchOpen(false)}
                />
              )}
              <button onClick={() => setIsSearchOpen(!isSearchOpen)} className="text-gray-700 hover:text-primary-gold focus:outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
            <button className="text-gray-700 hover:text-primary-gold">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
