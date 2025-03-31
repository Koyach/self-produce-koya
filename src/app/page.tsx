import Image from "next/image"; // Keep Image import if needed for profile picture etc.

export default function Home() {
  // TODO: Fetch actual profile data from Contentful later
  const profile = {
    name: "Koya Taniguchi", // Replace with dynamic data
    tagline: "慶應義塾大学SFC | AIアプリ開発者 | アルペンスキー選手", // Replace
    bio: "ここにあなたの経歴、興味、目標などを詳しく書いてください。どのような人物で、何に情熱を持っているのかを伝えましょう。", // Replace
    skills: ["TypeScript", "React", "Next.js", "Python"], // Replace
    projects: [ // Replace with actual projects
      { name: "学生団体ミラコエ", description: "模擬投票イベントの成果、メディア掲載実績など", link: "#" },
      { name: "AIゴミ分別アプリ", description: "開発状況、使用技術、得られた知見など", link: "#" },
    ],
    contactEmail: "inbox.ktani@gmail.com" // Replace
  };

  return (
    // Using Tailwind CSS classes for styling based on BESS site inspiration (formal, photo-centric)
    // Adjust styling as needed
    <div className="space-y-16"> {/* Add vertical spacing between sections */}

      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-r from-blue-50 via-white to-cyan-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 rounded-lg shadow-lg">
         {/* TODO: Add a profile picture here */}
        {/* <Image src="/profile.jpg" alt="Koya Taniguchi" width={150} height={150} className="rounded-full mx-auto mb-6 border-4 border-white dark:border-gray-700 shadow-md" /> */}
        <h1 className="text-4xl md:text-5xl font-bold mb-3 text-gray-900 dark:text-white">{profile.name}</h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8">{profile.tagline}</p>
        {/* Optional: Add a brief intro or CTA button */}
         <a href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full transition duration-300">
           連絡する
         </a>
      </section>

      {/* About Section */}
      <section id="about" className="p-8 bg-white dark:bg-gray-800 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800 dark:text-white">自己紹介</h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-center max-w-3xl mx-auto">
          {profile.bio} {/* TODO: Fetch from CMS and use rich text rendering */}
        </p>
      </section>

      {/* Skills Section */}
      <section id="skills" className="p-8 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800 dark:text-white">スキル</h2>
        <ul className="flex flex-wrap justify-center gap-4">
          {profile.skills.map((skill) => (
            <li key={skill} className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-full text-sm font-medium shadow">
              {skill}
            </li>
          ))}
        </ul>
      </section>

       {/* Activities/Projects Section (Combined or separate as needed) */}
      <section id="projects" className="p-8 bg-white dark:bg-gray-800 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold mb-8 text-center text-gray-800 dark:text-white">活動とプロジェクト</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {profile.projects.map((project) => (
            <div key={project.name} className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
               {/* TODO: Add project images */}
              <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">{project.name}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
                詳細を見る
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* TODO: Add other sections like Blog/News preview, Contact Form (on contact page) */}

    </div>
  );
}
