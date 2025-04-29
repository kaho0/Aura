
# Aura

Live site: [aura-nu.vercel.app](https://aura-nu.vercel.app)

**Aura** is a modern web application built with [Next.js](https://nextjs.org) using the App Router. It features fast performance, server-side rendering, and optimized font loading with `next/font` using [Geist](https://vercel.com/font).

---

## Getting Started

Clone the repository and run the development server:

```bash
git clone https://github.com/your-username/aura.git
cd aura
npm install
npm run dev
```

Visit `http://localhost:3000` in your browser.

---

## Features

- ⚡ Built with Next.js App Router
- 🎨 Custom font: Geist (via `next/font`)
- 🚀 Deployed on Vercel
---

## Folder Structure

```
/app         → Main application pages
/public      → Static assets (images, icons)
/styles      → Global styles (if any)
/components  → Reusable UI components
```

---

## Deployment

This project is deployed on [Vercel](https://vercel.com).  
Every push to the main branch will trigger an automatic deployment.

To deploy manually:

1. Connect your GitHub repo to Vercel.
2. Set the framework to **Next.js**.
3. Vercel handles the rest.

---

---

**Made with Next.js & Geist by [Vercel](https://vercel.com).**
"""

# Save to a file
readme_path = Path("/mnt/data/README.md")
readme_path.write_text(readme_content.strip())

readme_path.name  # return the filename only for user reference
