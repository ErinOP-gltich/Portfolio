<div align="center">

# 🛰️ Aman Goswami — Portfolio

**Front-end developer · Network security learner (CCNA track) · Blockchain tinkerer · Motion designer**

A single-file portfolio with a live network canvas, a working subnet calculator and a hand-built SHA-256 blockchain, all in one `index.html`.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![No dependencies](https://img.shields.io/badge/dependencies-0-9D8CFF?style=for-the-badge)
![Status](https://img.shields.io/badge/open%20to-internships-6EF0C4?style=for-the-badge)

[**Live site**](#-live-demo) · [**Features**](#-features) · [**Run locally**](#-run-locally) · [**Contact**](#-contact)

</div>

---

## 👋 About

I'm **Aman Goswami**, a 3rd-year B.Tech Computer Science & Engineering student at **VIT-AP University**. I build responsive interfaces, study how networks are attacked and defended, and experiment with smart contracts on Ethereum testnets. This site brings all of that together, plus my design and video work, in one place.

> **Open to** internships, freelance front-end work and collaboration.

## 🔗 Live demo

`https://erin-portfolio-main.vercel.app`

## ✨ Features

### Engineering tab

| Section | What it does |
|---|---|
| **Interactive hero** | Canvas network where nodes link up, your cursor pulls connections toward it, and amber "packets" travel between nodes. A terminal types out a profile ending in a playful `nmap` scan. |
| **Skills** | Front-end, network security and blockchain, each skill honestly rated *Solid*, *Working* or *Learning*. |
| **CCNA path** | Progress across the six CCNA 200-301 exam domains, with official exam weightings. |
| **Projects** | Filterable project grid. Each card opens a case study with the problem, what I built and what I learned. |
| **Subnet calculator** | Live IPv4 calculator: network, broadcast, host range, mask, wildcard, class and a colour-coded binary view. Handles `/31` and `/32` correctly. |
| **Mini blockchain** | Proof-of-work demo on a **hand-written SHA-256**. Edit a block and every block after it breaks. Re-mine to repair the chain. Adjustable difficulty. |

### Creative & people tab

| Section | What it does |
|---|---|
| **Motion timeline** | An After Effects–style composition with keyframes and a playhead synced to an animated title. |
| **Tools** | After Effects, Premiere Pro, Photoshop and Figma, with what I use each one for. |
| **Soft skills** | Communication, presenting, teamwork, documentation, self-learning and time management, each with a real example. |
| **Creative work** | Gallery of design and video pieces, drawn entirely in CSS. |

### Under the hood

- 🎨 **Theme per tab.** Switching tabs changes the page accent from violet/amber to rose/mint.
- ♿ **Accessible.** Semantic HTML, ARIA tabs with arrow-key navigation, visible focus rings, a native `<dialog>` for case studies, and full `prefers-reduced-motion` support.
- 📱 **Responsive** from wide desktops down to 360px phones, with safe-area support for notched screens.
- ⚡ **Zero dependencies.** No framework, no build step, no npm. One file, loads instantly.
- 🔋 **Efficient.** The canvas pauses when it scrolls off-screen.

## 🧠 How the blockchain demo works

```
┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│ Block #0     │     │ Block #1     │     │ Block #2     │
│ data         │     │ data         │     │ data         │
│ nonce        │     │ nonce        │     │ nonce        │
│ prev: 000…0  │◄────│ prev: hash#0 │◄────│ prev: hash#1 │
│ hash: 000a…  │     │ hash: 000f…  │     │ hash: 0003…  │
└──────────────┘     └──────────────┘     └──────────────┘
```

Each block's hash is `SHA-256(index + prev + data + nonce)`. **Mining** means increasing the nonce until the hash starts with the required number of zeros. Changing any block's data changes its hash, which breaks the `prev` link in every block after it. That's why tampering is easy to detect.

SHA-256 is implemented from scratch using `Int32Array` and bitwise operations, and it's verified against Node's `crypto` module. It needs no Web Crypto API, so it even works when opened as a local file.

## 🗂️ Project structure

```
.
├── index.html   # the entire site: HTML, CSS and JS
└── README.md
```

Inside `index.html`:

```
<style>     design tokens (:root) → layout → components → responsive → reduced motion
<body>      nav · hero · Engineering panel · Creative panel · contact · dialog
<script>    tabs · role cycler · terminal · network canvas · projects data
            + modal · subnet calculator · SHA-256 · mini blockchain · copy buttons
```

## 🚀 Run locally

No setup needed. Just open the file:

```bash
git clone https://github.com/<your-github-username>/<repo-name>.git
cd <repo-name>
# open index.html in your browser, or serve it:
npx serve .        # or: python -m http.server 8000
```

## 🌐 Deploy to GitHub Pages

1. Rename `aman-goswami-portfolio.html` to **`index.html`** and push it to a public repo.
2. Go to **Settings → Pages**.
3. Under *Source*, choose **Deploy from a branch**, then pick `main` and `/ (root)`.
4. Your site goes live at `https://<username>.github.io/<repo-name>/` within a minute or two.

> Want `https://<username>.github.io/` with no repo name? Name the repo **`<username>.github.io`**.

Netlify and Vercel work too: drag the folder in and it's live.

## 🛠️ Customise

| To change… | Edit… |
|---|---|
| Colours | CSS variables in `:root` (`--violet`, `--amber`, `--rose`, `--mint`, …) |
| Fonts | The Google Fonts `<link>` and `--display` / `--body` / `--mono` |
| Projects | The `projects` array in `<script>`. Each entry has `title`, `blurb`, `stack`, `problem`, `built`, `learned`. Use `size: 'feature' \| 'wide' \| 'full' \| ''` to control the card's width. |
| Skills & levels | The `.skill-list` items in the Skills section (`solid`, `working`, `learning`) |
| CCNA progress | Move the `done` / `now` classes on the `.step` elements |
| Terminal text | The `lines` array in `<script>` |
| Rotating roles | The `roles` array |
| LinkedIn | Replace the "Profile coming soon" card in `#contact` with an `<a href="…">` card |

## 🧰 Built with

**HTML5** · **CSS3** (Grid, custom properties, `color-mix()`, keyframes) · **Vanilla JavaScript** (Canvas API, `IntersectionObserver`, `<dialog>`, Clipboard API) · Fonts: [Unbounded](https://fonts.google.com/specimen/Unbounded), [Figtree](https://fonts.google.com/specimen/Figtree), [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono)

## 📬 Contact

| | |
|---|---|
| 📧 Personal | [amanopp0690@gmail.com](mailto:amanopp0690@gmail.com) |
| 🎓 University | [aman.24bce7313@vitapstudent.ac.in](mailto:aman.24bce7313@vitapstudent.ac.in) |
| 📱 Phone | [+91 80119 24517](tel:+918011924517) |
| 💼 LinkedIn | *Coming soon* |

## 📄 License

The code is free to use as inspiration under the [MIT License](https://opensource.org/licenses/MIT). The personal content (name, projects, contact details) belongs to Aman Goswami, so please don't reuse it as your own.

<div align="center">

---

Made with ☕, packet captures and too many keyframes by **Aman Goswami**

⭐ If you like the site, a star on the repo is appreciated!

</div>
