# dina

Portfolio perso de **Dina Riani** (étudiante BUT GEA — contrôle de gestion / comptabilité).
Site one-page en français, en ligne sur **[dina-riani.fr](https://dina-riani.fr)**.

> Repo perso, pas destiné à l'open-source ni à la contribution. Ce README est surtout là pour reprendre le projet à froid sans rien deviner.

## Stack

- **Next.js 16** (App Router) + **React 19** + TypeScript
- **React Compiler** activé (`reactCompiler: true`)
- **Tailwind CSS v4** (sans fichier de config, tokens dans `src/app/globals.css`)
- **shadcn/ui** (style `radix-mira`, icônes [hugeicons](https://hugeicons.com))
- **Resend** (emails) + **Zod v4** (validation)
- **Vercel Analytics + Speed Insights**
- Polices : DM Sans (`--font-sans`), Playfair Display (`--font-display`)

## Démarrage

Prérequis : **Node 20+** et **pnpm**.

```bash
pnpm install   # installe les dépendances
pnpm dev       # serveur de dev
pnpm build     # build de prod
pnpm start     # sert le build de prod
pnpm lint      # eslint (flat config, eslint-config-next)
```

Pas de suite de tests.

## Variables d'environnement

À mettre dans `.env` (non commité) :

- `RESEND_API_KEY` — envoi des emails du formulaire de contact via Resend
- `NEXT_PUBLIC_SITE_URL` — URL de base pour le SEO (canonical, OG, sitemap)

## Architecture

Organisation **par feature**, pas par couche. Deux maisons distinctes pour les composants :

- `src/components/` — partagé / présentation
  - `ui/` — primitives shadcn (**généré** — préférer `npx shadcn` plutôt que l'édition à la main)
  - `sections/` — sections de la home (hero, about, parcours, projets, compétences, contact)
  - `layout/` — header, footer, modale mentions légales
- `src/features/<domaine>/` — logique métier, chaque domaine autonome (`components/`, `data/`, `types/`, et selon les cas `schemas/`, `services/`, `hooks/`, `templates/`)
  - Domaines : `experience`, `mail`, `projects`, `about`, `skills`

Alias de chemin : `@/*` → `src/*`.

### Composition des pages

- `src/app/page.tsx` assemble la home en empilant les `sections/*` entre `Header` et `Footer`.
- Pages de détail d'une expérience : route dynamique `src/app/experience/[slug]/page.tsx`, pilotée par le champ `slug` de `features/experience/data/experience.data.ts`.

## Modifier le contenu

Tout le contenu est **statique, en dur dans des fichiers `*.data.ts(x)`** sous le `data/` de chaque feature (pas de CMS ni de base de données). Pour changer expériences, projets ou compétences, on édite ces fichiers :

- `src/features/experience/data/experience.data.ts`
- `src/features/projects/data/…`
- `src/features/skills/data/…`
- `src/features/about/data/…`

## Flux à connaître

### Contact / email

`features/mail/components/contact-form.tsx` → `use-contact-form.ts` → `POST /api/mail/send`.
La route valide avec `contact.schema.ts` (Zod), puis `MailService.sendContactEmail` (`mail.service.ts`) rend `templates/contact.template.ts` et envoie via Resend. Nécessite `RESEND_API_KEY`.

### SEO

- `layout.tsx` définit le template de metadata et le `metadataBase`.
- Image OG dynamique : `app/opengraph-image.tsx`.
- `app/sitemap.ts` et `app/robots.ts` sont des routes générées.
- `NEXT_PUBLIC_SITE_URL` pilote les URLs canoniques et de base.

## Déploiement

Hébergé sur **Vercel**, déployé en push sur `main`. Domaine de prod : **dina-riani.fr**.
Penser à renseigner `RESEND_API_KEY` et `NEXT_PUBLIC_SITE_URL` dans les variables d'environnement Vercel.

## Pièges à se rappeler

- **React Compiler activé** → ne pas ajouter de `useMemo` / `useCallback` à la main pour la mémoïsation qu'il gère déjà.
- **`components/ui/` est généré** par shadcn → passer par `npx shadcn` plutôt que d'éditer à la main.
- **Tout le texte visible est en français** → garder le français pour tout nouveau contenu.
- **Pas de tests** → vérifier les changements en lançant le site (`pnpm dev`).
