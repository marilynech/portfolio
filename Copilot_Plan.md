You are helping me build a clean, creative portfolio website.

Tech stack:
- Next.js (App Router), TypeScript, Tailwind CSS
- Mobile-first, accessible, fast, SEO-friendly

Design:
- Minimal, modern, slightly creative
- Subtle animated gradient background
- Rounded cards, soft shadows, tasteful motion (CSS transitions only)
- Dark mode styles supported (via Tailwind class strategy), but toggle optional

Pages / sections:
1) Home page (app/page.tsx):
- Sticky navbar with links: Projects, About, Contact
- Hero section: name, short tagline, buttons (GitHub, LinkedIn, Email)
- Projects section: grid of ProjectCards populated from a local data file
- About section: short bio + tech stack chips
- Contact section: email + socials

Data:
- Put projects in /src/data/projects.ts
- Each project has: title, description, tech (string[]), image (optional), repoUrl, liveUrl (optional), featured (boolean)

Components:
- Navbar
- Hero
- SectionHeading
- ProjectCard
- TechBadge
- Footer

Theme: Starry Night
- Global background is a fixed “starry sky” with layered gradients + stars + a moon.
- Accent colors:
  - accent: #559fd6
  - night: #27466c (and darker #0b1320 for depth)
  - moon: #f3df92
- Create a reusable <StarryBackground /> component and CSS in globals.css.
- Use local Google Sans via next/font/local (files in public/fonts). Set Tailwind fontFamily.sans to var(--font-google-sans).
- All buttons/links highlights use accent color. Use subtle glow shadows for interactive elements.
- Respect prefers-reduced-motion (no intense animations).

Rules:
- Use semantic HTML and accessibility best practices
- Keep components small and readable
- Avoid heavy animation libraries
- Use Tailwind for styling; no external UI kits
- Provide clean default content placeholders I can edit
