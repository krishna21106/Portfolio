/**
 * =========================================================
 * SAI KRISHNA PORTFOLIO — DATA-DRIVEN JAVASCRIPT
 * Clean Vanilla JS · Accessible · High Performance
 * =========================================================
 */

// Utility Helpers
const $ = (s) => document.querySelector(s);
const $$ = (s) => [...document.querySelectorAll(s)];

function escapeHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/* =========================================================
   TASK 2: DATA-DRIVEN SELECTED WORK
   Adding a project is as simple as adding an object here.
   ========================================================= */
const projects = [
  {
    id: "zenith-events",
    title: "Zenith Events",
    subtitle: "Smart Event Ticket Reservation & Booking Platform",
    category: "Full Stack",
    year: "2025",
    outcome: "Real-time seat reservation engine eliminating double-bookings with instant checkout.",
    description: "A full-featured event ticketing platform engineered with dynamic seat mapping, instant reservation locks to prevent duplicate bookings, and QR ticket verification.",
    problem: "High-demand ticket sales frequently suffer from concurrency race conditions where simultaneous checkout requests lead to double-allocated seats and customer dissatisfaction.",
    solution: "Implemented atomic database transactions in Django and PostgreSQL with instantaneous seat locking, live seat maps, and automated QR pass generation for gate admissions.",
    role: "Full-Stack Engineer — Architected transactional seat reservation models, concurrency control mechanisms, interactive seat selection interface, and cloud deployment.",
    keyFeatures: [
      "Atomic seat locking preventing duplicate purchases during high-traffic drops",
      "Interactive SVG/DOM seating grid with live seat status indicators",
      "Dynamic QR pass generation for streamlined event admission",
      "Responsive checkout flow with real-time reservation expiration timers"
    ],
    tech: ["Django", "PostgreSQL", "JavaScript", "QR System", "REST APIs", "CSS3"],
    liveUrl: "https://ticket-booking-z2df.onrender.com/",
    repoUrl: "https://github.com/krishna21106?tab=repositories", // TODO: replace with direct repository URL if available
    accent: "#7c5cff",
    artClass: "ticket-art",
    metrics: "TODO: add real metric (e.g. concurrent checkout transactions handled, average booking latency)"
  },
  {
    id: "traffic-navigator",
    title: "Intelligent Urban Traffic Navigator",
    subtitle: "Graph-Based City Route & Efficiency Comparator",
    category: "Web App",
    year: "2025",
    outcome: "Algorithmic route comparator analyzing city travel times and route efficiency in real time.",
    description: "A web-based urban routing platform that analyzes real-time route congestion, calculates optimal alternative paths using graph traversal algorithms, and visualizes route tradeoffs.",
    problem: "Urban commuters lack rapid, battery-efficient in-browser tools to visually compare alternative transit paths and congestion heuristics without installing heavy native navigation software.",
    solution: "Engineered an in-browser graph traversal simulation evaluating shortest path algorithms (Dijkstra and A*) with real-time road weight fluctuations and visual telemetry.",
    role: "Frontend & Algorithm Developer — Developed interactive HTML5 canvas simulation, graph pathfinding implementations, and route comparison metrics.",
    keyFeatures: [
      "Interactive graph model with dynamic node and segment congestion weights",
      "Real-time comparative computation of travel time versus distance tradeoffs",
      "Visual path traversal demonstrating bottleneck propagation across city sectors",
      "Lightweight client-side architecture requiring zero backend roundtrips"
    ],
    tech: ["JavaScript", "Graph Algorithms", "HTML5 Canvas", "Interactive UI", "CSS3"],
    liveUrl: "", // No live URL -> only Source Code button
    repoUrl: "https://github.com/krishna21106?tab=repositories",
    accent: "#20d9ff",
    artClass: "traffic-art",
    metrics: "TODO: add real metric (e.g. graph node count, path calculation time in ms)"
  },
  {
    id: "ehr-lab-system",
    title: "EHR & Lab Management System",
    subtitle: "Comprehensive Digital Healthcare & Records Suite",
    category: "Healthcare",
    year: "2025",
    outcome: "Unified digital patient records and automated lab test tracking with secure role-based access.",
    description: "A secure electronic health record (EHR) and laboratory workflow management system designed for clinics to manage patient history, diagnostic orders, and secure reports.",
    problem: "Small and outpatient healthcare facilities struggle with fragmented paper workflows, unlinked laboratory test queues, and delayed diagnostic report dissemination.",
    solution: "Built an integrated clinic platform featuring Role-Based Access Control (RBAC), end-to-end laboratory test requisition pipelines, and encrypted medical history logs.",
    role: "Backend Architect & Full-Stack Developer — Designed relational schema for electronic health records, RESTful endpoints for laboratory test tracking, and RBAC authentication.",
    keyFeatures: [
      "Role-Based Access Control ensuring strict role separation between physicians, lab technicians, and administration",
      "Automated laboratory test requisition lifecycle with turnaround status monitoring",
      "Consolidated digital patient history timelines with diagnostic audit trails",
      "Modular REST API architecture designed for clinical subsystem integration"
    ],
    tech: ["Python", "Django", "PostgreSQL", "REST APIs", "RBAC", "Bootstrap"],
    liveUrl: "", // No live URL -> only Source Code button
    repoUrl: "https://github.com/krishna21106?tab=repositories",
    accent: "#35e0a1",
    artClass: "health-art",
    metrics: "TODO: add real metric (e.g. diagnostic turnaround reduction, clinical records indexed)"
  }
];

