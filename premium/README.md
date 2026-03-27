# Premium React + Vite Landing (Glassmorphism)

This folder contains a premium animated landing page built with:
- React + Vite
- Tailwind CSS v4
- motion/react for animations
- hls.js for HLS streaming (native video tag)
- react-use-measure for sizing logic
- clsx + tailwind-merge for class utilities

Local dev:
1) cd premium
2) npm install
3) npm run dev

Notes:
- The hero video uses an HLS stream and falls back to a local path:
  /_videos/v1/f0c78f536d5f21a047fb7792723a36f9d647daa1
  If your actual file ends with .mp4, update FALLBACK_MP4 in src/Hero.tsx.

- This PR does not change the currently hosted root site. It only adds this new premium app in /premium.
  When you're ready, we can wire GitHub Pages to build and deploy it as the root.
