/* =====================================================================
   PORTFOLIO CONTENT — this is the ONLY file you need to edit to change
   text, add projects, or add mockups.

   • Put images in  assets/images/  and refer to them as "assets/images/name.jpg"
   • Words wrapped in {curly braces} in a heading get the lime highlight.
   • Everything here must be true. If you can't defend it in an interview, cut it.
   ===================================================================== */

window.PORTFOLIO = {

  /* ---------- You ---------- */
  profile: {
    name: "Johnty Paul Joseph",
    fileTitle: "Portfolio",              // shown in the top bar, like a Figma file name
    role: "UI/UX & Product Designer",
    location: "Coimbatore, India",
    openTo: "On-site, hybrid, remote",
    experience: "2+ years",
    email: "johntypaul35@gmail.com",
    phone: "+91 86376 83237",
    phoneHref: "+918637683237",
    linkedin: "https://www.linkedin.com/in/johnty-paul-127ba0187",
    linkedinLabel: "/in/johnty-paul-127ba0187",
    resume: "assets/resume/Johnty_Paul_Joseph_Resume.pdf",   // replace the PDF with the same name to update
    portrait: "assets/images/portrait.jpg",
    availability: "Available for roles",
    chips: ["UI/UX & Product Designer", "Open to roles"],
    headline: "I design the {logic} behind enterprise software.",
    lede: "Two years designing HRMS and Payroll products at Digylax, plus a live recruitment platform of my own. The approach never changes: understand the rules first, then draw the screens.",
    facts: ["Coimbatore, India", "On-site / hybrid / remote", "2+ years"]
  },

  welcome: {
    title: "Explore like a Figma canvas",
    sub: "Every project section is a live frame on an infinite workspace. Explore with full freedom:",
    steps: [
      "Click & drag anywhere to pan freely across all frames",
      "Ctrl / ⌘ + scroll (or trackpad pinch) to zoom in and out",
      "Click any frame or comment pin to inspect specs and details",
      "Use ← → in the bottom toolbar or keyboard to jump between frames"
    ]
  },

  /* ---------- About ---------- */
  about: {
    heading: "Logic first, pixels second.",
    text: "Enterprise software hides a lot of structure: approval chains, compliance rules, who is allowed to see what. If that structure is wrong, no amount of visual polish fixes it.",
    quote: "“If the logic is sound, the interface follows.”",
    points: [
      "Roles and permissions are mapped before any layout",
      "Empty, error and edge states are part of the design",
      "Handoff that engineers can actually build from"
    ],
    toolsTitle: "Software & Stack",
    tools: [
      { name: "Figma", role: "UI/UX & Design Systems", icon: "figma", featured: true },
      { name: "FigJam / Miro", role: "Flows & User Journeys", icon: "whiteboard" },
      { name: "Antigravity", role: "AI Prototyping & Build", icon: "antigravity" },
      { name: "Claude", role: "Logic & AI Workflows", icon: "claude" },
      { name: "Canva", role: "Visual & Brand Assets", icon: "canva" }
    ]
  },

  /* ---------- Projects ----------
     Add a project = copy one block, change the fields, drop your images in assets/images/.
     visual.type can be:
       "wireframe"  – generic illustrative diagram (use while real screens are confidential)
       "image"      – one hero image. device: "browser" | "phone" | "plain"
       "figma"      – a live Figma prototype inside a phone frame (needs "Allow embed" on in Figma Share)
     gallery: extra mockups shown as clickable thumbnails (opens a zoomed view).
  ------------------------------------------------------------------- */
  projects: [
    {
      id: "hr",
      title: "HR & Payroll Suite",
      chips: [{ text: "Enterprise B2B", lime: true }, { text: "HRMS" }, { text: "Payroll" }],
      meta: "Digylax Private Limited / UX Designer / Oct 2024 to present",
      summary: "Enterprise software for managing the full employee lifecycle and payroll, used by five kinds of people: HR, admin, IT, managers and employees.",
      visual: {
        type: "image",
        src: "assets/images/talent-factor-employee-portal.png",
        alt: "Talent Factor HRMS - Employee Portal Dashboard",
        caption: "Employee Portal",
        device: "plain"
      },
      gallery: [
        { src: "assets/images/talent-factor-admin-portal.png", caption: "Admin Portal" },
        { src: "assets/images/talent-factor-mobile-attendance.png", caption: "Mobile Attendance" },
        { src: "assets/images/talent-factor-mobile-checkin.png", caption: "Mobile Check-In" }
      ],
      bulletsTitle: "What I worked on",
      bullets: [
        "Onboarding and exit workflows, mapping who has to act at each step across HR, admin, IT, managers and employees",
        "Statutory compliance and asset management flows, including data-heavy tables, status systems, filtering, validation and error states",
        "HR analytics dashboards that turn dense workforce data into views people can act on",
        "Navigation for a learning module covering courses, assessments and certifications for different roles",
        "Close work with engineering so every flow is buildable"
      ],
      links: [],
      inspect: [["Role", "UX Designer"], ["Scope", "HRMS and Payroll"], ["Users", "HR, admin, IT, managers, employees"], ["Timeline", "Oct 2024 to present"], ["Tools", "Figma"], ["Platforms", "Web & Mobile"]],
      inspectSub: "Enterprise product at Digylax.",
      pin: { x: 695, y: 45, text: "Role-based views for employees and admins, with paired mobile self-service flows." }
    },
    {
      id: "toshiv",
      title: "Travel by Toshiv",
      chips: [{ text: "Independent product", lime: true }, { text: "Live", dot: true }],
      meta: "Overseas recruitment and visa platform / Designer and builder",
      summary: "A live site that helps Indian professionals find verified overseas jobs and handle the visa process. People are trusting a stranger with their passport, so the design had to feel official from the first screen.",
      visual: {
        type: "image",
        src: "assets/images/toshiv-desktop-home.png",
        alt: "Travel by Toshiv - Desktop Homepage",
        caption: "Desktop Web",
        device: "plain"
      },
      gallery: [
        { src: "assets/images/toshiv-foldable-view.png", caption: "Foldable / Tablet" },
        { src: "assets/images/toshiv-mobile-home.png", caption: "Mobile Web" },
        { src: "assets/images/toshiv-mobile-menu.png", caption: "Navigation Menu" }
      ],
      bullets: [
        "Planned the structure and the journeys: job discovery, visa support, document preparation and consultation booking",
        "Styled the process steps like boarding passes, to borrow the credibility of real travel documents",
        "Designed for desktop, mobile and a dedicated foldable/tablet breakpoint",
        "Built it with Antigravity, working from my Figma designs"
      ],
      links: [{ label: "Visit travelbytoshiv.com ↗", url: "https://travelbytoshiv.com", solid: true }],
      inspect: [["Role", "Designer and builder"], ["Scope", "Structure, UX and build"], ["Devices", "Desktop, foldable/tablet, mobile"], ["Tools", "Figma, Antigravity"], ["Status", "Live"]],
      inspectSub: "Independent, live product.",
      pin: { x: 695, y: 45, text: "It has its own foldable/tablet layout, not just desktop and mobile." }
    },
    {
      id: "ride",
      title: "Robuster Ride",
      chips: [{ text: "Self-directed", lime: true }, { text: "Mobile app" }],
      meta: "Ride-booking concept / Figma prototype / Started Jan 2024",
      summary: "A ride-hailing concept I designed to practise mobile interaction design. It started as a learning project and has grown into a fuller clickable prototype.",
      visual: {
        type: "image",
        src: "assets/images/robuster-hero-showcase.png",
        alt: "Robuster Ride - 3D Multi-Screen App Showcase",
        caption: "App Overview",
        device: "plain"
      },
      gallery: [
        { src: "assets/images/robuster-vehicle-packages.png", caption: "Vehicle Tiers" },
        { src: "assets/images/robuster-trip-schedule.png", caption: "Trip Schedule" },
        { src: "assets/images/robuster-trip-review-flow.png", caption: "Review Flow" }
      ],
      bullets: [
        "Onboarding flow highlighting upfront pricing and verified drivers",
        "Vehicle category selection (Mini, Sedan, Luxury) with hourly package tiers (1hr/15km to 6hr/60km)",
        "Schedule one-way trip flow with interactive map waypoints and time selector",
        "Route entry with add-a-stop, reorder controls, and transparent waiting-time fare notes",
        "Post-trip rating and service feedback modal"
      ],
      links: [{ label: "Open prototype in Figma ↗", url: "https://www.figma.com/proto/NZh0zaFyyJ9n8RgHNuH37U/Robuster-Ride?node-id=1-846&p=f&t=wH7b3BN8TUfusbhd-1&scaling=scale-down&content-scaling=responsive&page-id=0%3A1&starting-point-node-id=1%3A846", solid: true }],
      inspect: [["Role", "Solo designer"], ["Scope", "Ride-booking app concept"], ["Started", "Jan 2024"], ["Tools", "Figma"], ["Prototype", "Available"]],
      inspectSub: "Self-directed mobile concept.",
      pin: { x: 695, y: 45, text: "Click between the 4 screens to explore the flow, or open the prototype in Figma." }
    }
    /* ADD A NEW PROJECT HERE — copy a block above, paste after a comma, and edit. */
  ],

  /* ---------- Process ---------- */
  process: {
    heading: "How I work.",
    steps: [
      ["01", "Domain discovery", "Business rules, compliance needs, stakeholders and data dependencies, before any interface."],
      ["02", "Stories and flows", "Roles, journeys, permissions, states, exceptions and edge cases."],
      ["03", "Prototype and validate", "Test structure, task flow and data density before high-fidelity UI."],
      ["04", "Usability and build", "Check tasks with users and refine with engineering so it ships."]
    ],
    flowTitle: "Design to live, with AI in the loop",
    flow: [
      ["Figma", "Design and prototype", "figma"],
      ["Antigravity", "AI-assisted build", "antigravity"],
      ["Live site", "travelbytoshiv.com", "globe"]
    ],
    flowNote: "This is the pipeline I used for Travel by Toshiv: design first, then let AI speed up the build.",
    inspect: [["Steps", "Discover, map, prototype, build"], ["AI use", "Antigravity for the build step"]],
    inspectSub: "The same four steps every time."
  },

  /* ---------- Capabilities ---------- */
  capabilities: {
    heading: "What I bring.",
    groups: [
      ["Research", ["Domain discovery", "User interviews", "Usability testing", "Journey mapping"]],
      ["Product and UX", ["Information architecture", "Workflow design", "User stories", "Problem framing"]],
      ["UI and systems", ["Design systems", "Figma components", "Design tokens", "Data tables"]],
      ["Prototype and handoff", ["Wireframing", "Interactive prototypes", "Engineering collaboration", "Tailwind/React handoff"]]
    ],
    tools: "Tools: Figma, FigJam / Miro, Antigravity, Claude, Canva",
    inspect: [["Areas", "Research, product, UI, handoff"], ["Tools", "Figma, FigJam / Miro, Antigravity, Claude, Canva"]],
    inspectSub: "Skills grouped by area."
  },

  /* ---------- Experience ---------- */
  experience: {
    heading: "Where I've worked.",
    items: [
      { when: "Oct 2024 to present", title: "UX Designer", company: "Digylax Private Limited, Coimbatore", text: "Designing enterprise HRMS and Payroll products: employee lifecycle workflows, compliance, HR analytics and learning management, working directly with engineering.", doodle: "ux" },
      { when: "Oct 2022 to Dec 2022", title: "Production Executive", company: "Jayanti Herbs & Spice, Coimbatore", text: "A short role before design, supporting day-to-day production operations.", doodle: "herbs" }
    ],
    inspect: [["Current", "UX Designer, Digylax"], ["Since", "Oct 2024"]],
    inspectSub: "Two roles, one design career."
  },

  /* ---------- Contact ---------- */
  contact: {
    heading: "Let's build something {usable.}",
    scopes: ["A full-time UI/UX role", "A product design role", "A freelance project", "Just saying hello"],
    inspectSub: "Let’s talk."
  }
};
