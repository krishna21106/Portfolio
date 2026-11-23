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
    id: "network-monitoring-system",
    title: "Network Monitoring System",
    subtitle: "Enterprise NOC Console & Topology Orchestrator",
    category: "Full Stack",
    year: "2026",
    outcome: "Full-stack NOC dashboard featuring real-time telemetry, topology mapping, and automated alert mitigation.",
    description: "A production-grade network operations and monitoring console built with Spring Boot, React, TypeScript, and PostgreSQL. Features interactive topology mapping, live device metrics streaming, IPAM/VLAN orchestration, and role-based quad-panel portals.",
    problem: "Network engineers and administrators struggle with fragmented diagnostic tools, delayed outage notifications, and lack of safe sandbox environments for evaluating topology performance.",
    solution: "Built a centralized network monitoring platform featuring real-time simulated telemetry, automated alert rule triggering, interactive visual network graphs, and role-based operational portals.",
    role: "Full-Stack Developer — Architected Spring Boot backend REST services, JWT security, React/TypeScript telemetry dashboards, network topology visualization, and Render cloud deployment.",
    keyFeatures: [
      "Quad-Panel role-based login portals (Administrator, Operator, Student Station, Viewer)",
      "Interactive network topology mapping with live device status and link indicators",
      "Real-time telemetry streaming for CPU, memory, packet stream dissection, and latency",
      "Integrated IPAM, VLAN allocation tracking, and automated configuration backups"
    ],
    tech: ["React", "TypeScript", "Spring Boot", "Java", "PostgreSQL", "REST APIs", "Docker", "Render Cloud"],
    liveUrl: "https://network-monitoring-system-2.onrender.com/login",
    repoUrl: "https://github.com/krishna21106/Network-Monitoring-System",
    accent: "#20d9ff",
    artClass: "network-art",
    metrics: "Full-stack enterprise NOC console with real-time telemetry & topology mapping"
  },
  {
    id: "meeting-scheduler",
    title: "Intelligent Meeting Scheduler",
    subtitle: "AI-Powered Automated Slot Scheduling & Calendar Coordination",
    category: "Full Stack",
    year: "2025",
    outcome: "Conflict-free meeting coordination engine with intelligent availability slots and instant calendar synchronization.",
    description: "An intelligent web application that automates meeting coordination, optimizes available time windows across participants, prevents double-booking, and streamlines scheduling workflows.",
    problem: "Coordinating multi-party meetings traditionally suffers from repeated email exchanges, double-booking conflicts, and time-zone confusion.",
    solution: "Developed an automated scheduling engine featuring algorithmic conflict resolution, real-time availability slots, calendar invites, and direct one-click booking.",
    role: "Full-Stack Developer — Built backend availability logic, conflict resolution algorithms, interactive calendar interface, and deployed on Render cloud.",
    keyFeatures: [
      "Algorithmic conflict detection preventing overlapping reservations",
      "Dynamic time-slot allocation with real-time participant availability",
      "One-click instant reservation and automated calendar synchronization",
      "Modern responsive UI with real-time feedback and validation"
    ],
    tech: ["Python", "Flask", "JavaScript", "HTML5", "CSS3", "REST APIs", "Render Cloud"],
    liveUrl: "https://intelligent-meeting-scheduler.onrender.com/",
    repoUrl: "https://github.com/krishna21106/Intelligent-Meeting-Scheduler",
    accent: "#10b981",
    artClass: "scheduler-art",
    metrics: "Instant conflict detection & live slot booking deployed on Render"
  },
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
    repoUrl: "https://github.com/krishna21106?tab=repositories",
    accent: "#7c5cff",
    artClass: "ticket-art",
    metrics: "Instant atomic seat reservations with live QR verification"
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
    liveUrl: "",
    repoUrl: "https://github.com/krishna21106?tab=repositories",
    accent: "#20d9ff",
    artClass: "traffic-art",
    metrics: "Real-time client-side graph pathfinding & transit modeling"
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
    liveUrl: "",
    repoUrl: "https://github.com/krishna21106?tab=repositories",
    accent: "#35e0a1",
    artClass: "health-art",
    metrics: "Role-based diagnostic tracking and clinical electronic records"
  }
];

