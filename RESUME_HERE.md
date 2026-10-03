# Resume Here

This is the handoff for the next developer working on the Movo Technologies website.

Last updated: 2026-10-03  
Repository: `Movo-Technologies/Movo`  
Branch: `master`  
Last shipped commit: `a710ebc Add Nat to the Movo ecosystem`  
Remote status at handoff: clean and synchronized with `origin/master`

## Where we stopped

The public Movo website has been redesigned around a shared editorial and visual system. It is a Next.js 16 application using React 19, Tailwind CSS 4 and Motion. The site is running locally at `http://localhost:3000` when the production server is started.

The current site includes:

- Main pages: Home, About, Ecosystem, Philosophy and Contact.
- Movo Labs for client software work.
- Movo Studios for music and creative services.
- Movo Systems for repeatable software products.
- Movo Ventures for businesses outside the core software and services work.
- Products and ventures: Atlas, Nat, Giveaway App, El Patron and Encapsul.
- A Future Ventures page marked `Future` and excluded from the indexable sitemap.
- Shared editorial imagery, product visuals, responsive navigation, motion and accessible labels.
- Movo logo variants with no visible Movo wordmark in the header or footer.
- Light/dark favicon handling through the app icon route and supplied brand assets.

The latest change added Nat, Movo Systems’ AI customer-engagement product in private beta. Nat has its own ecosystem page, official product artwork, logo mark, footer link, sitemap image entry, SEO metadata, and a dedicated private-beta enquiry form. Nat’s page explicitly keeps voice conversations and automated briefing features labelled as planned, and does not link visitors to the owner-restricted Nat source site.

## Important product truth

Keep public copy aligned with the source material and existing qualifications:

- Atlas is an open-core ERP platform for organizations and software providers.
- Nat is entering private beta. It is designed to learn approved website and business knowledge, answer visitors in context, capture enquiries and route useful conversation context to a configured team.
- Nat’s demonstrations are product-direction examples. Do not describe the scripted demo as a live LLM or routing system.
- Nat does not replace human judgment for sensitive issues, commitments or escalation.
- Voice conversations and automated briefing are planned Nat capabilities, not current Core V1 promises.
- Giveaway App is in early access. Its public link is `https://www.trygiveaway.app`.
- Atlas’ official product site is `https://atlas.bihub.ng/`.
- Encapsul is an early-stage concept with approval, airline-agreement and pilot dependencies. Preserve its planned Lagos-to-Abuja corridor and its separation between travellers and parcels.
- El Patron is an emerging thermal-wear venture. Do not invent a store, product catalogue or launch date.

## Key files

Product and editorial content:

- `src/data/ventures.ts` — canonical venture/product records, statuses, descriptions, capabilities and CTAs.
- `src/data/editorial.ts` — home stories, ecosystem summaries and editorial image metadata.
- `src/data/products.ts` — official external product links.
- `src/lib/enquiries.ts` — contact intents, recipient addresses, labels and form fields.

Page and component structure:

- `src/app/page.tsx` — home page.
- `src/app/ecosystem/page.tsx` — ecosystem directory.
- `src/app/ecosystem/[slug]/page.tsx` — generated venture/product pages.
- `src/app/contact/page.tsx` and `src/components/sections/ContactForm.tsx` — enquiry flow.
- `src/components/sections/BrandVisual.tsx` — shared visual frame and product-specific visuals.
- `src/components/ui/VentureCard.tsx` — ecosystem cards.
- `src/components/layout/Navbar.tsx` and `src/components/layout/Footer.tsx` — site-wide navigation.
- `src/lib/metadata.ts` and `src/components/seo/` — metadata, canonical URLs and JSON-LD.
- `src/app/sitemap.ts` and `src/app/robots.ts` — crawl controls.
- `src/app/api/contact/route.ts` — server-side enquiry validation and private-disk persistence.

Brand and visual assets:

- `public/brand/movo.png` and `public/brand/movo-white.svg` — Movo marks.
- `public/brand/favicon-light.png` and `public/brand/favicon-dark.png` — favicon variants.
- `public/brand/giveaway-full.png` and `public/brand/giveaway-white.png` — Giveaway App marks.
- `public/brand/encapsul.svg` — Encapsul mark.
- `public/brand/nat.svg` — Nat mark.
- `public/images/nat-product-card.png` and `.webp` — official Nat product artwork.
- `public/images/atlas-dashboard.webp` — official Atlas dashboard preview.
- `docs/visual-system.md` — asset provenance and visual-system notes.
- `docs/editorial-images.md` — prompts and provenance for generated editorial scenes.

