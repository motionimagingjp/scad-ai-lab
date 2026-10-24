"use client";

import Script from "next/script";

// TikTokのアカウント埋め込み。最新の投稿がTikTok側で自動的に表示される。
// スクリプトが読めないときは、中のリンクだけがそのまま残る
export default function TikTokEmbed({ handle }) {
  const url = `https://www.tiktok.com/@${handle}`;
  return (
    <>
      <blockquote
        className="tiktok-embed"
        cite={url}
        data-unique-id={handle}
        data-embed-type="creator"
      >
        <section>
          <a href={url} target="_blank" rel="noopener noreferrer">
            @{handle} をTikTokで見る
          </a>
        </section>
      </blockquote>
      <Script
        id="tiktok-embed"
        src="https://www.tiktok.com/embed.js"
        strategy="lazyOnload"
      />
    </>
  );
}