// Motion & Device Preferences (Cached)
const prefersReducedMotionMedia = window.matchMedia("(prefers-reduced-motion: reduce)");
const pointerFineMedia = window.matchMedia("(pointer: fine)");
let isReducedMotion = prefersReducedMotionMedia.matches;
let isFinePointer = pointerFineMedia.matches;

prefersReducedMotionMedia.addEventListener("change", (e) => { isReducedMotion = e.matches; });
pointerFineMedia.addEventListener("change", (e) => { isFinePointer = e.matches; });

// Visibility tracker to pause background loops
let isDocumentVisible = !document.hidden;
document.addEventListener("visibilitychange", () => {
  isDocumentVisible = !document.hidden;
});

/* =========================================================
   PROJECT RENDERING & ACCESSIBLE MODAL
   ========================================================= */
function getProjectArtHtml(artClass) {
  if (artClass === "ticket-art") {
    return `
      <div class="project-art ticket-art" aria-hidden="true">
        <div class="ticket">TICKET<br><small>SEAT 24A</small></div>
        <div class="spark s1"></div>
        <div class="spark s2"></div>
      </div>`;
  }
  if (artClass === "traffic-art") {
    return `
      <div class="project-art traffic-art" aria-hidden="true">
        <div class="road"></div>
        <div class="car car-a"></div>
        <div class="car car-b"></div>
        <div class="route"></div>
      </div>`;
  }
  if (artClass === "health-art") {
    return `
      <div class="project-art health-art" aria-hidden="true">
        <div class="pulse">+</div>
        <div class="health-lines"></div>
      </div>`;
  }
  return `<div class="project-art" aria-hidden="true"></div>`;
}

function renderProjects() {
  const container = $("#projectGrid");
  if (!container) return;

  container.innerHTML = projects.map((p, idx) => {
    const liveBtn = p.liveUrl
      ? `<a href="${escapeHtml(p.liveUrl)}" class="project-btn-link" target="_blank" rel="noopener" aria-label="${escapeHtml(p.title)} Live Demo">Live Demo ↗</a>`
      : "";
    const repoBtn = p.repoUrl
      ? `<a href="${escapeHtml(p.repoUrl)}" class="project-btn-link ghost" target="_blank" rel="noopener" aria-label="${escapeHtml(p.title)} Source Code">Source Code ↗</a>`
      : "";

    return `
      <article class="project-card tilt reveal" style="--i: ${idx + 1}" data-category="${escapeHtml(p.category)}" data-id="${escapeHtml(p.id)}">
        <div class="project-top">
          <span class="project-tag">0${idx + 1} · ${escapeHtml(p.category.toUpperCase())} · ${escapeHtml(p.year)}</span>
          <span class="project-badge">ACTIVE</span>
        </div>
        ${getProjectArtHtml(p.artClass)}
        <div class="project-body">
          <h3>${escapeHtml(p.title)}</h3>
          <p class="project-outcome">${escapeHtml(p.outcome)}</p>
          <div class="chips">
            ${p.tech.map(t => `<span>${escapeHtml(t)}</span>`).join("")}
          </div>
          <div class="project-actions">
            <button class="btn-card-details" type="button" aria-haspopup="dialog" aria-label="View details for ${escapeHtml(p.title)}">View Details <span class="arrow">→</span></button>
            <div class="project-links">
              ${liveBtn}
              ${repoBtn}
            </div>
          </div>
        </div>
      </article>`;
  }).join("");

  // Attach card click handlers for modal
  container.querySelectorAll(".project-card").forEach(card => {
    const id = card.getAttribute("data-id");
    const project = projects.find(p => p.id === id);
    if (!project) return;

    card.addEventListener("click", (e) => {
      // Don't open modal if an outbound link was clicked
      if (e.target.closest("a")) return;
      openProjectModal(project, card);
    });

    card.addEventListener("keydown", (e) => {
      if ((e.key === "Enter" || e.key === " ") && !e.target.closest("a")) {
        e.preventDefault();
        openProjectModal(project, card);
      }
    });
  });
}

