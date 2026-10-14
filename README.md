# Zayden Construction

A premium, frontend-only construction and infrastructure website built with React, Vite, TypeScript, Tailwind CSS, Framer Motion and Lucide.

## Run locally

```bash
npm install
npm run dev
```

The local development URL will be printed in the terminal. Build the production site with:

```bash
npm run build
npm run preview
```

## Deploy to Vercel

1. Push this directory to a Git repository.
2. In Vercel, create a new project from that repository.
3. Keep the default Vite build command (`npm run build`) and output directory (`dist`).
4. Deploy. `vercel.json` includes an SPA fallback so project and service detail links work on refresh.
5. Replace `https://your-domain.com` in `public/sitemap.xml` with the real production domain.

No environment variables or backend services are required.

## Add, edit, remove, or reorder projects

All portfolio content is centralized in [`src/data/projects.ts`](src/data/projects.ts).

Each project object has an `id`, `slug`, category, location, completion status, year, cover image, gallery, overview, challenge/solution narrative, scope, highlights, featured flag and SEO fields.

- **Add:** duplicate a project object, make the `id` and `slug` unique, then add its content and imagery.
- **Edit:** change an existing object. The cards, filters, detail route, SEO content and related-project suggestions automatically update.
- **Remove:** delete that object. It disappears from every project view.
- **Reorder:** move the object within the array. Featured work follows the order of the `featured: true` items.
- **Replace an image:** use an optimized project image URL or a file in `public/` (for example, `/images/project-name/cover.webp`). Update `coverImage` and `gallery` in the same object.

The current portfolio is deliberately marked as **illustrative sample content**. Replace all project copy, imagery, locations, years and statuses with verified information before launch.

## Update services, company details and sample content

- `src/data/services.ts` controls the service overview and reusable service-detail pages.
- `src/data/company.ts` controls contact details, social links, navigation, process, values, sample statistics and placeholder testimonials.
- Replace the temporary address, phone number, email and WhatsApp number in `src/data/company.ts` before launch.
- Placeholder testimonials and sample statistics are visibly labelled in the UI and should be replaced with approved, real material.

## Change the company name and logo

1. Update `company.name` in `src/data/company.ts`.
2. Update the wordmark in `src/components/BrandMark.tsx`.
3. The current mark is an intentionally simple geometric placeholder. Replace it with an approved SVG or image when the Zayden identity is finalized.
4. Update the page title/description in `index.html` and the web app’s descriptive text as appropriate.

## Contact form behavior

The inquiry form in `src/pages/ContactPage.tsx` validates the essential fields then opens the visitor’s email application with a pre-filled message. It does not submit, store, or fake success states.

To collect inquiries directly later, replace that email action with a configured third-party form service or a genuine backend endpoint.

## Placeholder imagery

This build currently uses remote Unsplash placeholder images. Replace them with approved, licensed Zayden project photography before production launch. Keep image URLs in the relevant data files so the interface remains untouched.

## Accessibility and motion

The site includes semantic navigation, visible focus states, keyboard-accessible controls, labelled form fields, responsive layouts, image alternatives and a `prefers-reduced-motion` mode.
