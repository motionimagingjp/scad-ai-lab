import Link from "next/link";
import { site } from "./site.config";
import ShareButton from "./ShareButton";

// トップと音楽ページで共通のヘッダー。リンクはどのページからでも届くよう "/#apps" の形にする
export default function SiteHeader({ showPhoto = true }) {
  const instagram = site.sns.find((s) => s.label === "Instagram");

  return (
    <header className="header">
      <div className="header__inner">
        <Link href="/" className="logo" aria-label={`${site.name} トップへ`}>
          <span className="logo__mark" aria-hidden="true">
            M
          </span>
          <span className="logo__text">{site.name}</span>
        </Link>
        <nav className="nav" aria-label="メインメニュー">
          <Link href="/#apps">アプリ</Link>
          <Link href="/#video">AI動画</Link>
          <Link href="/music">音楽</Link>
          <Link href="/#about">About</Link>
          {showPhoto && <Link href="/#photo">写真</Link>}
          {instagram && (
            <a href={instagram.url} target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          )}
        </nav>
        <ShareButton className="header__share" />
        <Link href="/#apps" className="header__cta">
          <span className="header__cta-long">{site.hero.cta}</span>
          <span className="header__cta-short" aria-hidden="true">
            アプリ
          </span>
        </Link>
      </div>
    </header>
  );
}
