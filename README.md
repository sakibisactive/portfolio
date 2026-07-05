# Shahriar Sakib — Personal Portfolio Website

Personal portfolio website for **Shahriar Sakib**, final-year Computer Science student at BRAC University specializing in **Machine Learning, Deep Learning, NLP, and Swarm Robotics / IoT**.

Built with an **editorial, research-lab aesthetic** featuring high typography contrast, signal emerald accents, and an interactive bio-inspired multi-agent swarm node graph background.

---

## 🚀 Tech Stack

- **Framework**: [Next.js 14+](https://nextjs.org/) (App Router, React 19)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) + Custom Glassmorphism System
- **Animation**: [Framer Motion](https://www.framer.com/motion/) + Interactive HTML5 Canvas
- **Typography**: Space Grotesk (Headings), Inter (Body), JetBrains Mono (Stats & Badges via `next/font`)
- **Icons**: [Lucide React](https://lucide.react.dev/)
- **Deployment**: [Vercel](https://vercel.com/) (Zero Config)

---

## ⚡ Quick Start (Local Development)

1. **Clone & Install Dependencies**:
   ```bash
   npm install
   ```

2. **Run Development Server**:
   ```bash
   npm run dev
   ```

3. **View Site**:
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Production Build**:
   ```bash
   npm run build
   npm run start
   ```

---

## 📁 Project Structure

```
Portfolio/
├── public/
│   └── resume.pdf            # Swap this placeholder with Shahriar's real PDF resume
├── src/
│   ├── app/
│   │   ├── globals.css       # Design system tokens, grid patterns, & Tailwind CSS v4 setup
│   │   ├── layout.tsx        # Root layout, Google Fonts loading, and SEO metadata
│   │   └── page.tsx          # Main single-page portfolio layout
│   └── components/
│       ├── Navbar.tsx        # Sticky glassmorphism header & mobile drawer
│       ├── Hero.tsx          # Confident headline, CTAs, & quick stats bar
│       ├── SwarmBackground.tsx # Interactive mouse-reactive swarm node network canvas
│       ├── AboutSection.tsx  # Bio profile & compact education timeline
│       ├── SkillsSection.tsx # Categorized tech stack pills with monospace accents
│       ├── FeaturedThesis.tsx # Flagship Swarm Routing thesis card + interactive SVG diagram
│       ├── ProjectsSection.tsx # Bento-grid layout with stat badges & detail modals
│       └── ContactSection.tsx  # Direct email copy, social links, & contact form
└── README.md
```

---

## 🛠️ Customization & Swap Instructions

### 1. Resume PDF
- Replace `public/resume.pdf` with Shahriar Sakib's actual resume PDF file.

### 2. GitHub Project Links
- In `src/components/ProjectsSection.tsx`, update the `githubUrl` field in the `projects` array with real GitHub repository URLs when ready.

### 3. Contact Form Backend Integration
- In `src/components/ContactSection.tsx`, integrate your preferred serverless form action (e.g., [Formspree](https://formspree.io/) or [Resend](https://resend.com/)) by replacing the simulated submit handler.

---

## 🌐 Deploying to Vercel

The repository is structured for **zero-configuration zero-setup Vercel deployment**.

### Option A: Via Vercel CLI
```bash
npx vercel
```
Or for production:
```bash
npx vercel --prod
```

### Option B: Via GitHub Integration
1. Push this repository to GitHub:
   ```bash
   git add .
   git commit -m "Initial portfolio commit"
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```
2. Import the repository into your Vercel Dashboard at [vercel.com/new](https://vercel.com/new).
3. Vercel will automatically detect **Next.js**, run `next build`, and deploy the site instantly.
