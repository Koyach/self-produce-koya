'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';

export default function AboutPage() {
  // Refs for animation elements
  const titleRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const interestsRef = useRef<HTMLDivElement>(null);
  const missionRef = useRef<HTMLDivElement>(null);

  // Intersection Observer for animations
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    // Observe all section refs
    [titleRef, profileRef, aboutRef, interestsRef, missionRef].forEach(ref => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    // Cleanup
    return () => {
      [titleRef, profileRef, aboutRef, interestsRef, missionRef].forEach(ref => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      {/* Page Title */}
      <div 
        ref={titleRef} 
        className="text-center mb-16 opacity-0 transition-opacity duration-1000"
      >
        <h1 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white inline-block relative">
          自己紹介
          <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-cyan-500 transform -translate-y-2"></span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          若者の政治参加を促進する学生起業家
        </p>
      </div>

      {/* Profile Section */}
      <section 
        ref={profileRef} 
        className="mb-16 bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8 md:p-10 opacity-0 transition-opacity duration-1000"
      >
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
          <div className="w-48 h-48 md:w-56 md:h-56 relative rounded-full overflow-hidden flex-shrink-0 border-4 border-gray-200 dark:border-gray-700 shadow-lg">
            {/* Placeholder for profile image - replace with actual image when available */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-300 dark:from-blue-600 dark:to-cyan-500 flex items-center justify-center text-white text-4xl font-bold">
              谷
            </div>
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white">
              谷 昊埜（たに こうや）
            </h2>
            <div className="flex flex-wrap gap-3 mb-4">
              <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-medium">
                慶應義塾大学SFC
              </span>
              <span className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-3 py-1 rounded-full text-sm font-medium">
                学生起業家
              </span>
              <span className="bg-cyan-100 dark:bg-cyan-900/30 text-cyan-800 dark:text-cyan-300 px-3 py-1 rounded-full text-sm font-medium">
                アルペンスキー選手
              </span>
            </div>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              はじめまして、谷 昊埜（たに こうや）と申します。2006年8月28日生まれ、同志社高等学校を卒業し、現在は慶應義塾大学SFC（湘南藤沢キャンパス）総合政策学部に在籍しています。
            </p>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section 
        ref={aboutRef} 
        className="mb-16 bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8 md:p-10 opacity-0 transition-opacity duration-1000"
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 dark:text-white inline-block relative">
          私について
          <span className="absolute bottom-0 left-0 w-1/3 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 transform -translate-y-2"></span>
        </h2>
        <div className="text-gray-700 dark:text-gray-300 space-y-6 text-lg leading-relaxed">
          <p>
            私は「若者の政治参加を促進する」をテーマに活動している学生起業家です。高校時代に学生団体「ミラコエ」を設立し、現在も代表として活動を続けています。
          </p>
          <p>
            ミラコエでは、若者が政治を身近に感じ、政治や情勢について議論しやすい風潮を作ることを目指して、様々なイベントや情報発信を行っています。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 text-base">
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg border-l-4 border-blue-500 dark:border-blue-400 shadow-md transform transition-transform hover:scale-105">
              <p className="font-medium">全日本アルペンスキー選手権 出場</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg border-l-4 border-green-500 dark:border-green-400 shadow-md transform transition-transform hover:scale-105">
              <p className="font-medium">ワールドジュニアツアー 2位</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg border-l-4 border-purple-500 dark:border-purple-400 shadow-md transform transition-transform hover:scale-105">
              <p className="font-medium">メディア多数掲載</p>
            </div>
          </div>
        </div>
      </section>

      {/* Interests Section */}
      <section 
        ref={interestsRef} 
        className="mb-16 bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8 md:p-10 opacity-0 transition-opacity duration-1000"
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 dark:text-white inline-block relative">
          興味・関心分野
          <span className="absolute bottom-0 left-0 w-1/3 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 transform -translate-y-2"></span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-900/40 p-6 rounded-xl shadow-md transform transition-all hover:shadow-lg">
            <div className="flex items-start mb-4">
              <span className="inline-flex items-center justify-center bg-blue-500 text-white rounded-full p-3 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </span>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">政治教育</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  若者の投票率向上や政治リテラシーの向上に関心があります。
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-900/40 p-6 rounded-xl shadow-md transform transition-all hover:shadow-lg">
            <div className="flex items-start mb-4">
              <span className="inline-flex items-center justify-center bg-green-500 text-white rounded-full p-3 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </span>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">社会起業</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  教育格差の解消や主権者教育の普及に取り組んでいます。
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-900/40 p-6 rounded-xl shadow-md transform transition-all hover:shadow-lg">
            <div className="flex items-start mb-4">
              <span className="inline-flex items-center justify-center bg-purple-500 text-white rounded-full p-3 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </span>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">テクノロジー</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  AIを活用した教育プラットフォームの開発に挑戦中です。
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 dark:from-cyan-900/20 dark:to-cyan-900/40 p-6 rounded-xl shadow-md transform transition-all hover:shadow-lg">
            <div className="flex items-start mb-4">
              <span className="inline-flex items-center justify-center bg-cyan-500 text-white rounded-full p-3 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </span>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">スキー</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  アルペンスキー競技の選手として全国大会にも出場しています。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section 
        ref={missionRef} 
        className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl shadow-xl p-8 md:p-10 opacity-0 transition-opacity duration-1000"
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-6 border-b pb-2 border-white/20">
          目指すもの
        </h2>
        <div className="space-y-6 text-lg leading-relaxed">
          <p>
            「国民（特に若者）が政治を身近に感じ、政治や情勢について議論しやすい風潮を作る」ことが私のミッションです。
          </p>
          <p>
            さらに教育の分野では、AI技術を活用して「すべての若者が等しく質の高い探究学習の機会を得られる社会」を実現したいと考えています。
          </p>
          <p className="font-medium text-xl">
            テクノロジーの力で社会課題を解決し、より良い未来を創るために、常に行動し挑戦し続けることを心がけています。
          </p>
        </div>
      </section>

      {/* Add custom styles for animations */}
      <style jsx global>{`
        .animate-fade-in {
          opacity: 1 !important;
        }
      `}</style>
    </div>
  );
}