## Run the project

Install dependencies with the repository’s lockfile:

```powershell
pnpm install
```

For local development:

```powershell
pnpm dev
```

For a production-like local check:

```powershell
$env:MOVO_DATA_DIR = "D:\code\MOVO\movo\Movo\.movo-data"
node node_modules/next/dist/bin/next build
node node_modules/next/dist/bin/next start --port 3000
```

The contact endpoint needs `MOVO_DATA_DIR` to save submissions. The development fallback is `.movo-data/`, which is gitignored. Production must use a persistent writable directory outside the public directory. Do not commit enquiry records or attachments.

## Verification before shipping

Run the following checks after content or routing changes:

```powershell
node node_modules/eslint/bin/eslint.js src
node node_modules/typescript/bin/tsc --noEmit
node node_modules/next/dist/bin/next build
node scripts/seo-release-gate.mjs --base-url http://localhost:3000
git diff --check
```

The SEO release gate currently passes with 14 indexable pages and 24 internal links. It checks sitemap coverage, status codes, titles, descriptions, canonicals, H1s, JSON-LD, image alt text, internal links and orphan pages. The GitHub workflow is `.github/workflows/seo-release-gate.yml`.

When changing a product record, check all of these surfaces: the ecosystem directory, the generated detail page, home story if applicable, footer links, sitemap image mapping, metadata, contact intent and any external product link. Avoid adding a product to only one page.

## Contact and operations still outstanding

The form storage path is implemented, but production delivery is not finished:

1. Configure a persistent `MOVO_DATA_DIR` in the deployment environment.
2. Configure `MOVO_ENQUIRY_WEBHOOK_URL` and the optional bearer token if an existing email or operations integration should receive submissions.
3. Make the webhook route each record using its server-selected `recipient`, deduplicate by `id`, and return 2xx only after acceptance.
4. Verify end-to-end delivery for Labs, Studios, release, Atlas, El Patron, Encapsul, Nat, support, general and Giveaway whitelist flows.
5. Add deployment-level request-size limits around 6 MB and rate limiting before exposing forms broadly.
6. Supply the real HTTPS Giveaway community invite through `NEXT_PUBLIC_GIVEAWAY_DISCORD_URL` if the beta community CTA is needed.
7. Define an operator process for records without `notification-delivered`, retries, backups, access control and deletion requests.

The repository does not contain a configured database, mail provider, analytics vendor, Atlas operational specification, El Patron store or Discord invite. Do not silently add product claims to fill those gaps.

## SEO and content follow-up

The SEO release gate is in place, but the following should still be handled before a public launch:

- Confirm the production `SITE_URL` and inspect canonical, sitemap and robots output on the deployed hostname.
- Add a real privacy policy and terms page if the deployment collects enquiries from the public.
- Decide whether a cookie or analytics policy is needed before adding any measurement provider.
- Review every product page with the relevant product owner as facts, statuses and URLs change.
- Keep `Future Ventures` noindexed and out of the sitemap until it contains approved public content.

## Working rules for the next developer

- Read the relevant bundled Next.js documentation in `node_modules/next/dist/docs/` before changing Next APIs. This repository intentionally uses a newer Next.js version with breaking changes.
- Preserve the site’s restrained black, white and grayscale visual language. Use supplied product assets where available and keep product marks distinct from editorial photography.
- Keep page copy specific and non-repetitive. If a statement is a beta, planned, early-stage or illustrative claim, keep that qualifier visible.
- Do not expose private beta source URLs or private Site project credentials.
- Use `apply_patch` for hand edits and run Prettier on changed files.
- Keep commits focused and run the verification commands before pushing.

## Suggested next slice of work

The most useful next implementation slice is production readiness for enquiries: configure the real delivery integration, add rate limiting and request limits, test all intent routes, and document the operator workflow. After that, do a product-owner copy review for Atlas, Nat, Giveaway App, Encapsul and El Patron, then re-run the SEO gate against the real deployment URL.
