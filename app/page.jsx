import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import { site } from "./site.config";
import ShareButton from "./ShareButton";

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

// public/images/apps/ に「アプリのid」で始まるファイル（例: sukuado.jpg）を置くと、
// そのアプリカードのアイコンが自動でスクリーンショットに切り替わる。置かなければ文字アイコンのまま
function findAppScreenshot(id) {
  try {
    const dir = path.join(process.cwd(), "public", "images", "apps");
    const match = fs
      .readdirSync(dir)
      .filter((f) => IMAGE_EXT.test(f) && !f.startsWith("."))
      .find((f) => f.toLowerCase().startsWith(id.toLowerCase()));
    return match ? `/images/apps/${encodeURIComponent(match)}` : null;
  } catch {
    return null;
  }
}

export default function Home() {
  const heroImage = listImages("hero")[0] || null;
  const gallery = listImages("gallery");
  const { hero, apps, about, sns } = site;
  const instagram = sns.find((s) => s.label === "Instagram");

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
              S
            </span>
            <span className="logo__text">{site.name}</span>
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
          <ShareButton className="header__share" />
          <a href="#apps" className="btn btn--small">
            {hero.cta}
          </a>
        </div>
      </header>

      <main id="top">
        {/* ───────── ヒーロー ───────── */}
        <section className={`hero ${heroImage ? "" : "hero--empty"}`}>
          {heroImage && (
            <Image
              src={heroImage}
              alt=""
              fill
              priority
              sizes="100vw"
              className="hero__photo"
            />
          )}
          <div className="hero__shade" aria-hidden="true" />
          <div className="hero__body">
            <h1 className="hero__title">
              {hero.lines.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </h1>
            <div className="hero__foot">
              <p className="hero__lead">{hero.lead}</p>
              <a href="#apps" className="btn btn--light">
                {hero.cta}
              </a>
            </div>
          </div>
          {heroImage && hero.caption && (
            <p className="hero__caption">{hero.caption}</p>
          )}
        </section>

        {/* ───────── アプリ ───────── */}
        <section id="apps" className="block apps">
          <div className="wrap">
            <div className="block__head">
              <h2 className="block__title">いま公開しているアプリ</h2>
              <p className="block__lead">
                どれも無料で、登録なしですぐに試せます。
              </p>
            </div>

            <ul className="apps__list">
              {apps.map((app) => {
                const screenshot = findAppScreenshot(app.id);
                return (
                  <li key={app.id} className={`app app--${app.theme}`}>
                    <a
                      className="app__link"
                      href={app.url}
                      target="_blank"
                      rel="noopener"
                      aria-label={`${app.name}を使ってみる（新しいタブで開きます）`}
                    >
                      <div className="app__mark" aria-hidden="true">
                        {screenshot ? (
                          <Image
                            src={screenshot}
                            alt=""
                            fill
                            sizes="96px"
                            className="app__mark-photo"
                          />
                        ) : (
                          <span>{app.mark}</span>
                        )}
                      </div>
                      <div className="app__body">
                        <p className="app__meta">
                          <span className="app__name">{app.name}</span>
                          <span className="app__cat">{app.category}</span>
                          {app.badge && (
                            <span className="app__badge">{app.badge}</span>
                          )}
                        </p>
                        <h3 className="app__summary">{app.summary}</h3>
                        <p className="app__desc">{app.description}</p>
                      </div>
                      <span className="btn app__btn" aria-hidden="true">
                        使ってみる
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        {/* ───────── About ───────── */}
        <section id="about" className="block about">
          <div className="wrap about__grid">
            <div>
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
              <ol className="flow__list">
                {about.flow.map((step, i) => (
                  <li key={step} className="flow__step">
                    <span className="flow__num">{i + 1}</span>
                    <span className="flow__name">{step}</span>
                  </li>
                ))}
              </ol>
              <p className="flow__note">
                公開したら終わりではなく、使われ方を見て「改善」から「アイデア」へ戻ります。
              </p>
            </div>
          </div>
        </section>

        {/* ───────── 写真（写真があるときだけ表示） ───────── */}
        {gallery.length > 0 && (
          <section id="photo" className="block photo">
            <div className="wrap block__head">
              <h2 className="block__title">{site.gallery.title}</h2>
              <p className="block__lead">{site.gallery.lead}</p>
            </div>
            <div className="photo__strip" tabIndex={0} aria-label="写真ギャラリー（横にスクロールできます）">
              {gallery.map((src, i) => (
                <figure key={src} className="photo__item">
                  <Image
                    src={src}
                    alt={`作品写真 ${i + 1}`}
                    fill
                    sizes="(max-width: 700px) 80vw, 480px"
                  />
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