/* =========================================================
   CERTIFICATES DATA MODEL & ACCREDITATIONS
   ========================================================= */
const certificates = [
  
  {
    id: "cert-python-internship",
    title: "Python Internship",
    shortTitle: "Python Internship",
    issuer: "CareerSchool HR Solutions",
    authority: "MSME · Ministry of Corporate Affairs (Govt. of India) · APSCHE",
    categories: ["all", "featured", "ai"],
    period: "July 2026",
    duration: "Two-Month Python Internship & AI Program",
    score: "Excellence",
    scoreType: "Certificate of Professional Excellence",
    breakdown: "Adv. Python · Analytics · Generative AI Workflows & Production Deployments",
    credits: "Govt-Recognized Accreditation",
    rollNo: "CS-HR-2026-AI-0207",
    badge: "Professional Excellence",
    badgeClass: "gold",
    image: "assets/certificates/cert-careerschool-genai.jpg",
    pdfUrl: "assets/certificates/CareerSchool_Python_Analytics_GenAI.jpg",
    coordinator: "Kartikey Anil Vithlani (Director, CareerSchool HR Solutions)",
    description: "Completed a two-month Python-domain internship at Career School HR Solutions.",
    iconSvg: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M11.914 0C5.748 0 6.137 2.68 6.137 2.68l.006 2.78h5.882v.834H3.83S0 5.86 0 12.046c0 6.185 3.344 5.952 3.344 5.952h1.996v-2.81s-.109-3.345 3.287-3.345h5.66v-.84H8.625s-2.87.163-2.87-2.733c0-2.896 2.502-2.84 2.502-2.84h6.082s2.613.078 2.613-2.584c0-2.66-2.222-2.846-5.038-2.846zm-2.12 1.696a.91.91 0 1 1 0 1.82.91.91 0 0 1 0-1.82zM12.086 24c6.166 0 5.777-2.68 5.777-2.68l-.006-2.78h-5.882v-.834h8.192s3.83.434 3.83-5.752c0-6.185-3.344-5.952-3.344-5.952h-1.996v2.81s.109 3.345-3.287 3.345h-5.66v.84h5.662s2.87-.163 2.87 2.733c0 2.896-2.502 2.84-2.502 2.84h-6.082s-2.613-.078-2.613 2.584c0 2.66 2.222 2.846 5.038 2.846zm2.12-1.696a.91.91 0 1 1 0-1.82.91.91 0 0 1 0 1.82z"/></svg>`
  },
 
  {
    id: "cert-incubation-entrepreneurship",
    title: "Understanding Incubation and Entrepreneurship",
    shortTitle: "Incubation & Entrepreneurship",
    issuer: "Indian Institute of Technology Bombay",
    authority: "NPTEL · Ministry of Education, Govt. of India",
    categories: ["all", "iit"],
    period: "Jan - Apr 2026",
    duration: "12 Week Course · 4 Credits",
    score: "90%",
    scoreType: "Consolidated Score: 90% (Elite + Gold Medal)",
    breakdown: "Online Assignments: 24.38/25 · Proctored Exam: 66/75 · 7506 Candidates",
    credits: "4 Credits Recommended",
    rollNo: "NPTEL26DE06S2185201729",
    badge: "Elite + Gold Medal · 90%",
    badgeClass: "gold",
    image: "assets/certificates/cert-incubation-entrepreneurship.jpg",
    pdfUrl: "assets/certificates/Understanding_Incubation_and_Entrepreneurship.pdf",
    coordinator: "Prof. Sridhar Iyer (Head CDEEP & NPTEL Coordinator, IIT Bombay)",
    description: "Certified with high distinction (90%, Gold Medal) in startup incubation models, venture validation, IP creation, and technology commercialization under IIT Bombay faculty.",
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>`
  },
  {
    id: "cert-big-data-computing",
    title: "Big Data Computing",
    shortTitle: "Big Data Computing",
    issuer: "Indian Institute of Technology Kanpur",
    authority: "NPTEL · Ministry of Education, Govt. of India",
    categories: ["all", "iit"],
    period: "Aug - Oct 2026",
    duration: "8 Week Course · 3 Credits",
    score: "66%",
    scoreType: "Consolidated Score: 66% (Elite)",
    breakdown: "Online Assignments: 25/25 · Proctored Exam: 40.5/75 · 11504 Candidates",
    credits: "3 Credits Recommended",
    rollNo: "NPTEL26CS189S1480510048",
    badge: "Elite · 66%",
    badgeClass: "purple",
    image: "assets/certificates/cert-big-data-computing.jpg",
    pdfUrl: "assets/certificates/Big_Data_Computing.pdf",
    coordinator: "Prof. B. V. Ratish Kumar & Prof. Satyaki Roy (IIT Kanpur)",
    description: "In-depth study of distributed system architectures, MapReduce distributed data processing, Apache Spark, HDFS storage, and scalable NoSQL database systems.",
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="20" height="8" x="2" y="2" rx="2" ry="2"></rect><rect width="20" height="8" x="2" y="14" rx="2" ry="2"></rect><line x1="6" x2="6.01" y1="6" y2="6"></line><line x1="6" x2="6.01" y1="18" y2="18"></line></svg>`
  },
  {
    id: "cert-product-engineering",
    title: "Product Engineering and Design Thinking",
    shortTitle: "Product Engineering & Design",
    issuer: "Indian Institute of Technology Kharagpur",
    authority: "NPTEL · Ministry of Education, Govt. of India",
    categories: ["all", "iit"],
    period: "Jan - Mar 2026",
    duration: "8 Week Course · 3 Credits",
    score: "64%",
    scoreType: "Consolidated Score: 64% (Elite)",
    breakdown: "Online Assignments: 25/25 · Proctored Exam: 39/75 · 2269 Candidates",
    credits: "3 Credits Recommended",
    rollNo: "NPTEL26ME57S661501423",
    badge: "Elite · 64%",
    badgeClass: "purple",
    image: "assets/certificates/cert-product-engineering.jpg",
    pdfUrl: "assets/certificates/Product_Engineering_and_Design_Thinking.pdf",
    coordinator: "Prof. Haimanti Banerji (Coordinator, NPTEL IIT Kharagpur)",
    description: "Human-centered design thinking methodologies, user empathy mapping, engineering ergonomics, rapid interactive prototyping, and product validation.",
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>`
  },
  {
    id: "cert-joy-computing-python",
    title: "The Joy of Computing using Python",
    shortTitle: "Joy of Computing using Python",
    issuer: "Indian Institute of Technology Madras",
    authority: "NPTEL · Ministry of Education, Govt. of India",
    categories: ["all", "iit", "ai"],
    period: "Jul - Oct 2025",
    duration: "12 Week Course · 3 or 4 Credits",
    score: "56%",
    scoreType: "Consolidated Score: 56%",
    breakdown: "Online Assignments: 24.41/25 · Proctored Exam: 31.5/75 · 20403 Candidates",
    credits: "3 or 4 Credits Recommended",
    rollNo: "NPTEL25CS103S2562100862",
    badge: "NPTEL Certified · 56%",
    badgeClass: "cyan",
    image: "assets/certificates/cert-joy-computing-python.jpg",
    pdfUrl: "assets/certificates/The_Joy_of_Computing_using_Python.pdf",
    coordinator: "Prof. Andrew Thangaraj & Prof. Vignesh Muthuvijayan (IIT Madras)",
    description: "Computational problem solving, algorithmic problem decomposition, recursion, Python data structures, and mathematical modeling.",
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`
  },
  {
    id: "cert-privacy-security-social-media",
    title: "Privacy and Security in Online Social Media",
    shortTitle: "Privacy & Social Media Security",
    issuer: "IIIT Hyderabad & IIT Madras",
    authority: "NPTEL · Ministry of Education, Govt. of India",
    categories: ["all", "iit"],
    period: "Jul - Oct 2026",
    duration: "12 Week Course · 4 Credits",
    score: "57%",
    scoreType: "Consolidated Score: 57%",
    breakdown: "Online Assignments: 23.93/25 · Proctored Exam: 32.25/75 · 28451 Candidates",
    credits: "4 Credits Recommended",
    rollNo: "NPTEL26CS141S1380510048",
    badge: "NPTEL Certified · 57%",
    badgeClass: "cyan",
    image: "assets/certificates/cert-privacy-security-social-media.jpg",
    pdfUrl: "assets/certificates/Privacy_and_Security_in_Online_Social_Media.pdf",
    coordinator: "Prof. Kishore Kothapalli (IIIT Hyderabad) & Prof. Andrew Thangaraj (IIT Madras)",
    description: "Rigorous analysis of digital privacy protection, social network security vulnerabilities, cyber threat vectors, and OSINT defense.",
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="m9 12 2 2 4-4"></path></svg>`
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
  if (artClass === "network-art") {
    return `
      <div class="project-art network-art" aria-hidden="true">
        <div class="network-pulse-card">
          <div class="network-header">
            <span class="net-status-dot online"></span>
            <span class="net-label">NOC LIVE TELEMETRY</span>
            <span class="net-ping">24ms</span>
          </div>
          <div class="network-topology-nodes">
            <div class="net-node gateway"><span class="node-icon">🌐</span><span class="node-lbl">Gateway</span></div>
            <div class="net-cable"></div>
            <div class="net-node router"><span class="node-icon">🖧</span><span class="node-lbl">Core Router</span></div>
            <div class="net-cable"></div>
            <div class="net-node server"><span class="node-icon">🖳</span><span class="node-lbl">NOC Server</span></div>
          </div>
          <div class="network-metrics-row">
            <div class="net-metric"><span>UPTIME</span><b>99.98%</b></div>
            <div class="net-metric"><span>TRAFFIC</span><b>1.2 Gbps</b></div>
            <div class="net-metric"><span>HEALTH</span><b class="online-text">OPTIMAL</b></div>
          </div>
        </div>
        <div class="spark s1"></div>
        <div class="spark s2"></div>
      </div>`;
  }
  if (artClass === "scheduler-art") {
    return `
      <div class="project-art scheduler-art" aria-hidden="true">
        <div class="calendar-card">
          <div class="calendar-header">
            <span>MAR 2025</span>
            <span class="cal-dot"></span>
          </div>
          <div class="calendar-grid">
            <span class="cal-cell">9:00</span>
            <span class="cal-cell booked">10:30 ✓</span>
            <span class="cal-cell">12:00</span>
            <span class="cal-cell active">14:00 ★</span>
            <span class="cal-cell">15:30</span>
            <span class="cal-cell booked">17:00 ✓</span>
          </div>
        </div>
        <div class="spark s1"></div>
        <div class="spark s2"></div>
      </div>`;
  }
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
      ? `<a href="${escapeHtml(p.liveUrl)}" class="project-btn-link primary-demo" target="_blank" rel="noopener" aria-label="${escapeHtml(p.title)} Live Demo">Live Demo ↗</a>`
      : "";
    const repoBtn = p.repoUrl
      ? `<a href="${escapeHtml(p.repoUrl)}" class="project-btn-link ghost" target="_blank" rel="noopener" aria-label="${escapeHtml(p.title)} Source Code">Source Code ↗</a>`
      : "";

    const titleHtml = p.liveUrl
      ? `<a href="${escapeHtml(p.liveUrl)}" target="_blank" rel="noopener" class="project-title-link" title="Open ${escapeHtml(p.title)} Live Demo">${escapeHtml(p.title)} ↗</a>`
      : escapeHtml(p.title);

    return `
      <article class="project-card tilt reveal" style="--i: ${idx + 1}" data-category="${escapeHtml(p.category)}" data-id="${escapeHtml(p.id)}">
        <div class="project-top">
          <span class="project-tag">0${idx + 1} · ${escapeHtml(p.category.toUpperCase())} · ${escapeHtml(p.year)}</span>
          <span class="project-badge">ACTIVE</span>
        </div>
        ${getProjectArtHtml(p.artClass)}
        <div class="project-body">
          <h3>${titleHtml}</h3>
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

  // Attach card click handlers: clicking the card demonstrates to liveUrl if available!
  container.querySelectorAll(".project-card").forEach(card => {
    const id = card.getAttribute("data-id");
    const project = projects.find(p => p.id === id);
    if (!project) return;

    card.addEventListener("click", (e) => {
      // Don't intercept if an explicit link was clicked
      if (e.target.closest("a")) return;
      // If View Details button was clicked, open details modal
      if (e.target.closest(".btn-card-details")) {
        openProjectModal(project, card);
        return;
      }
      // If clicking anywhere on the card, demonstrate liveUrl if present
      if (project.liveUrl) {
        window.open(project.liveUrl, "_blank", "noopener,noreferrer");
      } else {
        openProjectModal(project, card);
      }
    });

    card.addEventListener("keydown", (e) => {
      if ((e.key === "Enter" || e.key === " ") && !e.target.closest("a")) {
        e.preventDefault();
        if (project.liveUrl && !e.target.closest(".btn-card-details")) {
          window.open(project.liveUrl, "_blank", "noopener,noreferrer");
        } else {
          openProjectModal(project, card);
        }
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

/* =========================================================
   CERTIFICATES RENDERING & LIGHTBOX MODAL
   ========================================================= */
let activeCertIndex = 0;
const certModal = $("#certModal");
const certModalCloseBtn = $("#certModalCloseBtn");
const certPrevBtn = $("#certPrevBtn");
const certNextBtn = $("#certNextBtn");
const certZoomBtn = $("#certZoomBtn");
const certImgWrapper = $("#certImgWrapper");
let lastFocusedCertTrigger = null;

function renderCertificates() {
  const container = $("#certificatesGrid");
  if (!container) return;

  container.innerHTML = certificates.map((cert, idx) => {
    return `
      <article class="cert-card tilt reveal" style="--i: ${idx + 1}" data-id="${escapeHtml(cert.id)}" data-categories="${cert.categories.join(' ')}" tabindex="0" role="button" aria-label="View Certificate for ${escapeHtml(cert.title)}">
        <div class="cert-icon-box" aria-hidden="true">
          ${cert.iconSvg}
        </div>
        <h3 class="cert-card-title">${escapeHtml(cert.title)}</h3>
        <p class="cert-card-desc">${escapeHtml(cert.description)}</p>
        <button class="cert-btn-action" type="button" aria-haspopup="dialog" aria-label="View Certificate for ${escapeHtml(cert.title)}">
          <svg class="cert-eye-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
            <circle cx="12" cy="12" r="3"></circle>
          </svg>
          <span>View Certificate</span>
        </button>
      </article>`;
  }).join("");

  // Attach click handlers to open modal
  container.querySelectorAll(".cert-card").forEach((card, idx) => {
    card.addEventListener("click", () => {
      openCertificateModal(idx, card);
    });

    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openCertificateModal(idx, card);
      }
    });
  });
}

function setupCertificateFilters() {
  const pills = $$(".cert-filters .filter-pill");
  pills.forEach(pill => {
    pill.addEventListener("click", () => {
      pills.forEach(p => {
        p.classList.remove("active");
        p.setAttribute("aria-selected", "false");
      });
      pill.classList.add("active");
      pill.setAttribute("aria-selected", "true");

      const filter = pill.getAttribute("data-cert-filter");
      const cards = $$(".cert-card");

      cards.forEach(card => {
        const cats = (card.getAttribute("data-categories") || "").split(" ");
        const matches = filter === "all" || cats.includes(filter);

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
          }, 280);
        }
      });
    });
  });
}

function populateCertModal(certIndex) {
  if (certIndex < 0 || certIndex >= certificates.length) return;
  activeCertIndex = certIndex;
  const cert = certificates[certIndex];

  const imgEl = $("#certModalImg");
  if (imgEl) {
    imgEl.src = cert.image;
    imgEl.alt = cert.title + " full certificate";
  }
  if (certImgWrapper) certImgWrapper.classList.remove("zoomed");

  const badgeEl = $("#certModalBadge");
  if (badgeEl) {
    badgeEl.textContent = cert.badge;
    badgeEl.className = `modal-tag ${cert.badgeClass}`;
  }
  const periodEl = $("#certModalPeriod");
  if (periodEl) periodEl.textContent = cert.period;
  const titleEl = $("#certModalTitle");
  if (titleEl) titleEl.textContent = cert.title;
  const issuerEl = $("#certModalIssuer");
  if (issuerEl) issuerEl.textContent = `${cert.issuer} (${cert.authority})`;
  const candidateEl = $("#certModalCandidate");
  if (candidateEl) candidateEl.textContent = "NARIBOYINA SAI KRISHNA";
  const scoreEl = $("#certModalScore");
  if (scoreEl) scoreEl.textContent = cert.score;
  const breakdownEl = $("#certModalBreakdown");
  if (breakdownEl) breakdownEl.textContent = cert.breakdown;
  const rollEl = $("#certModalRoll");
  if (rollEl) rollEl.textContent = cert.rollNo;
  const creditsEl = $("#certModalCredits");
  if (creditsEl) creditsEl.textContent = `${cert.duration} · ${cert.credits}`;
  const descEl = $("#certModalDesc");
  if (descEl) descEl.textContent = cert.description;

  const downloadBtn = $("#certDownloadPdfBtn");
  if (downloadBtn) {
    downloadBtn.href = cert.pdfUrl;
    downloadBtn.setAttribute("download", cert.pdfUrl.split("/").pop());
    const isImage = cert.pdfUrl.endsWith(".jpg") || cert.pdfUrl.endsWith(".png");
    const labelSpan = downloadBtn.querySelector("span");
    if (labelSpan) {
      labelSpan.textContent = isImage ? "Download Certificate Image ↓" : "Download Official Signed PDF ↓";
    }
  }

  const openImageBtn = $("#certOpenImageBtn");
  if (openImageBtn) {
    openImageBtn.href = cert.image;
  }

  const counter = $("#certNavCounter");
  if (counter) {
    counter.textContent = `${certIndex + 1} / ${certificates.length}`;
  }
}

function openCertificateModal(index, trigger) {
  if (!certModal) return;
  lastFocusedCertTrigger = trigger || document.activeElement;
  populateCertModal(index);

  certModal.classList.add("open");
  certModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");

  if (certModalCloseBtn) certModalCloseBtn.focus();
}

function closeCertificateModal() {
  if (!certModal || !certModal.classList.contains("open")) return;
  certModal.classList.remove("open");
  certModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
  if (certImgWrapper) certImgWrapper.classList.remove("zoomed");

  if (lastFocusedCertTrigger && typeof lastFocusedCertTrigger.focus === "function") {
    lastFocusedCertTrigger.focus();
  }
}

function setupCertModalListeners() {
  if (!certModal) return;

  certModal.addEventListener("click", (e) => {
    if (e.target === certModal) closeCertificateModal();
  });

  if (certModalCloseBtn) {
    certModalCloseBtn.addEventListener("click", closeCertificateModal);
  }

  if (certPrevBtn) {
    certPrevBtn.addEventListener("click", () => {
      const prevIdx = (activeCertIndex - 1 + certificates.length) % certificates.length;
      populateCertModal(prevIdx);
    });
  }

  if (certNextBtn) {
    certNextBtn.addEventListener("click", () => {
      const nextIdx = (activeCertIndex + 1) % certificates.length;
      populateCertModal(nextIdx);
    });
  }

  if (certZoomBtn && certImgWrapper) {
    certZoomBtn.addEventListener("click", () => {
      certImgWrapper.classList.toggle("zoomed");
    });
  }

  window.addEventListener("keydown", (e) => {
    if (!certModal || !certModal.classList.contains("open")) return;

    if (e.key === "Escape") {
      e.preventDefault();
      closeCertificateModal();
      return;
    }
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      const prevIdx = (activeCertIndex - 1 + certificates.length) % certificates.length;
      populateCertModal(prevIdx);
      return;
    }
    if (e.key === "ArrowRight") {
      e.preventDefault();
      const nextIdx = (activeCertIndex + 1) % certificates.length;
      populateCertModal(nextIdx);
      return;
    }

    if (e.key === "Tab") {
      const focusableSelector = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
      const focusables = [...certModal.querySelectorAll(focusableSelector)].filter(
        el => !el.disabled && el.offsetParent !== null
      );
      if (!focusables.length) return;
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
  });
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
  document.body.classList.add("hero-intro-active", "profile-revealed");

  const nameEl = $("#heroName");
  const bloom = $("#heroLightBloom");
  const space = $("#space");
  const navbar = $("#navbar");
  const coreCard = $("#heroCoreCard");
  const ring = $(".portrait-ring-circle");
  const typewriterEl = $("#typewriter");

  if (isReducedMotion) {
    document.body.classList.add("hero-intro-done", "profile-revealed");
    if (nameEl) nameEl.querySelectorAll(".split-char").forEach(c => c.classList.add("char-revealed"));
    if (ring) ring.classList.add("ring-drawn");
    if (space) space.style.opacity = "0.35";
    if (navbar) navbar.classList.add("navbar-revealed");
    if (coreCard) coreCard.classList.add("card-revealed");
    const scrollIndicator = $("#heroScrollIndicator");
    if (scrollIndicator) scrollIndicator.classList.add("scroll-indicator-revealed");
    $$(".hero-badge, .eyebrow, .hero-greeting, .hero-tagline, .hero-text, .hero-actions, .quick-stats").forEach(el => el.classList.add("intro-revealed"));
    $$(".hero-visual .node").forEach(n => n.classList.add("node-drift-in"));
    if (typewriterEl) typewriterEl.textContent = words[0];
    return;
  }

  // 1. Radial Light Bloom expands & particle canvas fades in
  if (bloom) bloom.classList.add("bloom-active");
  if (space) space.classList.add("space-revealed");

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

  // 7. Scroll indicator & Navbar slide down after hero content
  setTimeout(() => {
    const scrollIndicator = $("#heroScrollIndicator");
    if (scrollIndicator) scrollIndicator.classList.add("scroll-indicator-revealed");
    if (navbar) navbar.classList.add("navbar-revealed");
  }, 1600);

  // 8. Settle sequence & initiate typewriter
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
  const scrollIndicator = $("#heroScrollIndicator");
  if (scrollIndicator) scrollIndicator.classList.remove("scroll-indicator-revealed");
  const primaryBtn = $(".hero-actions .btn.primary");
  if (primaryBtn) primaryBtn.classList.remove("glow-pulse");
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
  renderCertificates();
  setupCertificateFilters();
  setupCertModalListeners();
  observeReveals();
  initHeroSplitText();

  // Smooth hash scroll with fixed navbar offset
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      const targetId = this.getAttribute("href");
      if (targetId === "#") return;
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        const headerOffset = 76;
        const elPosition = targetEl.getBoundingClientRect().top;
        const offsetPosition = elPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
        const nav = $("#navLinks");
        const menuBtn = $("#menuBtn");
        if (nav && nav.classList.contains("open")) {
          nav.classList.remove("open");
          if (menuBtn) menuBtn.setAttribute("aria-expanded", "false");
        }
      }
    });
  });

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
      document.body.classList.add("lamp-mode", "profile-revealed");
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

    const enterBtn = $("#welcomeEnterBtn");
    if (enterBtn) {
      enterBtn.addEventListener("click", (e) => {
        e.preventDefault();
        enterPortfolio();
      });
    }

    const scrollBtn = $("#welcomeScrollBtn");
    if (scrollBtn) {
      scrollBtn.addEventListener("click", (e) => {
        e.preventDefault();
        enterPortfolio();
      });
      scrollBtn.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          enterPortfolio();
        }
      });
    }

    // Direct load if welcome screen already completed
    if (welcome.classList.contains("entered")) {
      document.body.classList.add("profile-revealed");
      playHeroIntro();
    }
  } else {
    // Direct load without welcome screen
    document.body.classList.add("profile-revealed");
    playHeroIntro();
  }

  // View Certificates Scroll CTA
  const viewCertsBtn = $("#viewCertificatesBtn");
  if (viewCertsBtn) {
    viewCertsBtn.addEventListener("click", () => {
      const target = $("#certificatesGrid") || $("#certificates");
      if (target) {
        const offsetPosition = target.getBoundingClientRect().top + window.pageYOffset - 80;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      }
    });
  }

  const viewCertsScrollBtn = $("#viewCertificatesScrollBtn");
  if (viewCertsScrollBtn) {
    viewCertsScrollBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const target = $("#certificatesGrid") || $("#certificates");
      if (target) {
        const offsetPosition = target.getBoundingClientRect().top + window.pageYOffset - 80;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      }
    });
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
   PROFILE PORTRAIT INTERACTION
   ========================================================= */
