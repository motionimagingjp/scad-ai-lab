"use client";

import { useState } from "react";
import { site } from "./site.config";

export default function ShareButton({ className = "" }) {
  const [copied, setCopied] = useState(false);

  async function handleShare() {
    const shareData = { title: site.name, text: site.description, url: site.url };

    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share(shareData);
      } catch {
        // ユーザーによるキャンセル等は何もしない
      }
      return;
    }

    try {
      await navigator.clipboard.writeText(site.url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.open(
        `https://twitter.com/intent/tweet?url=${encodeURIComponent(site.url)}&text=${encodeURIComponent(site.name)}`,
        "_blank",
        "noopener"
      );
    }
  }

  return (
    <button
      type="button"
      className={`icon-btn ${className}`}
      onClick={handleShare}
      aria-label={copied ? "リンクをコピーしました" : "このサイトをシェアする"}
      title={copied ? "リンクをコピーしました" : "シェア"}
    >
      {copied ? (
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
      )}
    </button>
  );
}