// Category Filter Logic with Smooth Animation (~300ms)
function setupProjectFilters() {
  const pills = $$(".filter-pill");
  pills.forEach(pill => {
    pill.addEventListener("click", () => {
      pills.forEach(p => {
        p.classList.remove("active");
        p.setAttribute("aria-selected", "false");
      });
      pill.classList.add("active");
      pill.setAttribute("aria-selected", "true");

      const filter = pill.getAttribute("data-filter");
      const cards = $$(".project-card");

      cards.forEach(card => {
        const cardCat = card.getAttribute("data-category");
        const matches = filter === "all" || cardCat === filter;

        if (matches) {
          card.classList.remove("is-hidden");
          requestAnimationFrame(() => {
            card.style.opacity = "1";
            card.style.transform = "scale(1)";
          });
        } else {
          card.style.opacity = "0";
          card.style.transform = "scale(0.96)";
          setTimeout(() => {
            if (card.style.opacity === "0") {
              card.classList.add("is-hidden");
            }
          }, 300);
        }
      });
    });
  });
}

// Accessible Modal Management
let lastFocusedElement = null;
const modal = $("#projectModal");
const modalCloseBtn = $("#modalCloseBtn");

function openProjectModal(project, trigger) {
  if (!modal) return;
  lastFocusedElement = trigger || document.activeElement;

  $("#modalCategory").textContent = project.category;
  $("#modalYear").textContent = project.year;
  $("#modalTitle").textContent = project.title;
  $("#modalOutcome").textContent = project.outcome;
  $("#modalProblem").textContent = project.problem;
  $("#modalSolution").textContent = project.solution;
  $("#modalRole").textContent = project.role;
  $("#modalMetrics").textContent = project.metrics;

  const featuresList = $("#modalFeatures");
  if (featuresList) {
    featuresList.innerHTML = project.keyFeatures.map(f => `<li>${escapeHtml(f)}</li>`).join("");
  }

  const techChips = $("#modalTech");
  if (techChips) {
    techChips.innerHTML = project.tech.map(t => `<span>${escapeHtml(t)}</span>`).join("");
  }

  const footer = $("#modalFooter");
  if (footer) {
    const liveLink = project.liveUrl
      ? `<a href="${escapeHtml(project.liveUrl)}" class="btn primary magnetic" target="_blank" rel="noopener">Open Live Demo ↗</a>`
      : "";
    const repoLink = project.repoUrl
      ? `<a href="${escapeHtml(project.repoUrl)}" class="btn ghost magnetic" target="_blank" rel="noopener">Source Code ↗</a>`
      : "";
    footer.innerHTML = `${liveLink}${repoLink}`;
  }

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");

  // Focus the close button when opened
  if (modalCloseBtn) modalCloseBtn.focus();
}

function closeProjectModal() {
  if (!modal || !modal.classList.contains("open")) return;
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");

  // Restore focus to trigger
  if (lastFocusedElement && typeof lastFocusedElement.focus === "function") {
    lastFocusedElement.focus();
  }
}

// Focus Trap Inside Modal
function handleModalKeydown(e) {
  if (!modal || !modal.classList.contains("open")) return;

  if (e.key === "Escape") {
    e.preventDefault();
    closeProjectModal();
    return;
  }

  if (e.key === "Tab") {
    const focusableSelector = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
    const focusables = [...modal.querySelectorAll(focusableSelector)].filter(
      el => !el.disabled && el.offsetParent !== null
    );
    if (!focusables.length) {
      e.preventDefault();
      return;
    }
    const first = focusables[0];
    const last = focusables[focusables.length - 1];

    if (e.shiftKey) {
      if (document.activeElement === first) {
        e.preventDefault();
        last.focus();
      }
    } else {
      if (document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  }
}

if (modal) {
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeProjectModal();
  });
  if (modalCloseBtn) {
    modalCloseBtn.addEventListener("click", closeProjectModal);
  }
  window.addEventListener("keydown", handleModalKeydown);
}

/* =========================================================
   CINEMATIC HERO ENTRY ANIMATION MODULE
   Configurable tuning knobs (durations, staggers, delays in ms)
   ========================================================= */
const HERO_INTRO_CONFIG = {
  bloomDuration: 1400,     // ms: radial bloom expansion
  charStagger: 45,         // ms: split text character stagger
  shimmerDuration: 950,    // ms: gradient shimmer sweep across name
  profileDelay: 550,       // ms: delay before portrait scales & SVG stroke draws
  taglineDelay: 850,       // ms: delay before tagline and description slide in
  actionsDelay: 1150,      // ms: delay before CTA buttons & quick stats slide in
  nodesDelay: 1400,        // ms: delay before floating tech chips drift in
  typewriterDelay: 1800    // ms: delay before typewriter loop begins
};

let heroIntroPlayed = false;

function initHeroSplitText() {
  const nameEl = $("#heroName");
  if (!nameEl || nameEl.getAttribute("data-split") === "true") return;
  nameEl.setAttribute("data-split", "true");

  const rawText = nameEl.textContent.trim();
  nameEl.setAttribute("aria-label", rawText);

  // Split words and characters with accessible aria attributes
  const words = rawText.split(" ");
  nameEl.innerHTML = words.map(word => {
    const chars = [...word].map(char => `<span class="split-char" aria-hidden="true">${escapeHtml(char)}</span>`).join("");
    return `<span class="split-word" aria-hidden="true">${chars}</span>`;
  }).join("&nbsp;");
}
initHeroSplitText();

