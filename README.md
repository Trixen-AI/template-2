# zama.org homepage clone

React 19 + Vite + TypeScript rebuild of https://www.zama.org/ (a Webflow site).

```bash
npm install
npm run dev      # http://localhost:5173
npm run build
npm run lint
```

## Layout

- `src/styles/webflow.css`: the site's Webflow shared stylesheet, unchanged apart from local asset URLs
- `src/styles/embeds-head.css`, `src/styles/embeds.css`: the page's inline `<style>` blocks, in source order
  around the Swiper CSS (see `src/main.tsx`)
- `src/components/sections/*`: one component per page section, with the source's class names
- `src/components/HeroGradientCanvas.tsx` + `src/lib/heroGradientShader.ts`: the hero WebGL shader
- `src/components/SplineScene.tsx`: the Spline scene (`@splinetool/runtime`, loaded lazily)
- `src/components/nav/*`, `src/components/footer/FooterAccordion.tsx`, `src/hooks/useWebflowDropdown.ts`:
  Webflow navbar / dropdown / IX2 accordion behaviour
- `src/hooks/useSwiper.ts`, `src/data/swipers.ts`: Swiper 8 carousels with the source's config
- `src/hooks/useTextScramble.ts`, `src/hooks/useTooltips.ts`: ports of the Flowbase boosters
- `public/assets/`: images and Telegraf fonts downloaded from the site's CDN

Links to other pages point to the live site (`https://www.zama.org/...`). The hero KPIs are fetched live from
`token-api.zama.org`, and the Spline scene loads from `prod.spline.design`, as on the source.
