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
      caseStudyTitle: "HR & Operations Suite — 11-Module Workflow & Logic Architecture",
      caseStudySub: "Enterprise-scale workforce platform engineered to bridge complex business logic across 11 coupled modules and 5 core personas.",
      metrics: [
        { num: "11 Modules", label: "Shipped", desc: "Onboarding to Exit Ecosystem" },
        { num: "5 Roles", label: "Mapped", desc: "Admin, HR, IT, Mgr, Emp" },
        { num: "100% Logic", label: "Build-Ready", desc: "Engineering Alignment" }
      ],
      coreViews: [
        { num: "01", title: "Employee Operating Portal (Desktop)", desc: "Self-service interface for Timesheets, Document Vault, Project Tasks, and Learning Management" },
        { num: "02", title: "Admin Governance Desk (Desktop)", desc: "Centralized admin hub for Onboarding, Assets, Attendance, Leave Hub, and HR Analytics" },
        { num: "03", title: "Mobile Attendance & Leave (Mobile)", desc: "Geofenced check-in, real-time quota balances, and missed check-out recovery alerts" },
        { num: "04", title: "One-Tap Attendance Flow (Mobile)", desc: "Pre-commit bottom-sheet verification dialog preventing accidental punch errors" }
      ],
      modules: [
        { num: "01", name: "Onboarding", tag: "LIFECYCLE", desc: "Candidate-to-hire workflows, digital KYC, automated document collection, and instant IT/Admin provisioning triggers." },
        { num: "02", name: "Attendance", tag: "TIME & OPS", desc: "Biometric hardware sync, multi-shift scheduling, geo-fenced mobile check-ins, overtime rules, and regularization flows." },
        { num: "03", name: "Leave Management", tag: "COMPLIANCE", desc: "Multi-tier approval matrix, automated balance accruals, sandwich-rule logic, compensatory off, and holiday calendar sync." },
        { num: "04", name: "Payroll Engine", tag: "STATUTORY", desc: "Statutory compliance (PF, ESI, TDS, PT), custom salary structure configs, pre-commit batch locks, arrears, and payslips." },
        { num: "05", name: "Asset Management", tag: "IT & INFRA", desc: "Hardware/device inventory tracking, serial tagging, device depreciation curves, and automated recovery checklists on exit." },
        { num: "06", name: "Employees (Profile)", tag: "IDENTITY", desc: "Centralized 360° employee directory, emergency contacts, statutory IDs, role-based permissions, and compensation audit history." },
        { num: "07", name: "HR Analytics", tag: "INTELLIGENCE", desc: "Executive KPI dashboards, real-time headcount demographics, attrition prediction, leave trends, and custom report builders." },
        { num: "08", name: "Timesheet", tag: "OPERATIONS", desc: "Project-level billable vs. non-billable time logging, manager approval workflows, client invoice exports, and utilization heatmaps." },
        { num: "09", name: "Learning Management", tag: "TRAINING", desc: "Mandatory compliance training tracks, skill matrices, self-paced learning modules, assessment scoring, and cert renewals." },
        { num: "10", name: "Project & Task", tag: "PRODUCTIVITY", desc: "Milestone planning, task dependency mapping, sprint backlogs, and team bandwidth tracking linked to employee capacity." },
        { num: "11", name: "Document Module", tag: "GOVERNANCE", desc: "Centralized secure HR vault, dynamic automated offer/NDA/appraisal generation, e-signatures, role access, and audit trails." }
      ],
      caseStudySections: [
        {
          num: "01",
          title: "THE CORE ENTERPRISE PROBLEM",
          text: "Enterprise software's greatest friction isn't visual polish — it's the invisible business logic underneath the screen. In a full-scale 11-module workforce ecosystem, every workflow is deeply coupled: an onboarding completion triggers asset allocation and document vaulting; biometric attendance and timesheet logs directly feed statutory payroll calculations; and leave policies enforce legal compliance. If the underlying logical state machine breaks, no amount of clean UI can salvage user trust."
        },
        {
          num: "02",
          title: "THE 11-MODULE WORKFORCE ARCHITECTURE",
          text: "To eliminate fragmented point solutions, we mapped a single continuous operational backbone spanning all 11 modules. Each module functions as both an autonomous tool and an integrated trigger: Onboarding feeds KYC to Profiles and hardware requests to Assets; Attendance logs pipe into Timesheet billing and feed directly into the Payroll Engine; Leave rules automate statutory deduction compliance."
        },
        {
          num: "03",
          title: "DATA-HEAVY TABLES, PRE-COMMIT LOCKS & ERROR STATES",
          text: "Designed high-density workforce tables with multi-parameter filtering, inline validation, and contextual bulk actions across Attendance, Payroll, and Timesheets. Engineered strict error states and confirmation dialogues for high-risk operations (payroll batch processing and statutory tax deductions) to eliminate human error before commit."
        },
        {
          num: "04",
          title: "STRUCTURED HR ANALYTICS & EXECUTIVE DASHBOARDS",
          text: "Transformed dense, tabular workforce logs into intuitive analytics dashboards: tracking real-time headcount distribution, payroll cycle completion, leave trends, project utilization, and LMS course completion rates with zero cognitive clutter."
        },
        {
          num: "05",
          title: "ENGINEERING COLLABORATION & DESIGN SYSTEM HANDOFF",
          text: "Worked side-by-side with backend and frontend engineers at Digylax, ensuring every edge case, empty state, and permission tier across all 11 modules was documented in Figma components, tokens, and logic flowcharts before sprint kickoff."
        }
      ],
      visual: {
        type: "image",
        src: "assets/images/talent-factor-employee-portal.png",
        alt: "Talent Factor HRMS - Employee Portal Dashboard",
        caption: "01. Employee Operating Portal (Desktop)",
        device: "plain"
      },
      gallery: [
        { src: "assets/images/talent-factor-admin-portal.png", caption: "02. Admin Governance Desk (Desktop)" },
        { src: "assets/images/talent-factor-mobile-attendance.png", caption: "03. Mobile Attendance & Leave (Mobile)" },
        { src: "assets/images/talent-factor-mobile-checkin.png", caption: "04. One-Tap Attendance Flow (Mobile)" }
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
      inspect: [["Role", "UX Designer"], ["Scope", "HRMS and Payroll (11 Modules)"], ["Users", "HR, admin, IT, managers, employees"], ["Timeline", "Oct 2024 to present"], ["Tools", "Figma"], ["Platforms", "Web & Mobile"]],
      inspectSub: "Enterprise product at Digylax.",
      pin: { x: 695, y: 45, text: "Role-based views for employees and admins, with paired mobile self-service flows." }
    },
    {
      id: "toshiv",
      title: "Travel by Toshiv",
      chips: [{ text: "Independent product", lime: true }, { text: "Live", dot: true }],
      meta: "Overseas recruitment and visa platform / Designer and builder",
      summary: "A live site that helps Indian professionals find verified overseas jobs and handle the visa process. People are trusting a stranger with their passport, so the design had to feel official from the first screen.",
      caseStudyTitle: "Travel by Toshiv — Overseas Recruitment Platform",
      caseStudySub: "A live international recruitment and visa platform engineered to bridge cross-border trust deficits across 3 responsive viewports.",
      metrics: [
        { num: "Live", label: "Production", desc: "Shipped at travelbytoshiv.com" },
        { num: "3 Viewports", label: "Responsive", desc: "MacBook, Foldable & Mobile UX" },
        { num: "0 to 1", label: "Build-Ready", desc: "Full Product IA & Design System" }
      ],
      coreViews: [
        { num: "01", title: "MacBook Desktop Suite (Desktop)", desc: "Verified international job pipelines & multi-country visa programs" },
        { num: "02", title: "Foldable & Tablet View (Foldable)", desc: "Adaptive dual-pane layout for foldable devices & tablets" },
        { num: "03", title: "Mobile Pocket UX (Mobile)", desc: "Touch-optimized consultation booking & instant visa queries" }
      ],
      modules: [
        { num: "01", name: "Verified Job Discovery", tag: "PIPELINES", desc: "Curated international opportunities across Singapore, Europe (Poland, Bulgaria), and South Korea." },
        { num: "02", name: "Visa Eligibility & Document Vault", tag: "COMPLIANCE", desc: "Official passport and travel document guidance to eliminate consular friction." },
        { num: "03", name: "Multi-Country Visa Pipelines", tag: "PROGRAMS", desc: "Interactive country visa tabs, eligibility criteria, and embassy-level compliance guidelines." },
        { num: "04", name: "Employer Tie-up & Consultation", tag: "CONVERSION", desc: "Sticky high-intent booking flow connecting candidates directly with accredited advisors." }
      ],
      caseStudySections: [
        {
          num: "01",
          title: "THE PRODUCT VISION & TRUST DEFICIT",
          text: "Designed the complete product experience for a live international recruitment and visa consultancy platform. The core challenge was bridging the trust deficit for Indian professionals seeking verified overseas opportunities in Singapore, Europe (Poland, Bulgaria), and South Korea."
        },
        {
          num: "02",
          title: "INFORMATION ARCHITECTURE & PROCESS DISCOVERY",
          text: "Structured a complex multi-step journey into 3 intuitive phases: Verified Job Discovery → Visa Eligibility & Document Vault → Employer Tie-up Coordination. Built the visual language around official travel and passport documentation aesthetics to establish immediate credibility."
        },
        {
          num: "03",
          title: "MULTI-DEVICE RESPONSIVE ERGONOMICS",
          text: "Architected dedicated ergonomic experiences across MacBook desktop, foldable tablets, and mobile smartphones. Maintained sticky high-intent consultation CTAs, interactive country visa tabs, and rapid application touchpoints across all form factors."
        },
        {
          num: "04",
          title: "RAPID PRODUCTION IMPLEMENTATION",
          text: "Took the platform from Figma design components into full production with modern agentic development. Ensured sub-second loading speeds, lightweight SVG iconography, and responsive media scaling."
        }
      ],
      visual: {
        type: "image",
        src: "assets/images/toshiv-desktop-home.png",
        alt: "Travel by Toshiv - Desktop Homepage",
        caption: "01. MacBook Desktop Suite (Desktop)",
        device: "plain"
      },
      gallery: [
        { src: "assets/images/toshiv-foldable-view.png", caption: "02. Foldable & Tablet View (Foldable)" },
        { src: "assets/images/toshiv-mobile-home.png", caption: "03. Mobile Pocket UX (Mobile)" }
      ],
      bullets: [
        "Planned the structure and the journeys: job discovery, visa support, document preparation and consultation booking",
        "Styled the process steps like boarding passes, to borrow the credibility of real travel documents",
        "Designed for desktop, mobile and a dedicated foldable/tablet breakpoint",
        "Built it with Antigravity, working from my Figma designs"
      ],
      links: [{ label: "Visit travelbytoshiv.com ↗", url: "https://travelbytoshiv.com", solid: true }],
      inspect: [["Role", "Designer and builder"], ["Scope", "Structure, UX and build"], ["Devices", "Desktop, foldable/tablet, mobile"], ["Tools", "Figma, Antigravity"], ["Status", "Live in production"]],
      inspectSub: "Independent, live product.",
      pin: { x: 695, y: 45, text: "It has its own foldable/tablet layout, not just desktop and mobile." }
    },
    {
      id: "ride",
      title: "Robuster Ride",
      chips: [{ text: "Self-directed", lime: true }, { text: "Mobile app" }],
      meta: "Ride-booking concept / Figma prototype / Started Jan 2024",
      summary: "A ride-hailing concept I designed to practise mobile interaction design. It started as a learning project and has grown into a fuller clickable prototype.",
      caseStudyTitle: "Robuster Ride: On-Demand Mobility & Dispatch App",
      caseStudySub: "An end-to-end mobile interaction study solving transit friction through upfront fare transparency, zero-leak privacy, and diagnostic ratings.",
      metrics: [
        { num: "End-to-End", label: "Architecture", desc: "Auth to Trip Closure Flow" },
        { num: "Zero-Leak", label: "Privacy", desc: "VoIP Call & Chat Privacy" },
        { num: "4-Digit OTP", label: "Safety", desc: "Anti-Boarding Verification" }
      ],
      coreViews: [
        { num: "01", title: "Onboarding & Value (Mobile)", desc: "Upfront fare transparency & verified driver onboarding" },
        { num: "02", title: "Vehicle & Packages (Mobile)", desc: "Multi-tier categories & hourly rental packages" },
        { num: "03", title: "Route Scheduler (Mobile)", desc: "Multi-stop geolocation & departure time picker" },
        { num: "04", title: "Diagnostic Ratings (Mobile)", desc: "Sentiment-triggered feedback & service chips" }
      ],
      modules: [
        { num: "01", name: "Upfront Fare & Driver Onboarding", tag: "VALUE", desc: "Transparent upfront pricing disclosure and verified driver credentials." },
        { num: "02", name: "Vehicle Categories & Hourly Packages", tag: "MOBILITY", desc: "Multi-tier classification (Mini, Sedan, Luxury) and hourly rental tiers from 1hr/15km to 6hr/60km." },
        { num: "03", name: "Multi-Stop Geolocation Route Scheduler", tag: "NAVIGATION", desc: "Dynamic add/remove waypoint controls with live departure time scheduling and route cost adjustments." },
        { num: "04", name: "Zero-Leak VoIP & Safe Verification OTP", tag: "PRIVACY", desc: "Masked in-app calls, direct chat, and prominent 4-digit pickup OTP to prevent boarding errors." },
        { num: "05", name: "Sentiment-Triggered Diagnostic Feedback", tag: "DIAGNOSTICS", desc: "Conditional post-ride chips (Route taken, Driving quality, Vehicle condition) paired with digital receipts." }
      ],
      caseStudySections: [
        {
          num: "01",
          title: "THE CORE TRANSIT FRICTION & PROBLEM FRAMING",
          text: "High-intent booking moments in on-demand transit are prone to cognitive overload and rider distrust. Users frequently experience unexpected fare surcharges when adding stops midway, privacy risks when sharing personal phone numbers with drivers, and generic 1-to-5 star rating systems that fail to provide operations teams with actionable reasons for poor service."
        },
        {
          num: "02",
          title: "MULTI-STOP ROUTE TRANSPARENCY & UPFRONT PRICING",
          text: "Built dedicated add/remove stop input controls paired with an upfront waiting-time fare disclosure notice. Riders see exact route changes, time increments, and total cost adjustments before confirming their ride, eliminating mid-transit bill shocks."
        },
        {
          num: "03",
          title: "SAFE COORDINATION & PRIVACY PRESERVATION",
          text: "Integrated native in-app VoIP calling and direct messaging to completely mask user phone numbers. Combined this with a prominent 4-digit verification OTP on the active dispatch card to prevent boarding the wrong vehicle in chaotic pickup zones."
        },
        {
          num: "04",
          title: "SENTIMENT-TRIGGERED DIAGNOSTIC FEEDBACK ENGINE",
          text: "Engineered a conditional post-ride feedback loop. Selecting a neutral or dissatisfied sentiment immediately triggers targeted diagnostic chips (Route taken, Driving quality, Vehicle condition, Driver service) alongside instant digital payment receipts, delivering actionable operational insights."
        }
      ],
      visual: {
        type: "image",
        src: "assets/images/robuster-hero-showcase.png",
        alt: "Robuster Ride - 3D Multi-Screen App Showcase",
        caption: "01. Onboarding & Value (Mobile)",
        device: "plain"
      },
      gallery: [
        { src: "assets/images/robuster-vehicle-packages.png", caption: "02. Vehicle & Packages (Mobile)" },
        { src: "assets/images/robuster-trip-schedule.png", caption: "03. Route Scheduler (Mobile)" },
        { src: "assets/images/robuster-trip-review-flow.png", caption: "04. Diagnostic Ratings (Mobile)" }
      ],
      bullets: [
        "Onboarding flow highlighting upfront fare transparency and verified driver credentials",
        "Vehicle category selection (Mini, Sedan, Luxury) with flexible hourly rental packages (1hr/15km to 6hr/60km)",
        "Multi-stop geolocation route scheduler with departure time picker and dynamic waiting-time fare adjustments",
        "Zero-leak native VoIP calling, direct in-app messaging, and prominent 4-digit pickup OTP verification",
        "Sentiment-triggered post-trip diagnostic rating engine capturing targeted operational service feedback"
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