function playHeroIntro() {
  if (heroIntroPlayed) return;
  heroIntroPlayed = true;

  document.body.classList.remove("lamp-pending");
  document.body.classList.add("hero-intro-active");

  const nameEl = $("#heroName");
  const bloom = $("#heroLightBloom");
  const space = $("#space");
  const navbar = $("#navbar");
  const coreCard = $("#heroCoreCard");
  const ring = $(".portrait-ring-circle");
  const typewriterEl = $("#typewriter");

  if (isReducedMotion) {
    document.body.classList.add("hero-intro-done");
    if (nameEl) nameEl.querySelectorAll(".split-char").forEach(c => c.classList.add("char-revealed"));
    if (ring) ring.classList.add("ring-drawn");
    if (space) space.style.opacity = "0.35";
    if (navbar) navbar.classList.add("navbar-revealed");
    if (coreCard) coreCard.classList.add("card-revealed");
    $$(".hero-badge, .eyebrow, .hero-greeting, .hero-tagline, .hero-text, .hero-actions, .quick-stats").forEach(el => el.classList.add("intro-revealed"));
    $$(".hero-visual .node").forEach(n => n.classList.add("node-drift-in"));
    if (typewriterEl) typewriterEl.textContent = words[0];
    return;
  }

  // 1. Radial Light Bloom expands & particle canvas fades in
  if (bloom) bloom.classList.add("bloom-active");
  if (space) space.classList.add("space-revealed");

  // 8. Navbar slides down and fades in
  if (navbar) navbar.classList.add("navbar-revealed");

  // Eyebrow & status badge
  const badge = $(".hero-badge");
  const eyebrow = $(".eyebrow");
  const greeting = $(".hero-greeting");
  if (badge) badge.classList.add("intro-revealed");
  if (eyebrow) eyebrow.classList.add("intro-revealed");
  if (greeting) greeting.classList.add("intro-revealed");

  // 2. Split text reveal with stagger
  const chars = nameEl ? nameEl.querySelectorAll(".split-char") : [];
  chars.forEach((char, idx) => {
    setTimeout(() => {
      char.classList.add("char-revealed");
    }, 280 + idx * HERO_INTRO_CONFIG.charStagger);
  });

  // Gradient shimmer sweep after name lands
  const totalCharTime = 280 + chars.length * HERO_INTRO_CONFIG.charStagger;
  setTimeout(() => {
    if (nameEl) {
      nameEl.classList.add("shimmer-active");
      setTimeout(() => nameEl.classList.remove("shimmer-active"), HERO_INTRO_CONFIG.shimmerDuration);
    }
  }, totalCharTime + 80);

  // 4. Profile portrait scales in & SVG gradient stroke draws
  setTimeout(() => {
    if (coreCard) coreCard.classList.add("card-revealed");
    if (ring) ring.classList.add("ring-drawn");
  }, HERO_INTRO_CONFIG.profileDelay);

  // 3. Tagline & description paragraph
  setTimeout(() => {
    const tagline = $(".hero-tagline");
    const heroText = $(".hero-text");
    if (tagline) tagline.classList.add("intro-revealed");
    if (heroText) heroText.classList.add("intro-revealed");
  }, HERO_INTRO_CONFIG.taglineDelay);

  // 5. CTA buttons & stats enter, followed by glow pulse
  setTimeout(() => {
    const actions = $(".hero-actions");
    const stats = $(".quick-stats");
    if (actions) actions.classList.add("intro-revealed");
    if (stats) stats.classList.add("intro-revealed");

    setTimeout(() => {
      const primaryBtn = $(".hero-actions .btn.primary");
      if (primaryBtn) primaryBtn.classList.add("glow-pulse");
    }, 450);
  }, HERO_INTRO_CONFIG.actionsDelay);

  // 6. Floating glass tech chips drift in with parallax
  setTimeout(() => {
    const nodes = $$(".hero-visual .node");
    nodes.forEach(node => node.classList.add("node-drift-in"));
  }, HERO_INTRO_CONFIG.nodesDelay);

  // 7. Settle sequence & initiate typewriter
  setTimeout(() => {
    document.body.classList.add("hero-intro-done");
    document.body.classList.remove("hero-intro-active");
    typeWriter();
  }, HERO_INTRO_CONFIG.typewriterDelay);
}

