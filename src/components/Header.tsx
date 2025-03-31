import Link from 'next/link';
// LocaleSwitcher and useTranslations imports removed

export default function Header() {
  // Navigation links in Japanese
  const navLinks = [
    { href: '/about', label: '自己紹介' },
    { href: '/activities', label: '活動実績' },
    { href: '/skills', label: 'スキル' },
    { href: '/projects', label: 'プロジェクト' },
    { href: '/blog', label: 'ブログ' },
    { href: '/contact', label: 'お問い合わせ' },
  ];

  return (
    <header className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo/Brand Name */}
        <Link href="/" className="text-xl font-semibold text-gray-800 dark:text-white">
          谷口 皓哉 {/* TODO: Replace with actual name/logo if different */}
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white rounded"
            >
              {link.label}
            </Link>
          ))}
          {/* LocaleSwitcher removed */}
        </div>

        {/* Mobile Menu Button (Placeholder) */}
        <div className="md:hidden flex items-center">
           {/* LocaleSwitcher removed */}
           {/* TODO: Implement mobile menu toggle button */}
          <button className="ml-4 text-gray-600 dark:text-gray-300 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
          </button>
        </div>
      </nav>
      {/* TODO: Implement Mobile Menu Panel */}
    </header>
  );
}
