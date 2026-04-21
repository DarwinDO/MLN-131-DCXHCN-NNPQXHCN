# Task: Video Intro Playback

Date: 2026-04-22

## Issue

The opening video overlay appeared as a black screen on first load even though the MP4 existed and loaded successfully. The video has audio, so unmuted autoplay is not reliable because browsers block it without a user gesture.

## Changes

- Added `preload="auto"` and accessible labels to the intro video controls in `website/index.html`.
- Reworked the intro overlay styling in `website/styles.css` so the waiting state is not a plain black screen and the play action is visually clear.
- Updated `website/script.js` to mark the video ready when frame data is available, keep the play button visible before playback, start unmuted playback only after a real user click, and wire the replay button without inline `onclick`.

## Verification

- `node --check website/script.js`
- `npx ai-devkit@latest lint`
- Served the static site locally at `http://localhost:8000/website/index.html`.
- Verified with Chrome DevTools Protocol that initial load reaches `readyState=4`, the overlay has `ready`, and the video is visible before play.
- Verified with a real Chrome input click that playback starts with `muted=false`, `paused=false`, and `currentTime` increasing.
- Verified the "already seen" path: overlay stays hidden on reload, the replay button reopens the intro, and the replayed video starts unmuted after clicking play.