function resetHeroIntro() {
  heroIntroPlayed = false;
  document.body.classList.remove("hero-intro-active", "hero-intro-done");
  document.body.classList.add("lamp-pending");

  if (typeWriterTimer) {
    clearTimeout(typeWriterTimer);
    typeWriterTimer = null;
  }
  wordIdx = 0;
  charIdx = 0;
  isDeleting = false;
  const typeTarget = $("#typewriter");
  if (typeTarget) typeTarget.textContent = "";

  const bloom = $("#heroLightBloom");
  if (bloom) bloom.classList.remove("bloom-active");
  const space = $("#space");
  if (space) space.classList.remove("space-revealed");
  const navbar = $("#navbar");
  if (navbar) navbar.classList.remove("navbar-revealed");
  const coreCard = $("#heroCoreCard");
  if (coreCard) coreCard.classList.remove("card-revealed");
  const ring = $(".portrait-ring-circle");
  if (ring) ring.classList.remove("ring-drawn");

  $$(".hero-name .split-char").forEach(c => c.classList.remove("char-revealed"));
  $$(".hero-badge, .eyebrow, .hero-greeting, .hero-tagline, .hero-text, .hero-actions, .quick-stats").forEach(el => el.classList.remove("intro-revealed"));
  $$(".hero-visual .node").forEach(n => n.classList.remove("node-drift-in"));
}

/* =========================================================
   INITIALIZATION & LAMP SETUP
   ========================================================= */
function initPortfolio() {
  const yearEl = $("#year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  renderProjects();
  setupProjectFilters();
  observeReveals();
  initHeroSplitText();

  // Landing Lamp Setup
  const welcome = $("#welcomeScreen");
  if (welcome) {
    const lamp = $("#welcomeLamp");
    const chain = $("#lampChain");
    let entering = false;

    const enterPortfolio = () => {
      if (entering || welcome.classList.contains("entered")) return;
      entering = true;

      if (chain) chain.classList.add("pulled");
      if (lamp) lamp.classList.add("lamp-on");
      document.body.classList.add("lamp-mode");
      welcome.classList.add("lamp-reveal");

      setTimeout(() => {
        welcome.classList.add("entered");
        playHeroIntro();
      }, 650);
    };

    window.__resetLandingLamp = () => {
      entering = false;
      if (chain) chain.classList.remove("pulled");
      if (lamp) lamp.classList.remove("lamp-on");
      resetHeroIntro();
    };

    if (chain) {
      chain.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        enterPortfolio();
      });

      chain.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          enterPortfolio();
        }
      });
    }

    // Direct load if welcome screen already completed
    if (welcome.classList.contains("entered")) {
      playHeroIntro();
    }
  } else {
    // Direct load without welcome screen
    playHeroIntro();
  }

  // Final Return Lamp Setup
  const returnChain = $("#returnLampChain");
  const returnLamp = $("#returnLamp");
  const returnHint = $("#returnLampHint");
  if (welcome && returnChain) {
    let returnPulls = 0;
    let returnLocked = false;

    const returnToLanding = () => {
      if (returnLocked) return;
      returnLocked = true;

      document.body.classList.add("returning-to-landing");
      document.body.classList.remove("lamp-mode", "profile-revealed");
      if (returnHint) returnHint.textContent = "RETURNING TO LANDING...";

      window.scrollTo({ top: 0, behavior: "auto" });
      const firstLamp = $("#welcomeLamp");
      const firstChain = $("#lampChain");
      if (firstLamp) firstLamp.classList.remove("lamp-on");
      if (firstChain) firstChain.classList.remove("pulled");
      if (window.__resetLandingLamp) window.__resetLandingLamp();

      setTimeout(() => {
        welcome.classList.remove("entered", "lamp-reveal");
      }, 180);

      setTimeout(() => {
        document.body.classList.remove("returning-to-landing");
        returnPulls = 0;
        returnChain.classList.remove("pulled-twice");
        if (returnLamp) returnLamp.classList.remove("lamp-on");
        if (returnHint) returnHint.textContent = "PULL THE CHAIN · 2 TIMES TO RETURN";
        returnLocked = false;
      }, 1250);
    };

    const pullReturn = () => {
      if (returnLocked) return;
      returnPulls += 1;
      returnChain.classList.remove("pulled-twice");
      void returnChain.offsetWidth;
      returnChain.classList.add("pulled-twice");

      if (returnPulls === 1) {
        if (returnLamp) returnLamp.classList.add("lamp-on");
        if (returnHint) returnHint.textContent = "ONE MORE PULL · RETURN TO LANDING";
      } else {
        if (returnHint) returnHint.textContent = "RETURNING TO LANDING...";
        setTimeout(returnToLanding, 380);
      }
    };

    returnChain.addEventListener("click", pullReturn);
    returnChain.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        pullReturn();
      }
    });
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initPortfolio);
} else {
  initPortfolio();
}

/* =========================================================
   TYPEWRITER EFFECT (TRIGGERED VIA HERO INTRO)
   ========================================================= */
const words = ["scalable full-stack", "interactive", "modern", "high-performance"];
let wordIdx = 0, charIdx = 0, isDeleting = false;
let typeWriterTimer = null;

