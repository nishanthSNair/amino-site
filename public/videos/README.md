# Video assets

Drop your video files in these folders. File paths reference `/videos/...` from the app.

## Folders

- `stories/` — customer reels (vertical 9:16 recommended). Filename per patient. Example: `ahmed.mp4`, `layla.mp4`.
- `doctors/` — physician clips (doctors speaking on camera). Example: `dr-rayan.mp4`.
- `hero.mp4` — optional hero background loop (16:9, muted, seamless loop, ~8-15s). Keep under 4 MB.

## Wire-up

- **Hero video**: set `site.hero.media.video = "/videos/hero.mp4"` in `data/site.ts`. Add a poster image at `/images/hero/poster.jpg` and set `site.hero.media.poster`.
- **Customer story videos**: set `video` and `poster` on each entry in `data/people.ts` → `videoStories[]`.
- **Doctor videos**: create a `DoctorStories` section similar to `VideoStories` (or reuse) — ask Claude to wire up.

## Compression tips

- MP4 H.264 for max browser compatibility
- Hero loop: target 720p, 4 MB max, use `-crf 28 -preset slow` with ffmpeg
- Stories: target 720p or 480p, autoplay off (they play in modal)
