/** @type {import('next').NextConfig} */

// どのページにも付ける、安全のためのヘッダー
const securityHeaders = [
  // 他サイトがこのサイトを枠（iframe）で埋め込めないようにする（なりすまし・クリックジャッキング対策）
  { key: "Content-Security-Policy", value: "frame-ancestors 'none'" },
  { key: "X-Frame-Options", value: "DENY" },
  // ファイルの種類を勝手に推測させない
  { key: "X-Content-Type-Options", value: "nosniff" },
  // 外部サイトへ移動するとき、URLの全文を渡さない
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // カメラ・マイク・位置情報は使わないので、ブラウザ側で止めておく
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=(), usb=()",
  },
  // 常にHTTPSで開かせる
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains",
  },
];

const nextConfig = {
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
