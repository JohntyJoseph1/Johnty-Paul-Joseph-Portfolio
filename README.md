# Johnty Paul Joseph — Portfolio

A portfolio that behaves like a Figma file: frames on a pannable, zoomable canvas, a layers panel,
an inspect panel and comment pins. Plain HTML, CSS and JavaScript. **No build step, no dependencies.**

## Run it

**Easiest:** double-click `index.html`. It works straight from your computer.

**With a local server** (recommended while editing, needs Node):

```bash
npm start        # runs: npx serve .   then open the address it prints
```

## Folder map

```
index.html            page shell (editor chrome). Rarely edited.
css/styles.css        all styling. Editor colours at the top, in-frame design tokens under .frame-box
js/data.js            ★ ALL YOUR CONTENT. Edit this file to change text and add projects.
js/app.js             the engine: builds frames from data.js, auto-layout, pan/zoom/select. Rarely edited.
assets/images/        ★ drop your mockups and photos here
assets/resume/        your resume PDF (keep the same filename to update it)
```

## Add a project (2 minutes)

1. Put your mockup images in `assets/images/` (e.g. `hr-attendance.jpg`).
2. Open `js/data.js`, find `projects: [`, copy one whole `{ ... }` block, paste it after a comma, and edit:
   - `id` must be unique and use only letters, numbers and dashes.
   - `visual.type`: `"image"` (one hero image), `"figma"` (live prototype), or `"wireframe"` (placeholder).
   - `visual.device` for images: `"browser"`, `"phone"` or `"plain"`.
   - `gallery`: extra mockups. They show as thumbnails and open full-size when clicked.
3. Save and refresh. The new frame appears on the canvas, in the layers panel and in Fit All automatically.
   More than three projects wrap onto a new row.

Replace the HR project's `visual: { type: "wireframe" }` with real mockups only if your employer allows it.
Those screens are confidential, so check first.

## Swap the photo

Replace `assets/images/portrait.jpg` with a sharper one, ideally at least 900 px wide (the current one is small).
Same filename, or change `portrait` in `js/data.js`.

## Update the resume

Replace `assets/resume/Johnty_Paul_Joseph_Resume.pdf` with your new PDF, keeping the filename.

## Figma prototype embeds

In Figma: open the prototype, click **Share**, switch on **Allow embed**, then copy the prototype link into `visual.url`.
Use `content-scaling=responsive` in the URL so it fits on phones (already set for Robuster Ride).
If an embed stays blank, the file owner hasn't allowed embedding. The "Open in Figma" link still works.

## Deploy free on GitHub Pages

```bash
git init
git add .
git commit -m "Portfolio"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

Then on GitHub: **Settings → Pages → Build and deployment → Source: Deploy from a branch → Branch: main / (root) → Save.**
Your site goes live at `https://<your-username>.github.io/<repo-name>/` in a minute or two.
(The `.nojekyll` file is already included.)

## Keyboard and controls

| Action | How |
|---|---|
| Pan | Scroll, or drag the canvas |
| Zoom | Ctrl or ⌘ + scroll, pinch, or the + / − buttons |
| Fit everything | `Shift + 1` or the fit button |
| Zoom to selected frame | `Shift + 2` or double-click a frame |
| Reset to 100% | `Shift + 0` |
| Deselect / close | `Esc` |

On phones (under 760 px) it opens in a normal scrolling "Simple view". The toolbar button switches views on any device.

## Rules for the content

Everything in `data.js` must be something you can explain in an interview. No invented metrics, no
testimonials unless the person said it, no projects you didn't do. Real recommendations from LinkedIn are welcome
as a new frame once you have them.
