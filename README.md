# Sai Krishna — Personal Portfolio

A fast, interactive, and accessible personal portfolio website built with vanilla HTML5, CSS3, and modern JavaScript. Designed with a dark glassmorphic aesthetic, purple (`#7c5cff`) and cyan (`#20d9ff`) accents, smooth 3D tilt effects, and cinematic lamp pull interactions.

---

## 🌟 Key Features

### 1. Lamp Entry & Return Interactions
- **Landing Lamp**: Visitors land on a minimalist launch screen. Pulling the chain turns on the lamp with warm lighting and crossfades into the main portfolio.
- **Return Lamp**: At the bottom of the page, pulling the chain once wakes the lamp, and pulling a second time returns to the landing screen with a smooth crossfade.

### 2. Data-Driven "Selected Work" Showcase & Modal
- All projects are rendered dynamically from a clean JavaScript data array at the top of `script.js`.
- **Category Filter Pills**: Filter projects across `All`, `Full Stack`, `Web App`, and `Healthcare` with smooth opacity and scale transitions (~300ms).
- **Accessible Detail Modal**: Clicking any project card opens a keyboard-accessible modal dialog featuring:
  - Problem statement, technical solution, and developer role
  - Key feature highlights and technology stack chips
  - Tracked performance metrics / impact indicators
  - Direct links to **Live Demo** and **Source Code** (automatically omitted when not applicable)
  - Accessible focus trap (`Tab` / `Shift+Tab`), `Escape` key dismissal, backdrop dismissal, and focus restoration to the trigger element upon closing.

### 3. Creative Developer Cursor & Glow
- Custom web-developer cursor displaying an interactive `</>` code badge.
- Reacts to links, buttons, cards, tags, and inputs with springy scaling and click ripples.
- Transitions into a warm incandescent cursor after the lamp is pulled.
- Throttled via a single `requestAnimationFrame` loop and disabled on touch devices (`pointer: coarse`) and when `prefers-reduced-motion` is enabled.

### 4. High-Performance Particle Mesh Network
- HTML5 Canvas particle network with distance-pruned connections.
- Capped at `devicePixelRatio: 2` with particle count optimized for mobile screens.
- Automatically pauses when the browser tab is hidden or when the canvas is scrolled out of view.

### 5. Accessibility & Motion Compliance
- Full keyboard navigability for the welcome chain, mobile menu, project cards, and modals.
- Respects `prefers-reduced-motion`: pauses particle loops, tilt physics, magnetic buttons, and typewriter loops.
- Standardized CSS transition variables (`--ease-out`, `--dur-fast`, `--dur-med`, `--dur-slow`) ensuring smooth hardware-accelerated animations.

---

## 📁 Project Structure

```text
portfolio/
├── index.html        # Semantic HTML5 markup
├── style.css         # Consolidated styles, variables & responsive rules
├── script.js         # Data-driven project model & interactive logic
├── README.md         # Documentation
└── assets/
    ├── profile.png   # Portrait photo
    └── ...           # Resume and documents
```

---

## 🚀 How to Add a New Project

To add a new project, simply append an object to the `projects` array at the top of `script.js`. No HTML modifications required.

```javascript
// In script.js:
{
  id: "my-project-id",
  title: "My Project Title",
  subtitle: "One-line descriptive subtitle",
  category: "Full Stack", // "Full Stack" | "Web App" | "Healthcare" | custom
  year: "2026",
  outcome: "A single impactful sentence describing the core result or metric.",
  description: "Comprehensive summary of the project architecture and purpose.",
  problem: "The specific technical or user problem addressed.",
  solution: "The technical solution, architecture, and tools implemented.",
  role: "Your role (e.g. Full-Stack Developer, API Designer).",
  keyFeatures: [
    "Key capability or architectural highlight 1",
    "Key capability or architectural highlight 2",
    "Key capability or architectural highlight 3"
  ],
  tech: ["Django", "PostgreSQL", "React", "REST APIs"],
  liveUrl: "https://your-demo-url.com", // Leave as "" if no live deployment
  repoUrl: "https://github.com/krishna21106/your-repo", // Leave as "" if private
  accent: "#7c5cff",
  artClass: "ticket-art", // CSS-art class: "ticket-art", "traffic-art", "health-art"
  metrics: "TODO: add real metric (e.g. latency, user volume, uptime)"
}
```

The category filter and modal dialog will automatically pick up the new entry, render the chips, and conditionally display the live and repository buttons.

---

## 🛠️ Local Development & Deployment

Because this project uses vanilla HTML, CSS, and JavaScript, no build step, compiler, or package manager is required:

1. **Local Preview**: Open `index.html` directly in any modern browser, or run a lightweight local static server:
   ```bash
   npx serve .
   # or
   python -m http.server 8000
   ```
2. **Deploy**:
   - **GitHub Pages**: Push to GitHub and enable Pages in repository settings.
   - **Netlify / Vercel**: Connect the repository or drag-and-drop the directory.

Make sure the `assets/` directory remains adjacent to `index.html` when deploying.
