# Smart College Schedule & Room Availability System

A dynamic, web-based management system designed for the Faculty of Informatics Engineering at the University of Aleppo. It automates the tracking of weekly lecture schedules and determines available lecture halls and labs in real time.

## Features
- **Dynamic Real-Time Detection:** Automatically tracks the current day and time to display instantly available halls and laboratories based on lecture schedules.
- **Interactive Schedule Management:** Visual timetable matrix supporting live status toggling (active/free sessions) with local persistence via `localStorage`.
- **Comprehensive Facility Coverage:** Covers academic halls, technical laboratories, and administrative facilities, correctly filtering unscheduled spaces.
- **Responsive Mobile-First UI:** Tailored interface styled with CSS flexbox, CSS custom properties, and custom mobile-first layouts.

## Tech Stack
- **HTML5:** Semantic structure and form controls.
- **CSS3:** Custom variables, media queries, flexbox layout, and custom scrollbars.
- **JavaScript (Vanilla ES6+):** DOM manipulation, real-time date/time calculations, array methods (`filter`, `some`, `forEach`), and `localStorage`.