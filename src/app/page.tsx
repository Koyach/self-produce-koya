'use client';

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function Home() {
  // Refs for animation elements
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  // Profile data
  const profile = {
    name: "谷 昊埜",
    nameEn: "Koya Tani",
    tagline: "慶應義塾大学SFC | AIアプリ開発者 | アルペンスキー選手",
    mission: "若者の政治参加を促進し、教育格差のない社会を目指す",
    bio: "「若者の政治参加を促進する」をテーマに活動している学生起業家です。高校時代に学生団体「ミラコエ」を設立し、現在も代表として活動を続けています。",
    skills: ["政治教育", "イベント企画", "チームビルディング", "プレゼンテーション", "アルペンスキー"],
    projects: [
      { 
        name: "学生団体ミラコエ", 
        description: "若者の政治参加を促進するために設立した学生団体。300名規模のイベントを開催し、メディアにも多数掲載。", 
        link: "/projects",
        icon: "🗣️"
      },
      { 
        name: "アスラボ", 
        description: "AI技術を活用した探究学習支援プラットフォーム。教育格差の解消を目指す。", 
        link: "/projects",
        icon: "🔬"
      },
    ],
    achievements: [
      "全日本アルペンスキー選手権 出場",
      "ワールドジュニアツアー フリースタイル競技 2位",
      "メディア掲載：TBS京都、Yahoo News、読売新聞"
    ]
  };

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
    [heroRef, aboutRef, skillsRef, projectsRef].forEach(ref => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    // Cleanup
    return () => {
      [heroRef, aboutRef, skillsRef, projectsRef].forEach(ref => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  return (
    <div className="space-y-24"> {/* Increased spacing between sections */}
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-[80vh] flex items-center justify-center py-20 px-4 opacity-0 transition-opacity duration-1000"
      >
        {/* Background with gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 -z-10"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-200 dark:bg-blue-900/20 rounded-full filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-cyan-200 dark:bg-cyan-900/20 rounded-full filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="text-center md:text-left space-y-6 order-2 md:order-1">
            <div className="space-y-3">
              <p className="text-blue-600 dark:text-blue-400 font-medium tracking-wider uppercase text-sm">
                学生起業家 / アルペンスキー選手
              </p>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white">
                <span className="block">{profile.name}</span>
                <span className="block text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mt-2">{profile.nameEn}</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mt-4 max-w-lg mx-auto md:mx-0">
                {profile.mission}
              </p>
            </div>
            
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              {profile.skills.slice(0, 3).map((skill) => (
                <span key={skill} className="bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 px-4 py-2 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 shadow-sm">
                  {skill}
                </span>
              ))}
            </div>
            
            <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link 
                href="/contact" 
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-center"
              >
                お問い合わせ
              </Link>
              <Link 
                href="/about" 
                className="bg-white dark:bg-gray-700 text-gray-800 dark:text-white border border-gray-200 dark:border-gray-600 font-semibold py-3 px-8 rounded-full transition duration-300 hover:bg-gray-50 dark:hover:bg-gray-600 text-center"
              >
                詳しく見る
              </Link>
            </div>
          </div>
          
          {/* Profile image or placeholder */}
          <div className="relative h-64 md:h-96 order-1 md:order-2 flex items-center justify-center">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-blue-400 to-cyan-300 dark:from-blue-600 dark:to-cyan-500 shadow-xl flex items-center justify-center overflow-hidden">
              {/* Replace with actual image when available */}
              <div className="text-white text-6xl font-bold">谷</div>
              {/* <Image 
                src="/profile.jpg" 
                alt="谷 昊埜" 
                width={320} 
                height={320} 
                className="object-cover"
              /> */}
            </div>
            
            {/* Achievement badges */}
            <div className="absolute -bottom-4 -left-4 bg-white dark:bg-gray-700 rounded-lg shadow-lg p-3 animate-float">
              <div className="text-blue-600 dark:text-blue-400 font-bold">300+</div>
              <div className="text-xs text-gray-600 dark:text-gray-300">イベント参加者</div>
            </div>
            <div className="absolute -top-4 -right-4 bg-white dark:bg-gray-700 rounded-lg shadow-lg p-3 animate-float animation-delay-1000">
              <div className="text-blue-600 dark:text-blue-400 font-bold">全国大会</div>
              <div className="text-xs text-gray-600 dark:text-gray-300">スキー選手</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section 
        ref={aboutRef}
        id="about" 
        className="container mx-auto px-4 opacity-0 transition-opacity duration-1000"
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white inline-block relative">
              自己紹介
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-cyan-500 transform -translate-y-2"></span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">若者の政治参加を促進する学生起業家</p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8 md:p-10">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg mb-6">
              {profile.bio}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {profile.achievements.map((achievement, index) => (
                <div 
                  key={index} 
                  className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg border-l-4 border-blue-500 dark:border-blue-400 shadow-md"
                >
                  <p className="text-gray-800 dark:text-gray-200">{achievement}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <Link 
                href="/about" 
                className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
              >
                もっと詳しく
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Preview Section */}
      <section 
        ref={skillsRef}
        id="skills-preview" 
        className="container mx-auto px-4 opacity-0 transition-opacity duration-1000"
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white inline-block relative">
              スキル
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-cyan-500 transform -translate-y-2"></span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">リーダーシップからスキーまで多様なスキルセット</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {profile.skills.map((skill, index) => (
              <div 
                key={skill}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 text-center transform transition-transform hover:scale-105 hover:shadow-lg"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-blue-600 dark:text-blue-400 text-xl font-bold mb-2">{index + 1}</div>
                <div className="text-gray-800 dark:text-gray-200 font-medium">{skill}</div>
              </div>
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <Link 
              href="/skills" 
              className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
            >
              すべてのスキルを見る
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Projects Preview Section */}
      <section 
        ref={projectsRef}
        id="projects-preview" 
        className="container mx-auto px-4 opacity-0 transition-opacity duration-1000"
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white inline-block relative">
              プロジェクト
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-cyan-500 transform -translate-y-2"></span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">社会課題の解決に取り組む主要プロジェクト</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {profile.projects.map((project) => (
              <div 
                key={project.name} 
                className="bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden transform transition-all hover:shadow-2xl hover:-translate-y-1"
              >
                <div className="p-6 md:p-8">
                  <div className="flex items-center mb-4">
                    <span className="text-4xl mr-4">{project.icon}</span>
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white">{project.name}</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-6 min-h-[4rem]">{project.description}</p>
                  <Link 
                    href={project.link} 
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                  >
                    詳細を見る
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <Link 
              href="/projects" 
              className="bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 border border-blue-600 dark:border-blue-400 font-semibold py-3 px-8 rounded-full transition duration-300 hover:bg-blue-50 dark:hover:bg-gray-700"
            >
              すべてのプロジェクトを見る
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-16 rounded-xl shadow-xl">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">一緒に未来を創りませんか？</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            講演依頼、イベント出演、メディア取材、共同プロジェクトなど、お気軽にご連絡ください。
          </p>
          <Link 
            href="/contact" 
            className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-full transition duration-300 hover:bg-gray-100 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-block"
          >
            お問い合わせ
          </Link>
        </div>
      </section>

      {/* Add custom styles for animations */}
      <style jsx global>{`
        @keyframes blob {
          0% { transform: scale(1); }
          33% { transform: scale(1.1); }
          66% { transform: scale(0.9); }
          100% { transform: scale(1); }
        }
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animate-fade-in {
          opacity: 1 !important;
        }
      `}</style>
    </div>
  );
}
