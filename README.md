# Portfolio site

Plain HTML/CSS/JS — no build step, no dependencies. Just three files: `index.html`, `styles.css`, `script.js`.

## Before you push this live

Search the files for these placeholders and fill in your real info:

- `[Last Name]` in `index.html` (hero title)
- `your.email@example.com` — contact section and mailto link
- `linkedin.com/in/yourhandle` and `github.com/yourhandle`
- The `href="#"` links on each project card — point these at real repos
- `resume.pdf` — drop your actual resume PDF in this folder with that filename, or update the link
- Skills list — swap in your real language/tool list, this is a starting guess

## 1. Get it on GitHub Pages

1. Create a new repo on GitHub. If you want it at `yourusername.github.io`, name the repo exactly that. Otherwise any repo name works and it'll be served at `yourusername.github.io/repo-name`.
2. Push these three files to the repo's default branch (usually `main`):
   ```
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/yourusername/your-repo.git
   git push -u origin main
   ```
3. In the repo, go to **Settings → Pages**.
4. Under **Source**, select the `main` branch and `/ (root)` folder, then save.
5. GitHub will give you a URL like `https://yourusername.github.io/your-repo/` within a minute or two.

## 2. Point a custom domain at it

If you buy a domain (Namecheap, Cloudflare, Porkbun, Google Domains/Squarespace, etc.):

1. Create a file named `CNAME` (no extension) in this folder containing just your domain, e.g.:
   ```
   timiportfolio.com
   ```
   Commit and push it — GitHub Pages reads this file to know which domain to serve.
2. At your domain registrar's DNS settings, add:
   - For an apex domain (`timiportfolio.com`): four `A` records pointing to GitHub's IPs:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```
   - For a `www` subdomain: a `CNAME` record pointing `www` to `yourusername.github.io`.
   - Most people set up both — the apex records plus a `www` CNAME — and pick one as canonical in the GitHub Pages settings.
3. Back in **Settings → Pages**, enter your custom domain in the box provided and save. Wait for DNS to propagate (can take a few minutes to a few hours), then check **Enforce HTTPS** once it's available — GitHub provisions a free certificate automatically.

## Notes on the design

- Fonts load from Google Fonts via CDN — no local font files needed.
- The nav auto-highlights the active section as you scroll (see `script.js`).
- Respects `prefers-reduced-motion` — the typing effect and transitions are disabled for users who've set that preference.
- Everything is one column and collapses to a top bar under 860px.
