# SAUrted 📚

> **Your exams, sorted.**  
> A student-built platform for B.Tech CSE students at South Asian University — centralising previous year question papers in one clean, accessible interface.

---

## Table of Contents

- [About](#about)
- [Live Demo](#live-demo)
- [Features](#features)
- [Pages](#pages)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Contributing Papers](#contributing-papers)
- [Team](#team)
- [Course](#course)

---

## About

Every exam season, students end up asking the same question — *"Does anyone have last year's paper?"*

SAUrted was built to fix that. Instead of hunting through WhatsApp groups, shared drives, and seniors' laptops, everything is available in one organised platform. The project currently covers B.Tech CSE Year 1 papers, with the data structure built to scale across all four years and eight semesters.

---

## Live Demo

🔗 [https://your-username.github.io/saurted](https://your-username.github.io/saurted) *(replace with your GitHub Pages URL)*

---

## Features

### 🎯 Smart Filter System
Year and semester chips are linked — selecting a year automatically disables semesters that don't belong to it (e.g. Year 1 disables Sems 3–8). The paper list updates in real time with no page reloads.

### 📂 Expandable Subject Cards
Papers are grouped by subject in collapsible accordion cards. Each card displays the subject name, year, semester, and number of available files. Clicking a card expands it to reveal all downloadable papers.

### ⌨️ Typewriter Hero Animation
The homepage headline uses a pure CSS typewriter animation with a blinking cursor — built entirely with `@keyframes`, no JavaScript or external libraries.

### 📱 Fully Responsive Layout
The site is designed to work across all screen sizes — desktop, tablet, mobile, and very small phones (≤380px). Every section — navbar, filter chips, cards, buttons, and forms — has dedicated responsive breakpoints.

### 📝 Feedback Form
A structured feedback form lets students report broken links, missing papers, or submit suggestions. Categories include broken link, missing paper, suggestion, and other. Submissions trigger a confirmation alert and reset the form.

### 📧 Mailto Link
The footer email (`saurted@gmail.com`) uses a `mailto:` link — clicking it opens the user's default mail client directly, making it easy to reach out without copying the address manually.

### 🧩 Data-Driven Paper Management
All paper data is stored in a single `data.js` file, organised by year and semester. Adding new subjects or papers requires no changes to any HTML or CSS — just update the data file.

### ✨ UI & Interaction Details
- Smooth hover transitions on nav links, buttons, and file rows
- Animated underline on navigation items using CSS `::after` pseudo-elements
- Chevron icon rotates 180° when a subject card is opened
- `Open ↗` label fades in on file row hover
- Logo has a glow, scale, and letter-spacing animation on hover
- Announcement banner at the top of every page

---

## Pages

| Page | File | Description |
|---|---|---|
| Home | `index.html` | Landing page with hero section and CTA buttons |
| Papers | `papers.html` | Browse interface with year/semester filters and subject cards |
| About | `about.html` | Project background, how it works, and contribution info |
| Feedback | `contact.html` | Form to report issues or send suggestions |

---

## Tech Stack

| | Technology |
|---|---|
| **Structure** | HTML5 |
| **Styling** | CSS3 — Flexbox, CSS variables, `@keyframes`, media queries |
| **Interactivity** | Vanilla JavaScript (ES6) |
| **Fonts** | Google Fonts — [Outfit](https://fonts.google.com/specimen/Outfit) + [Space Mono](https://fonts.google.com/specimen/Space+Mono) |
| **Hosting** | GitHub Pages |

> No CSS frameworks, no JS libraries. Everything is written from scratch.

---

## Project Structure

```
saurted/
├── index.html          ← Home / landing page
├── about.html          ← About the project
├── contact.html        ← Feedback form
├── papers.html         ← Browse papers
├── css/
│   └── style.css       ← All styles, including responsive breakpoints
└── js/
    ├── data.js         ← Paper data structured by year and semester
    └── script.js       ← Filter logic, card rendering, form handling
```

---

## Contributing Papers

Have a question paper that isn't on the platform yet? Submit it through the [contribution form](https://forms.gle/N9vHCGRrw3EHNPnK7). Once verified, it will be added to `data.js` and go live.

---

## Team

Shreya Bansal · Srija Das · Shreyansh Bhatnagar  
South Asian University

---

## Course

Built as part of **CSE 106: Fundamentals of Web Design** at South Asian University.
