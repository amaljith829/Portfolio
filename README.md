# Amaljith A A — Portfolio

A fast, modern personal portfolio built with React, Vite, Tailwind CSS, and shadcn/ui. Includes a projects carousel, hero, about, skills, experience, resume download, and a fully wired EmailJS contact form.

## Tech Stack
- React 18, React Router
- Vite 5 (dev server, build)
- Tailwind CSS (+ tailwindcss-animate)
- shadcn/ui + Radix Primitives
- lucide-react icons
- EmailJS (client-side email)

## Repository Layout
This repo uses a single workspace app.

- Root (this folder): workspace root, single `package-lock.json`, repo-wide `.gitignore`
- `amaljith_a_a_portfolio/`: the React app

Keep only one `package-lock.json` at the repository root.

## Getting Started
Prerequisites: Node.js ≥ 18, npm ≥ 10

Install dependencies (from repo root):

```bash
npm install
```

Start the dev server (from repo root):

```bash
npm run dev:ipv4
```

Open the printed URL (e.g., `http://127.0.0.1:8080` or `8081/8082`). Using `127.0.0.1` helps avoid local proxy/VPN websocket issues.

Build and preview (from repo root):

```bash
npm run build
npm run preview
```

## EmailJS Setup (Contact Form)
The contact form sends emails via EmailJS.

1. EmailJS Dashboard → Account → Security → Allowed origins → add your dev and production domains (e.g., `http://127.0.0.1:8080`, your Vercel URL)
2. Email Templates → open your template → ensure variables match exactly:
   - `from_name`
   - `from_email`
   - `message`
3. Keys are wired in `amaljith_a_a_portfolio/src/components/sections/Contact.jsx`. Update if they change:
   - Public Key
   - Service ID
   - Template ID

On success, the user sees: “Thanks for reaching out! I'll get back to you soon.”

## Customize
- Profile image: `amaljith_a_a_portfolio/public/images/`
- Resume file: place your latest as `amaljith_a_a_portfolio/public/Amaljith_A_A_Resume.pdf` (button auto-downloads)
- Colors/typography: `amaljith_a_a_portfolio/tailwind.config.js`
- Extra CSS utilities (gradient text, glass, hover lifts, animated ring): `amaljith_a_a_portfolio/src/index.css`

## Deploying to Vercel
1. Push this repository to GitHub
2. Import in Vercel
3. In Project Settings:
   - Root Directory: `amaljith_a_a_portfolio`
   - Install Command: `npm ci` (or `npm install`)
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Add your production domain to EmailJS Allowed origins

## Troubleshooting
- Vite HMR websocket error “RSV1 must be clear”
  - Use `http://127.0.0.1:PORT` instead of `localhost`
  - Disable VPN/proxy/extensions that might intercept websockets
- `vite: command not found`
  - Run `npm install` at the repo root
- `[postcss] Cannot find module 'tailwindcss-animate'`
  - Run `npm install tailwindcss-animate -w amaljith_a_a_portfolio`

## License
Personal portfolio project. Feel free to adapt structure and styles for your own use.
