// ============================================================
// Motion Imaging Lab サイト設定
// 文言やリンクを変えたいときは、このファイルだけ直せばOK
// ============================================================

// アプリへのリンクに付ける計測用パラメータ（どこから来たか分かるようにする）
const UTM = "utm_source=scad_apps_lab&utm_medium=referral&utm_campaign=top";

export const site = {
  name: "Motion Imaging Lab",
  url: "https://scad-apps-lab.vercel.app",
  description:
    "写真を撮ってきた個人開発者が、AIと一緒に企画から公開・改善まで手がけるWebアプリの実験場。婚活AIのスクアド、パーソナルカラー診断のイロナビ、今夜の店探しヨイナビ、街コン運営のSCADコネクト。",

  hero: {
    lines: ["AIで、", "思いついたサービスを", "形にする。"],
    lead: "企画から公開、改善まで。写真を撮ってきた人間が、AIを相棒にひとりで作っています。",
    cta: "アプリを使ってみる",
    // ヒーロー写真の撮影地（写真の右下に小さく出ます）。不要なら "" にする
    caption: "",
  },

  apps: [
    {
      id: "sukuado",
      name: "スクアド",
      nameEn: "SCAD CHAT",
      category: "恋愛・婚活",
      summary: "トーク画面のスクショを送るだけ。",
      description:
        "やり取りの流れをAIが読み取り、返信の文面だけでなく、送るタイミングまで提案します。",
      badge: "特許出願済み",
      url: `https://scad-chat.vercel.app/?${UTM}`,
      mark: "ス",
      theme: "sukuado",
    },
    {
      id: "beauty",
      name: "イロナビ",
      nameEn: "IRONAVI",
      category: "美容",
      summary: "写真1枚で、似合う色がわかる。",
      description:
        "顔写真からパーソナルカラーを診断し、服やメイクに使いやすい色を提案します。",
      badge: "",
      url: `https://scad-beauty.vercel.app/?${UTM}`,
      mark: "イ",
      theme: "beauty",
    },
    {
      id: "solo",
      name: "ヨイナビ",
      nameEn: "YOI NAVI",
      category: "今夜の店探し",
      summary: "ソロも、グループも、デートも。行く店がすぐ決まる。",
      description:
        "東京23区で、シーンに合わせて今夜行ける居酒屋やバーを探せます。ドリンクルーレットなどのゲームで、飲みの時間をもう少し楽しく。",
      badge: "",
      url: `https://scad-solo.vercel.app/?${UTM}`,
      mark: "ヨ",
      theme: "solo",
    },
    {
      id: "partyconnect",
      name: "SCADコネクト",
      nameEn: "SCAD CONNECT",
      category: "街コン運営",
      summary: "チェックインからマッチングまで、これ1つで回せる。",
      description:
        "街コン・イベントの受付・チェックインからマッチング成立の発表まで、主催者がその場で進行できる運営サポートシステムです。",
      badge: "",
      url: `https://scad-partyconnect.vercel.app/?${UTM}`,
      mark: "コ",
      theme: "partyconnect",
    },
    {
      id: "caption",
      name: "SCAD Caption Pro",
      nameEn: "SCAD CAPTION PRO",
      category: "投稿文づくり",
      summary: "写真1枚から、SNSの投稿文をまとめて作る。",
      description:
        "写真を1枚選ぶだけで、X・Instagram・YouTubeショート・TikTok向けの投稿文とハッシュタグを一括生成します。無料で1日3回まで試せます。",
      badge: "",
      url: `https://scad-caption-pro.vercel.app/?${UTM}`,
      mark: "キ",
      theme: "caption",
    },
  ],

  // 音楽活動（2つは別々の活動。表示は上から順に並ぶ。混ぜない）
  // トップには短い紹介だけを出し、詳しくは /music のページで見せる
  music: {
    title: "音楽もつくっています",
    lead: "アプリとは別に、2つの音楽活動をしています。",
    pageTitle: "2つの音楽活動",
    pageLead:
      "MOTION IMAGINGがプロデュースする、JAKE SOLANOとVERT5X。動画はYouTubeとTikTokで公開しています。",
    label: "MOTION IMAGING",
    artists: [
      {
        id: "jakesolano",
        name: "JAKE SOLANO",
        kind: "シティポップ / R&B / バラード",
        summary: "島と夜景の景色を歌う、日本語のシティポップ",
        note: "歌は本人。制作にAIツールも活用",
        // 活動の内容・設定（段落ごと）
        story: [
          "JAKE SOLANO（ジェイク・ソラノ）は、Jake自身が歌う音楽名義です。",
          "テーマは、島の海辺と街の夜景。写真を撮ってきた目で見た景色を、日本語のシティポップ・R&B・バラードにしています。",
        ],
        theme: "jakesolano",
        image: "/images/music/jakesolano.webp",
        imageAlt: "JAKE SOLANOのイメージ写真（AI生成）",
        imageNote: "AI生成イメージ",
        // YouTubeのチャンネルID（UCで始まる24文字）を入れると、最新の動画が自動で並ぶ。
        // 空のままなら、チャンネルへのリンクだけを出す
        youtubeChannelId: "",
        tiktokHandle: "jakesolano_official",
        platforms: [
          {
            label: "YouTube",
            handle: "@JAKESOLANO_OFFICIAL",
            use: "MV・楽曲の動画",
            url: "https://www.youtube.com/@JAKESOLANO_OFFICIAL",
          },
          {
            label: "TikTok",
            handle: "@jakesolano_official",
            use: "ショート動画",
            url: "https://www.tiktok.com/@jakesolano_official",
          },
          {
            label: "Spotify",
            handle: "プレイリスト",
            use: "楽曲を聴く",
            url: "https://open.spotify.com/playlist/3JmskRtzTFZOV6SE9gYTMI",
          },
        ],
      },
      {
        id: "vert5x",
        name: "VERT5X",
        reading: "バーテックス",
        kind: "K-POP男性グループ（架空）",
        summary: "AIから生まれた、赤と黒のK-POP男性グループ（架空）",
        note: "AIで制作した楽曲。VERT5XはAIペルソナ（架空のグループ）",
        story: [
          "VERT5X（バーテックス）は、Jakeがプロデュースする、AIから生まれた架空のK-POP男性グループです。",
          "ブランドカラーは赤と黒。楽曲もビジュアルもAIで制作しています。メンバーはAIペルソナで、実在の人物・グループではありません。",
          "TikTokは、メンバーのJONGJINのアカウントで発信しています。",
        ],
        theme: "vert5x",
        image: "/images/music/vert5x.webp",
        imageAlt: "VERT5Xのイメージ写真（AI生成・架空のグループ）",
        imageNote: "AI生成・架空のグループ",
        youtubeChannelId: "",
        tiktokHandle: "jongjin_vert5x",
        platforms: [
          {
            label: "YouTube",
            handle: "@vert5x_official",
            use: "MV・楽曲の動画",
            url: "https://www.youtube.com/@vert5x_official",
          },
          {
            // メンバーJONGJINのアカウントで運用
            label: "TikTok",
            handle: "@jongjin_vert5x",
            use: "ショート動画（JONGJIN）",
            url: "https://www.tiktok.com/@jongjin_vert5x",
          },
          {
            label: "Spotify",
            handle: "プレイリスト",
            use: "楽曲を聴く",
            url: "https://open.spotify.com/playlist/293EagrTDDmgcXolSHMRsD",
          },
        ],
      },
    ],
  },

  about: {
    title: "写真を撮ってきた人間が、\nAIを相棒にアプリを作っています。",
    body: [
      "ずっと写真を撮ってきました。いまはそこに生成AIを加えて、「こんなものがあったらいい」を自分の手でWebアプリにしています。",
      "コードを書くのはAIです。何を作るか、どう見せるか、公開して使ってもらった反応をどう直すか。そこを決めるのが自分の仕事です。",
    ],
    flow: ["アイデア", "AIと相談", "設計", "開発", "公開", "改善"],
  },

  gallery: {
    title: "写真",
    lead: "アプリづくりの土台にある、本業の仕事です。",
  },

  sns: [
    {
      label: "Instagram",
      handle: "@motion.imaging",
      url: "https://www.instagram.com/motion.imaging/",
    },
  ],
};
