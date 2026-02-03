# FolseTech — Full Production Site (Next.js 14 + Tailwind)

Modern, responsive, SEO-forward website for FolseTech (Gonzales, LA 70737).

## Included
- Next.js 14 App Router
- Tailwind CSS brand theme (electric blue + gold)
- Framer Motion micro-interactions
- Contact form + server API route (Nodemailer)
- Local SEO package:
  - LocalBusiness JSON-LD (Gonzales + city pages)
  - ServiceArea expansion
  - City landing pages: Baton Rouge, Prairieville, Denham Springs
  - Breadcrumb schema JSON-LD
  - FAQ schema JSON-LD per city
  - Automatic sitemap including city pages
  - City-specific Google Maps embeds
- GitHub ready + AWS Amplify ready (amplify.yml included)

## Run locally
```bash
npm install
cp .env.example .env.local
npm run dev
```

## Env vars
Set in `.env.local` (and in Vercel/Amplify environment variables):
- SMTP_HOST
- SMTP_PORT
- SMTP_USER
- SMTP_PASS
Optional:
- MAIL_FROM

## Deploy to Vercel
- Push to GitHub → Import repo in Vercel
- Add env vars
- Deploy

## Deploy to AWS Amplify Hosting
- New App → Host web app → connect GitHub repo/branch
- Add env vars in App settings → Environment variables
- Build spec: `amplify.yml`

## Replace branding assets
- `public/logo-ft-hex.png`
- `public/og.png`
- `public/favicon.ico`
