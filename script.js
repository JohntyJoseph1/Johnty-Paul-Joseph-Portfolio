/* ==========================================================================
   JOHNTY PAUL JOSEPH — PORTFOLIO CLIENT ENGINE
   Interactive Behaviors: Mobile Nav, Work Filters, Deep Case Study Drawer
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  // --- Mobile Navigation Drawer Toggle ---
  const burger = document.getElementById('burgerBtn');
  const navLinks = document.getElementById('navLinks');

  if (burger && navLinks) {
    burger.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      const isOpen = navLinks.classList.contains('open');
      burger.setAttribute('aria-expanded', isOpen);
    });

    // Close mobile drawer when clicking any link
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        burger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // --- Work Filter Functionality ---
  const filterBtns = document.querySelectorAll('.work-filter-btn');
  const workCards = document.querySelectorAll('.work-card');

  if (filterBtns.length > 0 && workCards.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');

        workCards.forEach(card => {
          const category = card.getAttribute('data-category');
          if (filter === 'all' || category === filter) {
            card.style.display = 'grid';
            card.style.opacity = '1';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  // --- Deep Case Study Data Repository ---
  const caseStudiesData = {
    hr_suite: {
      tag: '// ENTERPRISE SAAS · 11-MODULE WORKFORCE ECOSYSTEM · DIGYLAX',
      title: 'HR & Operations Suite — 11-Module Workflow & Logic Architecture',
      metrics: [
        { num: '11 Modules', label: 'Shipped (Onboarding to Exit Ecosystem)' },
        { num: '5 Roles', label: 'Mapped (Admin, HR, IT, Mgr, Emp)' },
        { num: '100% Logic', label: 'Build-Ready Engineering Alignment' }
      ],
      sections: [
        {
          index: '01',
          title: 'THE CORE ENTERPRISE PROBLEM',
          content: 'Enterprise software\'s greatest friction isn\'t visual polish — it\'s the invisible business logic underneath the screen. In a full-scale 11-module workforce ecosystem, every workflow is deeply coupled: an onboarding completion triggers asset allocation and document vaulting; biometric attendance and timesheet logs directly feed statutory payroll calculations; and leave policies enforce legal compliance. If the underlying logical state machine breaks, no amount of clean UI can salvage user trust.'
        },
        {
          index: '02',
          title: 'THE 11-MODULE WORKFORCE ARCHITECTURE',
          content: '<div class="modal-modules-grid"><div class="modal-module-card"><div class="modal-module-header"><div class="modal-module-name"><span class="modal-module-num">01</span> Onboarding</div><span class="modal-module-tag">LIFECYCLE</span></div><p class="modal-module-desc">Candidate-to-hire workflows, digital KYC, automated document collection, and instant IT/Admin provisioning triggers.</p></div><div class="modal-module-card"><div class="modal-module-header"><div class="modal-module-name"><span class="modal-module-num">02</span> Attendance</div><span class="modal-module-tag">TIME &amp; OPS</span></div><p class="modal-module-desc">Biometric hardware sync, multi-shift scheduling, geo-fenced mobile check-ins, overtime rules, and regularization flows.</p></div><div class="modal-module-card"><div class="modal-module-header"><div class="modal-module-name"><span class="modal-module-num">03</span> Leave Management</div><span class="modal-module-tag">COMPLIANCE</span></div><p class="modal-module-desc">Multi-tier approval matrix, automated balance accruals, sandwich-rule logic, compensatory off, and holiday calendar sync.</p></div><div class="modal-module-card"><div class="modal-module-header"><div class="modal-module-name"><span class="modal-module-num">04</span> Payroll Engine</div><span class="modal-module-tag">STATUTORY</span></div><p class="modal-module-desc">Statutory compliance (PF, ESI, TDS, PT), custom salary structure configs, pre-commit batch locks, arrears, and payslips.</p></div><div class="modal-module-card"><div class="modal-module-header"><div class="modal-module-name"><span class="modal-module-num">05</span> Asset Management</div><span class="modal-module-tag">IT &amp; INFRA</span></div><p class="modal-module-desc">Hardware/device inventory tracking, serial tagging, device depreciation curves, and automated recovery checklists on exit.</p></div><div class="modal-module-card"><div class="modal-module-header"><div class="modal-module-name"><span class="modal-module-num">06</span> Employees (Profile)</div><span class="modal-module-tag">IDENTITY</span></div><p class="modal-module-desc">Centralized 360° employee directory, emergency contacts, statutory IDs, role-based permissions, and compensation audit history.</p></div><div class="modal-module-card"><div class="modal-module-header"><div class="modal-module-name"><span class="modal-module-num">07</span> HR Analytics</div><span class="modal-module-tag">INTELLIGENCE</span></div><p class="modal-module-desc">Executive KPI dashboards, real-time headcount demographics, attrition prediction, leave trends, and custom report builders.</p></div><div class="modal-module-card"><div class="modal-module-header"><div class="modal-module-name"><span class="modal-module-num">08</span> Timesheet</div><span class="modal-module-tag">OPERATIONS</span></div><p class="modal-module-desc">Project-level billable vs. non-billable time logging, manager approval workflows, client invoice exports, and utilization heatmaps.</p></div><div class="modal-module-card"><div class="modal-module-header"><div class="modal-module-name"><span class="modal-module-num">09</span> Learning Management</div><span class="modal-module-tag">TRAINING</span></div><p class="modal-module-desc">Mandatory compliance training tracks, skill matrices, self-paced learning modules, assessment scoring, and cert renewals.</p></div><div class="modal-module-card"><div class="modal-module-header"><div class="modal-module-name"><span class="modal-module-num">10</span> Project &amp; Task</div><span class="modal-module-tag">PRODUCTIVITY</span></div><p class="modal-module-desc">Milestone planning, task dependency mapping, sprint backlogs, and team bandwidth tracking linked to employee capacity.</p></div><div class="modal-module-card"><div class="modal-module-header"><div class="modal-module-name"><span class="modal-module-num">11</span> Document Module</div><span class="modal-module-tag">GOVERNANCE</span></div><p class="modal-module-desc">Centralized secure HR vault, dynamic automated offer/NDA/appraisal generation, e-signatures, role access, and audit trails.</p></div></div>'
        },
        {
          index: '03',
          title: 'MULTI-ROLE LIFECYCLES: ONBOARDING & EXIT STATE MACHINES',
          content: 'Architected end-to-end employee journeys from initial offer acceptance through offboarding across 5 distinct personas:\n• <strong>HR Ops:</strong> Document verification, statutory compliance, salary structure allocation, and probation sign-offs.\n• <strong>Admin & IT:</strong> Hardware provisioning (Asset module), software license assignments, and security access revocation.\n• <strong>Managers & Department Heads:</strong> Timesheet and leave sign-offs, project/task allocation, and LMS performance reviews.\n• <strong>Employees:</strong> Self-service attendance regularization, leave applications, payslip downloads, and clearance checklists.'
        },
        {
          index: '04',
          title: 'DATA-HEAVY TABLES, PRE-COMMIT LOCKS & ERROR STATES',
          content: 'Designed high-density workforce tables with multi-parameter filtering, inline validation, and contextual bulk actions across Attendance, Payroll, and Timesheets. Engineered strict error states and confirmation dialogues for high-risk operations (payroll batch processing and statutory tax deductions) to eliminate human error before commit.'
        },
        {
          index: '05',
          title: 'STRUCTURED HR ANALYTICS & EXECUTIVE DASHBOARDS',
          content: 'Transformed dense, tabular workforce logs into intuitive analytics dashboards: tracking real-time headcount distribution, payroll cycle completion, leave trends, project utilization, and LMS course completion rates with zero cognitive clutter.'
        },
        {
          index: '06',
          title: 'ENGINEERING COLLABORATION & DESIGN SYSTEM HANDOFF',
          content: 'Worked side-by-side with backend and frontend engineers at Digylax, ensuring every edge case, empty state, and permission tier across all 11 modules was documented in Figma components, tokens, and logic flowcharts before sprint kickoff.'
        }
      ]
    },

    travel_toshiv: {
      tag: '// INDEPENDENT PRODUCT · RECRUITMENT PLATFORM · LIVE',
      title: 'Travel by Toshiv — Overseas Recruitment Platform',
      metrics: [
        { num: 'Live', label: 'Shipped at travelbytoshiv.com' },
        { num: '3 Viewports', label: 'MacBook, Foldable & Mobile UX' },
        { num: '0 to 1', label: 'Full Product IA & Design System' }
      ],
      sections: [
        {
          index: '01',
          title: 'THE PRODUCT VISION & TRUST DEFICIT',
          content: 'Designed the complete product experience for a live international recruitment and visa consultancy platform. The core challenge was bridging the trust deficit for Indian professionals seeking verified overseas opportunities in Singapore, Europe (Poland, Bulgaria), and South Korea.'
        },
        {
          index: '02',
          title: 'INFORMATION ARCHITECTURE & PROCESS DISCOVERY',
          content: 'Structured a complex multi-step journey into 3 intuitive phases: Verified Job Discovery → Visa Eligibility & Document Vault → Employer Tie-up Coordination. Built the visual language around official travel and passport documentation aesthetics to establish immediate credibility.'
        },
        {
          index: '03',
          title: 'MULTI-DEVICE RESPONSIVE ERGONOMICS',
          content: 'Architected dedicated ergonomic experiences across MacBook desktop, foldable tablets, and mobile smartphones. Maintained sticky high-intent consultation CTAs, interactive country visa tabs, and rapid application touchpoints across all form factors.'
        },
        {
          index: '04',
          title: 'RAPID PRODUCTION IMPLEMENTATION',
          content: 'Took the platform from Figma design components into full production with modern agentic development. Ensured sub-second loading speeds, lightweight SVG iconography, and responsive media scaling.'
        }
      ]
    },

    robuster_ride: {
      tag: '// CONSUMER MOBILITY · iOS & ANDROID · FIGMA PROTOTYPING',
      title: 'Robuster Ride: On-Demand Mobility & Dispatch App',
      prototypeUrl: 'https://www.figma.com/proto/NZh0zaFyyJ9n8RgHNuH37U/Robuster-Ride?node-id=1-846&p=f&t=wH7b3BN8TUfusbhd-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A846',
      metrics: [
        { num: 'End-to-End', label: 'Auth to Trip Closure Flow' },
        { num: 'Zero-Leak', label: 'VoIP Call & Chat Privacy' },
        { num: '4-Digit OTP', label: 'Anti-Boarding Verification' }
      ],
      sections: [
        {
          index: '01',
          title: 'THE CORE TRANSIT FRICTION & PROBLEM FRAMING',
          content: 'High-intent booking moments in on-demand transit are prone to cognitive overload and rider distrust. Users frequently experience unexpected fare surcharges when adding stops midway, privacy risks when sharing personal phone numbers with drivers, and generic 1-to-5 star rating systems that fail to provide operations teams with actionable reasons for poor service.'
        },
        {
          index: '02',
          title: 'MULTI-STOP ROUTE TRANSPARENCY & UPFRONT PRICING',
          content: 'Built dedicated add/remove stop input controls paired with an upfront waiting-time fare disclosure notice. Riders see exact route changes, time increments, and total cost adjustments before confirming their ride, eliminating mid-transit bill shocks.'
        },
        {
          index: '03',
          title: 'SAFE COORDINATION & PRIVACY PRESERVATION',
          content: 'Integrated native in-app VoIP calling and direct messaging to completely mask user phone numbers. Combined this with a prominent 4-digit verification OTP on the active dispatch card to prevent boarding the wrong vehicle in chaotic pickup zones.'
        },
        {
          index: '04',
          title: 'SENTIMENT-TRIGGERED DIAGNOSTIC FEEDBACK ENGINE',
          content: 'Engineered a conditional post-ride feedback loop. Selecting a neutral or dissatisfied sentiment immediately triggers targeted diagnostic chips (Route taken, Driving quality, Vehicle condition, Driver service) alongside instant digital payment receipts, delivering actionable operational insights.'
        },
        {
          index: '05',
          title: 'DESIGN RATIONALE · COLOR RESTRAINT',
          content: '<div class="modal-rationale-box"><strong>Design Rationale · Color Restraint:</strong>\nWe adopted a subtle, minimal palette to reduce cognitive friction on a map-heavy interface. By keeping containers neutral and typography high-contrast monochrome, functional colors (green confirmations, amber ratings, and vehicle markers) stand out with clear semantic meaning during fast, on-the-go decision-making.</div>'
        }
      ]
    }
  };

  // --- Case Study Modal / Drawer Logic ---
  const caseModal = document.getElementById('caseModal');
  const modalContent = document.getElementById('modalContent');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const viewCaseBtns = document.querySelectorAll('.view-case-study');

  function openCaseStudy(caseKey) {
    const data = caseStudiesData[caseKey];
    if (!data || !modalContent) return;

    let metricsHtml = '';
    if (data.metrics && data.metrics.length > 0) {
      metricsHtml = `
        <div class="modal-metrics-bar">
          ${data.metrics.map(m => `
            <div>
              <div class="modal-metric-num">${m.num}</div>
              <div class="modal-metric-cap">${m.label}</div>
            </div>
          `).join('')}
        </div>
      `;
    }

    let sectionsHtml = '';
    if (data.sections && data.sections.length > 0) {
      sectionsHtml = data.sections.map(sec => `
        <div class="modal-section-block">
          <div class="modal-sec-title">
            <span class="modal-sec-index">${sec.index}</span>
            ${sec.title}
          </div>
          <div class="modal-sec-body">${sec.content.replace(/\n/g, '<br>')}</div>
        </div>
      `).join('');
    }

    let mockupsHtml = '';
    if (caseKey === 'hr_suite') {
      mockupsHtml = `
        <div class="modal-screens-grid hr-modal-screens-grid">
          <div class="modal-screen-card hr-desktop-card">
            <img src="assets/images/hr_suite_desktop_employee.png" alt="Talent Factor — Desktop Employee Portal View" loading="lazy">
            <div class="modal-screen-label">01. EMPLOYEE OPERATING PORTAL (DESKTOP)</div>
            <div class="modal-screen-desc">Self-service interface for Timesheets, Document Vault, Project Tasks, and Learning Management</div>
          </div>
          <div class="modal-screen-card hr-desktop-card">
            <img src="assets/images/hr_suite_desktop_admin.png" alt="Talent Factor — Desktop Admin Governance View" loading="lazy">
            <div class="modal-screen-label">02. ADMIN GOVERNANCE DESK (DESKTOP)</div>
            <div class="modal-screen-desc">Centralized admin hub for Onboarding, Assets, Attendance, Leave Hub, and HR Analytics</div>
          </div>
          <div class="modal-screen-card hr-mobile-card">
            <img src="assets/images/hr_suite_mobile_dashboard.png" alt="Talent Factor — Mobile Employee Attendance Dashboard" loading="lazy">
            <div class="modal-screen-label">03. MOBILE ATTENDANCE &amp; LEAVE (MOBILE)</div>
            <div class="modal-screen-desc">Geofenced check-in, real-time quota balances, and missed check-out recovery alerts</div>
          </div>
          <div class="modal-screen-card hr-mobile-card">
            <img src="assets/images/hr_suite_mobile_modal.png" alt="Talent Factor — Mobile Check-In Confirmation Dialog" loading="lazy">
            <div class="modal-screen-label">04. ONE-TAP ATTENDANCE FLOW (MOBILE)</div>
            <div class="modal-screen-desc">Pre-commit bottom-sheet verification dialog preventing accidental punch errors</div>
          </div>
        </div>
      `;
    } else if (caseKey === 'robuster_ride') {
      mockupsHtml = `
        <div class="modal-screens-grid">
          <div class="modal-screen-card">
            <img src="assets/images/robuster_ride_onboarding.png" alt="Onboarding &amp; Upfront Pricing Screen" loading="lazy">
            <div class="modal-screen-label">01. ONBOARDING &amp; VALUE</div>
            <div class="modal-screen-desc">Upfront fare transparency &amp; verified driver onboarding</div>
          </div>
          <div class="modal-screen-card">
            <img src="assets/images/robuster_ride_mockup_1.png" alt="Vehicle Selection &amp; Package Booking Screen" loading="lazy">
            <div class="modal-screen-label">02. VEHICLE &amp; PACKAGES</div>
            <div class="modal-screen-desc">Multi-tier categories &amp; hourly rental packages</div>
          </div>
          <div class="modal-screen-card">
            <img src="assets/images/robuster_ride_mockup_2.png" alt="Route &amp; One-Way Trip Scheduling Screen" loading="lazy">
            <div class="modal-screen-label">03. ROUTE SCHEDULER</div>
            <div class="modal-screen-desc">Multi-stop geolocation &amp; departure time picker</div>
          </div>
          <div class="modal-screen-card">
            <img src="assets/images/robuster_ride_feedback.png" alt="Trip Feedback &amp; Diagnostic Rating Screen" loading="lazy">
            <div class="modal-screen-label">04. DIAGNOSTIC RATINGS</div>
            <div class="modal-screen-desc">Sentiment-triggered feedback &amp; service chips</div>
          </div>
        </div>
      `;
    } else if (caseKey === 'travel_toshiv') {
      mockupsHtml = `
        <div class="modal-screens-grid toshiv-grid">
          <div class="modal-screen-card toshiv-screen-card">
            <div class="modal-device-stage">
              <div class="modal-mini-macbook">
                <div class="macbook-lid">
                  <div class="macbook-bezel">
                    <div class="macbook-camera"></div>
                    <div class="macbook-screen">
                      <img src="assets/images/travel_toshiv_desktop.png" alt="Travel by Toshiv on MacBook Pro Display" loading="lazy">
                    </div>
                  </div>
                </div>
                <div class="macbook-base">
                  <div class="macbook-notch"></div>
                </div>
              </div>
            </div>
            <div class="modal-screen-meta">
              <div class="modal-screen-label">01. MACBOOK DESKTOP SUITE</div>
              <div class="modal-screen-desc">Verified international job pipelines &amp; multi-country visa programs</div>
            </div>
          </div>

          <div class="modal-screen-card toshiv-screen-card">
            <div class="modal-device-stage">
              <img src="assets/images/travel_toshiv_tablet.png" alt="Foldable &amp; Tablet Experience" class="modal-device-img" loading="lazy">
            </div>
            <div class="modal-screen-meta">
              <div class="modal-screen-label">02. FOLDABLE &amp; TABLET VIEW</div>
              <div class="modal-screen-desc">Adaptive dual-pane layout for foldable devices &amp; tablets</div>
            </div>
          </div>

          <div class="modal-screen-card toshiv-screen-card">
            <div class="modal-device-stage">
              <img src="assets/images/travel_toshiv_mobile.png" alt="Mobile Pocket Experience" class="modal-device-img" loading="lazy">
            </div>
            <div class="modal-screen-meta">
              <div class="modal-screen-label">03. MOBILE POCKET UX</div>
              <div class="modal-screen-desc">Touch-optimized consultation booking &amp; instant visa queries</div>
            </div>
          </div>
        </div>
      `;
    }

    const headerHtml = `
      <div class="modal-project-tag">${data.tag}</div>
      <h2 class="modal-project-title" id="modalTitle">${data.title}</h2>
    `;

    let actionBannerHtml = '';
    if (data.prototypeUrl) {
      actionBannerHtml = `
        <div class="modal-prototype-banner">
          <div class="prototype-banner-info">
            <svg class="prototype-figma-icon" width="20" height="20" viewBox="0 0 38 57" fill="none"><path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABCFE"/><path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83"/><path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262"/><path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E"/><path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF"/></svg>
            <div>
              <div class="prototype-banner-title">INTERACTIVE FIGMA PROTOTYPE</div>
              <div class="prototype-banner-sub">Test real mobile click-through journeys, driver dispatch &amp; rating flows</div>
            </div>
          </div>
          <a href="${data.prototypeUrl}" target="_blank" rel="noopener" class="btn primary prototype-launch-btn">
            RUN FIGMA PROTOTYPE ↗
          </a>
        </div>
      `;
    }

    modalContent.innerHTML = `
      ${headerHtml}
      ${actionBannerHtml}
      ${metricsHtml}
      ${mockupsHtml}
      <div class="modal-sections-wrap">
        ${sectionsHtml}
      </div>
    `;

    caseModal.classList.add('open');
    caseModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeCaseStudy() {
    if (!caseModal) return;
    caseModal.classList.remove('open');
    caseModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (viewCaseBtns) {
    viewCaseBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const caseKey = btn.getAttribute('data-case');
        openCaseStudy(caseKey);
      });
    });
  }

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeCaseStudy);
  }

  if (caseModal) {
    caseModal.addEventListener('click', (e) => {
      if (e.target === caseModal) {
        closeCaseStudy();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && caseModal.classList.contains('open')) {
        closeCaseStudy();
      }
    });
  }

  // --- Contact Brief Form & Copy Email Handlers ---
  const briefForm = document.getElementById('briefForm');
  const briefSubmitBtn = document.getElementById('briefSubmitBtn');
  const formStatus = document.getElementById('formStatus');

  if (briefForm) {
    briefForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('fName');
      const emailInput = document.getElementById('fEmail');
      const scopeInput = document.getElementById('fScope');
      const msgInput = document.getElementById('fMsg');

      const name = (nameInput ? nameInput.value : '').trim();
      const email = (emailInput ? emailInput.value : '').trim();
      const scope = (scopeInput ? scopeInput.value : 'Design Collaboration').trim();
      const message = (msgInput ? msgInput.value : '').trim();

      if (!name || !email || !message) {
        return;
      }

      const recipient = 'johntypaul35@gmail.com';
      const subject = `[Project Brief] ${scope} — ${name}`;
      
      const body = `Hi Johnty,

I would like to discuss an opportunity regarding: ${scope}.

==================================================
PROJECT BRIEF & CONTACT DETAILS
==================================================
• Sender / Company : ${name}
• Direct Email     : ${email}
• Project Scope    : ${scope}
• Date Sent        : ${new Date().toLocaleString('en-US', { dateStyle: 'medium', timeStyle: 'short' })}

--------------------------------------------------
MESSAGE & PROJECT SCOPE:
--------------------------------------------------
${message}

==================================================
Sent via Johnty Paul Joseph Portfolio Brief Engine`;

      const mailtoUrl = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      const gmailWebUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(recipient)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

      // Update button visual state
      if (briefSubmitBtn) {
        const originalText = briefSubmitBtn.innerHTML;
        briefSubmitBtn.innerHTML = 'EMAIL CLIENT OPENED ✓';
        briefSubmitBtn.classList.add('btn-submitted');

        setTimeout(() => {
          briefSubmitBtn.innerHTML = originalText;
          briefSubmitBtn.classList.remove('btn-submitted');
        }, 4000);
      }

      // Display actionable status feedback card
      if (formStatus) {
        formStatus.style.display = 'block';
        formStatus.innerHTML = `
          <div class="form-status-inner">
            <div class="status-title">
              <span class="status-dot"></span>
              BRIEF FORMATTED &amp; DIRECTED TO GMAIL
            </div>
            <p class="status-desc">
              Your inquiry has been structured and transferred to <strong>${recipient}</strong>. If your email client did not launch automatically, choose an option below:
            </p>
            <div class="status-actions">
              <a href="${gmailWebUrl}" target="_blank" rel="noopener" class="status-link gmail-link" id="directGmailBtn">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                Open Directly in Gmail Web →
              </a>
              <button type="button" class="status-link copy-msg-link" id="copyFormattedBriefBtn">
                <span id="copyBriefLabel">Copy Formatted Brief</span>
              </button>
            </div>
          </div>
        `;

        const copyBriefBtn = document.getElementById('copyFormattedBriefBtn');
        if (copyBriefBtn) {
          copyBriefBtn.addEventListener('click', () => {
            const fullClipboardText = `Subject: ${subject}\n\n${body}`;
            navigator.clipboard.writeText(fullClipboardText).then(() => {
              const label = document.getElementById('copyBriefLabel');
              if (label) label.textContent = 'Copied to Clipboard ✓';
              setTimeout(() => {
                if (label) label.textContent = 'Copy Formatted Brief';
              }, 2500);
            }).catch(() => {
              const label = document.getElementById('copyBriefLabel');
              if (label) label.textContent = 'Copied ✓';
            });
          });
        }
      }

      // Trigger default mail client
      window.location.href = mailtoUrl;
    });
  }

  // --- Copy Email to Clipboard Interaction ---
  const copyEmailBtn = document.getElementById('copyEmailBtn');
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', () => {
      const email = 'johntypaul35@gmail.com';
      navigator.clipboard.writeText(email).then(() => {
        const copyText = copyEmailBtn.querySelector('.copy-text');
        if (copyText) {
          copyText.textContent = 'COPIED ✓';
          copyEmailBtn.classList.add('copied');
          setTimeout(() => {
            copyText.textContent = 'COPY';
            copyEmailBtn.classList.remove('copied');
          }, 2200);
        }
      }).catch(err => {
        console.error('Failed to copy email:', err);
      });
    });
  }

  // --- Smooth Scroll Anchor Offset Handling ---
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // --- Automated 10-Second Story & Showcase Switcher ---
  const autoProjects = {
    hr_suite: {
      steps: [
        {
          key: 'employee',
          label: 'EMPLOYEE PORTAL (1/4)',
          text: '<strong>Self-Service Hub (Desktop):</strong> Unified employee operating space integrating Timesheet logging, Document vault, Multi-tier Approvals, and LMS learning modules.'
        },
        {
          key: 'admin',
          label: 'ADMIN GOVERNANCE (2/4)',
          text: '<strong>Admin Workforce Desk (Desktop):</strong> Centralized enterprise control orchestrating Onboarding, Assets, Attendance Desk, Leave Hub, Exit lifecycles, and HR Analytics.'
        },
        {
          key: 'mobile_dash',
          label: 'MOBILE ATTENDANCE (3/4)',
          text: '<strong>Single-Thumb Geofencing (Mobile):</strong> Instant GPS-locked punch-in, live shift countdown, leave quota cards, and automated missed check-out recovery alerts.'
        },
        {
          key: 'mobile_modal',
          label: 'PRE-COMMIT FLOW (4/4)',
          text: '<strong>Accidental-Proof Check-In (Mobile):</strong> Two-step bottom-sheet verification dialog preventing erroneous attendance commits to the statutory payroll engine.'
        }
      ],
      current: 0,
      apply(step) {
        const stage = document.getElementById('hrAdaptiveStage');
        if (stage) {
          stage.setAttribute('data-active-slide', step.key);
          const slides = stage.querySelectorAll('.hr-stage-slide');
          slides.forEach(s => {
            if (s.classList.contains('active')) {
              s.classList.remove('active');
              s.classList.add('exit-left');
              setTimeout(() => {
                s.classList.remove('exit-left');
              }, 550);
            }
          });
          const target = stage.querySelector(`.hr-slide-${step.key.replace('_', '-')}`);
          if (target) {
            target.classList.remove('exit-left');
            void target.offsetWidth;
            target.classList.add('active');
          }
        }
      }
    },
    robuster_ride: {
      steps: [
        {
          key: 'pricing',
          label: 'UPFRONT PRICING (1/3)',
          text: '<strong>Frictionless Route Pricing:</strong> Eliminated post-booking fare shocks by calculating toll-inclusive upfront pricing across multi-stop routes before driver dispatch.'
        },
        {
          key: 'fleet',
          label: 'VEHICLE FLEET (2/3)',
          text: '<strong>Fleet Capacity &amp; Micro-Copy:</strong> Streamlined vehicle selection with upfront seat count, luggage allowances, and live GPS ETAs, reducing booking drop-offs.'
        },
        {
          key: 'feedback',
          label: 'DIAGNOSTIC RATING (3/3)',
          text: '<strong>Diagnostic Sentiment Engine:</strong> Replaced generic 5-star rating with emotion-triggered diagnostic tags to pinpoint vehicle hygiene or driver routing defects in under 3s.'
        }
      ],
      current: 0,
      apply(step) {
        const trio = document.getElementById('robusterMockupTrio');
        if (trio) trio.setAttribute('data-active-phone', step.key);
      }
    },
    travel_toshiv: {
      steps: [
        {
          key: 'mobile',
          label: 'MOBILE POCKET UX (1/3)',
          text: '<strong>Single-Thumb Ergonomics:</strong> Responsive mobile experience optimized for quick eligibility checks, sticky consultation booking, and instant WhatsApp support.'
        },
        {
          key: 'foldable',
          label: 'FOLDABLE TABLET UX (2/3)',
          text: '<strong>Dual-Screen Qualification Architecture:</strong> Optimized for Samsung Galaxy Fold &amp; tablets, organizing dense embassy regulations into side-by-side progressive cards.'
        },
        {
          key: 'desktop',
          label: 'DESKTOP IA (3/3)',
          text: '<strong>High-Trust Document Architecture:</strong> Multi-column desktop layout designed for verified international job discovery, visa documentation, and employer coordination.'
        }
      ],
      current: 0,
      apply(step) {
        const deck = document.getElementById('toshivDeckVisual');
        if (deck) deck.setAttribute('data-active-viewport', step.key);
      }
    }
  };

  const STEP_DURATION = 5500; // 5.5s per slide during hover
  const autoIntervals = {};

  function updateProjectSlide(projKey, stepIdx, isUserClick = false) {
    const proj = autoProjects[projKey];
    if (!proj) return;
    proj.current = stepIdx % proj.steps.length;
    const step = proj.steps[proj.current];

    // Ultra-smooth text morphing
    const textElem = document.getElementById(`uxText_${projKey}`);
    const stepElem = document.getElementById(`uxStep_${projKey}`);

    if (textElem) {
      textElem.style.opacity = '0';
      textElem.style.transform = 'translateY(4px)';
      setTimeout(() => {
        textElem.innerHTML = step.text;
        textElem.style.opacity = '1';
        textElem.style.transform = 'translateY(0)';
      }, 200);
    }

    if (stepElem) {
      stepElem.innerText = step.label;
    }

    // Update visual thumbnail state (triggers smooth CSS crossfades)
    if (typeof proj.apply === 'function') {
      proj.apply(step);
    }

    // Update auto-bar indicators
    const indicator = document.querySelector(`.auto-slide-indicator[data-project="${projKey}"]`);
    const card = indicator ? indicator.closest('.work-card') : null;
    const isHovering = card && card.classList.contains('is-hover-cycling');

    if (indicator) {
      const bars = indicator.querySelectorAll('.auto-bar');
      bars.forEach((b, idx) => {
        b.classList.remove('active', 'animating');
        const fill = b.querySelector('.auto-bar-fill');
        if (fill) fill.style.width = '';

        if (idx === proj.current) {
          b.classList.add('active');
          if (isHovering) {
            void b.offsetWidth; // retrigger CSS animation smoothly
            b.classList.add('animating');
          }
        }
      });
    }
  }

  // Set up Hover-Triggered Image Transition Animation per Work Card
  Object.keys(autoProjects).forEach(projKey => {
    const indicator = document.querySelector(`.auto-slide-indicator[data-project="${projKey}"]`);
    const card = indicator ? indicator.closest('.work-card') : null;

    function stopCardCycle() {
      if (autoIntervals[projKey]) {
        clearInterval(autoIntervals[projKey]);
        autoIntervals[projKey] = null;
      }
      if (card) card.classList.remove('is-hover-cycling');
      if (indicator) {
        const activeBar = indicator.querySelector('.auto-bar.active');
        if (activeBar) activeBar.classList.remove('animating');
      }
    }

    function startCardCycle() {
      stopCardCycle();
      if (!card) return;
      card.classList.add('is-hover-cycling');

      // Trigger animation on current active bar immediately
      const activeBar = indicator ? indicator.querySelector('.auto-bar.active') : null;
      if (activeBar) {
        activeBar.classList.remove('animating');
        void activeBar.offsetWidth;
        activeBar.classList.add('animating');
      }

      autoIntervals[projKey] = setInterval(() => {
        const nextIdx = (autoProjects[projKey].current + 1) % autoProjects[projKey].steps.length;
        updateProjectSlide(projKey, nextIdx);
      }, STEP_DURATION);
    }

    // Direct click on indicator bar jumps instantly
    if (indicator) {
      const bars = indicator.querySelectorAll('.auto-bar');
      bars.forEach((b, idx) => {
        b.addEventListener('click', (e) => {
          e.stopPropagation();
          updateProjectSlide(projKey, idx, true);
          if (card && card.matches(':hover')) {
            startCardCycle();
          }
        });
      });
    }

    // Card Hover Interactions: Image transition animation triggers on hover for that card section
    if (card) {
      card.addEventListener('mouseenter', () => {
        startCardCycle();
      });

      card.addEventListener('mouseleave', () => {
        stopCardCycle();
      });
    }
  });

  // --- Click Stage to Cycle Views (HR Suite) ---
  const hrStage = document.getElementById('hrAdaptiveStage');
  if (hrStage) {
    hrStage.addEventListener('click', (e) => {
      if (e.target.closest('.auto-slide-indicator')) return;
      const proj = autoProjects.hr_suite;
      if (!proj) return;
      const nextIdx = (proj.current + 1) % proj.steps.length;
      updateProjectSlide('hr_suite', nextIdx, true);
    });
  }

  // --- Hero Photo Frame 3D Interactive Parallax Tilt ---
  const heroPhotoFrame = document.getElementById('heroPhotoFrame');
  if (heroPhotoFrame) {
    heroPhotoFrame.addEventListener('mousemove', (e) => {
      const rect = heroPhotoFrame.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      const rotX = (-y / (rect.height / 2)) * 7;
      const rotY = (x / (rect.width / 2)) * 7;
      heroPhotoFrame.style.transform = `perspective(1000px) rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`;
    });

    heroPhotoFrame.addEventListener('mouseleave', () => {
      heroPhotoFrame.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    });
  }

  // --- Magical Golden Spring Glitter (Harry Potter Style Ethereal Spark Drift) ---
  const glitterCanvas = document.getElementById('heroGlitterCanvas');
  const heroSection = document.getElementById('hero');

  if (glitterCanvas && heroSection) {
    const ctx = glitterCanvas.getContext('2d');
    let width = 0;
    let height = 0;
    let dpr = 1;
    let animationFrameId = null;
    let isVisible = true;
    const mouse = { x: -9999, y: -9999, active: false };

    // Responsive particle count: ~72 on desktop, ~38 on mobile for delicate starry constellation
    function getParticleCount() {
      return window.innerWidth < 768 ? 38 : 72;
    }

    // Color Palette: 24K Radiant Gold, Incandescent Champagne White, Warm Amber, Mystic Mint
    const colors = [
      { r: 255, g: 215, b: 75 },   // 24K Radiant Gold
      { r: 255, g: 248, b: 220 },  // Incandescent Champagne
      { r: 240, g: 170, b: 50 },   // Warm Amber Flame
      { r: 255, g: 232, b: 145 },  // Pale Golden Sunlight
      { r: 125, g: 225, b: 205 }   // Subtle Ethereal Mint / Magic Teal
    ];

    class GlitterParticle {
      constructor(isInitial = false) {
        this.reset(isInitial);
      }

      reset(isInitial = false) {
        this.x = Math.random() * width;
        // Float from bottom upward through the hero
        this.y = isInitial ? Math.random() * height : height + Math.random() * 20;
        
        // Gentle upward drift
        this.vy = -(0.32 + Math.random() * 0.65);
        
        // Delicate horizontal air currents (sinusoidal sway)
        this.swaySpeed = 0.015 + Math.random() * 0.022;
        this.swayAmp = 0.5 + Math.random() * 1.2;
        this.swayPhase = Math.random() * Math.PI * 2;
        
        // Micro-fine particle scale: delicate, pinpoint sparks (0.65px - 1.6px)
        this.size = 0.65 + Math.random() * 0.95;
        
        // 45% are 4-point curved diamond sparkles, 55% are fine luminous stardust motes
        this.isStar = Math.random() < 0.45;
        this.rotation = Math.random() * Math.PI * 2;
        this.rotationSpeed = (Math.random() - 0.5) * 0.028;

        // Color & Twinkle
        const colorPick = colors[Math.floor(Math.random() * colors.length)];
        this.r = colorPick.r;
        this.g = colorPick.g;
        this.b = colorPick.b;

        this.baseAlpha = 0.4 + Math.random() * 0.45;
        this.twinkleSpeed = 0.032 + Math.random() * 0.055;
        this.twinklePhase = Math.random() * Math.PI * 2;
      }

      update() {
        this.y += this.vy;
        this.swayPhase += this.swaySpeed;
        this.x += Math.sin(this.swayPhase) * this.swayAmp;

        if (this.isStar) {
          this.rotation += this.rotationSpeed;
        }

        this.twinklePhase += this.twinkleSpeed;

        // Subtle interactive mouse repulsion wave
        if (mouse.active) {
          const dx = this.x - mouse.x;
          const dy = this.y - mouse.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 100 && dist > 0) {
            const force = (100 - dist) / 100;
            this.x += (dx / dist) * force * 1.5;
            this.y += (dy / dist) * force * 0.8;
          }
        }

        // Fade in gracefully from bottom, stay brilliant across hero, fade out gently as it nears top
        let fadeMultiplier = 1;
        if (this.y > height * 0.84) {
          fadeMultiplier = Math.max(0, (height - this.y) / (height * 0.16));
        } else if (this.y < height * 0.25) {
          fadeMultiplier = Math.max(0, this.y / (height * 0.25));
        }

        // High-contrast twinkle pulse (sharp, eye-catching glint)
        const glint = Math.pow(Math.max(0, Math.sin(this.twinklePhase)), 4.5);
        this.glint = glint;
        this.currentAlpha = Math.min(1, (this.baseAlpha * 0.35 + glint * 0.75) * fadeMultiplier);

        // Respawn when past the top
        if (this.y < -12 || (this.y < height * 0.15 && this.currentAlpha <= 0.01)) {
          this.reset(false);
        }
      }

      draw() {
        if (this.currentAlpha <= 0.01) return;

        ctx.save();
        
        if (this.isStar) {
          // 4-point tapered diamond flare (Harry Potter magical wand spark)
          ctx.translate(this.x, this.y);
          ctx.rotate(this.rotation);
          
          const spikeLen = this.size * (2.8 + this.glint * 2.4);
          const spikeWidth = Math.max(0.45, this.size * 0.32);

          // Outer luminous bloom halo
          const bloomRadius = Math.max(3, spikeLen * 1.5);
          const glowGrad = ctx.createRadialGradient(0, 0, 0, 0, 0, bloomRadius);
          glowGrad.addColorStop(0, `rgba(${this.r}, ${this.g}, ${this.b}, ${this.currentAlpha * 0.8})`);
          glowGrad.addColorStop(0.45, `rgba(${this.r}, ${this.g}, ${this.b}, ${this.currentAlpha * 0.22})`);
          glowGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
          ctx.fillStyle = glowGrad;
          ctx.beginPath();
          ctx.arc(0, 0, bloomRadius, 0, Math.PI * 2);
          ctx.fill();

          // Vertical curved needle flare
          ctx.fillStyle = `rgba(${this.r}, ${this.g}, ${this.b}, ${this.currentAlpha})`;
          ctx.beginPath();
          ctx.moveTo(0, -spikeLen);
          ctx.quadraticCurveTo(0, 0, spikeWidth, 0);
          ctx.quadraticCurveTo(0, 0, 0, spikeLen);
          ctx.quadraticCurveTo(0, 0, -spikeWidth, 0);
          ctx.quadraticCurveTo(0, 0, 0, -spikeLen);
          ctx.closePath();
          ctx.fill();

          // Horizontal curved needle flare
          ctx.beginPath();
          ctx.moveTo(-spikeLen, 0);
          ctx.quadraticCurveTo(0, 0, 0, spikeWidth);
          ctx.quadraticCurveTo(0, 0, spikeLen, 0);
          ctx.quadraticCurveTo(0, 0, 0, -spikeWidth);
          ctx.quadraticCurveTo(0, 0, -spikeLen, 0);
          ctx.closePath();
          ctx.fill();

          // Incandescent pure-white core dot
          ctx.fillStyle = `rgba(255, 255, 255, ${Math.min(1, this.currentAlpha * 1.6)})`;
          ctx.beginPath();
          ctx.arc(0, 0, Math.max(0.5, this.size * 0.65), 0, Math.PI * 2);
          ctx.fill();
        } else {
          // Luminous micro-stardust mote
          const moteRadius = this.size * (1.6 + this.glint * 1.1);
          const radGrad = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, moteRadius);
          radGrad.addColorStop(0, `rgba(255, 255, 250, ${Math.min(1, this.currentAlpha * 1.4)})`);
          radGrad.addColorStop(0.35, `rgba(${this.r}, ${this.g}, ${this.b}, ${this.currentAlpha * 0.85})`);
          radGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
          ctx.fillStyle = radGrad;
          ctx.beginPath();
          ctx.arc(this.x, this.y, moteRadius, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.restore();
      }
    }

    // Interactive Wand Sparkle Emitter on Mouse Movement
    class CursorSparkle {
      constructor(x, y) {
        this.x = x + (Math.random() - 0.5) * 14;
        this.y = y + (Math.random() - 0.5) * 14;
        this.vx = (Math.random() - 0.5) * 1.4;
        this.vy = -(0.5 + Math.random() * 1.2);
        this.size = 0.7 + Math.random() * 1.1;
        this.life = 1.0;
        this.decay = 0.025 + Math.random() * 0.02;
        this.rotation = Math.random() * Math.PI * 2;
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.vx *= 0.96;
        this.vy += 0.02; // soft gravity
        this.life -= this.decay;
        this.rotation += 0.04;
      }

      draw() {
        if (this.life <= 0) return;
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);

        const spike = this.size * (2.2 * this.life);
        const w = Math.max(0.4, this.size * 0.3);

        ctx.fillStyle = `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${this.life * 0.9})`;
        ctx.beginPath();
        ctx.moveTo(0, -spike);
        ctx.quadraticCurveTo(0, 0, w, 0);
        ctx.quadraticCurveTo(0, 0, 0, spike);
        ctx.quadraticCurveTo(0, 0, -w, 0);
        ctx.quadraticCurveTo(0, 0, 0, -spike);
        ctx.closePath();
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(-spike, 0);
        ctx.quadraticCurveTo(0, 0, 0, w);
        ctx.quadraticCurveTo(0, 0, spike, 0);
        ctx.quadraticCurveTo(0, 0, 0, -w);
        ctx.quadraticCurveTo(0, 0, -spike, 0);
        ctx.closePath();
        ctx.fill();

        ctx.fillStyle = `rgba(255, 255, 255, ${this.life * 1.2})`;
        ctx.beginPath();
        ctx.arc(0, 0, Math.max(0.4, this.size * 0.5), 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
      }
    }

    let particles = [];
    let cursorSparkles = [];

    function resize() {
      const rect = heroSection.getBoundingClientRect();
      width = rect.width;
      height = rect.height + 60;
      dpr = Math.min(window.devicePixelRatio || 1, 2);

      glitterCanvas.width = width * dpr;
      glitterCanvas.height = height * dpr;
      glitterCanvas.style.width = `${width}px`;
      glitterCanvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);

      const targetCount = getParticleCount();
      if (particles.length === 0) {
        for (let i = 0; i < targetCount; i++) {
          particles.push(new GlitterParticle(true));
        }
      } else {
        while (particles.length < targetCount) particles.push(new GlitterParticle(true));
        while (particles.length > targetCount) particles.pop();
      }
    }

    function animate() {
      if (!isVisible) return;

      ctx.clearRect(0, 0, width, height);
      ctx.globalCompositeOperation = 'lighter';

      // Draw background ambient particles
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
      }

      // Draw interactive cursor sparkles
      for (let i = cursorSparkles.length - 1; i >= 0; i--) {
        cursorSparkles[i].update();
        cursorSparkles[i].draw();
        if (cursorSparkles[i].life <= 0) {
          cursorSparkles.splice(i, 1);
        }
      }

      ctx.globalCompositeOperation = 'source-over';
      animationFrameId = requestAnimationFrame(animate);
    }

    // Window Resize with throttle
    let resizeTimer;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        resize();
      }, 150);
    });

    // Mouse Tracking over Hero with Ethereal Sparkle Emission
    heroSection.addEventListener('mousemove', (e) => {
      const rect = glitterCanvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;

      // Spawn 1-2 interactive cursor wand sparkles
      if (cursorSparkles.length < 35 && Math.random() < 0.65) {
        cursorSparkles.push(new CursorSparkle(mouse.x, mouse.y));
        if (Math.random() < 0.35) {
          cursorSparkles.push(new CursorSparkle(mouse.x, mouse.y));
        }
      }
    });

    heroSection.addEventListener('mouseleave', () => {
      mouse.active = false;
    });

    // Pause when off-screen for 60fps zero battery drain
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        isVisible = entry.isIntersecting;
        if (isVisible) {
          cancelAnimationFrame(animationFrameId);
          animationFrameId = requestAnimationFrame(animate);
        } else {
          cancelAnimationFrame(animationFrameId);
        }
      });
    }, { threshold: 0.05 });

    observer.observe(heroSection);

    // Initial setup
    resize();
    animationFrameId = requestAnimationFrame(animate);
  }

});
