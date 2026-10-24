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
  music: {
    title: "音楽もつくっています",
    lead: "アプリとは別に、音楽の活動もしています。",
    label: "MOTION IMAGING",
    artists: [
      {
        id: "jakesolano",
        name: "JAKE SOLANO",
        kind: "シティポップ / R&B / バラード",
        summary: "島と夜景の景色を歌う、日本語のシティポップ",
        note: "歌は本人。制作にAIツールも活用",
        theme: "jakesolano",
        links: [
          {
            label: "YouTube",
            url: "https://www.youtube.com/@JAKESOLANO_OFFICIAL",
          },
          {
            label: "TikTok",
            url: "https://www.tiktok.com/@jakesolano_official",
          },
          {
            label: "Spotifyで聴く",
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
        theme: "vert5x",
        links: [
          {
            label: "YouTube",
            url: "https://www.youtube.com/@vert5x_official",
          },
          {
            // メンバーJONGJINのアカウントで運用
            label: "TikTok",
            url: "https://www.tiktok.com/@jongjin_vert5x",
          },
          {
            label: "Spotifyで聴く",
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
