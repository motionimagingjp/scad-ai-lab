import { Zen_Kaku_Gothic_New, Outfit } from "next/font/google";
import { site } from "./site.config";
import "./globals.css";

const jp = Zen_Kaku_Gothic_New({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  preload: false,
  variable: "--font-jp",
});

const en = Outfit({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-en",
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
  themeColor: "#13294B",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja" className={`${jp.variable} ${en.variable}`}>
      <body>{children}</body>
    </html>
  );
}
