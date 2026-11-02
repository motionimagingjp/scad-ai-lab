// ============================================================
// Motion Imaging Lab サイト設定
// 文言やリンクを変えたいときは、このファイルだけ直せばOK
// ============================================================

// アプリへのリンクに付ける計測用パラメータ（どこから来たか分かるようにする）
const UTM = "utm_source=scad_apps_lab&utm_medium=referral&utm_campaign=top";

export const site = {
  name: "Motion Imaging Lab",
  url: "https://motion-imaging-lab.vercel.app",
  description:
    "旅先で撮った写真から、AIと一緒に歌とMVをつくる。作詞・作曲・MVづくりが活動の中心で、アプリ開発も手がける、MOTION IMAGINGの活動サイトです。",
  // シェアするときの文面（サイト全体向け。ページごとに変えたいときは ShareButton に text を渡す）
  shareText:
    "旅の写真から、歌とMVへ。AIと一緒につくる作品と、アプリ開発。",

  hero: {
    lines: ["旅の写真から、", "歌とMVへ。"],
    lead: "旅先で撮りためた写真に、AIと一緒に歌と映像を重ねていく。作詞・作曲・MVづくりが活動の中心です。アプリ開発も手がけています。",
    cta: "音楽・MVを見る",
    ctaHref: "#music",
    // ヒーロー写真の撮影地（写真の右下に小さく出ます）。不要なら "" にする
    caption: "",
  },

  // ヘッダー右上のボタン（長い表記はPC、短い表記はスマホ）
  headerCta: { long: "音楽・MVを見る", short: "音楽", href: "/music" },

  // ストーリー（ヒーロー直下。旅の写真 → 歌 → MV の流れ）
  story: {
    label: "STORY",
    title: "旅の写真から、歌とMVへ。",
    lead: "旅先で撮った写真は、撮って終わりにせず、AIと一緒に歌と映像へ育てています。",
    steps: [
      { title: "旅で撮る", text: "歩いた街や景色を写真に残す。" },
      { title: "AIと広げる", text: "写真から言葉や雰囲気を引き出す。" },
      { title: "歌をつくる", text: "作詞・作曲で、一曲にする。" },
      { title: "MVにする", text: "写真と映像で、MVに仕上げる。" },
    ],
    note: "つくった歌とMVは、3つの音楽名義で公開しています。",
  },

  // 活動の全体像（トップのヒーロー直下に、番号つきで並べる。上から重要な順）
  pillars: [
    {
      no: "01",
      title: "作詞・作曲・MV",
      text: "旅の写真から歌をつくり、MVまでつくる。3つの音楽名義で活動しています。",
      href: "#music",
      cta: "音楽・MVを見る",
    },
    {
      no: "02",
      title: "写真 × AI",
      text: "旅先で撮ってきた写真を、AIと組み合わせて作品にしています。",
      href: "#photo",
      cta: "写真を見る",
    },
    {
      no: "03",
      title: "アプリ開発",
      text: "思いついたサービスを、AIと一緒にWebアプリにしています。",
      href: "#apps",
      cta: "アプリを見る",
    },
  ],

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

  // 生成AIで作った動画（トップに最新の動画が自動で並ぶ）
  aiVideo: {
    title: "AIでつくる動画",
    lead: "AIの出演者で作った、CMやプロモーション動画の制作例です。",
    note: "※出演者・映像はAIで生成しています（演出です）",
    channelId: "UCg0Fmgw6ghTfvWGi6pAo4ww",
    url: "https://www.youtube.com/channel/UCg0Fmgw6ghTfvWGi6pAo4ww",
  },

  // 音楽活動（2つは別々の活動。表示は上から順に並ぶ。混ぜない）
  // トップには短い紹介だけを出し、詳しくは /music のページで見せる
  music: {
    title: "作詞・作曲・MV",
    lead: "3つの音楽名義で、歌とMVをつくっています。",
    pageTitle: "3つの音楽活動",
    pageLead:
      "MOTION IMAGINGの音楽活動。JAKE SOLANO、澄名凜奈、VERT5Xの3つを紹介します。動画はYouTubeなどで公開しています。",
    label: "MOTION IMAGING",
    // 音源の販売（BOOTH）。ショップのトップと、アーティストごとの商品
    booth: {
      shopUrl: "https://motion-imaging.booth.pm",
    },
    artists: [
      {
        id: "jakesolano",
        name: "JAKE SOLANO",
        // 音源の販売ページ（BOOTH）。価格を変えたら、ここも合わせて直す
        booth: [
          { title: "Blue Time", price: "¥2,000", url: "https://motion-imaging.booth.pm/items/9080039" },
        ],
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
        youtubeChannelId: "UCGPyNoPcnQzj5ZyC7Zo4-4g",
        tiktokHandle: "jakesolano_official",
        platforms: [
          {
            label: "YouTube",
            handle: "@JAKESOLANO_OFFICIAL",
            use: "動画を見る",
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
        id: "suminarina",
        name: "澄名凜奈",
        // 音源の販売ページ（BOOTH）。価格を変えたら、ここも合わせて直す
        booth: [
          { title: "歌入り10曲【WAV＋歌詞ブック＋壁紙】", price: "¥1,800", url: "https://motion-imaging.booth.pm/items/9081904" },
          { title: "インスト10曲【WAV＋壁紙】", price: "¥1,800", url: "https://motion-imaging.booth.pm/items/9081909" },
          { title: "歌入り＋インスト 20曲セット", price: "¥3,000", url: "https://motion-imaging.booth.pm/items/9081910" },
        ],
        reading: "すみな りな",
        kind: "AIアーティスト",
        summary: "YouTubeとInstagramで活動する、AIアーティスト",
        // 活動の内容・設定（段落ごと）。ジャンルなどが決まったらここに足す
        story: ["澄名凜奈（すみな りな）は、AIで制作したアーティストです。"],
        // AI表記
        note: "AIで制作したアーティスト（AIペルソナ）",
        theme: "suminarina",
        // 画像（/images/music/ に置いて、ここにパスを書く）。無ければ文字のカードになる
        image: "/images/music/suminarina.webp",
        imageAlt: "澄名凜奈のイメージ写真（AI生成）",
        imageNote: "AI生成イメージ",
        // YouTubeのチャンネルID（UCで始まる24文字）を入れると、最新の動画が自動で並ぶ。
        // 空のままなら、チャンネルへのリンクだけを出す
        youtubeChannelId: "",
        platforms: [
          {
            label: "YouTube",
            handle: "@sumina_rina_official",
            use: "動画を見る",
            url: "https://www.youtube.com/@sumina_rina_official",
          },
          {
            label: "Instagram",
            handle: "@sumina_rina_official",
            use: "投稿を見る",
            url: "https://www.instagram.com/sumina_rina_official/",
          },
          {
            label: "Spotify",
            handle: "アーティスト",
            use: "楽曲を聴く",
            url: "https://open.spotify.com/artist/5sRxBIsSelg4RWFy83hsMW",
          },
          {
            label: "Apple Music",
            handle: "アーティスト",
            use: "楽曲を聴く",
            url: "https://music.apple.com/jp/artist/%E6%BE%84%E5%90%8D-%E5%87%9C%E5%A5%88/6828043271",
          },
        ],
      },
      {
        id: "vert5x",
        name: "VERT5X",
        // 音源の販売ページ（BOOTH）。価格を変えたら、ここも合わせて直す
        booth: [
          { title: "1ST", price: "¥1,800", url: "https://motion-imaging.booth.pm/items/9080235" },
        ],
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
        youtubeChannelId: "UCQWChBX1fjygrXTnvS8OPYw",
        tiktokHandle: "jongjin_vert5x",
        platforms: [
          {
            label: "YouTube",
            handle: "@vert5x_official",
            use: "動画を見る",
            url: "https://www.youtube.com/@vert5x_official",
          },
          {
            // メンバーJONGJINのアカウントで運用
            label: "TikTok",
            handle: "@jongjin_vert5x",
            use: "ショート動画",
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
    title: "写真を撮ってきた人間が、\nAIを相棒に、作品とアプリをつくっています。",
    body: [
      "ずっと、旅先で写真を撮ってきました。いまはその写真を生成AIと組み合わせながら、作詞・作曲・MVづくりへとつなげています。",
      "そこから派生して、「こんなものがあったらいい」をWebアプリにする開発も続けています。何を作るか、どう見せるか、公開して反応をどう直すか。そこを決めるのが自分の仕事で、手を動かす部分をAIに任せています。",
    ],
    flowLabel: "ものができるまで",
    flow: ["アイデア", "AIと相談", "制作", "公開", "反応を見る", "改善"],
    flowNote:
      "公開したら終わりではなく、反応を見て「改善」から「アイデア」へ戻ります。",
  },

  gallery: {
    title: "写真 × AI",
    lead: "旅先で撮ってきた写真です。歌とMVをつくるときの、はじまりの素材になっています。",
  },

  sns: [
    {
      label: "Instagram",
      handle: "@motion.imaging",
      url: "https://www.instagram.com/motion.imaging/",
    },
  ],
};
