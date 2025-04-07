export default function ActivitiesPage() {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      {/* Page Title */}
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-900 dark:text-white">
        活動実績
      </h1>

      {/* Education Section */}
      <section className="mb-12 bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 md:p-8">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white border-b pb-2 border-gray-200 dark:border-gray-700">
          教育・学歴
        </h2>
        <ul className="space-y-4 text-gray-700 dark:text-gray-300 list-disc pl-5">
          <li>慶應義塾大学SFC（湘南藤沢キャンパス）総合政策学部（2025年4月〜）</li>
          <li>同志社高等学校 卒業（2022年4月〜2025年3月）</li>
          <li>同志社中学校 卒業</li>
        </ul>
      </section>

      {/* Miracoe Section */}
      <section className="mb-12 bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 md:p-8">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white border-b pb-2 border-gray-200 dark:border-gray-700">
          学生団体ミラコエの設立と運営
        </h2>
        
        {/* Main Achievements */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">主な功績</h3>
          <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            <li className="flex items-start">
              <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
              <span><strong>2024年9月：</strong>学生団体「ミラコエ」を設立、代表に就任</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
              <div>
                <strong>2025年2月：</strong>「若者による若者のためのミライ選挙」を開催（参加者300名超）
                <ul className="pl-5 mt-2 space-y-1 text-gray-600 dark:text-gray-400">
                  <li>5つの国政政党から国会議員を招き、討論と模擬投票を実施</li>
                  <li>アンケート結果：97%が「また参加したい」と回答、全体評価8.45/10</li>
                </ul>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
              <span><strong>メンバー数：</strong>当初4名からスタートし、現在は30名以上に拡大</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
              <span><strong>協賛実績：</strong>21企業・団体から協賛を獲得</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
              <span><strong>メディア掲載：</strong>TBS京都、Yahoo News、読売新聞、京都新聞など</span>
            </li>
          </ul>
        </div>
        
        {/* Events */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">主なイベント開催実績</h3>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4 py-1">
              <p className="font-medium text-gray-800 dark:text-gray-200">2025年2月16日</p>
              <p className="text-gray-700 dark:text-gray-300">「若者による若者のためのミライ選挙」（同志社高校）</p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4 py-1">
              <p className="font-medium text-gray-800 dark:text-gray-200">2025年2月3日</p>
              <p className="text-gray-700 dark:text-gray-300">「京都を形作る」政策立案ワークショップ（同志社高校）</p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4 py-1">
              <p className="font-medium text-gray-800 dark:text-gray-200">2025年1月20日</p>
              <p className="text-gray-700 dark:text-gray-300">「政治家シミュレーション」（立命館宇治高校）</p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4 py-1">
              <p className="font-medium text-gray-800 dark:text-gray-200">2025年2月〜3月</p>
              <p className="text-gray-700 dark:text-gray-300">「つくろう。未来。」出前授業プロジェクト（複数の中学校）</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sports Section */}
      <section className="mb-12 bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 md:p-8">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white border-b pb-2 border-gray-200 dark:border-gray-700">
          スポーツ活動
        </h2>
        <ul className="space-y-3 text-gray-700 dark:text-gray-300">
          <li className="flex items-start">
            <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
            <span>全日本アルペンスキー選手権 出場</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
            <span>全国高等学校総合体育大会（インターハイ）スキー競技 出場（2023年、2024年）</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
            <span>ワールドジュニアツアー フリースタイル競技 2位</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
            <span>京都府スキー選手権大会 3位（2023年、2024年）</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
            <span>日本スキー連盟（SAJ）および国際スキー連盟（FIS）登録選手</span>
          </li>
        </ul>
      </section>

      {/* Other Activities Section */}
      <section className="mb-12 bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 md:p-8">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white border-b pb-2 border-gray-200 dark:border-gray-700">
          その他の活動
        </h2>
        <ul className="space-y-3 text-gray-700 dark:text-gray-300">
          <li className="flex items-start">
            <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
            <span>同志社高校岩倉祭：総監督を務め準優勝（1年次）</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
            <span>同志社高校岩倉祭：クラス代表者として応援合戦優勝、演劇優良賞獲得（2年次）</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
            <span>JOFのキャンプリーダーボランティア活動</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
            <span>アメリカからのホームステイ受け入れ、国際交流活動</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
            <span>AIを活用したゴミ分別アプリケーションの開発</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
            <span>モノコト イノベーションコンテスト：5位入賞</span>
          </li>
        </ul>
      </section>

      {/* Certifications Section */}
      <section className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 md:p-8">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white border-b pb-2 border-gray-200 dark:border-gray-700">
          資格・検定
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
            <h3 className="font-medium text-gray-800 dark:text-gray-200">TOEIC L&Rテスト</h3>
            <p className="text-gray-700 dark:text-gray-300">595点</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
            <h3 className="font-medium text-gray-800 dark:text-gray-200">スキー検定</h3>
            <p className="text-gray-700 dark:text-gray-300">1級</p>
          </div>
        </div>
      </section>
    </div>
  );
}
