# HIKMA AI Video Services

A responsive, buildless portfolio for HIKMA AI Video Services. The site includes a 20-video gallery with category filters, full video playback, WhatsApp enquiries, FAQs, Privacy Policy, and Terms & Conditions.

## Run locally

Open `index.html` in a browser, or serve the project root with any static HTTP server.

## Deploy to Netlify

This project is static and requires no build step. Connect the repository to Netlify and use the project root (`.`) as the publish directory. The supplied `netlify.toml` sets this configuration.

## Portfolio media

The 20 supplied MP4 clips are stored in `assets/videos/`; WebP thumbnails extracted from those clips are in `assets/video-posters/`. The gallery opens each clip in a native HTML video player.

## Project structure

- `index.html`, `styles.css`, `app.js`: website source
- `assets/`: hero artwork, gallery thumbnails, and video files
- `privacy-policy.html`, `terms-and-conditions.html`: legal pages
- `netlify.toml`: static hosting configuration
