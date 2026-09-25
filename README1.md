# PCBL — Phytochemistry & Computational Biology Laboratory

This project is two websites in one repository, sharing one database:

| Folder | What it is | Who uses it |
|---|---|---|
| `site/` | **The public website.** Landing page, papers, books, projects (with live clocks), funding, team, collaborators and contact. It has no upload or posting buttons. | Everyone |
| `admin/` | **The lab console**, a separate website that only opens with an admin login. It has *Post a paper* (DOI auto-fill), *Post a project*, and an editor for **every section and every line of text** on the public site. It also keeps a version history and has backups. | Only accounts on the admin list |
| `supabase/schema.sql` | The database: tables, security rules, revision history and image storage | Run once |
| `brand-kit/` | Logo files (SVG and PNG) and `logo-sheet.html` | Print, slides, socials |

Both sites are plain HTML/CSS/JavaScript with no framework and nothing to compile. Content lives in **Supabase**, a hosted Postgres database with login and file storage. Both sites are hosted on **Netlify**. The free tiers of both are enough.

```
visitor ──► site  (Netlify) ──reads──►  Supabase  ◄──reads + writes── admin console (Netlify) ◄── lab admin
                                      (database + images)                    (login required)
```

The public site only ever **reads**. Writes are refused by the database itself unless they come from a signed-in account that's on the admin list, so nobody can change the site from the public side, whatever they do in their browser.

---

## 1. Preview on your computer

**Everything at once:** double-click `start.bat` (or run `python start.py`). It starts all four local servers, opens the site, and Ctrl+C stops them all:

| Address | What |
|---|---|
| http://localhost:5510 | Public site |
| http://localhost:5511 | Admin console (uses the real Supabase in `config.js`) |
| http://localhost:5520 | Public site — demo |
| http://localhost:5521 | Admin console — demo: fake in-memory database, any email + password signs in, nothing is kept |

Just the real pair:

```bash
python serve.py
```

- Public site: **http://localhost:5510**
- Console: **http://localhost:5511**

Until the database is connected (step 2), the site shows the built-in content from `site/assets/js/data.js`, and the console's sign-in page shows the setup steps. `serve.py` sends the same security headers as Netlify, so if something works locally it will work live.

---

## 2. Going live (about 20 minutes, one time)

### A · Create the database (Supabase)

