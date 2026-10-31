"use client";

import { useState } from "react";
import { site } from "./site.config";

// シェアボタン。どのページに置いても、そのページのURL・タイトルでシェアする。
// - label を渡すと文字つきのボタン、渡さないと丸いアイコンだけのボタンになる
// - title / text を渡すと、そのページ向けの文面になる（無ければサイト全体の文面）
export default function ShareButton({
  className = "",
  label = "",
  title = site.name,
  text = site.shareText,
}) {
  const [copied, setCopied] = useState(false);

  // 開いているページのURL（#や?は付けない）。取れないときは公式URL
  function pageUrl() {
    try {
      return `${window.location.origin}${window.location.pathname}`;
    } catch {
      return site.url;
    }
  }

  async function handleShare() {
    const url = pageUrl();

    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({ title, text, url });
      } catch {
        // ユーザーによるキャンセル等は何もしない
      }
      return;
    }

    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.open(
        `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
        "_blank",
        "noopener"
      );
    }
  }

  const name = copied ? "リンクをコピーしました" : "このページをシェアする";
  const icon = copied ? (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 12.5L9.5 18L20 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ) : (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="18" cy="5" r="3" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="6" cy="12" r="3" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="18" cy="19" r="3" stroke="currentColor" strokeWidth="1.8" />
      <path d="M8.6 10.6L15.4 6.4M8.6 13.4L15.4 17.6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );

  if (label) {
    return (
      <button
        type="button"
        className={`share-btn ${className}`}
        onClick={handleShare}
        aria-label={name}
      >
        {icon}
        <span>{copied ? "コピーしました" : label}</span>
      </button>
    );
  }

  return (
    <button
      type="button"
      className={`icon-btn ${className}`}
      onClick={handleShare}
      aria-label={name}
      title={copied ? "リンクをコピーしました" : "シェア"}
    >
      {icon}
    </button>
  );
}
