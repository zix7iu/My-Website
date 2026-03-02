# Personal Website

A multilingual personal website built with **Next.js 15** (App Router), **TypeScript**, **Tailwind CSS**, and **next-intl** for English and Chinese.

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The default locale is English; use the language switcher in the header or visit `/zh` for Chinese.

## Scripts

- `npm run dev` — Start development server
- `npm run build` — Build for production
- `npm run start` — Start production server
- `npm run lint` — Run ESLint

## Project structure

- `src/app/[locale]/` — App Router pages (locale: `en` | `zh`)
- `src/components/` — Navbar (profile link, nav links, language toggle)
- `public/` — Static assets; add **`profile.jpg`** for your navbar profile photo (circle, left side)
- `src/i18n/` — next-intl routing, request config, navigation
- `messages/` — `en.json`, `zh.json` translation files
- `src/middleware.ts` — Locale detection and redirects

## Adding content

- Edit `messages/en.json` and `messages/zh.json` for new copy.
- Add pages under `src/app/[locale]/` (e.g. `about/page.tsx`).
- Use `getTranslations('Namespace')` in Server Components or `useTranslations('Namespace')` in Client Components.