function typeWriter() {
  const typeTarget = $("#typewriter");
  if (!typeTarget) return;

  if (isReducedMotion) {
    typeTarget.textContent = words[0];
    return;
  }

  const currentWord = words[wordIdx % words.length];
  if (isDeleting) {
    typeTarget.textContent = currentWord.substring(0, charIdx - 1);
    charIdx--;
  } else {
    typeTarget.textContent = currentWord.substring(0, charIdx + 1);
    charIdx++;
  }

  let speed = isDeleting ? 40 : 100;
  if (!isDeleting && charIdx === currentWord.length) {
    speed = 2500;
    isDeleting = true;
  } else if (isDeleting && charIdx === 0) {
    isDeleting = false;
    wordIdx++;
    speed = 400;
  }
  typeWriterTimer = setTimeout(typeWriter, speed);
}

/* =========================================================
   MAGNETIC BUTTONS (THROTTLED & POINTER-AWARE)
   ========================================================= */
function setupMagneticButtons() {
  if (!isFinePointer || isReducedMotion) return;

  $$(".magnetic").forEach(btn => {
    btn.addEventListener("mousemove", (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      btn.style.transform = `translate3d(${x * 0.22}px, ${y * 0.22}px, 0)`;
    });
    btn.addEventListener("mouseleave", () => {
      btn.style.transform = "translate3d(0, 0, 0)";
    });
  });
}
setupMagneticButtons();

/* =========================================================
   MOBILE NAVIGATION (ANIMATED + ESCAPE + ACCESSIBILITY)
   ========================================================= */
const menuBtn = $("#menuBtn");
const navLinks = $("#navLinks");

function toggleMenu(forceClose) {
  if (!menuBtn || !navLinks) return;
  const shouldOpen = forceClose ? false : !navLinks.classList.contains("open");
  navLinks.classList.toggle("open", shouldOpen);
  menuBtn.setAttribute("aria-expanded", String(shouldOpen));
}

if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", () => toggleMenu());
  $$("nav a").forEach(a => a.addEventListener("click", () => toggleMenu(true)));
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && navLinks.classList.contains("open")) {
      toggleMenu(true);
      menuBtn.focus();
    }
  });
}

/* =========================================================
   NAVBAR & BACK-TO-TOP BUTTON
   ========================================================= */
const navbar = $("#navbar");
const topBtn = $("#topBtn");

window.addEventListener("scroll", () => {
  const sy = window.scrollY;
  if (navbar) navbar.classList.toggle("scrolled", sy > 30);
  if (topBtn) topBtn.classList.toggle("show", sy > 500);
}, { passive: true });

if (topBtn) {
  topBtn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

/* =========================================================
   INTERSECTION OBSERVER (REVEALS & UNWATCH FOR PERFORMANCE)
   ========================================================= */
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      // Animate stat counters if present
      const counters = entry.target.querySelectorAll(".stat-counter");
      counters.forEach(c => animateCount(c.id, parseInt(c.getAttribute("data-val") || c.innerText, 10) || 0));
      // Stop observing element once revealed to free CPU cycles
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

function observeReveals() {
  $$(".reveal").forEach(el => revealObserver.observe(el));
}
observeReveals();

/* Active Navigation Section Tracker */
const sections = $$("main section[id]");
const navItems = $$("nav a");
const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const activeId = entry.target.id;
      navItems.forEach(a => {
        const href = a.getAttribute("href");
        a.classList.toggle("active", href === "#" + activeId);
      });
    }
  });
}, { rootMargin: "-30% 0px -50% 0px" });

sections.forEach(s => sectionObserver.observe(s));

/* =========================================================
   TOUCH / CLICK TO REVEAL PROFILE
   ========================================================= */
const profileReveal = $("#profileReveal");
if (profileReveal) {
  const revealProfile = () => {
    if (profileReveal.classList.contains("revealed")) return;
    profileReveal.classList.add("revealed");
    profileReveal.setAttribute("aria-label", "Profile image revealed");
    document.body.classList.add("profile-revealed");
  };

  profileReveal.addEventListener("pointerup", revealProfile, { passive: true });
  profileReveal.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      revealProfile();
    }
  });
}

/* =========================================================
   CONSOLIDATED RAF POINTER TRACKER
   Merges cursor lerp, glow orb, hero parallax, and card tilt
   ========================================================= */
const devCursor = $("#devCursor");
const cursorGlow = $("#cursorGlow");
const heroCore = $(".core-card");

let pointerX = window.innerWidth / 2;
let pointerY = window.innerHeight / 2;
let cursorRenderX = pointerX;
let cursorRenderY = pointerY;
let glowRenderX = pointerX;
let glowRenderY = pointerY;

let activeTiltCard = null;
let currentHoveredTilt = null;

