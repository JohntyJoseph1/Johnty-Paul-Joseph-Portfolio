/* =====================================================================
   APP ENGINE — you normally don't need to edit this file.
   1. Reads window.PORTFOLIO (js/data.js) and builds one frame per section.
   2. Lays frames out automatically in rows (so new projects just appear).
   3. Runs the Figma-style canvas: pan, zoom, select, layers, inspect.
   ===================================================================== */
(function () {
  var D = window.PORTFOLIO;
  var P = D.profile;

  /* ---------- helpers ---------- */
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  }
  function hl(s) { // {word} -> highlighted word
    return esc(s).replace(/\{([^}]+)\}/g, '<span class="hl">$1</span>');
  }
  var ICON = '<svg viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.2"><path d="M3.5 1v10M8.5 1v10M1 3.5h10M1 8.5h10"/></svg>';

  function pinHTML(p) {
    if (!p) return '';
    var cls = (p.x > 500) ? 'pin pin-left' : 'pin';
    return '<div class="' + cls + '" style="left:' + p.x + 'px;top:' + p.y + 'px;"><button aria-label="Comment">J</button>' +
      '<div class="pop"><b>Johnty</b>' + esc(p.text) + '</div></div>';
  }
  function frameHTML(id, name, innerCls, inner, pin) {
    return '<div class="frame" id="' + id + '" data-name="' + esc(name) + '">' +
      '<div class="frame-label">' + ICON + esc(name) + '</div>' +
      '<div class="frame-box fr"><div class="frame-inner ' + (innerCls || '') + '">' + inner + '</div></div>' +
      pinHTML(pin) + '</div>';
  }
  function chipsHTML(chips) {
    return chips.map(function (c) {
      return '<span class="chip' + (c.lime ? ' lime' : '') + '">' + (c.dot ? '<i class="dot"></i>' : '') + esc(c.text) + '</span>';
    }).join('');
  }
  function listHTML(items) {
    return '<ul class="list">' + items.map(function (b) { return '<li>' + esc(b) + '</li>'; }).join('') + '</ul>';
  }

  /* ---------- section builders ---------- */
  function hero() {
    var chips = P.chips.map(function (t, i) {
      return i === 0 ? '<span class="chip lime">' + esc(t) + '</span>' : '<span class="chip"><i class="dot"></i>' + esc(t) + '</span>';
    }).join('');
    return '<div class="hero"><div class="hero-content">' +
      '<div style="display:flex;gap:8px;flex-wrap:wrap;">' + chips + '</div>' +
      '<h1>' + hl(P.headline) + '</h1>' +
      '<p class="lede">' + esc(P.lede) + '</p>' +
      '<div class="actions"><a class="btn solid" data-fly="f-' + D.projects[0].id + '" href="#">See the work ↓</a>' +
      '<a class="btn" data-resume href="#">Download resume</a></div>' +
      '<div class="facts">' + P.facts.map(function (f) { return '<span class="tag">' + esc(f) + '</span>'; }).join('') + '</div>' +
      '</div><div class="hero-media"><div class="polaroid"><div class="polaroid-photo"><img src="' + esc(P.portrait) + '" alt="' + esc(P.name) + '"></div>' +
      '<div class="pcap">' + esc(P.name) + '<span>' + esc(P.role) + '</span></div></div></div></div>';
  }
  function toolIcon(type, prefix) {
    var pfx = prefix || 'tool';
    if (type === 'figma') {
      return '<svg width="14" height="20" viewBox="0 0 38 57" fill="none" aria-hidden="true">' +
        '<path d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" fill="#1ABCFE"/>' +
        '<path d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z" fill="#0ACF83"/>' +
        '<path d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z" fill="#FF7262"/>' +
        '<path d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" fill="#F24E1E"/>' +
        '<path d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" fill="#A259FF"/>' +
      '</svg>';
    }
    if (type === 'whiteboard') {
      return '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">' +
        '<rect x="2" y="3" width="9" height="11" rx="2.5" fill="#FFE380" stroke="var(--ink)" stroke-width="1.3"/>' +
        '<rect x="13" y="10" width="9" height="11" rx="2.5" fill="#E4DCFF" stroke="var(--ink)" stroke-width="1.3"/>' +
        '<path d="M6.5 14v4a2 2 0 0 0 2 2h4.5" stroke="var(--ink)" stroke-width="1.3" stroke-linecap="round" stroke-dasharray="2 2"/>' +
      '</svg>';
    }
    if (type === 'antigravity') {
      var clipId = 'ag-arch-' + pfx;
      return '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">' +
        '<defs>' +
          '<clipPath id="' + clipId + '">' +
            '<path d="M21.751 22.607c1.34 1.005 3.35.335 1.508-1.508C17.73 15.74 18.904 1 12.037 1 5.17 1 6.342 15.74.815 21.1c-2.01 2.009.167 2.511 1.507 1.506 5.192-3.517 4.857-9.714 9.715-9.714 4.857 0 4.522 6.197 9.714 9.715z"/>' +
          '</clipPath>' +
        '</defs>' +
        '<g clip-path="url(#' + clipId + ')">' +
          '<rect width="24" height="24" fill="#3186FF"/>' +
          '<path d="M-1.018-3.992c-.408 3.591 2.686 6.89 6.91 7.37 4.225.48 7.98-2.043 8.387-5.633.408-3.59-2.686-6.89-6.91-7.37-4.225-.479-7.98 2.043-8.387 5.633z" fill="#FFE432"/>' +
          '<path d="M15.269 7.747c1.058 4.557 5.691 7.374 10.348 6.293 4.657-1.082 7.575-5.653 6.516-10.21-1.058-4.556-5.691-7.374-10.348-6.292-4.657 1.082-7.575 5.653-6.516 10.21z" fill="#FC413D"/>' +
          '<path d="M-12.443 10.804c1.338 4.703 7.36 7.11 13.453 5.378 6.092-1.733 9.947-6.95 8.61-11.652C8.282-.173 2.26-2.58-3.833-.848-9.925.884-13.78 6.1-12.443 10.804z" fill="#00B95C"/>' +
          '<path d="M-7.608 14.703c3.352 3.424 9.126 3.208 12.896-.483 3.77-3.69 4.108-9.459.756-12.883C2.69-2.087-3.083-1.871-6.853 1.82c-3.77 3.69-4.108 9.458-.755 12.883z" fill="#00B95C"/>' +
          '<path d="M9.932 27.617c1.04 4.482 5.384 7.303 9.7 6.3 4.316-1.002 6.971-5.448 5.93-9.93-1.04-4.483-5.384-7.304-9.7-6.301-4.316 1.002-6.971 5.448-5.93 9.93z" fill="#3186FF"/>' +
          '<path d="M2.572-8.185C.392-3.329 2.778 2.472 7.9 4.771c5.122 2.3 11.042.227 13.222-4.63 2.18-4.855-.205-10.656-5.327-12.955-5.122-2.3-11.042-.227-13.222 4.63z" fill="#FBBC04"/>' +
          '<path d="M-3.267 38.686c-5.277-2.072 3.742-19.117 5.984-24.83 2.243-5.712 8.34-8.664 13.616-6.592 5.278 2.071 11.533 13.482 9.29 19.195-2.242 5.713-23.613 14.298-28.89 12.227z" fill="#3186FF"/>' +
          '<path d="M28.71 17.471c-1.413 1.649-5.1.808-8.236-1.878-3.135-2.687-4.531-6.201-3.118-7.85 1.412-1.649 5.1-.808 8.235 1.878s4.532 6.2 3.119 7.85z" fill="#749BFF"/>' +
        '</g>' +
      '</svg>';
    }
    if (type === 'claude') {
      return '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">' +
        '<circle cx="12" cy="12" r="9" fill="#FBF3EC" stroke="#CC785C" stroke-width="1.3"/>' +
        '<path d="M12 6.5v11M6.5 12h11M8.1 8.1l7.8 7.8M8.1 15.9l7.8-7.8" stroke="#CC785C" stroke-width="1.8" stroke-linecap="round"/>' +
      '</svg>';
    }
    if (type === 'canva') {
      var gradId = 'canva-grad-' + pfx;
      return '<svg width="22" height="22" viewBox="0 0 80 80" fill="none" aria-hidden="true">' +
        '<defs>' +
          '<linearGradient id="' + gradId + '" x1="0%" y1="0%" x2="100%" y2="100%">' +
            '<stop offset="0%" stop-color="#00C4CC"/>' +
            '<stop offset="100%" stop-color="#7D2AE8"/>' +
          '</linearGradient>' +
        '</defs>' +
        '<circle cx="40" cy="40" r="40" fill="url(#' + gradId + ')"/>' +
        '<path d="M57.269 48.205c-.33 0-.62.279-.923.888-3.414 6.922-9.31 11.82-16.134 11.82-7.89 0-12.775-7.122-12.775-16.961 0-16.667 9.286-26.303 17.443-26.303 3.811 0 6.139 2.395 6.139 6.207 0 4.524-2.57 6.919-2.57 8.514 0 .717.445 1.15 1.329 1.15 3.549 0 7.714-4.078 7.714-9.839 0-5.586-4.862-9.692-13.018-9.692-13.48 0-25.46 12.497-25.46 29.788 0 13.385 7.643 22.23 19.436 22.23 12.517 0 19.754-12.454 19.754-16.496 0-.895-.458-1.305-.935-1.305z" fill="#ffffff"/>' +
      '</svg>';
    }
    if (type === 'globe') {
      return '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--ink)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
        '<circle cx="12" cy="12" r="9"/>' +
        '<path d="M3.6 9h16.8M3.6 15h16.8"/>' +
        '<path d="M12 3a13 13 0 0 1 0 18M12 3a13 13 0 0 0 0 18"/>' +
      '</svg>';
    }
    return '';
  }
  function about() {
    var A = D.about;
    var toolsHTML = '';
    if (A.tools && A.tools.length) {
      toolsHTML = '<div class="about-tools">' +
        '<div class="about-tools-head">' +
          '<span class="about-tools-title">' + esc(A.toolsTitle || 'Software & Stack') + '</span>' +
          '<span class="about-tools-badge">5 tools</span>' +
        '</div>' +
        '<div class="tool-grid">' +
          A.tools.map(function (t, idx) {
            var spanCls = t.featured ? ' span-2' : '';
            return '<div class="tool-card' + spanCls + '">' +
              '<div class="tool-icon">' + toolIcon(t.icon, 'about-' + idx) + '</div>' +
              '<div class="tool-info">' +
                '<span class="tool-name">' + esc(t.name) + '</span>' +
                '<span class="tool-role">' + esc(t.role) + '</span>' +
              '</div>' +
            '</div>';
          }).join('') +
        '</div>' +
      '</div>';
    }
    return '<div class="about-grid">' +
      '<div class="about-content">' +
        '<div class="eyebrow">About</div><h2>' + esc(A.heading) + '</h2><p class="t">' + esc(A.text) + '</p>' +
        '<div class="quote">' + esc(A.quote) + '</div>' + listHTML(A.points) +
      '</div>' +
      '<div class="about-stack">' + toolsHTML + '</div>' +
    '</div>';
  }
  function wireframe() {
    return '<svg viewBox="0 0 640 250" width="100%" style="display:block"><rect width="640" height="250" fill="#fff"/><rect x="0" y="0" width="120" height="250" fill="#F2F0E7"/><rect x="18" y="22" width="60" height="9" rx="3" fill="#131313"/><rect x="18" y="52" width="80" height="7" rx="3" fill="#bbb"/><rect x="18" y="72" width="80" height="7" rx="3" fill="#D6F54A" stroke="#131313"/><rect x="18" y="92" width="80" height="7" rx="3" fill="#bbb"/><rect x="18" y="112" width="80" height="7" rx="3" fill="#bbb"/><rect x="146" y="22" width="150" height="26" rx="6" fill="#E4DCFF" stroke="#131313"/><rect x="310" y="22" width="320" height="26" rx="6" fill="#fff" stroke="#bbb"/><rect x="146" y="66" width="484" height="14" fill="#F2F0E7"/><g fill="#ddd"><rect x="146" y="90" width="484" height="12"/><rect x="146" y="110" width="484" height="12"/><rect x="146" y="130" width="360" height="12"/></g><rect x="146" y="158" width="150" height="72" rx="8" fill="#DCEBFF" stroke="#131313"/><rect x="312" y="158" width="150" height="72" rx="8" fill="#FFE3D2" stroke="#131313"/><path d="M482 214l22-30 22 14 24-34 22 12" fill="none" stroke="#131313" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  }
  function galleryHTML(g) {
    if (!g || !g.length) return '';
    return '<div class="gallery">' + g.map(function (s) {
      return '<button type="button" data-lightbox="' + esc(s.src) + '" data-cap="' + esc(s.caption || '') + '"><img loading="lazy" src="' + esc(s.src) + '" alt="' + esc(s.caption || '') + '">' +
        (s.caption ? '<span>' + esc(s.caption) + '</span>' : '') + '</button>';
    }).join('') + '</div>';
  }
  function linksHTML(links) {
    if (!links || !links.length) return '';
    return '<div class="linkrow">' + links.map(function (l) {
      return '<a class="btn' + (l.solid ? ' solid' : '') + '" href="' + esc(l.url) + '" target="_blank" rel="noopener">' + esc(l.label) + '</a>';
    }).join('') + '</div>';
  }
  function showcaseHTML(pId, screens) {
    var initial = screens[0];
    var stage = '<div class="stage" id="stage-' + esc(pId) + '">' +
      '<div class="stage-top">' +
        '<div class="stage-tag"><i class="dot"></i><span class="stage-caption">' + esc(initial.caption) + '</span></div>' +
        '<button type="button" class="stage-expand" title="Inspect full resolution" aria-label="Inspect full size">' +
          '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><path d="M2 6V2h4M10 2h4v4M14 10v4h-4M6 14H2v-4"/></svg><span>Inspect</span>' +
        '</button>' +
      '</div>' +
      '<div class="stage-screen" role="region" aria-label="Project screen preview">' +
        '<img class="stage-img" src="' + esc(initial.src) + '" alt="' + esc(initial.alt) + '">' +
      '</div>' +
    '</div>';

    var thumbs = '<div class="stage-thumbs" data-for="stage-' + esc(pId) + '">' +
      screens.map(function (s, idx) {
        return '<button type="button" class="stage-thumb' + (idx === 0 ? ' is-active' : '') + '" data-idx="' + idx + '" data-src="' + esc(s.src) + '" data-caption="' + esc(s.caption) + '" data-alt="' + esc(s.alt) + '" aria-label="' + esc(s.caption) + '">' +
          '<div class="thumb-preview"><img src="' + esc(s.src) + '" alt="' + esc(s.caption) + '"></div>' +
          '<div class="thumb-meta"><span class="thumb-dot"></span><span class="thumb-cap">' + esc(s.caption) + '</span></div>' +
        '</button>';
      }).join('') +
    '</div>';

    return '<div class="showcase">' + stage + thumbs + '</div>';
  }
  function project(p) {
    var v = p.visual || { type: 'wireframe' };
    var head = '<div class="work-head">' + chipsHTML(p.chips) + '</div><h2>' + esc(p.title) + '</h2><div class="meta">' + esc(p.meta) + '</div>';
    var bullets = (p.bulletsTitle ? '<h3>' + esc(p.bulletsTitle) + '</h3>' : '') + listHTML(p.bullets || []);

    if (v.type === 'figma') {
      return head + '<div class="rr"><div class="phone"><div class="phone-ph">Loading prototype…<br><small>Opens in Figma if blank</small></div>' +
        '<iframe title="' + esc(p.title) + ' Figma prototype" loading="lazy" allowfullscreen src="' + esc(v.url) + '"></iframe>' +
        '<div class="embed-guard"><span>Click to interact</span></div></div>' +
        '<div><p class="summary">' + esc(p.summary) + '</p>' + listHTML(p.bullets || []) + linksHTML(p.links) +
        (v.note ? '<p class="wire-note" style="margin-top:12px;">' + esc(v.note) + '</p>' : '') + '</div></div>' + galleryHTML(p.gallery);
    }

    var screens = [];
    if (v.type === 'image' && v.src) {
      screens.push({
        src: v.src,
        caption: v.caption || p.heroCaption || p.title,
        alt: v.alt || p.title
      });
      if (p.gallery && p.gallery.length) {
        p.gallery.forEach(function (g) {
          screens.push({
            src: g.src,
            caption: g.caption || '',
            alt: g.alt || g.caption || p.title
          });
        });
      }
    }

    var visual = '';
    var hasShowcase = screens.length > 1;

    if (hasShowcase) {
      visual = showcaseHTML(p.id, screens);
    } else if (v.type === 'wireframe') {
      visual = '<div class="wire">' + wireframe() + '</div>' + (v.note ? '<div class="wire-note">' + esc(v.note) + '</div>' : '');
    } else if (v.type === 'image' && v.device === 'browser') {
      visual = '<div class="browser"><div class="bar"><i></i><i></i><i></i></div><img src="' + esc(v.src) + '" alt="' + esc(v.alt || p.title) + '"></div>';
    } else if (v.type === 'image' && v.device === 'phone') {
      visual = '<div class="phone-shot" style="margin:0 auto;"><img src="' + esc(v.src) + '" alt="' + esc(v.alt || p.title) + '"></div>';
    } else if (v.type === 'image') {
      visual = '<div class="shot"><img src="' + esc(v.src) + '" alt="' + esc(v.alt || p.title) + '"></div>';
    }

    var bottomGallery = hasShowcase ? '' : galleryHTML(p.gallery);
    return head + '<p class="summary">' + esc(p.summary) + '</p>' + visual + bullets + bottomGallery + linksHTML(p.links);
  }
  function processBlock() {
    var X = D.process;
    var steps = X.steps.map(function (s) {
      return '<div class="step"><b>' + esc(s[0]) + '</b><h3>' + esc(s[1]) + '</h3><p>' + esc(s[2]) + '</p></div>';
    }).join('');
    var flow = X.flow.map(function (n, i) {
      var name = Array.isArray(n) ? n[0] : n.name;
      var note = Array.isArray(n) ? n[1] : n.note;
      var icon = Array.isArray(n) ? (n[2] || (name === 'Figma' ? 'figma' : name === 'Antigravity' ? 'antigravity' : 'globe')) : n.icon;
      var iconHTML = icon ? '<div class="node-icon">' + toolIcon(icon, 'flow-' + i) + '</div>' : '';
      return (i ? '<span class="arrow">→</span>' : '') +
        '<div class="node">' +
          iconHTML +
          '<div class="node-body">' +
            '<div class="node-title">' + esc(name) + '</div>' +
            '<small>' + esc(note) + '</small>' +
          '</div>' +
        '</div>';
    }).join('');
    return '<div class="proc-top"><div><div class="eyebrow">Process</div><h2>' + esc(X.heading) + '</h2></div><div class="steps">' + steps + '</div></div>' +
      '<div class="flow"><div class="eyebrow" style="margin-bottom:0;">' + esc(X.flowTitle) + '</div><div class="flow-row">' + flow +
      '<p style="flex:1;min-width:260px;font-size:14.5px;line-height:1.55;color:var(--ink-2);margin-left:18px;">' + esc(X.flowNote) + '</p></div></div>';
  }
  function caps() {
    var C = D.capabilities;
    return '<div class="eyebrow">Capabilities</div><h2>' + esc(C.heading) + '</h2><div class="cap-grid">' +
      C.groups.map(function (g) {
        return '<div class="cap"><h3>' + esc(g[0]) + '</h3><div class="tags">' + g[1].map(function (t) { return '<span class="tag">' + esc(t) + '</span>'; }).join('') + '</div></div>';
      }).join('') + '</div><p style="margin-top:22px;font:500 13px/1 \'Geist Mono\',monospace;color:var(--ink-3);">' + esc(C.tools) + '</p>';
  }
  function expDoodle(type) {
    if (type === 'ux') {
      return '<svg class="exp-doodle" viewBox="0 0 160 76" fill="none" aria-label="UX & Design Systems doodle" xmlns="http://www.w3.org/2000/svg">' +
        '<rect x="1.5" y="1.5" width="157" height="73" rx="8" fill="var(--paper-2)" stroke="var(--rule)" stroke-width="1.2" stroke-dasharray="3 3"/>' +
        '<rect x="12" y="12" width="46" height="22" rx="5" fill="#fff" stroke="var(--ink)" stroke-width="1.2"/>' +
        '<circle cx="23" cy="23" r="5" fill="var(--lilac)" stroke="var(--ink)" stroke-width="1.2"/>' +
        '<rect x="33" y="20" width="18" height="5" rx="2" fill="var(--ink-3)"/>' +
        '<rect x="12" y="42" width="36" height="20" rx="10" fill="var(--lime)" stroke="var(--ink)" stroke-width="1.2"/>' +
        '<circle cx="38" cy="52" r="6" fill="#fff" stroke="var(--ink)" stroke-width="1.2"/>' +
        '<path d="M 72 56 C 72 26, 110 62, 122 24" stroke="var(--ink)" stroke-width="1.5" stroke-linecap="round"/>' +
        '<line x1="72" y1="56" x2="72" y2="34" stroke="var(--sel)" stroke-width="1" stroke-dasharray="2 2"/>' +
        '<circle cx="72" cy="34" r="3" fill="var(--sel)" stroke="#fff" stroke-width="1"/>' +
        '<rect x="69" y="53" width="6" height="6" fill="#fff" stroke="var(--ink)" stroke-width="1.2"/>' +
        '<line x1="122" y1="24" x2="112" y2="44" stroke="var(--sel)" stroke-width="1" stroke-dasharray="2 2"/>' +
        '<circle cx="112" cy="44" r="3" fill="var(--sel)" stroke="#fff" stroke-width="1"/>' +
        '<rect x="119" y="21" width="6" height="6" fill="#fff" stroke="var(--ink)" stroke-width="1.2"/>' +
        '<path d="M 144 46 Q 144 54 152 54 Q 144 54 144 62 Q 144 54 136 54 Q 144 54 144 46 Z" fill="var(--lime)" stroke="var(--ink)" stroke-width="1"/>' +
      '</svg>';
    }
    if (type === 'herbs') {
      return '<svg class="exp-doodle" viewBox="0 0 160 76" fill="none" aria-label="Herbs & Spices Production doodle" xmlns="http://www.w3.org/2000/svg">' +
        '<rect x="1.5" y="1.5" width="157" height="73" rx="8" fill="var(--paper-2)" stroke="var(--rule)" stroke-width="1.2" stroke-dasharray="3 3"/>' +
        '<path d="M 22 46 C 22 58 46 58 46 46 L 48 38 L 20 38 Z" fill="#fff" stroke="var(--ink)" stroke-width="1.4" stroke-linejoin="round"/>' +
        '<path d="M 38 22 L 28 42" stroke="var(--ink)" stroke-width="3" stroke-linecap="round"/>' +
        '<path d="M 46 26 Q 50 20 48 16 Q 46 12 50 8" stroke="var(--ink-3)" stroke-width="1.2" stroke-linecap="round" fill="none"/>' +
        '<path d="M 74 60 Q 90 42 104 20" stroke="var(--ink)" stroke-width="1.5" stroke-linecap="round"/>' +
        '<path d="M 86 44 C 70 40 74 28 86 36 C 94 42 90 44 86 44 Z" fill="var(--mint)" stroke="var(--ink)" stroke-width="1.2" stroke-linejoin="round"/>' +
        '<path d="M 86 44 Q 80 38 76 34" stroke="var(--ink)" stroke-width="1" stroke-linecap="round"/>' +
        '<path d="M 94 34 C 110 30 106 18 94 26 C 86 32 90 34 94 34 Z" fill="var(--mint)" stroke="var(--ink)" stroke-width="1.2" stroke-linejoin="round"/>' +
        '<path d="M 94 34 Q 100 28 104 24" stroke="var(--ink)" stroke-width="1" stroke-linecap="round"/>' +
        '<path d="M 104 20 C 101 8 113 8 111 18 C 109 22 105 22 104 20 Z" fill="var(--mint)" stroke="var(--ink)" stroke-width="1.2" stroke-linejoin="round"/>' +
        '<g transform="translate(138, 44)">' +
          '<path d="M 0 -10 L 3 -3 L 10 0 L 3 3 L 0 10 L -3 3 L -10 0 L -3 -3 Z" fill="var(--peach)" stroke="var(--ink)" stroke-width="1.2"/>' +
          '<circle cx="0" cy="0" r="2" fill="var(--ink)"/>' +
        '</g>' +
      '</svg>';
    }
    return '';
  }
  function exp() {
    var E = D.experience;
    return '<div class="eyebrow">Experience</div><h2>' + esc(E.heading) + '</h2>' + E.items.map(function (i) {
      var d = i.doodle ? expDoodle(i.doodle) : '';
      return '<div class="exp-row"><div class="when"><span class="period">' + esc(i.when) + '</span>' + d + '</div><div><h3>' + esc(i.title) + '</h3><div class="co">' + esc(i.company) + '</div><p>' + esc(i.text) + '</p></div></div>';
    }).join('');
  }
  function contact() {
    var C = D.contact;
    return '<div class="contact"><div><div class="eyebrow">Contact</div><h2>' + hl(C.heading) + '</h2><div class="rows">' +
      '<div><span>Email</span><a href="mailto:' + esc(P.email) + '">' + esc(P.email) + '</a></div>' +
      '<div><span>Phone</span><a href="tel:' + esc(P.phoneHref) + '">' + esc(P.phone) + '</a></div>' +
      '<div><span>LinkedIn</span><a href="' + esc(P.linkedin) + '" target="_blank" rel="noopener">' + esc(P.linkedinLabel) + '</a></div>' +
      '<div><span>Resume</span><a data-resume href="#">Download PDF ↓</a></div></div></div>' +
      '<form class="form" id="briefForm" action="https://api.web3forms.com/submit" method="POST">' +
      '<input type="hidden" name="access_key" value="e48e4036-d0c3-4d8e-aaa9-95d67a63f808">' +
      '<input type="hidden" name="from_name" value="Johnty Portfolio Visitor">' +
      '<div id="formFields" class="form-fields">' +
      '<label>Name / company<input type="text" id="fName" name="name" required placeholder="e.g. Priya Shah, Zoho"></label>' +
      '<label>Email<input type="email" id="fEmail" name="email" required placeholder="name@company.com"></label>' +
      '<label>I\'m reaching out about<select id="fScope" name="scope">' + C.scopes.map(function (s) { return '<option>' + esc(s) + '</option>'; }).join('') + '</select></label>' +
      '<label>Message<textarea id="fMsg" name="message" rows="3" required placeholder="A line or two is plenty"></textarea></label>' +
      '<div id="formStatus" class="form-status" style="display:none;"></div>' +
      '<button type="submit" id="briefSubmitBtn" class="btn solid" style="justify-content:center;"><span>Send message →</span></button></div>' +
      '<div id="formSuccessView" class="form-success-card" style="display:none;"></div>' +
      '</form></div>';
  }

  /* ---------- assemble frames + layout plan ---------- */
  var plan = []; // rows of {id,w,minH}
  var html = '';
  function add(id, name, w, minH, cls, inner, pin) { html += frameHTML(id, name, cls, inner, pin); return { id: id, w: w, minH: minH }; }

  var rowTop = [add('f-hero', 'Cover', 1200, 760, '', hero(), P.pin), add('f-about', 'About', 560, 760, 'about', about())];
  plan.push(rowTop);
  var row = [];
  var INFO = {};
  INFO['f-hero'] = ['Cover', 'The introduction.', [['Role', P.role], ['Based in', P.location], ['Experience', P.experience], ['Open to', P.openTo]]];
  INFO['f-about'] = ['About', 'How I think about product problems.', [['Approach', 'Logic first, then pixels'], ['Focus', 'Enterprise B2B software'], ['Stack', 'Figma, FigJam / Miro, Antigravity, Claude, Canva']]];
  D.projects.forEach(function (p, i) {
    row.push(add('f-' + p.id, p.title, 760, 0, 'work', project(p), p.pin));
    INFO['f-' + p.id] = [p.title, p.inspectSub || '', p.inspect || []];
    if (row.length === 3) { plan.push(row); row = []; }
  });
  if (row.length) plan.push(row);
  plan.push([add('f-process', 'Process', 1200, 0, 'proc', processBlock()), add('f-caps', 'Capabilities', 1160, 0, 'caps', caps())]);
  INFO['f-process'] = ['Process', D.process.inspectSub, D.process.inspect];
  INFO['f-caps'] = ['Capabilities', D.capabilities.inspectSub, D.capabilities.inspect];
  plan.push([add('f-exp', 'Experience', 1200, 0, 'exp', exp()), add('f-contact', 'Contact', 1160, 0, '', contact())]);
  INFO['f-exp'] = ['Experience', D.experience.inspectSub, D.experience.inspect];
  INFO['f-contact'] = ['Contact', D.contact.inspectSub, [['Email', P.email], ['Phone', P.phone], ['Base', P.location]]];

  var GROUPS = [['Cover', ['f-hero', 'f-about']], ['Work', D.projects.map(function (p) { return 'f-' + p.id; })], ['Process', ['f-process']], ['Details', ['f-caps', 'f-exp', 'f-contact']]];

  var viewport = document.getElementById('viewport'), canvas = document.getElementById('canvas');
  canvas.insertAdjacentHTML('afterbegin', html);
  var frames = [].slice.call(canvas.querySelectorAll('.frame'));
  var selEl = document.getElementById('selection'), zr = document.getElementById('zr');
  var scale = 0.5, panX = 0, panY = 0, selected = null, isTourActive = false;

  /* ---------- fill chrome from data ---------- */
  document.title = P.name + ' — ' + P.role;
  document.getElementById('fileName').innerHTML = esc(P.name) + '<span>/</span><em>' + esc(P.fileTitle) + '</em>';
  document.getElementById('availText').textContent = P.availability;
  document.getElementById('hireBtn').href = 'mailto:' + P.email + '?subject=' + encodeURIComponent("Let's work together");
  [].forEach.call(document.querySelectorAll('[data-resume]'), function (a) {
    a.setAttribute('href', P.resume); a.setAttribute('download', P.name.replace(/\s+/g, '_') + '_Resume.pdf');
  });

  /* ---------- auto layout ---------- */
  var GAP_X = 100, GAP_Y = 160;
  function layout() {
    if (isSimple()) return;
    var y = 0;
    plan.forEach(function (r) {
      r.forEach(function (f) { var el = document.getElementById(f.id); f.el = el; el.style.width = f.w + 'px'; el.style.height = 'auto'; el.style.left = '0px'; el.style.top = '0px'; });
      var maxH = 0;
      r.forEach(function (f) { maxH = Math.max(maxH, f.el.offsetHeight, f.minH); });
      var x = 0;
      r.forEach(function (f) {
        f.el.style.left = x + 'px'; f.el.style.top = y + 'px'; f.el.style.height = maxH + 'px';
        f.el.dataset.x = x; f.el.dataset.y = y; f.el.dataset.w = f.w; f.el.dataset.h = maxH;
        x += f.w + GAP_X;
      });
      y += maxH + GAP_Y;
    });
    if (selected) updateSelection(false);
  }

  /* ---------- camera ---------- */
  function isMobileDrawer() {
    return isSimple() || window.innerWidth <= 900;
  }
  function insets() {
    var simple = document.body.classList.contains('simple');
    var layersEl = document.getElementById('layers');
    var layersVisible = layersEl && !layersEl.classList.contains('collapsed') && layersEl.style.display !== 'none';
    var l = (!simple && window.innerWidth > 900 && layersVisible) ? 236 : 0;
    var r = (!simple && window.innerWidth > 1180) ? 262 : 0;
    var b = isTourActive ? (window.innerWidth < 500 ? 210 : 220) : 76;
    return { l: l, r: r, t: 48, b: b };
  }
  var lastInv = null, lastFar = null;
  function apply() {
    canvas.style.transform = 'translate(' + panX + 'px,' + panY + 'px) scale(' + scale + ')';
    var inv = (1 / scale).toFixed(4);
    if (inv !== lastInv) {
      lastInv = inv;
      canvas.style.setProperty('--inv', inv);
      zr.textContent = Math.round(scale * 100) + '%';
      var isFar = scale < 0.4;
      if (isFar !== lastFar) {
        lastFar = isFar;
        document.body.classList.toggle('far', isFar);
      }
    }
  }
  function clamp(s) { return Math.min(2, Math.max(0.1, s)); }
  function zoomAt(cx, cy, ns) { ns = clamp(ns); panX = cx - ((cx - panX) / scale) * ns; panY = cy - ((cy - panY) / scale) * ns; scale = ns; apply(); }
  var animId = null;
  function animateTo(tx, ty, ts) {
    if (animId) cancelAnimationFrame(animId);
    var sx = panX, sy = panY, ss = scale, start = performance.now(), dur = 550;
    function step(now) {
      var t = Math.min(1, (now - start) / dur); t = t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
      panX = sx + (tx - sx) * t; panY = sy + (ty - sy) * t; scale = ss + (ts - ss) * t; apply();
      if (t < 1) animId = requestAnimationFrame(step);
      else animId = null;
    }
    animId = requestAnimationFrame(step);
  }
  function flyTo(x, y, w, h, pad) {
    var isNarrow = window.innerWidth < 700;
    var defPad = isNarrow ? 20 : 48;
    pad = pad == null ? defPad : pad; var i = insets();
    var aw = viewport.clientWidth - i.l - i.r, ah = viewport.clientHeight - i.t - i.b;
    var ts = clamp(Math.min((aw - pad * 2) / w, (ah - pad * 2) / h));
    animateTo(i.l + aw / 2 - (x + w / 2) * ts, i.t + ah / 2 - (y + h / 2) * ts, ts);
  }
  function bounds(el) { return { x: +el.dataset.x, y: +el.dataset.y, w: +el.dataset.w, h: +el.dataset.h }; }
  function fitAll() {
    var minX = 1e9, minY = 1e9, maxX = -1e9, maxY = -1e9;
    frames.forEach(function (f) { var b = bounds(f); minX = Math.min(minX, b.x); minY = Math.min(minY, b.y - 30); maxX = Math.max(maxX, b.x + b.w); maxY = Math.max(maxY, b.y + b.h); });
    flyTo(minX, minY, maxX - minX, maxY - minY, 30);
  }

  /* ---------- layers + inspect + selection ---------- */
  function buildLayers() {
    var h = '';
    GROUPS.forEach(function (g) {
      h += '<div class="layer group">' + esc(g[0]) + '</div>';
      g[1].forEach(function (id) { h += '<button class="layer child" data-id="' + id + '">' + ICON + '<span>' + esc(INFO[id][0]) + '</span></button>'; });
    });
    document.getElementById('layerList').innerHTML = h;
    [].forEach.call(document.querySelectorAll('.layer[data-id]'), function (b) {
      b.addEventListener('click', function () {
        select(b.dataset.id, true);
        if (isMobileDrawer()) setLayersOpen(false);
      });
    });
  }
  function renderInspect(id) {
    var body = document.getElementById('inspectBody'), d = INFO[id];
    if (!d) { body.innerHTML = '<div class="isub">Click a frame to see its details.</div>'; return; }
    var b = bounds(document.getElementById(id));
    var rows = '<div class="irow"><span>Frame</span><span>' + b.w + ' × ' + b.h + '</span></div>';
    d[2].forEach(function (r) { rows += '<div class="irow"><span>' + esc(r[0]) + '</span><span>' + esc(r[1]) + '</span></div>'; });
    body.innerHTML = '<div class="ititle">' + esc(d[0]) + '</div><div class="isub">' + esc(d[1]) + '</div>' + rows +
      '<button class="pbtn igo" style="justify-content:center;">Zoom to frame</button>';
    body.querySelector('.igo').addEventListener('click', function () { var bb = bounds(document.getElementById(id)); flyTo(bb.x, bb.y, bb.w, bb.h); });
  }
  function updateSelection(fly) {
    var b = bounds(document.getElementById(selected));
    selEl.style.display = 'block'; selEl.style.left = b.x + 'px'; selEl.style.top = b.y + 'px'; selEl.style.width = b.w + 'px'; selEl.style.height = b.h + 'px';
    selEl.querySelector('b').textContent = b.w + ' × ' + b.h;
    if (fly) {
      flyTo(b.x, b.y, b.w, b.h);
      selEl.classList.remove('focus-ring');
      void selEl.offsetWidth;
      selEl.classList.add('focus-ring');
    }
  }
  function select(id, fly) {
    if (isTourActive) {
      if (!id && !fly) {
        if (typeof TOUR_STEPS !== 'undefined' && TOUR_STEPS[currentTourIndex]) id = TOUR_STEPS[currentTourIndex].frame;
      } else if (id && typeof updateTourCardUI === 'function' && typeof TOUR_STEPS !== 'undefined') {
        for (var ti = 0; ti < TOUR_STEPS.length; ti++) {
          if (TOUR_STEPS[ti].frame === id) {
            updateTourCardUI(ti);
            break;
          }
        }
      }
    }
    selected = id;
    frames.forEach(function (f) { f.classList.toggle('selected', f.id === id); });
    [].forEach.call(document.querySelectorAll('.layer[data-id]'), function (b) { b.classList.toggle('sel', b.dataset.id === id); });
    if (isSimple()) {
      if (fly && id) {
        var targetEl = document.getElementById(id);
        if (targetEl) {
          var y = targetEl.getBoundingClientRect().top + window.pageYOffset - 64;
          window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
        }
      }
      setLayersOpen(false);
    } else {
      if (id) updateSelection(fly); else selEl.style.display = 'none';
      renderInspect(id);
      if (fly && isMobileDrawer()) setLayersOpen(false);
    }
    tourUpdate();
  }

  /* ---------- guided navigation (for people new to Figma) ---------- */
  var tName = document.getElementById('tName'), tCount = document.getElementById('tCount'),
      tPrev = document.getElementById('tPrev'), tNext = document.getElementById('tNext');
  function frameIndex() { for (var i = 0; i < frames.length; i++) if (frames[i].id === selected) return i; return -1; }
  function tourUpdate() {
    var i = frameIndex();
    tName.textContent = i < 0 ? 'Portfolio' : INFO[selected][0];
    tCount.textContent = (i < 0 ? '–' : (i + 1)) + ' / ' + frames.length;
    tPrev.disabled = i <= 0;
    if (i === frames.length - 1) {
      tNext.innerHTML = '<span>Start over</span><svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M2.5 8a5.5 5.5 0 101.6-3.9L2 6M2 2v4h4"/></svg>';
    } else {
      tNext.innerHTML = '<span>Next</span><svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 8h6M8 4.5l3.5 3.5-3.5 3.5"/></svg>';
    }
  }
  function goNext() { var i = frameIndex(); var n = (i + 1 >= frames.length) ? 0 : i + 1; select(frames[n].id, true); tNext.classList.remove('pulse'); hideToast(); }
  function goPrev() { var i = frameIndex(); if (i > 0) { select(frames[i - 1].id, true); hideToast(); } }
  tNext.addEventListener('click', goNext);
  tPrev.addEventListener('click', goPrev);

  /* ---------- input ---------- */
  function isSimple() { return document.body.classList.contains('simple'); }
  viewport.addEventListener('wheel', function (e) {
    if (isSimple()) return;
    e.preventDefault();
    if (e.ctrlKey || e.metaKey) { var r = viewport.getBoundingClientRect(); zoomAt(e.clientX - r.left, e.clientY - r.top, scale * (1 - e.deltaY * 0.01)); }
    else { panX -= e.deltaX; panY -= e.deltaY; apply(); }
    hideToast();
  }, { passive: false });

  var drag = null;
  viewport.addEventListener('pointerdown', function (e) {
    if (animId) { cancelAnimationFrame(animId); animId = null; }
    if (isSimple()) return;
    if (e.target.closest('a,button,input,select,textarea,label,.pin,.embed-guard,.frame-label')) return;
    if (window.getSelection) {
      var sel = window.getSelection();
      if (sel && sel.removeAllRanges) sel.removeAllRanges();
    }
    if (e.button === 0 || e.pointerType === 'touch') {
      e.preventDefault();
    }
    drag = { x: e.clientX, y: e.clientY, px: panX, py: panY, moved: false, target: e.target };
    try { viewport.setPointerCapture(e.pointerId); } catch (_) {}
  });
  viewport.addEventListener('pointermove', function (e) {
    if (!drag || pd) return;
    var dx = e.clientX - drag.x, dy = e.clientY - drag.y;
    if (!drag.moved && Math.hypot(dx, dy) > 5) {
      drag.moved = true;
      viewport.classList.add('panning');
      hideToast();
      if (window.getSelection) {
        var sel = window.getSelection();
        if (sel && sel.removeAllRanges) sel.removeAllRanges();
      }
    }
    if (drag.moved) { panX = drag.px + dx; panY = drag.py + dy; apply(); }
  });
  function endDrag(e) {
    if (!drag) return;
    var was = drag; drag = null; viewport.classList.remove('panning');
    if (!was.moved && e.type === 'pointerup') {
      if (window.getSelection) {
        var sel = window.getSelection();
        if (sel && sel.removeAllRanges) sel.removeAllRanges();
      }
      var fl = was.target.closest && was.target.closest('.frame-label');
      var f = was.target.closest && was.target.closest('.frame');
      if (fl && f) {
        select(f.id, true);
      } else {
        select(f ? f.id : null, false);
      }
      [].forEach.call(document.querySelectorAll('.pin.open'), function (p) {
        p.classList.remove('open');
        var parentF = p.closest('.frame');
        if (parentF) parentF.style.zIndex = '';
      });
      reguard();
    }
  }
  viewport.addEventListener('pointerup', endDrag);
  viewport.addEventListener('pointercancel', endDrag);

  /* ---------- frame double-click & double-tap to focus & center ---------- */
  var lastFocusTime = 0;
  function handleFrameDoubleAction(frameEl) {
    if (!frameEl) return;
    var now = performance.now();
    if (now - lastFocusTime < 320) return;
    lastFocusTime = now;

    if (isSimple()) {
      frameEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else {
      select(frameEl.id, true);
    }
  }

  // Desktop double-click
  viewport.addEventListener('dblclick', function (e) {
    if (e.target.closest('input, textarea, select')) return;
    if (window.getSelection) {
      var sel = window.getSelection();
      if (sel && sel.removeAllRanges) sel.removeAllRanges();
    }
    var f = e.target.closest('.frame');
    if (f) {
      e.preventDefault();
      handleFrameDoubleAction(f);
    }
  });

  // Universal double-tap detection (touch screens, trackpads, mice)
  var lastTapTime = 0, lastTapX = 0, lastTapY = 0, lastTapFrameId = null;
  viewport.addEventListener('click', function (e) {
    if (e.target.closest('input, textarea, select')) return;
    var fl = e.target.closest('.frame-label');
    if (fl) {
      e.preventDefault();
      e.stopPropagation();
      var frame = fl.closest('.frame');
      if (frame) select(frame.id, true);
      return;
    }
    var f = e.target.closest('.frame');
    if (!f) return;

    var now = performance.now();
    var dt = now - lastTapTime;
    var dist = Math.hypot(e.clientX - lastTapX, e.clientY - lastTapY);

    if (dt > 40 && dt < 420 && dist < 35 && f.id === lastTapFrameId) {
      lastTapTime = 0;
      lastTapFrameId = null;
      handleFrameDoubleAction(f);
    } else {
      lastTapTime = now;
      lastTapX = e.clientX;
      lastTapY = e.clientY;
      lastTapFrameId = f.id;
    }
  });

  var pd = null, ps = 1;
  viewport.addEventListener('touchstart', function (e) { if (e.touches.length === 2) { pd = Math.hypot(e.touches[0].clientX - e.touches[1].clientX, e.touches[0].clientY - e.touches[1].clientY); ps = scale; } }, { passive: true });
  viewport.addEventListener('touchmove', function (e) {
    if (e.touches.length === 2 && pd) {
      e.preventDefault();
      var d = Math.hypot(e.touches[0].clientX - e.touches[1].clientX, e.touches[0].clientY - e.touches[1].clientY);
      zoomAt((e.touches[0].clientX + e.touches[1].clientX) / 2, (e.touches[0].clientY + e.touches[1].clientY) / 2, ps * (d / pd));
    }
  }, { passive: false });
  viewport.addEventListener('touchend', function () { pd = null; });

  function zoomStep(f) { var r = viewport.getBoundingClientRect(); zoomAt(r.width / 2, r.height / 2, scale * f); }
  document.addEventListener('keydown', function (e) {
    if (/INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName)) return;
    if (e.key === 'Escape') {
      if (isTourActive && typeof endGuidedTour === 'function') {
        endGuidedTour();
        return;
      }
      closeLightbox();
      closeWelcome();
      setLayersOpen(false);
      select(null, false);
      return;
    }
    if (isTourActive) {
      if (e.key === 'ArrowRight') {
        if (typeof TOUR_STEPS !== 'undefined' && currentTourIndex < TOUR_STEPS.length - 1) {
          renderTourStep(currentTourIndex + 1);
        } else if (typeof endGuidedTour === 'function') {
          endGuidedTour();
        }
        return;
      }
      if (e.key === 'ArrowLeft') {
        if (currentTourIndex > 0) renderTourStep(currentTourIndex - 1);
        return;
      }
    }
    if (isSimple() || (welcome && welcome.classList.contains('open'))) return;
    if (e.key === 'ArrowRight') { goNext(); return; }
    if (e.key === 'ArrowLeft') { goPrev(); return; }
    if (e.key === 'c' || e.key === 'C') { toggleComments(); return; }
    if (e.shiftKey && e.key === '!') fitAll();
    else if (e.shiftKey && (e.key === '@' || e.key === '2' || e.code === 'Digit2')) { if (selected) select(selected, true); }
    else if (e.shiftKey && e.key === ')') { var r = viewport.getBoundingClientRect(); zoomAt(r.width / 2, r.height / 2, 1); }
    else if (e.key === '+' || e.key === '=') zoomStep(1.2);
    else if (e.key === '-') zoomStep(1 / 1.2);
  });
  document.getElementById('zIn').onclick = function () { zoomStep(1.25); };
  document.getElementById('zOut').onclick = function () { zoomStep(1 / 1.25); };
  document.getElementById('fitBtn').onclick = fitAll;

  [].forEach.call(document.querySelectorAll('[data-fly]'), function (a) {
    a.addEventListener('click', function (e) {
      e.preventDefault();
      if (isSimple()) document.getElementById(a.dataset.fly).scrollIntoView({ behavior: 'smooth', block: 'start' });
      else select(a.dataset.fly, true);
    });
  });

  /* comment pins */
  [].forEach.call(document.querySelectorAll('.pin > button'), function (b) {
    b.addEventListener('click', function (e) {
      e.stopPropagation();
      var p = b.parentElement, was = p.classList.contains('open');
      [].forEach.call(document.querySelectorAll('.pin.open'), function (x) {
        x.classList.remove('open');
        var parentF = x.closest('.frame');
        if (parentF) parentF.style.zIndex = '';
      });
      if (!was) {
        p.classList.add('open');
        var pf = p.closest('.frame');
        if (pf) pf.style.zIndex = '25';
      }
    });
  });
  function toggleComments() {
    var isHidden = document.body.classList.toggle('hide-pins');
    if (isHidden) {
      [].forEach.call(document.querySelectorAll('.pin.open'), function (x) {
        x.classList.remove('open');
        var parentF = x.closest('.frame');
        if (parentF) parentF.style.zIndex = '';
      });
    }
    var btn = document.getElementById('pinsBtn');
    if (btn) {
      btn.classList.toggle('on', !isHidden);
      btn.title = isHidden ? 'Designer comments: Hidden (click or press C to show)' : 'Designer comments: Visible (click or press C to hide)';
    }
  }
  document.getElementById('pinsBtn').onclick = toggleComments;

  document.addEventListener('click', function (e) {
    if (!e.target.closest('.pin')) {
      [].forEach.call(document.querySelectorAll('.pin.open'), function (x) {
        x.classList.remove('open');
        var parentF = x.closest('.frame');
        if (parentF) parentF.style.zIndex = '';
      });
    }
  });

  /* Figma embeds: guard layer so panning works across them until you click */
  var guards = [].slice.call(document.querySelectorAll('.embed-guard'));
  guards.forEach(function (g) { g.addEventListener('click', function (e) { e.stopPropagation(); g.style.display = 'none'; }); });
  function reguard() { guards.forEach(function (g) { g.style.display = 'flex'; }); }

  /* lightbox for gallery mockups & stage */
  var lb = document.getElementById('lightbox'), lbImg = lb.querySelector('img'), lbCap = lb.querySelector('p');
  function openLightbox(src, cap) {
    if (!lb || !lbImg) return;
    lbImg.src = src;
    lbCap.textContent = cap || '';
    lb.classList.add('open');
  }
  function closeLightbox() { if (lb) lb.classList.remove('open'); }
  if (lb) lb.addEventListener('click', closeLightbox);
  [].forEach.call(document.querySelectorAll('[data-lightbox]'), function (b) {
    b.addEventListener('click', function (e) {
      e.stopPropagation();
      openLightbox(b.dataset.lightbox, b.dataset.cap);
    });
  });

  /* Interactive Mockup Showcase Switcher */
  [].forEach.call(document.querySelectorAll('.stage-thumbs'), function (thumbsContainer) {
    var stageId = thumbsContainer.dataset.for;
    var stage = document.getElementById(stageId);
    if (!stage) return;
    var stageImg = stage.querySelector('.stage-img');
    var stageCap = stage.querySelector('.stage-caption');
    var stageExpand = stage.querySelector('.stage-expand');
    var stageScreen = stage.querySelector('.stage-screen');
    var currentSrc = stageImg ? stageImg.getAttribute('src') : '';
    var currentCap = stageCap ? stageCap.textContent : '';

    function activate(thumbBtn) {
      if (thumbBtn.classList.contains('is-active')) return;
      var newSrc = thumbBtn.dataset.src;
      var newCap = thumbBtn.dataset.caption;
      var newAlt = thumbBtn.dataset.alt;

      [].forEach.call(thumbsContainer.querySelectorAll('.stage-thumb'), function (btn) {
        btn.classList.remove('is-active');
      });
      thumbBtn.classList.add('is-active');

      // Snappy, authentic Figma-style variant transition
      stage.classList.add('is-animating');
      setTimeout(function () {
        if (stageImg) {
          stageImg.src = newSrc;
          stageImg.alt = newAlt;
        }
        if (stageCap) stageCap.textContent = newCap;
        currentSrc = newSrc;
        currentCap = newCap;
        stage.classList.remove('is-animating');
      }, 140);
    }

    [].forEach.call(thumbsContainer.querySelectorAll('.stage-thumb'), function (btn) {
      btn.addEventListener('click', function (e) {
        e.stopPropagation();
        activate(btn);
      });
    });

    if (stageExpand) {
      stageExpand.addEventListener('click', function (e) {
        e.stopPropagation();
        openLightbox(currentSrc, currentCap);
      });
    }
    if (stageScreen) {
      stageScreen.addEventListener('click', function (e) {
        if (isSimple()) {
          e.stopPropagation();
          openLightbox(currentSrc, currentCap);
        }
      });
    }
  });

  /* theme + panels + simple view */
  var root = document.documentElement;
  function toggleTheme() {
    var t = root.getAttribute('data-theme');
    var dark = t === 'dark' || (t === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches);
    root.setAttribute('data-theme', dark ? 'light' : 'dark');
  }
  var themeBtn = document.getElementById('themeBtn');
  if (themeBtn) themeBtn.onclick = toggleTheme;
  var themeBtnTop = document.getElementById('themeBtnTop');
  if (themeBtnTop) themeBtnTop.onclick = toggleTheme;
  function setLayersOpen(open) {
    var l = document.getElementById('layers');
    var btn = document.getElementById('btnLayers');
    var backdrop = document.getElementById('navBackdrop');
    if (!l) return;

    if (isMobileDrawer()) {
      var shouldOpen = (typeof open === 'boolean') ? open : !l.classList.contains('open');
      l.classList.toggle('open', shouldOpen);
      if (btn) btn.classList.toggle('on', shouldOpen);
      if (backdrop) backdrop.classList.toggle('open', shouldOpen);
      l.style.display = '';
    } else {
      var isCurrentlyHidden = l.classList.contains('collapsed') || (l.style.display === 'none');
      var shouldShow = (typeof open === 'boolean') ? open : isCurrentlyHidden;
      l.classList.toggle('collapsed', !shouldShow);
      l.style.display = shouldShow ? 'flex' : 'none';
      if (btn) btn.classList.toggle('on', shouldShow);
      if (backdrop) backdrop.classList.remove('open');
    }
  }

  var btnLayers = document.getElementById('btnLayers');
  if (btnLayers) {
    btnLayers.onclick = function (e) {
      if (e) { e.preventDefault(); e.stopPropagation(); }
      setLayersOpen();
    };
  }
  var navBackdrop = document.getElementById('navBackdrop');
  if (navBackdrop) {
    navBackdrop.addEventListener('click', function (e) {
      if (e) { e.preventDefault(); e.stopPropagation(); }
      setLayersOpen(false);
    });
  }
  function updateViewButtons(on) {
    var vb = document.getElementById('viewBtn');
    if (vb) {
      var isMobile = window.innerWidth <= 520;
      var label = on ? (isMobile ? 'Canvas' : 'Canvas view') : (isMobile ? 'Page' : 'Page view');
      var icon = on
        ? '<svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="2" width="5" height="5" rx="1"/><rect x="9" y="2" width="5" height="5" rx="1"/><rect x="2" y="9" width="5" height="5" rx="1"/><rect x="9" y="9" width="5" height="5" rx="1"/></svg>'
        : '<svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="2" width="10" height="12" rx="1.5"/><path d="M5.5 5.5h5M5.5 8h5M5.5 10.5h3"/></svg>';
      vb.innerHTML = icon + '<span>' + label + '</span>';
      vb.title = on ? 'Switch to interactive canvas view' : 'Switch to standard scrolling page view';
    }
    var dsb = document.getElementById('drawerSwitchView');
    if (dsb) {
      if (on) {
        dsb.innerHTML = '<svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="2" width="5" height="5" rx="1"/><rect x="9" y="2" width="5" height="5" rx="1"/><rect x="2" y="9" width="5" height="5" rx="1"/><rect x="9" y="9" width="5" height="5" rx="1"/></svg><span>Switch to Canvas view</span><span class="drawer-badge">✦</span>';
      } else {
        dsb.innerHTML = '<svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="2" width="10" height="12" rx="1.5"/><path d="M5.5 5.5h5M5.5 8h5M5.5 10.5h3"/></svg><span>Switch to Page view</span>';
      }
    }
  }
  function setSimple(on) {
    if (on && typeof endGuidedTour === 'function') endGuidedTour();
    document.body.classList.toggle('simple', on);
    updateViewButtons(on);
    setLayersOpen(false);
    var l = document.getElementById('layers');
    if (l) {
      var h4 = l.querySelector('h4');
      if (h4) h4.textContent = on ? 'Navigation' : 'Layers';
    }
    if (btnLayers) {
      btnLayers.setAttribute('title', on ? 'Toggle navigation menu' : 'Toggle layers');
      btnLayers.setAttribute('aria-label', on ? 'Toggle navigation menu' : 'Toggle layers');
    }
    if (!on) {
      requestAnimationFrame(function () {
        layout();
        select(frames[0].id, false);
        var b = bounds(frames[0]);
        flyTo(b.x, b.y, b.w, b.h);
      });
    } else {
      window.scrollTo(0, 0);
    }
  }
  document.getElementById('simpleBtn').onclick = function () { setSimple(!isSimple()); };
  var vBtn = document.getElementById('viewBtn'); if (vBtn) vBtn.onclick = function () { setSimple(!isSimple()); };
  var dSwitch = document.getElementById('drawerSwitchView');
  if (dSwitch) {
    dSwitch.onclick = function () {
      setSimple(!isSimple());
    };
  }
  var dGuide = document.getElementById('drawerGuideBtn');
  if (dGuide) {
    dGuide.onclick = function () {
      setLayersOpen(false);
      startGuidedTour();
    };
  }
  window.openGuide = function () { if (welcome) welcome.classList.add('open'); };

  /* ---------- interactive guided walkthrough tour ---------- */
  var TOUR_STEPS = [
    {
      frame: 'f-hero',
      title: 'Cover & Introduction',
      text: "Welcome! Johnty Paul Joseph is a UX & Product Designer specializing in enterprise software, multi-portal HRMS suites, and logic-driven workflows."
    },
    {
      frame: 'f-about',
      title: 'Philosophy: Logic First, Pixels Second',
      text: "Enterprise software fails when logic is broken. Johnty maps permission matrixes, business rules, and edge states before touching visual polish."
    },
    {
      frame: 'f-hr',
      title: 'Flagship: HR & Payroll Suite',
      text: "Enterprise B2B suite with interactive mockups. Explores onboarding, statutory payroll compliance, asset management, and role-based employee portals."
    },
    {
      frame: 'f-toshiv',
      title: 'Live Product: Travel by Toshiv',
      text: "Live overseas career and visa consultation platform. Designed with boarding-pass style step journeys, mobile-responsive layouts, and clear calls to action."
    },
    {
      frame: 'f-ride',
      title: 'Mobile App: Robuster Ride',
      text: "Ride-hailing mobile concept featuring upfront price transparency, multi-stop route planning, and flexible scheduling."
    },
    {
      frame: 'f-process',
      title: 'Design Process & Pipeline',
      text: "A structured 4-stage pipeline: Domain Discovery → Stories & Flows → High-Fidelity Validation → Engineering Handoff."
    },
    {
      frame: 'f-caps',
      title: 'Capabilities & Core Stack',
      text: "Full-stack product design expertise: user research, workflow architecture, Figma design systems, interactive prototypes, and production code handoff."
    },
    {
      frame: 'f-exp',
      title: 'Experience & Background',
      text: "Hands-on experience at Digylax designing production HRMS and B2B products, backed by operations experience in production execution."
    },
    {
      frame: 'f-contact',
      title: "Let's Build Something Usable",
      text: "Ready to collaborate? Reach out through this interactive contact form, view the resume, or get in touch for enterprise UX roles."
    }
  ];

  var tourGuide = document.getElementById('tourGuide');
  var tgStepNum = document.getElementById('tgStepNum');
  var tgTotalSteps = document.getElementById('tgTotalSteps');
  var tgTitle = document.getElementById('tgTitle');
  var tgText = document.getElementById('tgText');
  var tgDots = document.getElementById('tgDots');
  var tgPrev = document.getElementById('tgPrev');
  var tgNext = document.getElementById('tgNext');
  var tgClose = document.getElementById('tgClose');
  var currentTourIndex = 0;

  function updateTourCardUI(index) {
    if (!TOUR_STEPS.length) return;
    index = Math.max(0, Math.min(index, TOUR_STEPS.length - 1));
    currentTourIndex = index;
    var step = TOUR_STEPS[index];

    if (tgStepNum) tgStepNum.textContent = index + 1;
    if (tgTotalSteps) tgTotalSteps.textContent = TOUR_STEPS.length;
    if (tgTitle) tgTitle.textContent = step.title;
    if (tgText) tgText.textContent = step.text;

    if (tgPrev) {
      tgPrev.disabled = (index === 0);
      tgPrev.innerHTML = '<svg class="tg-arrow" width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13L5 8l5-5"/></svg><span>Back</span>';
    }
    if (tgNext) {
      if (index === TOUR_STEPS.length - 1) {
        tgNext.innerHTML = '<span>Finish tour</span><svg class="tg-arrow" width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 8.5l3.5 3.5 6.5-7.5"/></svg>';
      } else {
        tgNext.innerHTML = '<span>Next step</span><svg class="tg-arrow" width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3l5 5-5 5"/></svg>';
      }
    }

    if (tgDots) {
      tgDots.innerHTML = '';
      TOUR_STEPS.forEach(function (s, i) {
        var dot = document.createElement('button');
        dot.type = 'button';
        dot.className = 'tg-d' + (i === index ? ' active' : '');
        dot.title = 'Step ' + (i + 1) + ' of ' + TOUR_STEPS.length + ': ' + s.title;
        dot.setAttribute('aria-label', 'Go to tour step ' + (i + 1));
        dot.onclick = function (e) {
          e.stopPropagation();
          renderTourStep(i);
        };
        tgDots.appendChild(dot);
      });
    }
  }

  function renderTourStep(index) {
    if (!TOUR_STEPS.length) return;
    index = Math.max(0, Math.min(index, TOUR_STEPS.length - 1));
    updateTourCardUI(index);
    var step = TOUR_STEPS[index];
    select(step.frame, true);
    setLayersOpen(false);
  }

  function startGuidedTour() {
    closeWelcome();
    var wasSimple = isSimple();
    isTourActive = true;
    if (tourGuide) {
      tourGuide.classList.add('active');
    }
    if (wasSimple) {
      setSimple(false);
      setTimeout(function () {
        renderTourStep(0);
      }, 80);
    } else {
      renderTourStep(0);
    }
  }

  function endGuidedTour() {
    isTourActive = false;
    if (tourGuide) {
      tourGuide.classList.remove('active');
    }
  }

  if (tgClose) tgClose.onclick = endGuidedTour;
  if (tgPrev) tgPrev.onclick = function () { if (currentTourIndex > 0) renderTourStep(currentTourIndex - 1); };
  if (tgNext) {
    tgNext.onclick = function () {
      if (currentTourIndex < TOUR_STEPS.length - 1) {
        renderTourStep(currentTourIndex + 1);
      } else {
        endGuidedTour();
      }
    };
  }

  updateTourCardUI(0);

  window.startGuidedTour = startGuidedTour;
  window.endGuidedTour = endGuidedTour;

  /* ---------- first-visit welcome card ---------- */
  var welcome = document.getElementById('welcome');
  var W = D.welcome || {};
  function seen() { try { return localStorage.getItem('jp_welcome_seen') === '1'; } catch (e) { return false; } }
  function markSeen() { try { localStorage.setItem('jp_welcome_seen', '1'); } catch (e) {} }
  function closeWelcome() { if (welcome && welcome.classList.contains('open')) { welcome.classList.remove('open'); markSeen(); } }
  function buildWelcome() {
    if (!welcome) return;
    var steps = (W.steps || []).map(function (s, i) { return '<li><b>' + (i + 1) + '</b><span>' + esc(s) + '</span></li>'; }).join('');
    welcome.innerHTML = '<div class="wcard"><h2 id="wTitle">' + esc(W.title || 'Welcome') + '</h2><p class="wsub">' + esc(W.sub || '') + '</p>' +
      '<div class="demo" aria-hidden="true"><div class="track"><div class="mf"><i></i><u></u><u></u></div><div class="mf"><i></i><u></u><u></u></div><div class="mf"><i></i><u></u><u></u></div><div class="mf"><i></i><u></u><u></u></div></div>' +
      '<div class="hand"><svg viewBox="0 0 24 24"><path d="M3 2l17 8-7.2 2.2L10 19z" fill="#7B61FF" stroke="#fff" stroke-width="1.5" stroke-linejoin="round"/></svg></div></div>' +
      '<ul class="wsteps">' + steps + '</ul><div class="wbtns">' +
      '<button class="wbtn primary" id="wExplore" type="button">Explore the canvas ✦</button>' +
      '<button class="wbtn" id="wTour" type="button">Take guided tour →</button>' +
      '<button class="wlink" id="wSimple" type="button">Prefer a normal scrolling page? Switch to Page view</button></div></div>';
    document.getElementById('wTour').onclick = function () { startGuidedTour(); };
    document.getElementById('wExplore').onclick = function () { closeWelcome(); };
    document.getElementById('wSimple').onclick = function () { closeWelcome(); setSimple(true); };
    welcome.addEventListener('click', function (e) { if (e.target === welcome) closeWelcome(); });
  }

  /* ---------- contact form -> sends directly to Johnty's inbox ---------- */
  var briefForm = document.getElementById('briefForm');
  if (briefForm) {
    briefForm.addEventListener('submit', async function (e) {
      e.preventDefault();

      var nameInput = document.getElementById('fName');
      var emailInput = document.getElementById('fEmail');
      var scopeInput = document.getElementById('fScope');
      var msgInput = document.getElementById('fMsg');
      var submitBtn = document.getElementById('briefSubmitBtn');
      var formStatus = document.getElementById('formStatus');

      var name = (nameInput ? nameInput.value : '').trim();
      var email = (emailInput ? emailInput.value : '').trim();
      var scope = (scopeInput ? scopeInput.value : 'UI/UX Design').trim();
      var message = (msgInput ? msgInput.value : '').trim();

      if (!name || !email || !message) return;

      var originalBtnHtml = submitBtn ? submitBtn.innerHTML : '<span>Send message →</span>';

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span>Sending message...</span>';
        submitBtn.classList.remove('btn-submitted');
      }

      if (formStatus) {
        formStatus.style.display = 'none';
        formStatus.innerHTML = '';
      }

      var sentTime = new Date().toLocaleString('en-US', {
        weekday: 'short',
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });

      var templateParams = {
        client_name: name,
        client_email: email,
        inquiry_scope: scope,
        submission_time: sentTime,
        message: message
      };

      var sent = false;

      // Engine 1: Dispatch custom formatted email via EmailJS
      try {
        if (typeof emailjs !== 'undefined') {
          emailjs.init({ publicKey: '3sQtF03ygDo2RXkSF' });
          var eRes = await emailjs.send('service_vzo9dc8', 'template_v0nlj6i', templateParams);
          if (eRes && (eRes.status === 200 || eRes.text === 'OK')) {
            sent = true;
          }
        }
      } catch (eJsErr) {
        console.warn('EmailJS delivery attempt encountered an issue:', eJsErr);
      }

      // Engine 2: Seamless fallback to Web3Forms API
      if (!sent) {
        try {
          var fallbackData = new FormData(briefForm);
          fallbackData.set('subject', '📬 [Portfolio Inquiry] ' + scope + ' — ' + name);
          fallbackData.set('from_name', name + ' via Johnty Portfolio');
          fallbackData.set('access_key', 'e48e4036-d0c3-4d8e-aaa9-95d67a63f808');

          var w3Res = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: { 'Accept': 'application/json' },
            body: fallbackData
          });
          var w3Json = await w3Res.json();
          if (w3Res.status === 200 && w3Json.success) {
            sent = true;
          }
        } catch (w3Err) {
          console.warn('Web3Forms delivery attempt encountered an issue:', w3Err);
        }
      }

      if (sent) {
        var formFields = document.getElementById('formFields');
        var formSuccessView = document.getElementById('formSuccessView');

        if (formFields && formSuccessView) {
          formFields.style.display = 'none';
          formSuccessView.style.display = 'flex';
          formSuccessView.innerHTML = '<div class="fsc-icon">' +
            '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>' +
            '</div>' +
            '<div class="fsc-tag"><span class="status-dot"></span> Message Sent Directly</div>' +
            '<h3 class="fsc-title">Thank you, <span>' + esc(name) + '</span>!</h3>' +
            '<p class="fsc-desc">Your message regarding <em>' + esc(scope) + '</em> has been delivered directly to Johnty\'s inbox. I will review it and reply directly to <strong>' + esc(email) + '</strong> shortly.</p>' +
            '<button type="button" class="btn solid fsc-btn" id="fscResetBtn"><span>Send another message →</span></button>';

          var resetBtn = document.getElementById('fscResetBtn');
          if (resetBtn) {
            resetBtn.onclick = function () {
              briefForm.reset();
              formSuccessView.style.display = 'none';
              formSuccessView.innerHTML = '';
              formFields.style.display = 'grid';
              if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalBtnHtml;
                submitBtn.classList.remove('btn-submitted');
              }
              layout();
            };
          }
        }

        briefForm.reset();
        layout();
      } else {
        // Fallback if offline or blocked
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalBtnHtml;
          submitBtn.classList.remove('btn-submitted');
        }

        if (formStatus) {
          formStatus.style.display = 'block';
          var recipient = P.email || 'johntypaul35@gmail.com';
          var subject = '[Project Brief] ' + scope + ' — ' + name;
          var gmailUrl = 'https://mail.google.com/mail/?view=cm&fs=1&to=' + encodeURIComponent(recipient) + '&su=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent('From: ' + name + ' (' + email + ')\n\n' + message);
          var mailtoUrl = 'mailto:' + recipient + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent('From: ' + name + ' (' + email + ')\n\n' + message);

          formStatus.innerHTML = '<div class="form-status-inner error">' +
            '<div class="status-title"><span class="status-dot"></span>Direct transmission offline</div>' +
            '<p class="status-desc">Unable to reach the email relay directly from this connection. You can send your formatted message via:</p>' +
            '<div class="status-actions">' +
            '<a href="' + gmailUrl + '" target="_blank" rel="noopener" class="status-link">Open in Gmail Web →</a>' +
            '<a href="' + mailtoUrl + '" class="status-link secondary">Default Mail App →</a>' +
            '</div></div>';
          layout();
        }
      }
    });
  }

  var toast = document.getElementById('toast');
  function hideToast() { if (toast) { toast.style.opacity = '0'; var t = toast; toast = null; setTimeout(function () { t.remove(); }, 600); } }
  setTimeout(hideToast, 6000);

  /* ---------- start ---------- */
  buildLayers();
  layout();
  if (window.innerWidth < 760) document.body.classList.add('simple');
  select('f-hero', false);
  apply();
  tourUpdate();
  buildWelcome();
  updateViewButtons(isSimple());
  window.addEventListener('resize', function () { updateViewButtons(isSimple()); });
  if (isSimple()) {
    var initH4 = document.getElementById('layers') ? document.getElementById('layers').querySelector('h4') : null;
    if (initH4) initH4.textContent = 'Navigation';
    var initBtn = document.getElementById('btnLayers');
    if (initBtn) {
      initBtn.setAttribute('title', 'Toggle navigation menu');
      initBtn.setAttribute('aria-label', 'Toggle navigation menu');
    }
  }
  if ('IntersectionObserver' in window) {
    var navObserver = new IntersectionObserver(function (entries) {
      if (!isSimple()) return;
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var id = entry.target.id;
          [].forEach.call(document.querySelectorAll('.layer[data-id]'), function (b) {
            b.classList.toggle('sel', b.dataset.id === id);
          });
        }
      });
    }, { rootMargin: '-20% 0px -70% 0px' });
    frames.forEach(function (f) { navObserver.observe(f); });
  }
  if (!isSimple()) {
    setTimeout(function () { var b = bounds(frames[0]); flyTo(b.x, b.y, b.w, b.h); }, 60);
    if (/[?&]tour/i.test(location.search)) {
      setTimeout(startGuidedTour, 700);
    } else if (!seen() || /[?&](welcome|guide)/i.test(location.search)) {
      setTimeout(function () { if (welcome) welcome.classList.add('open'); }, 700);
    }
  }
  // fonts and images change heights after first paint, so lay out again once they've loaded
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(layout);
  window.addEventListener('load', layout);
})();
