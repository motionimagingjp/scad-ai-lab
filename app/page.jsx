import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import { site } from "./site.config";

// public/images 配下の写真を、ビルド時に自動で読み込む
const IMAGE_EXT = /\.(jpe?g|png|webp)$/i;

function listImages(folder) {
  try {
    const dir = path.join(process.cwd(), "public", "images", folder);
    return fs
      .readdirSync(dir)
      .filter((f) => IMAGE_EXT.test(f) && !f.startsWith("."))
      .sort((a, b) => a.localeCompare(b, "ja", { numeric: true }))
      .map((f) => `/images/${folder}/${encodeURIComponent(f)}`);
  } catch {
    return [];
  }
}

function pad(n) {
  return String(n).padStart(2, "0");
}

export default function Home() {
  const heroImage = listImages("hero")[0] || null;
  const gallery = listImages("gallery");
  const { hero, apps, about, sns } = site;
  const instagram = sns.find((s) => s.label === "Instagram");

  // ロゴ・フッターは site.config.js の name をそのまま使う（直書きしない）。
  // "SCAD APPS LAB" → マーク"SCAD" + "APPS LAB"のように、最初の単語とそれ以降で分ける
  const [logoMark, ...logoRest] = site.name.split(" ");
  const logoText = logoRest.join(" ");

  return (
    <>
      <a className="skip" href="#apps">
        アプリ一覧へ移動
      </a>

      {/* ───────── ヘッダー ───────── */}
      <header className="header">
        <div className="header__inner">
          <a href="#top" className="logo" aria-label={`${site.name} トップへ`}>
            <span className="logo__mark" aria-hidden="true">
              {logoMark}
            </span>
            <span className="logo__text">{logoText}</span>
          </a>
          <nav className="nav" aria-label="メインメニュー">
            <a href="#apps">アプリ</a>
            <a href="#about">About</a>
            {gallery.length > 0 && <a href="#photo">写真</a>}
            {instagram && (
              <a href={instagram.url} target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            )}
          </nav>
          <a href="#apps" className="btn btn--small">
            {hero.cta}
          </a>
        </div>
      </header>

      <main id="top">
        {/* ───────── ヒーロー ───────── */}
        <section className="hero">
          <div className="wrap hero__inner">
            <h1 className="hero__title">
              {hero.lines.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </h1>
            <div className="hero__foot">
              <p className="hero__lead">{hero.lead}</p>
              <a href="#apps" className="btn">
                {hero.cta}
              </a>
            </div>
          </div>

          <div className={`hero__frame ${heroImage ? "" : "hero__frame--empty"}`}>
            {heroImage ? (
              <Image
                src={heroImage}
                alt=""
                fill
                priority
                sizes="(max-width: 900px) 100vw, 1120px"
                className="hero__photo"
              />
            ) : (
              <div className="hero__placeholder" aria-hidden="true" />
            )}
          </div>
          <div className="wrap hero__caption">
            <span>Motion Imaging</span>
            {hero.caption && <span>{hero.caption}</span>}
          </div>
        </section>

        {/* ───────── アプリ（インデックス） ───────── */}
        <section id="apps" className="block apps">
          <div className="wrap">
            <div className="block__head">
              <p className="block__no">Index</p>
              <h2 className="block__title">いま公開しているアプリ</h2>
              <p className="block__lead">
                どれも無料で、登録なしですぐに試せます。
              </p>
            </div>

            <ul className="apps__list">
              {apps.map((app, i) => (
                <li key={app.id} className={`app app--${app.theme}`}>
                  <a
                    className="app__link"
                    href={app.url}
                    target="_blank"
                    rel="noopener"
                    aria-label={`${app.name}を使ってみる（新しいタブで開きます）`}
                  >
                    <span className="app__no">{pad(i + 1)}</span>
                    <span className="app__swatch" aria-hidden="true">
                      {app.mark}
                    </span>
                    <span className="app__body">
                      <span className="app__meta">
                        <span className="app__name">{app.name}</span>
                        <span className="app__cat">{app.category}</span>
                        {app.badge && (
                          <span className="app__badge">{app.badge}</span>
                        )}
                      </span>
                      <span className="app__summary">{app.summary}</span>
                      <span className="app__desc">{app.description}</span>
                    </span>
                    <span className="app__cta">使ってみる</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ───────── About ───────── */}
        <section id="about" className="block about">
          <div className="wrap about__grid">
            <div className="about__lead">
              <p className="block__no">About</p>
              <h2 className="about__title">
                {about.title.split("\n").map((l) => (
                  <span key={l}>{l}</span>
                ))}
              </h2>
              {about.body.map((p) => (
                <p key={p} className="about__text">
                  {p}
                </p>
              ))}
            </div>

            <div className="flow">
              <p className="flow__label">アプリができるまで</p>
              <div className="flow__strip">
                {about.flow.map((step, i) => (
                  <div key={step} className="flow__frame">
                    <span className="flow__dots" aria-hidden="true" />
                    <span className="flow__no">{pad(i + 1)}</span>
                    <span className="flow__name">{step}</span>
                  </div>
                ))}
              </div>
              <p className="flow__note">
                公開したら終わりではなく、使われ方を見て「改善」から「アイデア」へ戻ります。
              </p>
            </div>
          </div>
        </section>

        {/* ───────── 写真（コンタクトシート） ───────── */}
        {gallery.length > 0 && (
          <section id="photo" className="block photo">
            <div className="wrap block__head">
              <p className="block__no">Contact Sheet</p>
              <h2 className="block__title">{site.gallery.title}</h2>
              <p className="block__lead">{site.gallery.lead}</p>
            </div>
            <div
              className="photo__strip"
              tabIndex={0}
              aria-label="写真ギャラリー（横にスクロールできます）"
            >
              {gallery.map((src, i) => (
                <figure key={src} className="photo__item">
                  <span className="photo__frame">
                    <Image
                      src={src}
                      alt={`作品写真 ${i + 1}`}
                      fill
                      sizes="(max-width: 700px) 78vw, 440px"
                    />
                  </span>
                  <figcaption className="photo__no">{pad(i + 1)}</figcaption>
                </figure>
              ))}
            </div>
            {instagram && (
              <div className="wrap photo__more">
                <a
                  className="link"
                  href={instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagramでほかの写真を見る
                </a>
              </div>
            )}
          </section>
        )}
      </main>

      {/* ───────── フッター ───────── */}
      <footer className="footer">
        <div className="wrap footer__inner">
          <div>
            <p className="footer__logo">{site.name}</p>
            <p className="footer__tag">AIで、思いついたサービスを形にする。</p>
          </div>
          <ul className="footer__sns">
            {sns.map((s) => (
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
    </>
  );
}