const profileCore = $("#profileCore");
if (profileCore) {
  document.body.classList.add("profile-revealed");
  profileCore.addEventListener("click", () => {
    profileCore.classList.add("pulse-active");
    setTimeout(() => profileCore.classList.remove("pulse-active"), 1200);
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

const repoLiveMap = {
  "Network-Monitoring-System": "https://network-monitoring-system-2.onrender.com/login",
  "Intelligent-Meeting-Scheduler": "https://intelligent-meeting-scheduler.onrender.com/"
};

fetch(`https://api.github.com/users/${GITHUB_USER}`)
  .then(r => r.ok ? r.json() : Promise.reject())
  .then(data => {
    const rEl = $("#repoCount");
    const fEl = $("#followCount");
    if (rEl) rEl.setAttribute("data-val", data.public_repos ?? 3);
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
    container.innerHTML = repos.slice(0, 6).map((repo, idx) => {
      const liveDemoUrl = repoLiveMap[repo.name];
      const arrowUrl = liveDemoUrl || repo.html_url;
      const arrowLabel = liveDemoUrl ? `Open ${repo.name} Live Demonstration` : `Open ${repo.name} on GitHub`;
      const liveMeta = liveDemoUrl
        ? `<span><a href="${escapeHtml(liveDemoUrl)}" target="_blank" rel="noopener" style="color: #20d9ff; font-weight: 600;">Live Demonstration ↗</a></span>`
        : `<span>★ ${Number(repo.stargazers_count) || 0}</span>`;
      const langDot = repo.language === "Python" ? "py" : (repo.language === "TypeScript" ? "ts" : "js");

      return `
      <div class="repo-card glass reveal visible tilt" style="--i: ${idx + 1}">
        <div class="repo-icon">{ }</div>
        <div class="repo-content">
          <div class="repo-title">
            <a href="${escapeHtml(repo.html_url)}" target="_blank" rel="noopener">${escapeHtml(repo.name)}</a>
            <span class="public">${repo.private ? "Private" : "Public"}</span>
          </div>
          <p>${escapeHtml(repo.description || "GitHub project by Sai Krishna.")}</p>
          <div class="repo-meta">
            <span>${repo.language ? `<i class="dot ${langDot}"></i> ${escapeHtml(repo.language)}` : "GitHub project"}</span>
            ${liveMeta}
          </div>
        </div>
        <a class="repo-arrow" href="${escapeHtml(arrowUrl)}" target="_blank" rel="noopener" aria-label="${escapeHtml(arrowLabel)}">↗</a>
      </div>`;
    }).join("");
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


