import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from '@/components/Header'; // Use alias @/ for cleaner imports
import Footer from '@/components/Footer';
import { ReactNode } from 'react'; // Import ReactNode

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Update metadata for Japanese site
export const metadata: Metadata = {
  title: "谷昊埜 ポートフォリオ", // Example Japanese title
  description: "谷昊埜の活動実績やスキルを紹介するウェブサイトです。", // Example Japanese description
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode; // Use ReactNode type
}>) {
  return (
    <html lang="ja">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Integrate Header and Footer from LocaleLayout */}
        <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100">
          <Header />
          <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
