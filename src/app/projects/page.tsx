import Image from 'next/image';
import Link from 'next/link';

// Project card component
const ProjectCard = ({ 
  title, 
  description, 
  imageUrl, 
  children 
}: { 
  title: string; 
  description: string; 
  imageUrl: string; 
  children: React.ReactNode;
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
      <div className="relative h-48 w-full bg-gray-200 dark:bg-gray-700">
        {/* Placeholder for project image */}
        <div className="absolute inset-0 flex items-center justify-center text-gray-500 dark:text-gray-400">
          {imageUrl ? (
            <Image 
              src={imageUrl} 
              alt={title} 
              fill 
              className="object-cover"
            />
          ) : (
            <span className="text-sm">画像準備中</span>
          )}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
        <div className="space-y-4">
          {children}
        </div>
      </div>
    </div>
  );
};

// Feature list component
const FeatureList = ({ title, items }: { title: string; items: string[] }) => {
  return (
    <div className="mt-4">
      <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-2">{title}</h4>
      <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400 text-sm space-y-1">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default function ProjectsPage() {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      {/* Page Title */}
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-900 dark:text-white">
        プロジェクト
      </h1>

      <div className="space-y-12">
        {/* Miracoe Project */}
        <section>
          <ProjectCard 
            title="ミラコエ（ミライを創るコエ）" 
            description="若者の政治参加を促進するために設立した学生団体です。" 
            imageUrl="/api/placeholder/400/200"
          >
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-2">概要</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  「ミラコエ」は「ミライを創るコエ」の略称で、若者の政治参加を促進するために設立した学生団体です。若者の政治離れや低投票率が問題視される中、教育現場での政治的中立性への過度な配慮から生じる「政治について話しづらい風潮」を変えることを目指しています。
                </p>
              </div>

              <div>
                <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-2">目標</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  「国民（特に若者）が政治を身近に感じ、政治や情勢について議論しやすい風潮に変える」ことをミッションとしています。
                </p>
              </div>

              <FeatureList 
                title="主な活動" 
                items={[
                  "ミライ選挙：実際の国会議員を招いて政策討論を行い、参加者が模擬投票を行うイベント",
                  "政治家シミュレーション：参加者が政治家の立場に立ち、政策立案のプロセスを体験するワークショップ",
                  "出前授業「つくろう。未来。」：中学校での主権者教育を目的とした出前授業プロジェクト",
                  "SNSでの情報発信：Instagram、TikTok、X（旧Twitter）を活用した政治や政策の解説"
                ]} 
              />

              <FeatureList 
                title="成果" 
                items={[
                  "参加者300名以上のイベントを複数回開催",
                  "メディア掲載：TBS京都、Yahoo News、読売新聞、京都新聞など",
                  "クラウドファンディングで15万円の資金調達",
                  "21企業・団体からの協賛獲得",
                  "メンバー数30名以上への拡大"
                ]} 
              />

              <div>
                <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-2">今後の展望</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  今後は関東・関西の二拠点を中心に全国展開を目指しています。第二回ミライ選挙の開催、全国の中学校・高校での出前授業の拡大、地域課題解決アイデアイベントなどを計画中です。
                </p>
              </div>
            </div>
          </ProjectCard>
        </section>

        {/* Asulab Project */}
        <section>
          <ProjectCard 
            title="アスラボ（明日を、作る研究所）" 
            description="AI技術を活用した探究学習支援プラットフォームの構想です。" 
            imageUrl="/api/placeholder/400/200"
          >
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-2">概要</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  「アスラボ」は、AI技術を活用した探究学習支援プラットフォームの構想です。慶應義塾大学SFCに進学後、本格的に取り組むプロジェクトとして準備を進めています。
                </p>
              </div>

              <div>
                <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-2">目標</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  「すべての若者が等しく質の高い探究学習の機会を得られる社会」の実現を目指しています。地域や家庭の経済状況による教育格差を解消し、一人ひとりの興味関心に合わせた探究学習を支援します。
                </p>
              </div>

              <FeatureList 
                title="特徴" 
                items={[
                  "AIを活用した興味関心の発見と可視化",
                  "同じ興味を持つ仲間とのマッチング機能",
                  "AI×人間のハイブリッド支援モデル",
                  "探究から進路接続までの一気通貫サポート"
                ]} 
              />

              <div>
                <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-2">開発状況</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  現在、AIを活用した学習支援ツールのプロトタイプを開発中で、テスト利用者への提供を開始する予定です。今後は、MVPの開発と実証実験を経て、本格的なサービス展開を目指します。
                </p>
              </div>
            </div>
          </ProjectCard>
        </section>

        {/* Surname Lawsuit Project */}
        <section>
          <ProjectCard 
            title="選択的夫婦別姓訴訟関連活動" 
            description="社会の不公平に声を上げることの重要性を学んだ経験です。" 
            imageUrl=""
          >
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-2">概要</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  私の母親は2015年の選択的夫婦別姓訴訟の原告の一人でした。この経験から、社会の不公平に声を上げることの重要性を学び、自分自身も若者の政治参加という課題に取り組むようになりました。
                </p>
              </div>

              <div>
                <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-2">活動内容</h4>
                <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400 text-sm space-y-1">
                  <li>母親の活動から学んだ「声をあげる大切さ」を若者の政治参加促進に活かしています</li>
                  <li>選択的夫婦別姓の問題も含め、様々な社会課題について若者が考え、議論する場を提供</li>
                </ul>
              </div>
            </div>
          </ProjectCard>
        </section>

        {/* AI Garbage Sorting App Project */}
        <section>
          <ProjectCard 
            title="AIゴミ分別アプリ開発" 
            description="環境問題への関心から開発しているアプリケーションです。" 
            imageUrl=""
          >
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-2">概要</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  環境問題への関心から、アップロードされた画像からAIがゴミの種類を判別するアプリケーションを開発しています。技術を活用して社会課題を解決するアプローチの一環として取り組んでいます。
                </p>
              </div>

              <div>
                <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-2">開発状況</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  プロトタイプの開発を進め、今後は機能の拡充とユーザーテストを計画しています。
                </p>
              </div>
            </div>
          </ProjectCard>
        </section>
      </div>
    </div>
  );
}
