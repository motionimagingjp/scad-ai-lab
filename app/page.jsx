import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import { site } from "./site.config";
import Link from "next/link";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";

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
  const { hero, apps, music, about, sns } = site;
  const instagram = sns.find((s) => s.label === "Instagram");

  return (
    <>
      <a className="skip" href="#apps">
        アプリ一覧へ移動
      </a>

      <SiteHeader showPhoto={gallery.length > 0} />

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

        {/* ───────── 音楽（トップは短い紹介だけ。詳しくは /music） ───────── */}
        <section id="music" className="block music-teaser">
          <div className="wrap">
            <div className="block__head">
              <h2 className="block__title">{music.title}</h2>
              <p className="block__lead">{music.lead}</p>
            </div>
            <ul className="teaser__list">
              {music.artists.map((a) => (
                <li key={a.id}>
                  <Link
                    href={`/music#${a.id}`}
                    className={`teaser teaser--${a.theme}`}
                  >
                    <span className="teaser__photo">
                      <Image src={a.image} alt="" fill sizes="96px" />
                    </span>
                    <span className="teaser__body">
                      <span className="teaser__name">{a.name}</span>
                      <span className="teaser__kind">{a.kind}</span>
                    </span>
                    <span className="teaser__arrow" aria-hidden="true">
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <p className="teaser__more">
              <Link className="link" href="/music">
                音楽のページで、動画と活動を見る
              </Link>
            </p>
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

      <SiteFooter />
    </>
  );
}
