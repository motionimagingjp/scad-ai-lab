import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import Link from "next/link";
import { site } from "../site.config";
import SiteHeader from "../SiteHeader";
import SiteFooter from "../SiteFooter";
import TikTokEmbed from "../TikTokEmbed";
import { youtubeUploadsUrl } from "../youtube";

const { music } = site;

export const metadata = {
  title: `音楽 | ${site.name}`,
  description: music.pageLead,
  alternates: { canonical: "/music" },
  openGraph: {
    title: `音楽 | ${site.name}`,
    description: music.pageLead,
    url: "/music",
  },
};

// ヘッダーの「写真」リンクを出すかどうか（トップと同じ判定）
function hasGallery() {
  try {
    const dir = path.join(process.cwd(), "public", "images", "gallery");
    return fs.readdirSync(dir).some((f) => /\.(jpe?g|png|webp)$/i.test(f));
  } catch {
    return false;
  }
}

export default function MusicPage() {
  return (
    <>
      <SiteHeader showPhoto={hasGallery()} />

      <main>
        {/* ───────── ページ見出し ───────── */}
        <section className="mhero">
          <div className="wrap">
            <p className="mhero__label">MUSIC</p>
            <h1 className="mhero__title">{music.pageTitle}</h1>
            <p className="mhero__lead">{music.pageLead}</p>
            <ul className="mhero__jump">
              {music.artists.map((a) => (
                <li key={a.id}>
                  <a href={`#${a.id}`} className={`jump jump--${a.theme}`}>
                    {a.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {music.artists.map((a) => {
          const youtube = a.platforms.find((p) => p.label === "YouTube");
          const uploads = youtubeUploadsUrl(a.youtubeChannelId);
          return (
            <section
              key={a.id}
              id={a.id}
              className={`mband mband--${a.theme}`}
              aria-labelledby={`${a.id}-name`}
            >
              <div className="wrap">
                {/* 紹介 */}
                <div className="mband__intro">
                  <div className="mband__text">
                    <p className="mband__kind">{a.kind}</p>
                    <h2 id={`${a.id}-name`} className="mband__name">
                      {a.name}
                      {a.reading && (
                        <span className="mband__reading">{a.reading}</span>
                      )}
                    </h2>
                    <p className="mband__summary">{a.summary}</p>
                    {a.story.map((p) => (
                      <p key={p} className="mband__story">
                        {p}
                      </p>
                    ))}
                    <p className="mband__note">{a.note}</p>
                  </div>
                  <figure className="mband__photo">
                    <Image
                      src={a.image}
                      alt={a.imageAlt}
                      fill
                      sizes="(max-width: 899px) 100vw, 480px"
                    />
                    <figcaption>{a.imageNote}</figcaption>
                  </figure>
                </div>

                {/* 動画 */}
                <h3 className="mband__sub">動画</h3>
                <div className="mband__videos">
                  <div className="video">
                    <p className="video__label">YouTube</p>
                    {uploads ? (
                      <div className="video__frame">
                        <iframe
                          src={uploads}
                          title={`${a.name} のYouTube動画（最新順）`}
                          loading="lazy"
                          allow="encrypted-media; picture-in-picture; fullscreen"
                          referrerPolicy="strict-origin-when-cross-origin"
                        />
                      </div>
                    ) : (
                      <a
                        className="video__fallback"
                        href={youtube.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="video__play" aria-hidden="true" />
                        <span>
                          {youtube.handle}
                          <small>YouTubeで動画を見る</small>
                        </span>
                      </a>
                    )}
                  </div>
                  <div className="video video--tiktok">
                    <p className="video__label">TikTok</p>
                    <TikTokEmbed handle={a.tiktokHandle} />
                  </div>
                </div>

                {/* 配信・SNS */}
                <h3 className="mband__sub">配信・SNS</h3>
                <ul className="platforms">
                  {a.platforms.map((p) => (
                    <li key={p.url}>
                      <a
                        className="platform"
                        href={p.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="platform__label">{p.label}</span>
                        <span className="platform__use">{p.use}</span>
                        <span className="platform__handle">{p.handle}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          );
        })}

        <section className="mfoot">
          <div className="wrap">
            <p className="mfoot__label">Label: {music.label}</p>
            <Link href="/#apps" className="link">
              アプリの紹介に戻る
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
