import { ImageResponse } from "next/og";
import { site } from "./site.config";

export const alt = site.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

async function loadNotoSansJP(weight) {
  const css = await fetch(
    `https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@${weight}&display=swap`,
    { headers: { "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)" } }
  ).then((res) => res.text());
  const url = css.match(/src: url\(([^)]+)\) format\('(?:opentype|truetype)'\)/)?.[1];
  const res = await fetch(url);
  return res.arrayBuffer();
}

export default async function OpengraphImage() {
  const [regular, bold] = await Promise.all([
    loadNotoSansJP(400),
    loadNotoSansJP(700),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#13294B",
          fontFamily: "Noto Sans JP",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 16,
              backgroundColor: "#fff",
              color: "#13294B",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 34,
              fontWeight: 700,
            }}
          >
            S
          </div>
          <div style={{ fontSize: 36, fontWeight: 700, color: "#fff", letterSpacing: 1 }}>
            {site.name}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 56,
            fontWeight: 700,
            color: "#fff",
            marginTop: 56,
            lineHeight: 1.35,
          }}
        >
          {site.hero.lines.join("")}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 28,
            fontWeight: 400,
            color: "rgba(255,255,255,0.75)",
            marginTop: 28,
          }}
        >
          {site.hero.lead}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Noto Sans JP", data: regular, weight: 400, style: "normal" },
        { name: "Noto Sans JP", data: bold, weight: 700, style: "normal" },
      ],
    }
  );
}
