'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Navigation links in Japanese
  const navLinks = [
    { href: '/about', label: '自己紹介' },
    { href: '/activities', label: '活動実績' },
    { href: '/skills', label: 'スキル' },
    { href: '/projects', label: 'プロジェクト' },
    { href: '/blog', label: 'ブログ' },
    { href: '/contact', label: 'お問い合わせ' },
  ];

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when path changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <header 
      className={`bg-white dark:bg-gray-800 sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'shadow-md py-2' : 'py-4'
      }`}
    >
      <nav className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo/Brand Name */}
        <Link 
          href="/" 
          className="text-xl font-bold text-gray-800 dark:text-white transition-transform duration-300 hover:scale-105 focus:scale-105"
        >
          <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">谷　昊埜</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || 
                            (link.href !== '/' && pathname?.startsWith(link.href));
            
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-md transition-all duration-300 relative group ${
                  isActive 
                    ? 'text-blue-600 dark:text-blue-400 font-medium' 
                    : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 dark:bg-blue-400 rounded-full"></span>
                )}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 rounded-full transition-all duration-300 group-hover:w-full"></span>
              </Link>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button 
            className="text-gray-600 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md p-1"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Panel */}
      <div 
        className={`md:hidden bg-white dark:bg-gray-800 overflow-hidden transition-all duration-300 ${
          isMenuOpen ? 'max-h-96 shadow-lg' : 'max-h-0'
        }`}
      >
        <div className="container mx-auto px-6 py-4 space-y-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || 
                            (link.href !== '/' && pathname?.startsWith(link.href));
            
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-4 py-3 rounded-md transition-colors ${
                  isActive 
                    ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 font-medium' 
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>
    </header>
  );
}
