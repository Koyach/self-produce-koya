import Image from 'next/image';

// Component for skill rating visualization
const SkillRating = ({ level }: { level: number }) => {
  return (
    <div className="flex space-x-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <div 
          key={star} 
          className={`w-2 h-8 rounded-sm ${star <= level ? 'bg-blue-500 dark:bg-blue-400' : 'bg-gray-200 dark:bg-gray-600'}`}
        />
      ))}
    </div>
  );
};

// Skill item component with rating
const SkillItem = ({ name, level, description }: { name: string; level: number; description: string }) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center gap-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
      <div className="md:w-1/3">
        <h3 className="font-medium text-gray-900 dark:text-white">{name}</h3>
      </div>
      <div className="md:w-1/3">
        <SkillRating level={level} />
      </div>
      <div className="md:w-1/3 text-sm text-gray-600 dark:text-gray-300">
        {description}
      </div>
    </div>
  );
};

export default function SkillsPage() {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      {/* Page Title */}
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-900 dark:text-white">
        スキル
      </h1>

      {/* Leadership Section */}
      <section className="mb-12 bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 md:p-8">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white border-b pb-2 border-gray-200 dark:border-gray-700">
          リーダーシップ・組織運営
        </h2>
        <div className="space-y-4">
          <SkillItem 
            name="イベント企画・運営" 
            level={5} 
            description="300名規模のイベントを高校生の立場から企画・実行" 
          />
          <SkillItem 
            name="チームビルディング" 
            level={4} 
            description="4人から30人以上へのチーム拡大を実現" 
          />
          <SkillItem 
            name="資金調達" 
            level={4} 
            description="クラウドファンディングで15万円の調達、21社からの協賛獲得" 
          />
          <SkillItem 
            name="メディア対応" 
            level={3} 
            description="テレビ・新聞などのメディア出演、インタビュー対応の経験" 
          />
          <SkillItem 
            name="プレゼンテーション" 
            level={4} 
            description="政治家や企業関係者へのプレゼン経験多数" 
          />
        </div>
      </section>

      {/* Communication Section */}
      <section className="mb-12 bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 md:p-8">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white border-b pb-2 border-gray-200 dark:border-gray-700">
          コミュニケーション
        </h2>
        <div className="space-y-4">
          <SkillItem 
            name="交渉力" 
            level={4} 
            description="国会議員への登壇依頼や企業への協賛依頼などの交渉経験" 
          />
          <SkillItem 
            name="ファシリテーション" 
            level={5} 
            description="政治家シミュレーションや出前授業でのファシリテーション" 
          />
          <SkillItem 
            name="広報活動" 
            level={4} 
            description="SNSを活用した効果的な情報発信とプロモーション" 
          />
          <SkillItem 
            name="対人スキル" 
            level={4} 
            description="多様なバックグラウンドを持つ人々との円滑なコミュニケーション" 
          />
          <SkillItem 
            name="ネットワーキング" 
            level={3} 
            description="政治家、企業、教育機関など幅広い人脈構築" 
          />
        </div>
      </section>

      {/* Technical Skills Section */}
      <section className="mb-12 bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 md:p-8">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white border-b pb-2 border-gray-200 dark:border-gray-700">
          テクニカルスキル
        </h2>
        <div className="space-y-4">
          <SkillItem 
            name="プログラミング" 
            level={2} 
            description="AI活用アプリケーション開発の基礎知識" 
          />
          <SkillItem 
            name="デジタルマーケティング" 
            level={3} 
            description="SNSを活用した団体・イベントのプロモーション" 
          />
          <SkillItem 
            name="コンテンツ制作" 
            level={4} 
            description="Instagram・TikTokでの発信コンテンツの企画・制作" 
          />
          <SkillItem 
            name="データ分析" 
            level={3} 
            description="アンケート結果の分析と活用能力" 
          />
          <SkillItem 
            name="プロジェクト管理" 
            level={4} 
            description="チームでの役割分担と進捗管理" 
          />
        </div>
      </section>

      {/* Sports Section */}
      <section className="mb-12 bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 md:p-8">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white border-b pb-2 border-gray-200 dark:border-gray-700">
          スポーツ
        </h2>
        <div className="space-y-4">
          <SkillItem 
            name="アルペンスキー" 
            level={5} 
            description="競技レベルの技術と経験" 
          />
          <SkillItem 
            name="フリースタイルスキー" 
            level={4} 
            description="国際大会での実績" 
          />
          <SkillItem 
            name="チームスポーツ" 
            level={3} 
            description="スキーを通じたチームワークの経験" 
          />
        </div>
      </section>

      {/* Language Section */}
      <section className="mb-12 bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 md:p-8">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white border-b pb-2 border-gray-200 dark:border-gray-700">
          言語・コミュニケーション
        </h2>
        <div className="space-y-4">
          <SkillItem 
            name="日本語" 
            level={5} 
            description="ネイティブ" 
          />
          <SkillItem 
            name="英語" 
            level={3} 
            description="日常会話・読み書きレベル（TOEIC 595点）" 
          />
          <SkillItem 
            name="発表・プレゼン" 
            level={5} 
            description="大規模イベントでの司会・進行経験" 
          />
          <SkillItem 
            name="文章作成" 
            level={4} 
            description="企画書、報告書、メディア向け資料作成の経験" 
          />
        </div>
      </section>

      {/* Mindset Section */}
      <section className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 md:p-8">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white border-b pb-2 border-gray-200 dark:border-gray-700">
          マインドセット・個性
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
            <h3 className="font-medium text-blue-700 dark:text-blue-300 mb-2">行動力</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              アイデアを迅速に実行に移す積極性
            </p>
          </div>
          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
            <h3 className="font-medium text-green-700 dark:text-green-300 mb-2">忍耐力</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              困難な状況でも諦めずに粘り強く取り組む姿勢
            </p>
          </div>
          <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
            <h3 className="font-medium text-purple-700 dark:text-purple-300 mb-2">柔軟性</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              状況に応じた臨機応変な対応力
            </p>
          </div>
          <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
            <h3 className="font-medium text-yellow-700 dark:text-yellow-300 mb-2">創造性</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              社会課題に対する革新的な解決策の提案
            </p>
          </div>
          <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg md:col-span-2">
            <h3 className="font-medium text-red-700 dark:text-red-300 mb-2">好奇心</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              幅広い分野への興味と学びの姿勢
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
