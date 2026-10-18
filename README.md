# gmc-cost

Astro site for Plum's group health insurance cost guide (India, 2026).

```bash
npm install
npm run dev
```

Fonts: GT Alpina and Passenger Sans web fonts are served from `public/fonts/`.

## Mount path

The page lives at `plumhq.com/group-health-insurance-cost`. `MOUNT_PATH` in
`astro.config.mjs` sets Astro's `base`, so every font, image and stylesheet URL
is built under that path; local files are linked through `base` in
`src/pages/index.astro`, not from the site root.

Astro's static build still writes `dist/` flat, so `vercel.json` serves it
under the mount path on Vercel (`gmc-cost.vercel.app/group-health-insurance-cost`)
and redirects the bare domain there.

The canonical URL, share buttons and "Summarise with AI" links name the
plumhq.com address. Off plumhq.com, a small script swaps the AI links to the
current host so the assistants can open a page that exists.
