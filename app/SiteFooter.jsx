import Link from "next/link";
import { site } from "./site.config";

export default function SiteFooter() {
  return (
    <footer className="footer">
      <div className="wrap footer__inner">
        <div>
          <p className="footer__logo">{site.name}</p>
          <p className="footer__tag">旅の写真から、歌とMVへ。</p>
          <p className="footer__nav">
            <Link href="/music">音楽・MV</Link>
            <Link href="/#photo">写真</Link>
            <Link href="/#apps">アプリ</Link>
          </p>
        </div>
        <ul className="footer__sns">
          {site.sns.map((s) => (
            <li key={s.url}>
              <a href={s.url} target="_blank" rel="noopener noreferrer">
                {s.label}
                <span>{s.handle}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <p className="wrap footer__copy">
        © {new Date().getFullYear()} {site.name}
      </p>
    </footer>
  );
}
