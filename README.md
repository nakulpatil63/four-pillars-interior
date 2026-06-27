# Four Pillars Interior - Modular Kitchen & Wardrobe Studio Website

This is a premium, custom-designed Next.js (App Router), React, TypeScript, and Tailwind CSS website for **Four Pillars Interior** located in Tilakwadi, Belagavi, Karnataka.

---

## 🏛️ Project Directory Structure

```text
d:\clint 1 kitichen\
├── app/                      # Next.js App Router Pages
│   ├── about/                # About Us Detail Page
│   │   └── page.tsx
│   ├── contact/              # Contact Inquiry Form & Google Maps Page
│   │   └── page.tsx
│   ├── faq/                  # Help Accordion Page
│   │   └── page.tsx
│   ├── portfolio/            # Filterable Gallery with Lightbox
│   │   └── page.tsx
│   ├── privacy-policy/       # Privacy Statement
│   │   └── page.tsx
│   ├── terms/                # Service Terms & Warranties
│   │   └── page.tsx
│   ├── testimonials/         # Star Rated Reviews Feed
│   │   └── page.tsx
│   ├── globals.css           # Custom Scrollbars and Layout Overrides
│   └── layout.tsx            # Global Head metadata, Fonts, Schema Markup
│
├── components/               # Reusable Modular UI Components
│   ├── ClientCursorGlow.tsx  # Dynamic Cursor Glow Light Tracker
│   ├── Header.tsx            # Navigation Bar Drawer
│   ├── Footer.tsx            # Dark-Themed Info Footer
│   └── FloatingWidgets.tsx   # Phone Hotline, WhatsApp and Scroll Up shortcuts
│
├── public/                   # Static Media Assets & Favicons
├── package.json              # Main Node Modules Dependencies
├── tsconfig.json             # TypeScript Compilers Configurations
├── tailwind.config.js        # Color Palette Design Tokens
├── postcss.config.js         # PostCSS Styling Prefixer
├── next.config.js            # Next.js Static Compilation Configs
├── sitemap.xml               # Search Crawler Schema
├── robots.txt                # Indexing Rules Configuration
└── README.md                 # Project Walkthrough Documentation
```

---

## 🛠️ Installation & Local Development

To spin up the local development environment:

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Run Local Server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to preview.

3. **Verify Production Build**:
   ```bash
   npm run build
   ```

---

## 🚀 Easy Cloud Deployment

Since local command execution is constrained by system sandbox limitations, you can deploy this website to production in **two minutes** using Git-based integration:

### Option A: Vercel (Recommended)
1. Initialize Git in this directory, commit, and push it to a new repository on **GitHub** / **GitLab** / **Bitbucket**.
2. Visit [Vercel Sign In](https://vercel.com/login).
3. Click **Add New** → **Project** and import your repository.
4. Select the default Next.js framework configuration and click **Deploy**. Vercel will automatically build and serve the site with a live public URL.

### Option B: Netlify
1. Visit [Netlify Sign In](https://app.netlify.com/login).
2. Select **Import from Git** and link your GitHub repository.
3. Keep default settings (`Build Command: npm run build`, `Publish Directory: .next`) and click **Deploy Site**.
