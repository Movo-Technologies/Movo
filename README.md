This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Enquiries and Giveaway App early access

The existing contact endpoint only logged data. `/api/contact` now validates multipart forms and commits submissions to private disk before reporting success. No analytics platform, database, mail provider, Atlas specifications, operational El Patron store or Discord invite was found in the repository.

Copy `.env.example` to your environment configuration. **Production requires `MOVO_DATA_DIR` on a persistent writable volume outside the public directory.** Without it, forms return 503 and keep the visitor's entries. This implementation targets a Node server with persistent disk, not an ephemeral/serverless filesystem. For a serverless deployment, replace the storage adapter with the deployment's durable database before enabling signups. Development defaults to `.movo-data/` (gitignored).

Each submission folder contains `submission.json` and an optional private `attachment`. Whitelist records retain role and host interest; email + host choice deduplicates retries, and changing host interest records a new response. General forms use a submission UUID to make retries idempotent. No personal information is logged or served publicly. Restrict filesystem permissions and back up the data directory; authorized operators should periodically review records, consolidate whitelist records by normalized email, and honor deletion requests via support.

`recipient` is selected server-side: Labs → projects, Studios → bookings, release → releases, Atlas/El Patron → sales, support → support, general → info (all at movotechnologies.com). Configure `MOVO_ENQUIRY_WEBHOOK_URL` and optional bearer token to connect your existing email/operations integration. It receives the record and must route notification to `recipient`, deduplicate by `id`, and return 2xx after acceptance. Attachments remain on private disk. Records without `notification-delivered` need operator review/retry; a webhook failure never discards a saved enquiry. **Email delivery is not configured by this repository.** Before launch, configure delivery or staff the saved-record inbox; verify delivery end to end with the real integration. Add deployment-level request size limits (6 MB) and rate limiting before public exposure.

Supply the real HTTPS community invite in `NEXT_PUBLIC_GIVEAWAY_DISCORD_URL` and rebuild. The beta success state only shows “Join the Beta Community” when configured. No public launch date or unsupported Atlas/thermal-wear claims are asserted. Analytics was absent, so no tracking vendor was introduced.
