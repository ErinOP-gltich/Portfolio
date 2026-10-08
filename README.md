<div align="center">

# Aman Goswami · Portfolio

**Front-end developer · Network security learner (CCNA + Security+) · Founder of Cantilever**

One `index.html`: a three.js code tunnel with a particle shield, a 3D campus network you can orbit, a real terminal, an AI-style assistant, live pings to my deployments, my GitHub pulled live, four working security tools and a printable résumé. Black, white and grey. No framework, no build step.

![HTML5](https://img.shields.io/badge/HTML5-111?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-111?style=for-the-badge&logo=css&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-111?style=for-the-badge&logo=javascript&logoColor=white)
![three.js](https://img.shields.io/badge/three.js-r128-111?style=for-the-badge&logo=threedotjs&logoColor=white)
![Open to internships](https://img.shields.io/badge/open%20to-internships-fff?style=for-the-badge&labelColor=111)

[**Features**](#-features) · [**Run locally**](#-run-locally) · [**Deploy**](#-deploy-to-github-pages) · [**Customise**](#-customise) · [**Contact**](#-contact)

</div>

---

## 👋 About

I'm **Aman Goswami**, a third-year B.Tech Computer Science & Engineering student at **VIT-AP University**. I build websites and tools that real people run: the PCBL lab's website, admin console and inventory system, the MCML lab's website (in progress), the bioinfoaus.ac.in rework, and **Cantilever**, my marketplace for architects. Alongside that I'm working through **CCNA 200-301** and **CompTIA Security+**, and I recently went deep on routers, routing, localhosting and NAS setup.

> **Open to** internships, freelance front-end work and collaboration.

## ✨ Features

### Everywhere

| | |
|---|---|
| **Hero in three.js** | A tunnel of flickering hex and shell glyphs streams toward you and bends toward the cursor, framing the AG shield drawn in ~16,000 particles. The cursor blows the particles apart and they settle back; every few seconds (and as you scroll) the shield morphs into a network graph, then a cube. |
| **Smooth scrolling** | Lerped wheel scrolling in the style of Lenis, written by hand. Touch, keyboard and reduced motion stay native. |
| **Custom cursor** | A dot that grows over links, says *Open* over projects and *Drag* over 3D scenes. Buttons are magnetic, cards tilt in 3D with a glare. |
| **Backdrops** | Film grain, a cursor spotlight and a scroll progress bar. Headings rise in word by word. |
| **Two-way switch** | **Technical ↔ Creative**. Switching floods the screen with a wave of tiles from the button you pressed, scrambles the new title, and swaps the page underneath. |
| **Ask my AI** | A floating assistant like partharsid.dev's: suggested questions, answers streamed word by word, follow-ups. It is keyword matching over a built-in knowledge base, so it works offline and sends nothing anywhere. |
| **Terminal** | Press <kbd>`</kbd> anywhere or tap the **>_ Terminal** button. Colour-coded output and tap-to-run command chips. `help`, `whoami`, `projects`, `open <id>`, `skills`, `certs`, `cd <section>`, `mode creative`, `ask <question>`, `resume`, `nmap`, `history`, `clear` and more, with Tab completion and ↑ ↓ history. |
| **Command palette** | <kbd>⌘K</kbd> / <kbd>Ctrl K</kbd> to jump to a section, open a case study, the résumé, the terminal or the assistant. |
| **Logo** | A shield with a glitching AG: security plus a bit of noise. Used for the nav, favicon and assistant avatar. |

### Technical side

| Section | What it does |
|---|---|
| **Proof** | A terminal that types `whoami`, `cat focus.txt` and a joke `nmap` scan, next to numbers that count up and are true. |
| **Work** | Real screenshots of each live site in a browser frame (lab builds get labelled illustrations), with status (*Live*, *Building*, *Planning*), a case study and a link to the real site. Real builds and lab builds are labelled. |
| **Building now** | Progress bars that show which stage each job is in (MCML website, MCML inventory, the bioinfoaus.ac.in rework, CCNA, Security+), never a guessed percentage. |
| **Skills** | A 3D sphere of tool logos you can drag, plus every skill rated *Solid*, *Working* or *Learning* across web, networking and self-hosting, network security and blockchain. |
| **Lab** | CCNA and Security+ progress (with the Cisco and CompTIA marks) against the official domains, and the **secure campus network in 3D**: core routers, three buildings, VLANs, packets, and the guest ACL drop drawn as a dashed red path. Click any device or layer (VLANs, OSPF, guest ACL, port security, SSH-only) for an explanation. |
| **Toolbox** | Subnet calculator, Cisco-style ACL tester with a line-by-line trace, password strength checker, and a mini blockchain on a hand-written SHA-256. |
| **Live** | Real round-trip times from *your* browser to each of my deployments, every five seconds while the section is on screen, with sparklines. |
| **GitHub, live** | Contribution heatmap, streaks, best day, contributions per month, weekly rhythm, languages, where the commits went and the latest activity, pulled from GitHub in the browser and cached for 30 minutes. |

### Creative side

Motion and design tools (After Effects, Premiere Pro, Photoshop, Figma) and the soft skills that decide whether good work lands.

### Résumé

`#/resume` is a résumé page rendered from the same data as the site, with **Download PDF** (`Aman-Goswami-Resume.pdf`) and **Print**. Printing any page of the site prints the résumé.

## 🧭 Honesty rules the site follows

- Projects are tagged **Real build** or **Lab build**, and in-progress work says so.
- No invented numbers: pings are measured live, GitHub numbers come from GitHub, progress bars are stages.
- The assistant says it is keyword matching, not a language model.
- three.js is the one library, loaded from cdnjs with an integrity hash. If it can't load (offline), hand-written 2D canvas versions take over.

## 🗂️ Project structure

```
.
├── index.html                 # the whole site: HTML, CSS, JS, inlined screenshots and icons
├── Aman-Goswami-Resume.pdf    # generated from the #/resume page
└── README.md
```

Inside `index.html`, the JS objects worth knowing:

| Object | What it holds |
|---|---|
| `projects` | Every project: `status`, `url`, `blurb`, `bullets`, `stack`, `problem`, `built`, `learned`, and `cv` (the résumé line) |
| `SHOTS` | The greyscale screenshots of each live site (base64 JPEG) |
| `SKILLS` | Skills by area, each `[name, icon or glyph, solid / working / learning]` |
| `CERTS` | CCNA and Security+ domains with official weightings and status |
| `BENCH` | The *Building now* jobs and their stages |
| `KB` | The assistant's knowledge: keywords → answer |
| `TERM` | Terminal commands |
| `CMD` | Command palette entries |
| `ICONS` | Brand marks from Simple Icons (CC0) |

## 🚀 Run locally

No setup. Open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
```

Everything works offline except the live pings, GitHub data and three.js, which all fail gracefully.

## 🌐 Deploy to GitHub Pages

1. Push `index.html`, `Aman-Goswami-Resume.pdf` and this README to a public repo.
2. **Settings → Pages → Deploy from a branch**, pick `main` and `/ (root)`.
3. It goes live at `https://<username>.github.io/<repo>/` in a minute or two. Vercel, Netlify and Cloudflare Pages work too: drag the folder in.

## 🛠️ Customise

| To change… | Edit… |
|---|---|
| Colours | CSS variables in `:root`. The palette is black, white and grey; `--ok` and `--bad` are kept only for live/down and permit/deny. |
| Fonts | The Google Fonts `<link>` and `--sans` (Geist), `--mono` (Geist Mono), `--serif` (Instrument Serif) |
| Projects | The `projects` array. New screenshot: add it to `SHOTS` under the same id and set `shot:1`. |
| Live pings | The `SITES` list in the live latency block |
| GitHub user | `U` in the GitHub block, plus the nav and contact links |
| Progress | `BENCH` (stage names and the current index `at`) and `CERTS` (`'done'`, `'now'` or `''`) |
| Assistant | `KB` and the suggested questions in `SUGG` |
| Résumé | `renderResume()`. Regenerate the PDF by printing `#/resume` to PDF (A4). |
| LinkedIn | Replace the *Profile coming soon* card in `#contact` |

## 🧰 Built with

**HTML5** · **CSS3** (grid, custom properties, `@property`, `backdrop-filter`, `:has()`, print styles) · **Vanilla JavaScript** (Canvas, `IntersectionObserver`, `<dialog>`, Clipboard, `fetch`) · **three.js r128** for the globe and the campus lab · Fonts: [Geist](https://fonts.google.com/specimen/Geist), [Geist Mono](https://fonts.google.com/specimen/Geist+Mono), [Instrument Serif](https://fonts.google.com/specimen/Instrument+Serif) · Icons: [Simple Icons](https://simpleicons.org) (CC0)

## 📬 Contact

| | |
|---|---|
| 📧 Personal | [amanopp0690@gmail.com](mailto:amanopp0690@gmail.com) |
| 🎓 University | [aman.24bce7313@vitapstudent.ac.in](mailto:aman.24bce7313@vitapstudent.ac.in) |
| 📱 Phone | [+91 80119 24517](tel:+918011924517) |
| 🐙 GitHub | [@ErinOP-gltich](https://github.com/ErinOP-gltich) |
| 💼 LinkedIn | *Coming soon* |

## 📄 License

The code is free to use as inspiration under the [MIT License](https://opensource.org/licenses/MIT). The personal content (name, projects, screenshots, contact details) belongs to Aman Goswami, so please don't reuse it as your own. Design inspired by [partharsid.dev](https://partharsid.dev).

<div align="center">

---

Made with ☕, packet captures and too many keyframes by **Aman Goswami**

</div>