// Single pointermove listener for whole page
window.addEventListener("pointermove", (e) => {
  pointerX = e.clientX;
  pointerY = e.clientY;

  if (devCursor) devCursor.classList.remove("is-hidden");

  // Track currently hovered tilt card
  if (isFinePointer && !isReducedMotion) {
    const card = e.target.closest(".tilt");
    if (card !== currentHoveredTilt) {
      if (currentHoveredTilt) {
        currentHoveredTilt.style.setProperty("--rx", "0deg");
        currentHoveredTilt.style.setProperty("--ry", "0deg");
        currentHoveredTilt.style.setProperty("--scale", "1");
      }
      currentHoveredTilt = card;
    }
  }
}, { passive: true });

window.addEventListener("pointerleave", () => {
  if (devCursor) devCursor.classList.add("is-hidden");
  if (currentHoveredTilt) {
    currentHoveredTilt.style.setProperty("--rx", "0deg");
    currentHoveredTilt.style.setProperty("--ry", "0deg");
    currentHoveredTilt.style.setProperty("--scale", "1");
    currentHoveredTilt = null;
  }
});

// Cursor click and hover state triggers
if (devCursor && isFinePointer) {
  document.addEventListener("pointerdown", () => {
    devCursor.classList.remove("is-click");
    void devCursor.offsetWidth;
    devCursor.classList.add("is-click");
  });

  const interactiveTargets = "a, button, input, textarea, select, .magnetic, .tilt, .chips span, .node, .project-art, .filter-pill, .modal-close";
  document.addEventListener("mouseover", (e) => {
    if (e.target.closest(interactiveTargets)) devCursor.classList.add("is-hover");
  });
  document.addEventListener("mouseout", (e) => {
    if (e.target.closest(interactiveTargets) && !e.relatedTarget?.closest?.(interactiveTargets)) {
      devCursor.classList.remove("is-hover");
    }
  });
}

function updatePointerFrame() {
  if (isDocumentVisible) {
    // Smooth Developer Cursor Lerp
    if (devCursor && isFinePointer && !isReducedMotion) {
      cursorRenderX += (pointerX - cursorRenderX) * 0.22;
      cursorRenderY += (pointerY - cursorRenderY) * 0.22;
      devCursor.style.transform = `translate3d(${cursorRenderX}px, ${cursorRenderY}px, 0)`;
    }

    // Smooth Cursor Glow Orb Lerp
    if (cursorGlow && !isReducedMotion) {
      glowRenderX += (pointerX - glowRenderX) * 0.1;
      glowRenderY += (pointerY - glowRenderY) * 0.1;
      cursorGlow.style.transform = `translate3d(${glowRenderX}px, ${glowRenderY}px, 0) translate(-50%, -50%)`;
    }

    // Hero Core Parallax
    if (heroCore && isFinePointer && !isReducedMotion) {
      const hx = (pointerX / window.innerWidth - 0.5) * 8;
      const hy = (pointerY / window.innerHeight - 0.5) * 8;
      heroCore.style.transform = `perspective(1000px) rotateX(${-hy * 0.35}deg) rotateY(${hx * 0.35}deg)`;
    }

    // Springy 3D Card Tilt via CSS variables
    if (currentHoveredTilt && isFinePointer && !isReducedMotion) {
      const rect = currentHoveredTilt.getBoundingClientRect();
      const x = (pointerX - rect.left) / rect.width - 0.5;
      const y = (pointerY - rect.top) / rect.height - 0.5;
      currentHoveredTilt.style.setProperty("--rx", `${y * -10}deg`);
      currentHoveredTilt.style.setProperty("--ry", `${x * 10}deg`);
      currentHoveredTilt.style.setProperty("--scale", "1.02");
    }
  }

  requestAnimationFrame(updatePointerFrame);
}
requestAnimationFrame(updatePointerFrame);

/* =========================================================
   OPTIMIZED CANVAS PARTICLE MESH
   DPR capped at 2, mobile particle reduction, O(n) line distance pruning,
   and paused when tab hidden or canvas offscreen.
   ========================================================= */
const canvas = $("#space");
let ctx = canvas ? canvas.getContext("2d") : null;
let stars = [], canvasW = 0, canvasH = 0;
let isCanvasInView = true;

