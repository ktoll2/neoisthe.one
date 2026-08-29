# neoisthe.one

```text
"Your life is the sum of a remainder of an unbalanced equation inherent to the programming of the Matrix. You are the eventuality of an anomaly, which despite my sincerest efforts I have been unable to eliminate from what is otherwise a harmony of mathematical precision."
```

A Matrix-inspired landing page with a terminal boot sequence, CRT effects, and digital rain.

## Local Preview

Run a static web server from the repository root:

```bash
python3 -m http.server 8000
```

Open `http://localhost:8000`.

## Experience
- Terminal-style boot sequence with Matrix references.
- CRT scanlines, flicker, and green phosphor styling.
- Katakana, numeric, and symbolic canvas rain.
- User-controlled video playback.
- Konami-code rain overdrive:
`Up Up Down Down Left Right Left Right B A`
- Reduced-motion styling support.

## Structure
```text
index.html                   Main page and video sources
404.html                     GitHub Pages not-found page
CNAME                        Custom domain configuration
robots.txt                   Crawler policy
sitemap.xml                  Search sitemap
assets/
  NeoIsTheOne.webm           Preferred VP9/Opus video source
  NeoIsTheOne.mp4            H.264/AAC video fallback
  css/site.css               Site styles, CRT effects, and transitions
  js/boot.js                 Boot sequence and Konami-code behavior
  js/rain.js                 Canvas rain animation
  favicon.svg                Browser icon
  images/social-preview.*    Social-sharing images
```

## Deployment
Deploy from the master branch root with GitHub Pages. CNAME configures the neoisthe.one custom domain.
