// ============================================================
// SCAD AI LAB サイト設定
// 文言やリンクを変えたいときは、このファイルだけ直せばOK
// ============================================================

// アプリへのリンクに付ける計測用パラメータ（どこから来たか分かるようにする）
const UTM = "utm_source=scad_ai_lab&utm_medium=referral&utm_campaign=top";

export const site = {
  name: "SCAD AI LAB",
  url: "https://scad-ai-lab.vercel.app",
  description:
    "写真を撮ってきた個人開発者が、AIと一緒に企画から公開・改善まで手がけるWebアプリの実験場。婚活AIのスクアド、パーソナルカラー診断のSCAD Beauty、ひとり飲みの店探しTokyo Solo Club。",

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
      name: "SCAD Beauty",
      nameEn: "SCAD BEAUTY",
      category: "美容",
      summary: "写真1枚で、似合う色がわかる。",
      description:
        "顔写真からパーソナルカラーを診断し、服やメイクに使いやすい色を提案します。",
      badge: "",
      url: `https://scad-beauty.vercel.app/?${UTM}`,
      mark: "B",
      theme: "beauty",
    },
    {
      id: "solo",
      name: "Tokyo Solo Club",
      nameEn: "TOKYO SOLO CLUB",
      category: "ひとり飲み",
      summary: "ひとりで入りやすい店が見つかる。",
      description:
        "東京23区で、ひとり飲みしやすい居酒屋やバーを探せます。ドリンクルーレットなどのゲームで、ひとりの夜をもう少し楽しく。",
      badge: "",
      url: `https://scad-solo.vercel.app/?${UTM}`,
      mark: "S",
      theme: "solo",
    },
  ],

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
