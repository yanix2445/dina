# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

`dina` is a single-page portfolio site for Dina Riani (étudiante BUT GEA, contrôle de gestion / comptabilité). UI copy is in **French** — keep new user-facing text French.

## Commands

Package manager is **pnpm** (see `pnpm-workspace.yaml`, `pnpm-lock.yaml`).

```bash
pnpm dev      # dev server (Next.js)
pnpm build    # production build
pnpm start    # serve production build
pnpm lint     # eslint (flat config, eslint-config-next)
```

There is no test suite.

## Stack

- **Next.js 16** App Router, **React 19**, TypeScript.
- **React Compiler** is enabled (`reactCompiler: true` in `next.config.ts`) — do not hand-add `useMemo`/`useCallback` for compiler-handled memoization.
- **Tailwind CSS v4** (config-less, via `@tailwindcss/postcss`; tokens/theme live in `src/app/globals.css`).
- **shadcn/ui**, style `radix-mira`, RSC, icon library **hugeicons** (`@/components/ui` is generated — prefer `npx shadcn` over hand-editing). `cn()` from `@/lib/utils`.
- **Resend** for transactional email; **Zod v4** for validation; **Vercel Analytics + Speed Insights**.
- Fonts: `DM_Sans` (`--font-sans`), `Playfair_Display` (`--font-display`).
- Path alias `@/*` → `src/*`.

## Architecture

Feature-based, not layered. Two distinct component homes:

- `src/components/` — shared/presentational: `ui/` (shadcn primitives), `sections/` (homepage sections), `layout/` (header, footer, legal modal).
- `src/features/<domain>/` — domain logic, each self-contained with its own `components/`, `data/`, `types/`, and (where relevant) `schemas/`, `services/`, `hooks/`, `templates/`. Domains: `experience`, `mail`, `projects`, `about`, `skills`.

Content is **static, hardcoded in `*.data.ts(x)` files** under each feature's `data/` dir (no CMS/DB). To change portfolio content (experiences, projects, skills), edit those data files.

### Page composition
`src/app/page.tsx` assembles the homepage by stacking `sections/*` between `Header` and `Footer`. Experience detail pages are dynamic routes at `src/app/experience/[slug]/page.tsx`, driven by the `slug` field in `features/experience/data/experience.data.ts`.

### Contact / mail flow
`features/mail/components/contact-form.tsx` → `use-contact-form.ts` → POST `src/app/api/mail/send/route.ts`. The route validates with `contact.schema.ts` (Zod), then delegates to `MailService.sendContactEmail` (`features/mail/services/mail.service.ts`), which renders `templates/contact.template.ts` and sends via Resend. Requires `RESEND_API_KEY`.

### SEO
`layout.tsx` defines the metadata template and `metadataBase`. Dynamic OG image at `app/opengraph-image.tsx`; `app/sitemap.ts`, `app/robots.ts` are generated routes. `NEXT_PUBLIC_SITE_URL` drives canonical/base URLs.

## Environment

`.env` keys (not committed): `RESEND_API_KEY`, `NEXT_PUBLIC_SITE_URL`.
