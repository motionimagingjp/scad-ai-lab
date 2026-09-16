import { Zen_Kaku_Gothic_New, Zen_Old_Mincho, JetBrains_Mono } from "next/font/google";
import { site } from "./site.config";
import "./globals.css";

// 本文・UI用のゴシック
const jp = Zen_Kaku_Gothic_New({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  preload: false,
  variable: "--font-jp",
});

// 見出し用の明朝（雑誌の表紙のような編集感を出す）
const serif = Zen_Old_Mincho({
  weight: ["400", "600"],
  subsets: ["latin"],
  display: "swap",
  preload: false,
  variable: "--font-serif",
});

// コマ番号・技術的な小さいラベル用の等幅（フィルムのコマ番号とコードの精密さを重ねる）
const mono = JetBrains_Mono({
  weight: ["500"],
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata = {
  metadataBase: new URL(site.url),
  title: `${site.name} | AIで、思いついたサービスを形にする`,
  description: site.description,
  openGraph: {
    title: site.name,
    description: site.description,
    url: site.url,
    siteName: site.name,
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
  },
};

export const viewport = {
  themeColor: "#16233f",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja" className={`${jp.variable} ${serif.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
