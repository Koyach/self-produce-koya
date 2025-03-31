'use client'; // Mark as client component

import Link from 'next/link';
import { useState, useEffect } from 'react'; // Import useState and useEffect

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear()); // Initialize state

  useEffect(() => {
    // Update year on client mount to ensure consistency
    setCurrentYear(new Date().getFullYear());
  }, []); // Empty dependency array ensures this runs only once on mount

  // Placeholder SNS links - replace with actual links later
  const snsLinks = [
    { href: 'https://twitter.com/Koyach777', label: 'X (Twitter)' },
    { href: 'https://www.instagram.com/koyatani_0828/', label: 'Instagram (Personal)' },
    { href: 'https://www.instagram.com/koyach._.skii/', label: 'Instagram (Ski)' },
    // Add other links like LinkedIn, GitHub etc.
  ];

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-400 py-8 mt-16">
      <div className="container mx-auto px-6 text-center">
        <div className="mb-4 flex justify-center space-x-6">
          {snsLinks.map((link) => (
            <Link key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 dark:hover:text-white transition-colors">
              {link.label} {/* Consider using icons later */}
            </Link>
          ))}
        </div>
        <p className="text-sm">
          &copy; {currentYear} [Your Name]. All rights reserved. {/* TODO: Replace with actual name */}
        </p>
        <p className="text-xs mt-2">
          {/* Optional: Add links to privacy policy, terms, etc. */}
        </p>
      </div>
    </footer>
  );
}
