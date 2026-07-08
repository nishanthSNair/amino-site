# Amino — prototype site

A high-fidelity marketing/funnel prototype for **Amino**, a physician-led peptide protocol platform in the UAE. Built to demo the brand, positioning and patient journey to the founding team. This is **not** the production clinical app.

Positioning: *The UAE's first blood-panel-led, physician-designed peptide protocol platform.*

## Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS (custom Amino tokens: clay, sage, cream, charcoal, Fraunces + Inter)
- Framer Motion (subtle scroll reveal, respects `prefers-reduced-motion`)
- Hand-rolled shadcn-style UI (Button, Badge, Card, SectionHeading)
- All content is static, hardcoded in `/data`

## Run locally

```bash
cd amino-site
npm install
npm run dev
```

Open http://localhost:3000.

Other scripts:
- `npm run build` — production build
- `npm run start` — serve the production build

## Deploy to Vercel

1. Push `amino-site/` to a Git repo (GitHub / GitLab / Bitbucket).
2. Go to https://vercel.com/new, import the repo, and set the **Root Directory** to `amino-site` if the folder isn't the repo root.
3. Framework preset: **Next.js**. No environment variables needed.
4. Deploy — you'll get a shareable `.vercel.app` URL.

Alternatively, using the Vercel CLI from inside `amino-site/`:

```bash
npx vercel
npx vercel --prod
```

## Where to edit content

All copy lives in `/data`. Nothing else needs to change to update the wording.

| File | What it controls |
| --- | --- |
| `data/site.ts` | Nav, hero copy, trust badges, 5-step "how it works", trust strip, stats band, final CTA + email capture, compliance footer |
| `data/protocols.ts` | The 6 protocol stacks — name, category, outcome, peptides, who it's for, mechanism, "what to expect" (used on the home grid and `/protocols/[slug]`) |
| `data/products.ts` | The 12 individual peptides — category, benefit, mechanism, prescription requirements (used on the product grid + slide-over) |
| `data/people.ts` | Physician cards on the Science section + testimonial cards |

Brand tokens (colors, radii, shadows, font vars) live in `tailwind.config.ts`.

## File structure

```
amino-site/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx                    # single-scroll home
│   └── protocols/[slug]/page.tsx   # protocol detail page
├── components/
│   ├── nav.tsx                     # sticky blurred nav + mobile menu
│   ├── hero.tsx                    # headline + ambient clay/sage orbs
│   ├── how-it-works.tsx            # 5 steps, steps 3+4 elevated
│   ├── protocols.tsx               # 6 protocol cards
│   ├── products.tsx                # 12-peptide grid + slide-over
│   ├── science.tsx                 # clinical pillars + physicians
│   ├── testimonials.tsx            # 6 quotes + stats band
│   ├── cta.tsx                     # final band + email capture (UI only)
│   ├── footer.tsx
│   ├── logo.tsx
│   ├── motion.tsx                  # <Reveal> scroll animation
│   └── ui.tsx                      # Button, Badge, Card, SectionHeading
└── data/
    ├── site.ts
    ├── protocols.ts
    ├── products.ts
    └── people.ts
```

## Notes on tone & compliance

The site follows the clinical tone rules of the brand:

- No specific pharmacy is named — always *"a fully licensed UAE compounding pharmacy regulated by MOH and EDE"*.
- No prices anywhere; all products carry an **Rx · physician-reviewed** label.
- No cure/reversal claims — copy uses *supports*, *designed to*, *may help*.
- No emojis in body copy. Peptides are described as *cellular messengers*.
- No needles/injection imagery.

Edit copy in `/data` freely, but keep these rules in mind.
