<div align="center">

# Aman Goswami

**Front-end developer · Network security learner (CCNA + Security+) · Founder of Cantilever**

### [aman-goswami.pages.dev](https://aman-goswami.pages.dev)

A one-file portfolio in black, white and grey: a three.js code tunnel around a particle shield, a 3D campus network you can orbit, live pings to my deployments, my GitHub pulled live, a real terminal, an assistant, notes, and a printable résumé.

![HTML5](https://img.shields.io/badge/HTML5-111?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-111?style=for-the-badge&logo=css&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-111?style=for-the-badge&logo=javascript&logoColor=white)
![three.js](https://img.shields.io/badge/three.js-r128-111?style=for-the-badge&logo=threedotjs&logoColor=white)
![Cloudflare Pages](https://img.shields.io/badge/Cloudflare-Pages-111?style=for-the-badge&logo=cloudflare&logoColor=white)

[**Live site**](https://aman-goswami.pages.dev) · [**What's inside**](#whats-inside) · [**Run it**](#run-it) · [**Deploy**](#deploy) · [**Edit it**](#edit-it) · [**Contact**](#contact)

</div>

---

## About

I'm **Aman Goswami**, a third-year B.Tech Computer Science & Engineering student at **VIT-AP University**. I build software that real people run: the PCBL lab's website, admin console and inventory system, the MCML lab's website (in progress), the bioinfoaus.ac.in rework, **Cantilever**, my marketplace for architects, and **Clearance**, an iOS to-do app run like an airport that I'm designing in Figma. I'm working through **CCNA 200-301** and **CompTIA Security+**, and recently went deep on routers, routing, firewalls, localhosting and NAS setup; WireGuard, Nginx and Docker are next.

> Open to internships, freelance front-end work and collaboration.

## What's inside

### The whole page

- **Hero:** a three.js tunnel of flickering hex and shell glyphs streams toward you and bends toward the cursor. In the middle, the AG shield is drawn in ~16,000 particles: move the cursor and they scatter, then settle back. Every few seconds, and as you scroll, the shield morphs into a network graph and then a cube.
- **Cursor:** a dot that tracks the pointer exactly, and scope brackets that lock onto whatever you point at, resizing to frame a button, a link, a field or a whole project card. *Open* and *Drag* tags appear where they help, the dot turns into an I-beam over text fields, and a click tightens the lock.
- **Motion:** hand-written smooth scrolling, magnetic buttons, cards that tilt with a glare, headings that rise word by word, film grain, a cursor spotlight and a scroll progress bar.
- **Technical ↔ Creative:** one switch, two sides. Switching floods the screen with tiles from the button you pressed and scrambles the new title in.
- **Ask my AI:** a floating assistant with suggested questions, answers streamed word by word and follow-ups. It's keyword matching over a built-in knowledge base, so it works offline and sends nothing anywhere.
- **Terminal:** press <kbd>`</kbd> or tap **>_ Terminal**. Colour-coded output, tap-to-run command chips, Tab completion and history: `help`, `whoami`, `projects`, `open <id>`, `skills`, `certs`, `nmap`, `notes`, `resume`, `cd <section>`, `ask <question>` and more.
- **Command palette:** <kbd>⌘K</kbd> / <kbd>Ctrl K</kbd> jumps to any section, project, note, the résumé, the terminal or the assistant.

### Technical side

| Section | What it does |
|---|---|
| **Proof** | A terminal that types `whoami`, `cat focus.txt` and a joke `nmap` scan, next to numbers that count up and are true. |
| **Work** | Every project has an image: real screenshots of the live sites in a browser frame, captures of this page, and clearly labelled illustrations for lab builds. Each card has a status (*Live*, *Building*, *Planning*), a case study and a link to the real site. |
| **Building now** | Progress bars that show which stage each job is in: Clearance, the MCML website, the MCML inventory, the bioinfoaus.ac.in rework, CCNA and Security+. |
| **Skills** | A draggable 3D sphere of tool logos, and every skill rated *Solid*, *Working* or *Learning* across web, networking and self-hosting, network security and blockchain. |
| **Security lab** | CCNA and Security+ progress against the official exam domains, with the Cisco and CompTIA marks, and the secure campus network as a three.js model: routers, three buildings, VLANs, packets, and the guest ACL drop as a dashed red path. Click a device or a layer for an explanation. |
| **Toolbox** | A subnet calculator, a Cisco-style ACL tester with a line-by-line trace, a password strength checker, and a mini blockchain on a hand-written SHA-256. |
| **Live** | Real round-trip times from your browser to each of my deployments, every five seconds while the section is on screen, with sparklines. |
| **GitHub, live** | Contribution heatmap, streaks, best day, contributions per month, weekly rhythm, languages, where the commits went and the latest activity, pulled in the browser and cached for 30 minutes. |

### Creative side

An After Effects-style motion timeline you can scrub, the design and video tools I use, and the soft skills behind the work.

### Pages

- **[Notes](https://aman-goswami.pages.dev/#/notes):** fifteen short write-ups. Three are on work in progress (designing Clearance, the MCML site, CCNA with Security+); the rest cover the PCBL site, the lab inventory, the two-lab fork, the bioinfoaus.ac.in migration, Nebula.pdf, recon in a home lab, reading email headers, DopeToken, SHA-256 by hand, how ACLs decide, live pings and three bugs this site taught me.
- **[Résumé](https://aman-goswami.pages.dev/#/resume):** rendered from the same data as the site, with **Download PDF** and **Print**. Printing any page prints the résumé.
- **Contact:** a short form that opens your own email app with the message filled in. Nothing is stored or sent by the page.

## Honesty rules

- Projects are tagged **Real build** or **Lab build**; work in progress says so, and illustrations are labelled.
- No invented numbers: pings are measured live, GitHub numbers come from GitHub, and progress bars are stages, not guesses.
- The assistant says it is keyword matching, not a language model.
- three.js is the only library, loaded from cdnjs with an integrity hash. If it can't load, hand-written 2D canvas versions take over.

## Run it

Open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
```

Everything works offline except the live pings, the GitHub data and three.js, which all fail gracefully.

## Deploy

The site is a Cloudflare Pages project called `aman-goswami`. Only two files are public, so deploy them from a clean folder:

```bash
mkdir -p /tmp/ag && cp index.html Aman-Goswami-Resume.pdf /tmp/ag/
npx wrangler pages deploy /tmp/ag --project-name aman-goswami --branch main
```

It also runs on GitHub Pages, Vercel or Netlify: publish the folder with `index.html` at the root.

## Edit it

```
.
├── index.html                 # the whole site: HTML, CSS, JS, inlined images and icons
├── Aman-Goswami-Resume.pdf    # printed from the #/resume page
└── README.md
```

| To change… | Edit… |
|---|---|
| Colours and fonts | The CSS variables in `:root`. Fonts are Geist, Geist Mono and Instrument Serif. |
| Projects | `projects`: status, url, blurb, bullets, stack, problem, built, learned, and `cv` (the résumé line). Images live in `SHOTS` under the same id. |
| Notes | `NOTES`: slug, title, tags, blurb and the HTML body. Read time is worked out from the word count. |
| Skills | `SKILLS`: `[name, icon or glyph, solid / working / learning]` |
| Certifications | `CERTS`: each domain is `'done'`, `'now'` or `''` |
| Building now | `BENCH`: stage names and the current stage `at` |
| Live pings | `SITES` in the live latency block |
| Assistant | `KB` (keywords → answer) and the starter questions in `SUGG` |
| Terminal | `TERM` |
| Command palette | `CMD` |
| Résumé | `renderResume()`. After changes, print `#/resume` to an A4 PDF and replace `Aman-Goswami-Resume.pdf`. |

## Built with

HTML, CSS (grid, custom properties, `@property`, `:has()`, print styles) and vanilla JavaScript (Canvas, `IntersectionObserver`, `ResizeObserver`, `<dialog>`, `fetch`), with **three.js r128** for the 3D. Fonts: [Geist](https://fonts.google.com/specimen/Geist), [Geist Mono](https://fonts.google.com/specimen/Geist+Mono), [Instrument Serif](https://fonts.google.com/specimen/Instrument+Serif). Icons: [Simple Icons](https://simpleicons.org) (CC0). Design inspired by [partharsid.dev](https://partharsid.dev).

## Contact

| | |
|---|---|
| Email | [amanopp0690@gmail.com](mailto:amanopp0690@gmail.com) |
| University | [aman.24bce7313@vitapstudent.ac.in](mailto:aman.24bce7313@vitapstudent.ac.in) |
| Phone | [+91 80119 24517](tel:+918011924517) |
| GitHub | [@ErinOP-gltich](https://github.com/ErinOP-gltich) |
| LinkedIn | Coming soon |

## License

The code is MIT licensed, so use it as inspiration. The personal content (name, projects, screenshots, notes and contact details) belongs to Aman Goswami; please don't reuse it as your own.
