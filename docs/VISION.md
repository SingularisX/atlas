# Atlas — Vision & Charter

> Using technology to turn an average person into a disciplined, highly skilled, successful one.
> Owner: Sutirtha Halder · Started 4 Oct 2026 · Living document, updated through M.Tech and beyond.

## 1. Core principles

1. **Atlas is the boss.** The Atlas database is the single source of truth for every detail, test, score and progress number. GitHub, the daily log and tests all feed *into* Atlas.
2. **Proof before progress.** No percentage moves because a button was clicked. Progress comes only from passed tests, verified project stages and real commits.
3. **Truly learn.** AI explains, reviews, questions and hints. Sutirtha writes the logic and must be able to explain every line.
4. **Two faces.** The private cockpit is honest and complete. The public face shows verified achievements and is searchable by anyone.
5. **Art and engineering together.** Every page should feel like an art piece *and* score as a technically excellent site.
6. **Built to last.** It grows from B.Tech through M.Tech to career. Nothing is thrown away.

## 2. Modules

### Public face (searchable on Google)
- **Identity / story:** who I am, my mission, a timeline of milestones (internships, competitions, papers, jobs).
- **Project showcase:** every project with its stages, results, media and live GitHub stats.
- **Verified skills:** only tested and proven skills, each with the date and evidence.
- **Recruiter view:** a tailored page per target role ("why I fit this role", built from real data).
- **Auto-generated CV:** a PDF built from verified data, always up to date.
- **SEO:** sitemap, preview cards for LinkedIn and WhatsApp, fast loading.

### Private cockpit (login required)
- **Today:** daily routine, mission for the day, focus timer that logs itself, daily log, streaks with fair grace rules.
- **Exams:** GATE EC + RA now, more exams added later with the same logic. Exam → subject → topic, and each topic has a status (not started, studied, tested, cleared). Topic tests, full mocks with GATE pattern and negative marking, score trends, weak-area detection, countdown.
- **Learn:**
  - Domain tracks: silicon, RTL, architecture, verification, AI hardware, robotics.
  - CS fundamentals: DSA, OS, networks, DBMS, architecture.
  - Human skills: management, communication, human values.
  - For every topic: resources, current progress, test-driven tracking.
  - A knowledge graph of prerequisites: topics unlock when their foundations are cleared.
- **Tests:** live tests for every topic (MCQ, MSQ, numerical, coding, explain-it). Timers, integrity mode (tab-switch detection), and a mistake bank where every wrong answer comes back later.
- **Build (projects):** current progress, target progress, required skills and their progress, stages that need evidence to verify, a session log, GitHub sync (repos, commits, activity).
- **Career (jobs):** target roles plus real job postings. Each posting is broken into requirements and mapped to skills, with a readiness tracker under every job. Practice tests and practical project guidance per gap. At 100% Atlas says "you are ready".
- **Brain gym:** games that revise what I've learned, using spaced repetition: memory, problem solving, quick derivations, circuit and logic puzzles, management case studies, ethics dilemmas. They keep me engaged, never just entertained.
- **Roadmap:** phases with exit conditions, long-term goals and future learning plans.
- **Research log (M.Tech):** papers read, notes, experiments, publications.

### Atlas companion (AI, Claude)
- Knows all my Atlas data: progress, logs, tests, projects, jobs.
- Discusses work, plans the day and week, reviews code and gives hints, never full solutions.
- **Feynman mode:** I explain a topic and it grades my understanding.
- Weekly review and a monthly "State of Sutirtha" report.
- Generates tests and maps job postings to skills.

## 3. Art & technical direction

- **Theme:** an observatory. Atlas held up the sky, and an atlas is a book of maps.
- **Signature visual:** knowledge as a 3D star map. Each skill is a star that brightens when verified, related skills form constellations, projects orbit the skills they use, and a mastered field lights up.
- **Motion:** smooth page transitions (View Transitions), morphing shapes, scroll-driven animation, micro-interactions. Reduced-motion mode is always respected.
- **3D:** React Three Fiber (Three.js). It uses the same rotation matrices and quaternions as the GATE RA syllabus.
- **Visualisations:** progress rings, heatmaps, trend charts, skill radar, knowledge graph.
- **Technical bar:** Lighthouse 90+ even with 3D, accessible, responsive phone to desktop, installable on the phone as a PWA, dark and light themes.

## 4. Stack

| Layer | Choice |
|---|---|
| Website / app | Next.js + TypeScript |
| Database + login | Supabase (Postgres) |
| Hosting | Vercel + custom domain |
| 3D / motion | React Three Fiber, GSAP, Framer Motion |
| AI companion | Claude API |
| Code integration | GitHub API |

## 5. Phases

| Phase | When | Ships |
|---|---|---|
| 0 · Foundations | Oct 2026 – Feb 2027, 1 h/day | Live public site, login, cockpit replaces Mission Control (data migrated), Exams (GATE), GitHub link, one signature animation |
| 1 · Brain | Feb – Jul 2027 | Companion AI, test engine, job readiness, public face + domain, SEO |
| 2 · Art | M.Tech year 1 | 3D star map, Brain gym, morph transitions, PWA |
| 3 · Forever | Through M.Tech + career | Research log, new exams, every new project and achievement |

## 6. Working rules

- I scaffold the boilerplate. Sutirtha writes the logic and explains it.
- Every session ends with a 3-question check.
- Atlas tracks its own build as Project #1.
- GATE time is protected. Atlas lives inside the 1-hour skills slot.