if (canvas) {
  const canvasObserver = new IntersectionObserver((entries) => {
    isCanvasInView = entries[0].isIntersecting;
  }, { threshold: 0.02 });
  canvasObserver.observe(canvas);

  function resizeCanvas() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvasW = canvas.width = window.innerWidth * dpr;
    canvasH = canvas.height = window.innerHeight * dpr;
    canvas.style.width = window.innerWidth + "px";
    canvas.style.height = window.innerHeight + "px";

    // Adaptive particle count
    const particleCount = window.innerWidth < 600 ? 32 : (window.innerWidth < 1000 ? 52 : 75);

    stars = Array.from({ length: particleCount }, () => ({
      x: Math.random() * canvasW,
      y: Math.random() * canvasH,
      r: (Math.random() * 1.5 + 0.5) * dpr,
      vx: (Math.random() - 0.5) * 0.45 * dpr,
      vy: (Math.random() - 0.5) * 0.45 * dpr
    }));
  }

  window.addEventListener("resize", resizeCanvas, { passive: true });
  resizeCanvas();

  function drawCanvas() {
    if (!isReducedMotion && isDocumentVisible && isCanvasInView && ctx) {
      ctx.clearRect(0, 0, canvasW, canvasH);
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const maxDist = 125 * dpr;
      const maxDistSq = maxDist * maxDist;

      // Update positions
      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];
        s.x += s.vx;
        s.y += s.vy;
        if (s.x < 0 || s.x > canvasW) s.vx *= -1;
        if (s.y < 0 || s.y > canvasH) s.vy *= -1;
      }

      // Draw mesh connections with Manhattan distance cutoff
      ctx.lineWidth = 0.5;
      for (let i = 0; i < stars.length; i++) {
        const si = stars[i];
        let connections = 0;
        for (let j = i + 1; j < stars.length; j++) {
          if (connections >= 4) break; // Limit lines per node for high frame-rates
          const sj = stars[j];
          const dx = si.x - sj.x;
          const dy = si.y - sj.y;

          // Rapid bounding check before distance calculation
          if (Math.abs(dx) > maxDist || Math.abs(dy) > maxDist) continue;

          const distSq = dx * dx + dy * dy;
          if (distSq < maxDistSq) {
            connections++;
            const dist = Math.sqrt(distSq);
            const alpha = 0.12 + (1 - dist / maxDist) * 0.35;
            ctx.strokeStyle = `rgba(124, 92, 255, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(si.x, si.y);
            ctx.lineTo(sj.x, sj.y);
            ctx.stroke();
          }
        }
      }

      // Draw particle points
      ctx.fillStyle = "rgba(255, 255, 255, 0.75)";
      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    requestAnimationFrame(drawCanvas);
  }

  requestAnimationFrame(drawCanvas);
}

/* =========================================================
   GITHUB INTEGRATION (WITH ESCAPED INNERHTML)
   ========================================================= */
const GITHUB_USER = "krishna21106";

fetch(`https://api.github.com/users/${GITHUB_USER}`)
  .then(r => r.ok ? r.json() : Promise.reject())
  .then(data => {
    const rEl = $("#repoCount");
    const fEl = $("#followCount");
    if (rEl) rEl.setAttribute("data-val", data.public_repos ?? 2);
    if (fEl) fEl.setAttribute("data-val", data.followers ?? 0);
  })
  .catch(() => {});

fetch(`https://api.github.com/users/${GITHUB_USER}/repos?per_page=100&sort=updated`)
  .then(r => r.ok ? r.json() : Promise.reject())
  .then(repos => {
    const stars = repos.reduce((sum, repo) => sum + (repo.stargazers_count || 0), 0);
    const sEl = $("#starCount");
    if (sEl) sEl.setAttribute("data-val", stars);

    const container = $("#githubRepos");
    if (!container || !repos.length) return;

    // Strict sanitization with escapeHtml
    container.innerHTML = repos.slice(0, 6).map((repo, idx) => `
      <div class="repo-card glass reveal visible tilt" style="--i: ${idx + 1}">
        <div class="repo-icon">{ }</div>
        <div class="repo-content">
          <div class="repo-title">
            <a href="${escapeHtml(repo.html_url)}" target="_blank" rel="noopener">${escapeHtml(repo.name)}</a>
            <span class="public">${repo.private ? "Private" : "Public"}</span>
          </div>
          <p>${escapeHtml(repo.description || "GitHub project by Sai Krishna.")}</p>
          <div class="repo-meta">
            <span>${repo.language ? `<i class="dot js"></i> ${escapeHtml(repo.language)}` : "GitHub project"}</span>
            <span>★ ${Number(repo.stargazers_count) || 0}</span>
          </div>
        </div>
        <a class="repo-arrow" href="${escapeHtml(repo.html_url)}" target="_blank" rel="noopener" aria-label="Open repository on GitHub">↗</a>
      </div>`).join("");
  })
  .catch(() => {});

function animateCount(id, target) {
  const el = typeof id === "string" ? $(`#${id}`) : id;
  if (!el || isNaN(target) || el.classList.contains("done")) return;
  el.classList.add("done");
  let count = 0;
  const step = Math.max(1, Math.ceil(target / 30));
  const timer = setInterval(() => {
    count += step;
    if (count >= target) {
      el.textContent = target;
      clearInterval(timer);
    } else {
      el.textContent = count;
    }
  }, 40);
}

/* =========================================================
   CLIPBOARD COPY FOR CONTACT DETAILS
   ========================================================= */
$$(".copy-field").forEach(el => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    const text = el.getAttribute("data-copy");
    if (!text) return;

    navigator.clipboard.writeText(text).then(() => {
      const originalText = el.textContent;
      el.textContent = "Copied to clipboard!";
      setTimeout(() => { el.textContent = originalText; }, 1800);
    });
  });
});


