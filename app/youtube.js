// チャンネルIDの "UC" を "UU" に替えると、そのチャンネルのアップロード一覧（最新順）になる
export function youtubeUploadsUrl(channelId) {
  if (!/^UC[\w-]{22}$/.test(channelId || "")) return null;
  return `https://www.youtube-nocookie.com/embed/videoseries?list=UU${channelId.slice(2)}`;
}
