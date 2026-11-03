# Prompts to paste into Antigravity

Open this folder as your workspace first (File → Open Folder → `johnty-portfolio`).
Always start with the **Context** block, then add one task below it.

## Context (paste first)

```
This is a static portfolio site (plain HTML, CSS, vanilla JS, no build step, no frameworks).
Read README.md first. All content lives in js/data.js. The engine is js/app.js and styles are css/styles.css.
Rules:
- Do not add libraries or a build step.
- Do not invent facts, metrics, clients or testimonials. Only use content I give you.
- Keep the Figma-editor look (frames on a canvas, layers panel, inspect panel).
- It must still work when index.html is opened by double-click (no fetch of local files, no ES modules).
- Run a quick check in the browser after changes and tell me what you verified.
```

## Add a project with my mockups

```
Add a new project to js/data.js called "<name>". I put these files in assets/images/: <file1.jpg>, <file2.jpg>, <file3.jpg>.
Use <file1.jpg> as the hero image (device: "browser" | "phone"), and the others as the gallery with these captions: <...>.
Summary: "<2 sentences>". Bullets: <3-5 things I actually did>. My role: <role>. Timeline: <dates>. Tools: <tools>.
Don't change anything else.
```

## Replace the HR wireframe with real screens

```
In js/data.js, change the "hr" project's visual from "wireframe" to "image" using assets/images/<file>.jpg (device: "browser"),
and add these gallery images: <...>. Remove the "Illustrative wireframe" note.
```

## Add a full case-study frame

```
Add a new frame type "case study" for the project "<id>": a tall frame with sections Problem, Constraints, Process,
Decisions, Outcome. I'll provide the text. Add it to the layout plan in js/app.js so it sits below that project's row,
and add it to the layers panel. Keep it data-driven from js/data.js.
```

## Add a testimonials frame (only with real quotes)

```
Add a "Recommendations" frame fed from a new `testimonials` array in js/data.js. Each item has quote, name, role, company.
Leave the array empty for now and hide the frame when it's empty. I'll add real quotes from LinkedIn later.
```

## Improve image quality

```
Add width and height attributes to all images to prevent layout shift, and compress the files in assets/images/
without visible quality loss. Don't change filenames.
```

## Publish to GitHub Pages

```
Initialise a git repo, commit everything, and walk me through pushing to GitHub and enabling Pages (branch main, root).
Tell me the final URL format. Don't push anything until I confirm the repository name.
```
