// TikTokのアカウント埋め込み。最新の投稿がTikTok側で自動的に表示される。
// 外部スクリプトを読み込まず、枠（iframe）で直接表示する（高さをYouTubeとそろえるため）
export default function TikTokEmbed({ handle }) {
  return (
    <div className="tiktok__frame">
      <iframe
        src={`https://www.tiktok.com/embed/@${handle}`}
        title={`@${handle} のTikTok`}
        loading="lazy"
        allow="encrypted-media; fullscreen"
        referrerPolicy="strict-origin-when-cross-origin"
      />
    </div>
  );
}
