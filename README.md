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

🔗 https://shreyabansal-sb.github.io/SAUrted/

---

## Features

### ⌨️ Typewriter Hero Animation
The homepage headline animates in as a typewriter effect with a blinking cursor — built entirely with CSS `@keyframes`, no JavaScript or external libraries required.

### 🎯 Smart Year & Semester Filter
Papers can be filtered by year and semester using chip-style buttons. Selecting a year automatically disables semesters that don't belong to it (e.g. Year 1 restricts to Sems 1–2). The paper list updates instantly with no page reload.

### 📂 Expandable Subject Cards
Papers are grouped by subject inside collapsible accordion cards, dynamically generated from the data file. Each card shows the subject name, year, semester, and file count. Clicking expands it to reveal individual papers, each opening in a new tab.

### 🚫 Empty State Handling
If no papers exist for a selected filter combination, a "No papers found" message is displayed instead of a blank or broken layout.

### 📝 Feedback Form with Validation
The Feedback page includes a form with name, email, feedback type (broken link, missing paper, suggestion, other), and a message field — all with HTML5 required-field validation. On successful submission, a confirmation alert appears and the form resets automatically.

### 📧 Clickable Mail Link
The footer email (`saurted@gmail.com`) is a `mailto:` link on every page — clicking it opens the user's default mail client directly without needing to copy the address.

### 📤 Paper Submission via Google Form
Students can contribute missing papers through a Google Form, linked in the navbar, the homepage hero section, and the About page — making the platform community-driven and continuously growing.

### 📋 Site-wide Announcement Banner
A banner strip at the top of every page displays timely messages such as exam season reminders, keeping students informed without disrupting the main layout.

### 🖱️ Clickable Logo Navigation
The SAUrted logo in the navbar functions as a home button on every page, navigating back to `index.html` — implemented consistently across the entire site.

### 🧩 Data-Driven Architecture
All paper links and metadata live in a single `data.js` file, structured by year and semester. New papers or subjects can be added without touching any HTML or CSS files.

### 📱 Fully Responsive Design
The entire site adapts across desktop, tablet, mobile, and very small phones (≤380px). Dedicated media query breakpoints at `1024px`, `640px`, and `380px` handle the navbar, filter chips, cards, buttons, forms, and footer at every screen size.

### ✨ Micro-interactions & UI Polish
- Animated `::after` underline slides in on navbar link hover
- Logo scales up, glows blue, and widens letter-spacing on hover; presses down on click
- Chevron icon rotates 180° when a subject card is expanded
- `Open ↗` label fades in on file row hover (hidden on mobile to keep it clean)
- All buttons lift with a directional shadow on hover and press down on click
- Input and textarea fields highlight with a blue focus ring on interaction

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