1. Sign up at [supabase.com](https://supabase.com) → **New project**. Pick a name, a strong database password (store it in your password manager) and the region closest to your visitors.
2. **SQL Editor → New query**: paste the whole of `supabase/schema.sql` and click **Run**. It is safe to run again later.
3. **Authentication → Sign In / Providers → Email**: turn **off** “Allow new users to sign up”. Only accounts you create yourself should exist.
4. **Authentication → Users → Add user → Create new user**: enter your email and a strong password, and tick **Auto Confirm User**. Repeat for every lab member who should be able to edit.
5. Back in **SQL Editor**, add each of those accounts to the admin list. The same lines are at the bottom of `schema.sql`:
   ```sql
   insert into public.admins (user_id, email)
   select id, email from auth.users where email = 'you@university.edu';
   ```
6. **Project Settings → API**: copy the **Project URL** and the **anon / publishable** key.

### B · Connect both sites (one file)

Open `site/assets/js/config.js` and fill in:

```js
supabaseUrl:     'https://abcdefghijkl.supabase.co',
supabaseAnonKey: 'eyJ… or sb_publishable_…',
siteUrl:         'https://pcbl.netlify.app',        // your public address (after step C)
adminUrl:        'https://pcbl-admin.netlify.app',  // the console's address (after step C)
```

> The anon / publishable key is **meant to be public**, because every visitor's browser needs it to read the content. What it can do is limited by the database rules in `schema.sql`. **Never** put the `service_role` / secret key anywhere in this project.

The console uses the same `config.js`. Its build step copies the site's assets across, so there is only one file to maintain.

### C · Publish both sites (Netlify)

1. Put this folder in a GitHub repository. A **private** repository is recommended.
2. Netlify → **Add new site → Import an existing project** → pick the repo:
   - **Base directory: `site`** → Deploy. This is the public website.
3. Netlify → **Add new site** again with the **same repo**:
   - **Base directory: `admin`** → Deploy. This is the console. Its `netlify.toml` copies the site's shared CSS/JS in at build time.
4. Optional: in each site's **Domain management**, rename it or attach a domain, for example `pcbl.university.edu` and `console.pcbl.university.edu`. Then put the final addresses into `siteUrl` / `adminUrl` in `config.js` and push.

### D · Let password resets reach the console

Supabase → **Authentication → URL Configuration**:
- **Site URL**: the console address, e.g. `https://pcbl-admin.netlify.app`
- **Redirect URLs**: add the same address.

Now **Forgot your password?** on the console sends a link that opens the console's “choose a new password” screen.

### E · First sign-in

Open the console address and sign in. The dashboard's **Health check** confirms the database, your admin rights, image storage and the site address. Everything the site shows is still the built-in placeholder content. Open **Edit the website**, replace the placeholders section by section, and press **Save**. Each save is live immediately.

**Before sharing links on social media:** each public page's `<head>` has `og:image` = `assets/brand/og-image.png`. Change it to the full address, e.g. `https://pcbl.university.edu/assets/brand/og-image.png`, so previews show the card.

---

## 3. Using the console

| Page | What it does |
|---|---|
| **Dashboard** | Greeting, counts, recent changes (who saved what, when), which sections are edited or default, health check, **Download a backup / Restore a backup**. |
| **Post a paper** | Paste a DOI and **Auto-fill** fetches title, authors, journal, year and citations from Crossref. The research theme is detected automatically and you can change it. You can add a graphical abstract. **Post** puts it on the site immediately. Below the form, every published paper can be **edited** in the same composer or **removed**. |
| **Post a project** | The same idea: title, summary, thumbnail, scholars, dates (the live clock starts from the start date) and funding. Published projects can be edited or removed. |
| **Edit the website** | Every section, every field. See the list below. |

**Every section is editable:** Lab identity (name, tagline, place, logo) · **Page text** (every heading, button, small label and intro on every page, plus the menu descriptions) · Principal investigator (portrait, about, headline numbers, education, research areas, awards with hover photos, profiles) · Papers · Paper themes · Books & chapters (with covers) · Projects (including an optional **per-project funding page**: utilised %, budget heads, installments, deliverables) · Funding page defaults · Team (PhD and post-docs: photo, role, progress, about, thesis, works, **project involvement ticks**, socials) · Collaborators (partners and logos, types, numbers, the rotating words and which partner type each one lights up) · Contact (rotating words, email/phone/links, address, hours, **Google Maps embed**, the four “ways to work with us” cards).

**How editing works**
- Changes stay as a draft until you press **Save**, then they're live. **Ctrl/⌘ + S** also saves.
- **Unsaved changes survive** a closed tab. On return, the console offers to restore them.
- **History** keeps the last 60 saved versions of every section. Load any version, or the original built-in content, then Save to make it live again.
- **Two people editing the same section** is handled. If someone else saved in the meantime, you're asked before overwriting, and their version stays in History.
- **Images**: **Upload** resizes big photos automatically (max 1800 px, under 5 MB) and stores them in Supabase. **Library** lets you reuse an image already uploaded. Images still in use can't be deleted from the library.
- Formatting in page text: `*words*` gives the italic gradient accent, `**words**` gives bold, `[label](https://…)` makes a link.

**Admins.** To add someone, create the user in Supabase (step A.4) and run the `insert into public.admins …` line with their email. To remove someone:
```sql
delete from public.admins where email = 'them@university.edu';
```
Also delete the user under Authentication → Users if they should not be able to sign in at all.

---

## 4. Optional — import from Google Scholar

Google Scholar has no public API and blocks browsers from calling it directly, so the import goes through a small proxy that you control. Once it's set up, **Post a paper** shows an **Import from Google Scholar** box. It lists the papers on the profile that aren't on the site yet, auto-sorted into themes, and can also refresh citation counts.

1. Get a key at [serpapi.com](https://serpapi.com). Its Google Scholar Author API is enough on the free tier for occasional imports.
2. Deploy this Cloudflare Worker (free) with the secret `SERPAPI_KEY`. Set `ALLOWED_ORIGIN` to your console address.

```js
export default {
  async fetch(req, env) {
    const user = new URL(req.url).searchParams.get('user');
    if (!user) return new Response('missing ?user=', { status: 400 });
    const api = `https://serpapi.com/search.json?engine=google_scholar_author&author_id=${encodeURIComponent(user)}&num=100&sort=pubdate&api_key=${env.SERPAPI_KEY}`;
    const cacheKey = new Request(`https://cache.local/scholar/${user}`);
    let res = await caches.default.match(cacheKey);
    if (!res) {
      const r = await fetch(api);
      res = new Response(r.body, r);
      res.headers.set('Cache-Control', 'public, max-age=86400');
      if (r.ok) await caches.default.put(cacheKey, res.clone());
    }
    const out = new Response(res.body, res);
    out.headers.set('Access-Control-Allow-Origin', env.ALLOWED_ORIGIN || '*');
    return out;
  }
};
```

3. In `config.js`, set `scholarProxy` to the Worker URL and `scholarUserId` to the `user=` value from the professor's Scholar profile URL.

Themes are guessed by the keyword rules in `site/assets/js/scholar.js` (`RULES`). Scholar doesn't report impact factors, so journal → IF values go in its `IMPACT_FACTORS` table, or type them per paper. If the Worker isn't on `*.workers.dev`, add its domain to `connect-src` in `admin/netlify.toml`.

---

## 5. Security, in short

- **The database decides**, not the browser. Row Level Security in `schema.sql` means anyone can *read* the site content. Only signed-in accounts listed in `public.admins` can *write* content, read the history, or upload / delete images.
- **Sign-ups are off** (step A.3), and even an account that somehow exists can't edit unless it's on the admin list. The console checks the list at sign-in and on every page.
- **Content-Security-Policy** on both sites (`netlify.toml`) only allows scripts from the site itself, with no inline scripts and no third-party JavaScript. The console talks to Supabase directly with `fetch` and doesn't load a client library from a CDN. Both sites also refuse to be framed, and the console is `noindex`.
- Text entered in the console is always escaped before it is shown. Links in page text only allow `http(s)`, `mailto`, `tel` and on-site pages, and the map only accepts Google Maps embed links.
- If the database is ever unreachable, the public site shows the last copy the visitor's browser saw, or the built-in content. The console refuses to open rather than show the defaults, so a save can never overwrite real content with placeholders.

---

## 6. File map

```
serve.py                     local preview: site on :5510, console on :5511 (same headers as Netlify)
supabase/schema.sql          tables · security rules · history trigger · image bucket · "make me admin"

site/                        ── the public website (Netlify base directory: site)
  netlify.toml               security headers + caching;  build.sh writes robots.txt + sitemap.xml
  index.html … contact.html  the pages;  404.html for missing addresses
  assets/js/config.js        ← Supabase URL/key + site addresses (the only file to edit when going live)
  assets/js/data.js          built-in (default) content for every section = the fallback
  assets/js/content.js       loads the live content from Supabase over the defaults
  assets/js/main.js          shell (nav, menu, footer), transitions, cursor, canvases, effects, page text
  assets/js/paper-core.js    paper card + DOI auto-fill          proj-core.js  project card + live clocks
  assets/js/scholar.js       Google Scholar import + auto-theming
  assets/js/<page>.js        one script per page
  assets/css/                style.css (design system) · fx.css (animation) · pages.css · theme-light.css
  assets/brand/              logo, favicons, social preview card

admin/                       ── the console (Netlify base directory: admin)
  netlify.toml               copies site/assets → shared/ at build time; strict headers; noindex
  index.html                 sign in · forgot password · set new password
  dashboard.html  content.html  post-paper.html  post-project.html
  assets/js/sb.js            tiny Supabase client (auth, database, storage) — no third-party code
  assets/js/admin-core.js    access guard, loading/saving with conflict checks, history, uploads
  assets/js/editor-schema.js what every section's form contains  ← add a field here to make it editable
  assets/js/editor.js        the form engine (lists, images, drafts, history, library)
  assets/css/admin.css       console-only styles on top of the site's design system
```

**Adding a new field** (e.g. a “Google Scholar ID” on team members): add it to the section's default in `data.js`, show it in the page's script, and add one line to that section in `admin/assets/js/editor-schema.js`. It then appears in the editor with history, drafts and saving already handled.

## Motion & accessibility

- The preloader runs once per browser session, and page changes use the curtain transition. The console skips the preloader.
- Every heavy effect is turned off for visitors who set **reduce motion** in their OS.
- The custom cursor and trail only run with a mouse. Touch devices get normal behaviour.
- The canvases pause when off-screen or when the tab is hidden.
- There's a light/dark theme toggle (top right) on both sites, and the choice is remembered.

## Brand

The mark combines a benzene ring, a leaf and veins drawn as a molecular graph. The files are in `brand-kit/` (open `logo-sheet.html`) and in `site/assets/brand/`. **Colours:** teal `#2dd4bf` → mint `#6ee7a8` → lime `#bef264` on dark; `#0e8f84` → `#0f9d63` → `#5c8c12` on light; background `#050e0a` / cream `#f4f4ea`. To use a different logo on the site, upload it under **Edit the website → Lab identity → Logo**.
