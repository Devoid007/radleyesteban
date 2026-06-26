const projects = [
  // FINTECH & BANKING
  {
    id: 1,
    title: "Xentra Solutions Inc.",
    category: "fintech",
    tag: "CRM Transformation / FinTech Delivery",
    image: "assets/projects/Radley Prosperna Awards.jpeg",
    description:
      "Supported CRM transformation and implementation work across fintech, payments, healthcare, and digital commerce environments.",
    results: ["CRM delivery", "Workflow redesign", "Stakeholder alignment"],
    problem:
      "Organizations needed better CRM visibility, cleaner workflows, and stronger operational reporting across complex business processes.",
    action:
      "Supported implementation planning, requirements gathering, workflow redesign, UAT, dashboards, and stakeholder coordination.",
    result:
      "Improved CRM visibility, operational structure, and reporting foundations for revenue and customer-facing teams.",
    link: "https://www.xentrasolutions.com/"
  },
  {
    id: 2,
    title: "Sun Savings Bank",
    category: "fintech",
    tag: "Banking / Digital Experience",
    image: "assets/projects/Radley Prosperna Awards.jpeg",
    description:
      "Led website modernization and digital customer experience initiatives for a banking client.",
    results: ["UAT managed", "Go-live readiness", "Stakeholders aligned"],
    problem:
      "The bank needed a modernized digital presence with clearer customer journeys, better stakeholder alignment, and structured go-live readiness.",
    action:
      "Coordinated requirements, page planning, UAT execution, feedback management, and implementation readiness.",
    result:
      "Supported the bank’s website modernization and helped align stakeholders toward a cleaner digital customer experience.",
    link: "https://www.sunsavings.ph/"
  },
  {
    id: 3,
    title: "MVSM Bank",
    category: "fintech",
    tag: "Banking / Digital Transformation",
    image: "assets/projects/Radley Prosperna Awards.jpeg",
    description:
      "Supported digital transformation and customer experience initiatives through platform implementation and operational enablement.",
    results: ["Digital enablement", "Customer experience", "Operational support"],
    problem:
      "The business needed support in improving digital operations and customer-facing processes.",
    action:
      "Supported platform implementation, stakeholder coordination, and operational readiness.",
    result:
      "Helped strengthen digital transformation initiatives and improve customer experience foundations.",
    link: "https://www.mvsmbank.com/"
  },
  {
    id: 4,
    title: "Koin Payments",
    category: "fintech",
    tag: "Payments / CRM Operations",
    image: "assets/projects/Radley Prosperna Awards.jpeg",
    description:
      "Delivered CRM transformation support for payments operations, transaction visibility, and workflow improvement.",
    results: ["Payments workflows", "CRM redesign", "Reporting visibility"],
    problem:
      "Payments operations needed clearer processes, stronger reporting visibility, and better CRM structure.",
    action:
      "Supported CRM redesign, requirements gathering, stakeholder alignment, and process improvement planning.",
    result:
      "Improved operational workflows and helped strengthen visibility across customer and payment-related processes.",
    link: "https://www.koinpayments.com/"
  },
  {
    id: 5,
    title: "MarkerTrax",
    category: "fintech",
    tag: "FinTech / CRM Transformation",
    image: "assets/projects/Radley Prosperna Awards.jpeg",
    description:
      "Supported CRM transformation projects involving fintech workflows, operational processes, and reporting improvements.",
    results: ["CRM transformation", "Process visibility", "Workflow support"],
    problem:
      "The business needed stronger CRM workflows and operational visibility across revenue and customer processes.",
    action:
      "Supported implementation planning, stakeholder requirements, workflow redesign, and reporting structures.",
    result:
      "Helped improve CRM process clarity and operational visibility for customer-facing teams.",
    link: "https://www.markertrax.com/"
  },
  {
    id: 6,
    title: "Kamet Mexico",
    category: "fintech",
    tag: "International CRM / Marketing Cloud",
    image: "assets/projects/Radley Prosperna Awards.jpeg",
    description:
      "Supported CRM transformation and Marketing Cloud initiatives across international business operations.",
    results: ["Marketing Cloud", "Lifecycle tracking", "Automation support"],
    problem:
      "The business needed stronger lifecycle visibility and automation support across customer acquisition and engagement.",
    action:
      "Supported CRM and Marketing Cloud initiatives, lifecycle tracking, and automation planning.",
    result:
      "Helped strengthen customer engagement workflows and lifecycle visibility across international operations.",
    link: "https://www.kamet.mx/"
  },

  // E-COMMERCE
  {
    id: 7,
    title: "Prosperna Portfolio",
    category: "ecommerce",
    tag: "SaaS / E-commerce Growth",
    image: "assets/projects/Radley Prosperna Awards.jpeg",
    description:
      "Supported 147 businesses through e-commerce onboarding, adoption, retention, account growth, and digital enablement initiatives.",
    results: ["147 businesses", "₱15.47M+ GMV", "15% retention lift"],
    problem:
      "Businesses needed stronger digital commerce adoption, smoother onboarding, and clearer customer success processes.",
    action:
      "Managed implementation, onboarding, platform adoption, QBRs, customer health reviews, and expansion initiatives.",
    result:
      "Enabled ₱15.47M+ in e-commerce GMV, supported 147 businesses, improved retention, and contributed to SaaS revenue growth.",
    link: "https://www.prosperna.com/"
  },
  {
    id: 8,
    title: "BUM Equipment",
    category: "ecommerce",
    tag: "Retail / E-commerce Enablement",
    image: "assets/projects/Radley Prosperna Awards.jpeg",
    description:
      "Supported e-commerce enablement, platform onboarding, and digital commerce adoption for a retail brand.",
    results: ["Retail enablement", "Platform onboarding", "Digital adoption"],
    problem:
      "The brand needed stronger e-commerce readiness and platform adoption.",
    action:
      "Supported onboarding, digital commerce setup, stakeholder alignment, and operational enablement.",
    result:
      "Helped strengthen digital commerce adoption and online selling readiness.",
    link: "https://www.bumblackarmy.com/"
  },
  {
    id: 9,
    title: "Harbour City",
    category: "ecommerce",
    tag: "Restaurant / Multi-Location E-commerce",
    image: "assets/projects/Radley Firehouse.jpeg",
    description:
      "Led e-commerce rollout support across restaurant operations and multiple locations.",
    results: ["Multi-location rollout", "Operational training", "Online ordering"],
    problem:
      "The business needed a structured e-commerce rollout across restaurant locations with operational alignment.",
    action:
      "Managed onboarding, training, stakeholder coordination, store readiness, and operational handover.",
    result:
      "Improved online ordering readiness and supported smoother e-commerce adoption across locations.",
    link: "https://www.iwantdimsum.com/"
  },
  {
    id: 10,
    title: "MONO",
    category: "ecommerce",
    tag: "Retail / E-commerce Operations",
    image: "assets/projects/Radley Prosperna Awards.jpeg",
    description:
      "Supported e-commerce operations, platform adoption, and digital customer journey improvements.",
    results: ["Platform support", "Customer journey", "Digital commerce"],
    problem:
      "The brand needed support in improving its digital commerce experience and operational readiness.",
    action:
      "Supported platform enablement, customer journey review, and implementation coordination.",
    result:
      "Helped improve digital commerce foundations and online customer experience.",
    link: "https://mono.ph/"
  },
  {
    id: 11,
    title: "Alibi Lounge Bar",
    category: "ecommerce",
    tag: "F&B / Digital Presence",
    image: "assets/projects/Radley Firehouse.jpeg",
    description:
      "Supported digital presence and e-commerce-related enablement for a food and beverage brand.",
    results: ["Digital presence", "F&B support", "Online visibility"],
    problem:
      "The business needed a stronger online customer touchpoint and digital readiness.",
    action:
      "Supported digital setup, platform coordination, and customer-facing improvements.",
    result:
      "Helped improve digital presence and customer accessibility online.",
    link: "https://www.alibibaralabang.com/"
  },
  {
    id: 12,
    title: "Baker J",
    category: "ecommerce",
    tag: "Hospitality / F&B E-commerce",
    image: "assets/projects/Radley Firehouse.jpeg",
    description:
      "Supported platform onboarding, digital commerce adoption, and operational enablement for Baker J.",
    results: ["Platform adoption", "F&B enablement", "Customer journey"],
    problem:
      "The brand needed stronger online ordering readiness and operational alignment.",
    action:
      "Supported onboarding, adoption, stakeholder coordination, and customer journey improvements.",
    result:
      "Helped strengthen digital commerce readiness and operational adoption.",
    link: "https://www.bakerj.com/"
  },
  {
    id: 13,
    title: "Firehouse Pizza",
    category: "ecommerce",
    tag: "Restaurant / Online Ordering",
    image: "assets/projects/Radley Firehouse.jpeg",
    description:
      "Supported e-commerce adoption and operational enablement for Firehouse Pizza.",
    results: ["Online ordering", "Store enablement", "Platform adoption"],
    problem:
      "The restaurant needed stronger online ordering and digital commerce readiness.",
    action:
      "Supported platform onboarding, implementation coordination, and operational setup.",
    result:
      "Improved online ordering readiness and helped support smoother customer ordering experiences.",
    link: "https://www.firehousepizzas.com/"
  },

  // HEALTHCARE
  {
    id: 14,
    title: "Paysign",
    category: "healthcare",
    tag: "Healthcare FinTech / Salesforce Transformation",
    image: "assets/projects/Radley Prosperna Awards.jpeg",
    description:
      "Led Salesforce transformation initiatives supporting 200+ users across multiple departments.",
    results: ["200+ users", "Salesforce", "Cross-functional workflows"],
    problem:
      "The organization needed stronger CRM visibility, operational workflows, and customer lifecycle support across departments.",
    action:
      "Implemented and supported Sales Cloud, Service Cloud, Marketing Cloud, Pardot, and operational workflows.",
    result:
      "Improved customer lifecycle visibility, cross-functional process efficiency, and CRM adoption.",
    link: "https://paysign.com/"
  },
  {
    id: 15,
    title: "ABENA",
    category: "healthcare",
    tag: "Healthcare / Service Cloud",
    image: "assets/projects/Radley Prosperna Awards.jpeg",
    description:
      "Led Service Cloud and Sales Cloud implementation initiatives supporting customer service and sales operations.",
    results: ["Service Cloud", "Sales Cloud", "Workflow design"],
    problem:
      "Customer service and sales teams needed better workflows and visibility across the customer lifecycle.",
    action:
      "Designed CRM workflows and supported Salesforce implementation across service and sales operations.",
    result:
      "Improved customer lifecycle management, service visibility, and operational structure.",
    link: "https://www.abena.com/"
  },
  {
    id: 16,
    title: "GoRocky",
    category: "healthcare",
    tag: "Healthcare / Lifecycle Revenue",
    image: "assets/projects/Radley GoRocky.jpeg",
    description:
      "Built customer lifecycle, sales enablement, reactivation, and AI-assisted workflows that contributed to direct revenue growth.",
    results: ["₱3.7M+ revenue", "~50% repeat growth", "AI workflows"],
    problem:
      "The business needed stronger reactivation, lifecycle messaging, sales enablement, and customer trust-building processes.",
    action:
      "Built AI-assisted onboarding, objection handling, reactivation messaging, customer education, and sales enablement frameworks.",
    result:
      "Generated ₱3.7M+ in direct revenue and helped improve repeat purchase performance by approximately 50%.",
    link: "https://gorocky.ph/"
  },

  // HOSPITALITY
  {
    id: 17,
    title: "Chroma Hospitality",
    category: "hospitality",
    tag: "Hospitality / Customer Success Recovery",
    image: "assets/projects/Radley Chroma - Timberland.jpeg",
    description:
      "Recovered a churn-risk hospitality account by diagnosing stakeholder, documentation, and technical blockers.",
    results: ["Issues fixed in 1 week", "Trust rebuilt", "Upsell paths found"],
    problem:
      "A major hospitality client had slow decision-making, incomplete documentation, unclear ownership, and multiple issues happening at once.",
    action:
      "Mapped stakeholders, identified root problems, set focused meetings, aligned internally, documented requirements, and presented a recovery plan.",
    result:
      "Urgent technical issues were fixed within a week, documentation was cleaned up, trust was rebuilt, and out-of-scope upsell opportunities surfaced.",
    link: "https://www.chromahospitality.com/"
  },
  {
    id: 18,
    title: "Crimson Hotel Boracay",
    category: "hospitality",
    tag: "Hospitality / Digital Experience",
    image: "assets/projects/Radley Chroma - Timberland.jpeg",
    description:
      "Supported hospitality-related digital customer experience and operational enablement initiatives.",
    results: ["Hospitality support", "Digital operations", "Customer experience"],
    problem:
      "Hospitality teams needed stronger digital customer experience and operational readiness.",
    action:
      "Supported stakeholder alignment, platform readiness, and customer-facing digital improvements.",
    result:
      "Helped strengthen hospitality digital experience and operational support.",
    link: "https://www.crimsonhotel.com/boracay"
  },
  {
    id: 19,
    title: "Okada Manila",
    category: "hospitality",
    tag: "Hospitality / Enterprise Experience",
    image: "assets/projects/Radley Chroma - Timberland.jpeg",
    description:
      "Part of a hospitality portfolio demonstrating exposure to large-scale customer experience environments.",
    results: ["Enterprise hospitality", "Customer experience", "Digital growth"],
    problem:
      "Large hospitality brands require strong customer experience, visibility, and digital engagement.",
    action:
      "Supported digital growth thinking, customer journey review, and hospitality-focused operational understanding.",
    result:
      "Built stronger exposure to enterprise hospitality customer experience and digital growth standards.",
    link: "https://okadamanila.com/"
  },
  {
    id: 20,
    title: "The Crib Living",
    category: "hospitality",
    tag: "Hospitality / Co-living",
    image: "assets/projects/Radley Chroma - Timberland.jpeg",
    description:
      "Supported hospitality and property-related digital customer experience initiatives.",
    results: ["Digital presence", "Customer journey", "Hospitality operations"],
    problem:
      "Property and hospitality businesses need clear digital journeys and strong customer-facing experiences.",
    action:
      "Supported digital experience review, customer journey thinking, and operational alignment.",
    result:
      "Helped strengthen understanding of hospitality and property digital growth opportunities.",
    link: "https://www.thecribcoliving.filinvest.ph/"
  },
  {
    id: 21,
    title: "Timberland Highlands Resort",
    category: "hospitality",
    tag: "Hospitality / Booking App Project",
    image: "assets/projects/Radley Chroma - Timberland.jpeg",
    description:
      "Assigned as Project Manager to build a bicycle booking app for Timberland Highlands Resort.",
    results: ["Project management", "Booking app", "Hospitality operations"],
    problem:
      "The resort needed a structured bicycle booking experience to support guest operations and activity management.",
    action:
      "Managed the project requirements, stakeholder coordination, planning, and delivery process for the bicycle booking app.",
    result:
      "Helped create a more structured booking flow for resort activity operations and guest experience.",
    link: "https://www.timberlandresort.com/"
  }
];

const events = [
  {
    id: 1,
    title: "PANA Foundation Brand Case Study Champion",
    category: "recognition",
    image: "assets/Radley Awards.png",
    description:
      "Won 1st place in a brand case study competition by applying business strategy, market understanding, and brand thinking.",
    details:
      "This was a 1st place win for the PANA Foundation, connected to the Philippine Association of National Advertisers. The competition strengthened how I approach branding: understanding the business problem first, identifying what makes the brand valuable, and shaping the strategy around what can actually make it succeed.",
    size: "large"
  },
  {
    id: 2,
    title: "Startup Village x Quezon City SBCDPO",
    category: "community",
    image: "assets/Radley Certificate 2.jpeg",
    description:
      "Spoke at a Startup Village event in partnership with Quezon City’s SBCDPO, helping SMBs improve their e-commerce stores.",
    details:
      "This Certificate of Appreciation came from speaking at an event by Startup Village in partnership with Quezon City’s Small Business and Cooperatives Development Promotions Office. I helped multiple SMBs understand how to improve their e-commerce presence, online stores, and digital customer experience.",
    size: ""
  },
  {
    id: 3,
    title: "Philippine Startup Week Speaker",
    category: "speaker",
    image: "assets/Radley Certificate.jpeg",
    description:
      "Spoke during Philippine Startup Week for the PYEA community, sharing practical insights for entrepreneurs and startups.",
    details:
      "I was invited to speak during Philippine Startup Week, where I had a segment with the PYEA Community, the Philippine Young Entrepreneurs Association. This gave me the opportunity to share business, e-commerce, and growth insights with young entrepreneurs building their own ventures.",
    size: ""
  },
  {
    id: 4,
    title: "Philippine Junior Marketing Association Representative",
    category: "speaker",
    image: "assets/Radley College Speaker.jpeg",
    description:
      "Represented PJMA during college and began my speaking journey by promoting a large-scale marketing event across schools.",
    details:
      "This was where my speaking journey started. I represented the Philippine Junior Marketing Association during college when PJMA was hosting a large-scale event. I traveled to multiple schools across the Philippines to connect with students, promote the event, and build interest around marketing, leadership, and student involvement.",
    size: ""
  },
  {
    id: 5,
    title: "USAID E-commerce and FinTech Talk with GCash",
    category: "speaker",
    image: "assets/Radley Formal Group.jpeg",
    description:
      "Spoke alongside GCash at a USAID event focused on e-commerce, fintech, and business growth.",
    details:
      "At this USAID event, I spoke alongside GCash about e-commerce and fintech. This experience showed how digital payments, online selling, and business education can help local businesses become more competitive and accessible in the digital economy.",
    size: ""
  },
  {
    id: 6,
    title: "USAID Business Session in Pasay City",
    category: "community",
    image: "assets/Radley Formal Group 2.jpeg",
    description:
      "Joined officials and business owners in Pasay City to discuss digital commerce and business growth opportunities.",
    details:
      "This was another USAID event where I spoke alongside officials and business owners in Pasay City. The session focused on helping local businesses understand how digital tools, e-commerce, and better customer journeys can support growth.",
    size: ""
  },
  {
    id: 7,
    title: "USAID Session with PCCI-QC",
    category: "community",
    image: "assets/Radley Formal Group 3.jpeg",
    description:
      "Delivered a talk for PCCI-QC, supporting business owners with digital commerce and growth education.",
    details:
      "This USAID session was with PCCI-QC, the Philippine Chamber of Commerce and Industry Quezon City. I gave a talk to business owners and professionals about digital commerce, online selling, and how businesses can use e-commerce as a growth channel.",
    size: ""
  },
  {
    id: 8,
    title: "DigiCities Masterclass in Davao",
    category: "community",
    image: "assets/Radley Formal Group 4.jpeg",
    description:
      "Spoke to SMBs in Davao about leveraging e-commerce to grow their businesses through the DigiCities Masterclass.",
    details:
      "This was a DigiCities Masterclass event in Davao where I spoke to SMBs about using e-commerce to grow their businesses. The focus was practical: helping entrepreneurs understand how digital channels, online stores, customer experience, and better execution can support real business growth.",
    size: ""
  },
  {
    id: 9,
    title: "Caloocan City Business Talk",
    category: "community",
    image: "assets/Radley Formal Group 5.jpeg",
    description:
      "Spoke at an event in Caloocan City focused on helping businesses understand digital growth opportunities.",
    details:
      "I was invited as a speaker for an event in Caloocan City, where I shared practical insights with business owners on digital commerce, online customer experience, and how businesses can start building stronger digital foundations.",
    size: ""
  },
  {
    id: 10,
    title: "Victorias City, Negros Occidental Talk",
    category: "speaker",
    image: "assets/Radley Formal Group 6.jpeg",
    description:
      "Spoke in Victorias City, Negros Occidental, helping local businesses understand how e-commerce can support growth.",
    details:
      "I was a speaker in Victorias City, Negros Occidental, where I discussed how businesses can leverage e-commerce to expand their reach, improve customer access, and create new growth opportunities.",
    size: ""
  },
  {
    id: 11,
    title: "Business Manual GrowthCon",
    category: "networking",
    image: "assets/Radley Growth Con.jpeg",
    description:
      "Attended GrowthCon by The Business Manual to deepen my exposure to business growth, leadership, and entrepreneurship.",
    details:
      "I attended GrowthCon by The Business Manual to stay connected with business trends, growth strategies, entrepreneurship, and leadership conversations. Events like this help me sharpen how I think about business models, growth, and market opportunities.",
    size: ""
  },
  {
    id: 12,
    title: "Business Manual Growth Event",
    category: "networking",
    image: "assets/Radley Growth Con 2.jpeg",
    description:
      "Joined another Business Manual event to learn from founders, operators, and business leaders across industries.",
    details:
      "This was another event by The Business Manual where I connected with business leaders, operators, and founders. I use these rooms to learn how different businesses grow, what challenges they face, and how operators think about scale.",
    size: ""
  },
  {
    id: 13,
    title: "Startup Community Networking",
    category: "networking",
    image: "assets/Radley Networking 1.jpeg",
    description:
      "Built relationships within the startup community by connecting with CEOs and representatives from different companies.",
    details:
      "This moment reflects one of the parts of business I value most: building relationships. I grew my network in the startup community by speaking with CEOs, founders, and company representatives, learning how different teams think about growth, product, customers, and operations.",
    size: ""
  },
  {
    id: 14,
    title: "SME Convention Networking",
    category: "networking",
    image: "assets/Radley Networking 2.jpeg",
    description:
      "Attended the SME Convention and built trusted connections across different business sectors.",
    details:
      "At the SME Convention, I connected with professionals and business owners from different industries. These conversations helped me broaden my understanding of business models, market challenges, and the different ways companies approach growth.",
    size: ""
  },
  {
    id: 15,
    title: "Valenzuela City E-commerce Talk",
    category: "community",
    image: "assets/Radley Speaking.jpeg",
    description:
      "Gave a talk in Valenzuela City on e-commerce and how local businesses can use digital channels to grow.",
    details:
      "I gave a talk in Valenzuela City focused on e-commerce and business growth. The goal was to help local business owners understand how online stores, digital customer journeys, and better execution can help them reach more customers.",
    size: ""
  },
  {
    id: 16,
    title: "Negros Occidental E-commerce Stage Talk",
    category: "speaker",
    image: "assets/Radley Speaking 3.jpeg",
    description:
      "Spoke on stage in Negros Occidental about helping businesses leverage e-commerce for growth.",
    details:
      "This was a stage talk in Negros Occidental where I discussed how businesses can leverage e-commerce to improve reach, customer access, and revenue opportunities. It reflects my focus on making digital growth practical for business owners.",
    size: ""
  }
];

const systems = {
  crm: ["Salesforce", "Sales Cloud", "Service Cloud", "Marketing Cloud", "Pardot", "HubSpot", "Zoho", "Bigin"],
  automation: ["Make", "Zapier", "AI-assisted workflows", "Lifecycle messaging", "Process automation", "SOP systems"],
  analytics: ["KPI Dashboards", "Executive Reporting", "QBR Reporting", "Google Analytics", "Google Search Console", "Revenue Reports"],
  commerce: ["Prosperna", "Shopify", "WooCommerce", "Wix", "Online Ordering", "E-commerce GMV"],
  collab: ["Jira", "ClickUp", "Slack", "Notion", "Google Workspace", "Stakeholder Workshops"]
};

const projectGrid = document.getElementById("projectGrid");
const clientSitesGrid = document.getElementById("clientSitesGrid");
const eventsGrid = document.getElementById("eventsGrid");
const tabContent = document.getElementById("tabContent");

function renderProjects(filter = "all") {
  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter(project => project.category === filter);

  projectGrid.innerHTML = filteredProjects
    .map(project => {
      return `
        <article class="project-card reveal" data-project-id="${project.id}" data-category="${project.category}">
          <div class="project-image">
            <img src="${project.image}" alt="${project.title}">
          </div>

          <div class="project-body">
            <span class="project-tag">${project.tag}</span>
            <h3>${project.title}</h3>
            <p>${project.description}</p>

            <div class="project-results">
              ${project.results.map(result => `<span>${result}</span>`).join("")}
            </div>
          </div>
        </article>
      `;
    })
    .join("");

  observeRevealElements();
  attachProjectModalListeners();
}

function renderEvents(filter = "all") {
  const filteredEvents =
    filter === "all"
      ? events
      : events.filter(event => event.category === filter);

  eventsGrid.innerHTML = filteredEvents
    .map(event => {
      return `
        <article class="event-card ${event.size}" data-event-id="${event.id}" data-category="${event.category}">
          <img src="${event.image}" alt="${event.title}">
          <div class="event-info">
            <span>${event.category}</span>
            <h3>${event.title}</h3>
            <p>${event.description}</p>
          </div>
        </article>
      `;
    })
    .join("");

  attachEventModalListeners();
  observeRevealElements();
}

function renderSystems(tab = "crm") {
  tabContent.innerHTML = `
    <div class="tool-grid">
      ${systems[tab].map(tool => `<div class="tool-pill">${tool}</div>`).join("")}
    </div>
  `;
}

function setupFilters() {
  document.querySelectorAll("#projectFilters .filter-btn").forEach(button => {
    button.addEventListener("click", () => {
      document.querySelectorAll("#projectFilters .filter-btn").forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");
      renderProjects(button.dataset.filter);
    });
  });

  document.querySelectorAll("#eventFilters .filter-btn").forEach(button => {
    button.addEventListener("click", () => {
      document.querySelectorAll("#eventFilters .filter-btn").forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");
      renderEvents(button.dataset.filter);
    });
  });
}

function setupTabs() {
  document.querySelectorAll(".tab-btn").forEach(button => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".tab-btn").forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");
      renderSystems(button.dataset.tab);
    });
  });
}

function attachProjectModalListeners() {
  document.querySelectorAll(".project-card").forEach(card => {
    card.addEventListener("click", () => {
      const projectId = Number(card.dataset.projectId);
      const project = projects.find(item => item.id === projectId);

      openProjectModal(project);
    });
  });
}

function openProjectModal(project) {
  const modal = document.getElementById("projectModal");

  document.getElementById("modalImage").src = project.image;
  document.getElementById("modalImage").alt = project.title;
  document.getElementById("modalCategory").textContent = project.tag;
  document.getElementById("modalTitle").textContent = project.title;
  document.getElementById("modalDescription").textContent = project.description;
  document.getElementById("modalProblem").textContent = project.problem;
  document.getElementById("modalAction").textContent = project.action;
  document.getElementById("modalResult").textContent = project.result;
  document.getElementById("modalLink").href = project.link;

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeProjectModal() {
  const modal = document.getElementById("projectModal");

  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function setupModalClose() {
  document.querySelectorAll("[data-close-modal]").forEach(item => {
    item.addEventListener("click", closeProjectModal);
  });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
      closeProjectModal();
    }
  });
}

function attachEventModalListeners() {
  document.querySelectorAll(".event-card").forEach(card => {
    card.addEventListener("click", () => {
      const eventId = Number(card.dataset.eventId);
      const selectedEvent = events.find(item => item.id === eventId);

      openEventModal(selectedEvent);
    });
  });
}

function openEventModal(selectedEvent) {
  const modal = document.getElementById("eventModal");

  document.getElementById("eventModalImage").src = selectedEvent.image;
  document.getElementById("eventModalImage").alt = selectedEvent.title;
  document.getElementById("eventModalCategory").textContent = selectedEvent.category;
  document.getElementById("eventModalTitle").textContent = selectedEvent.title;
  document.getElementById("eventModalDescription").textContent = selectedEvent.description;
  document.getElementById("eventModalDetails").textContent = selectedEvent.details;

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeEventModal() {
  const modal = document.getElementById("eventModal");

  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function setupEventModalClose() {
  document.querySelectorAll("[data-close-event-modal]").forEach(item => {
    item.addEventListener("click", closeEventModal);
  });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
      closeEventModal();
    }
  });
}

function setupMobileNav() {
  const navToggle = document.getElementById("navToggle");
  const siteNav = document.getElementById("siteNav");

  navToggle.addEventListener("click", () => {
    siteNav.classList.toggle("open");
  });

  siteNav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      siteNav.classList.remove("open");
    });
  });
}

function setupScrollEffects() {
  const header = document.getElementById("siteHeader");
  const progressBar = document.getElementById("progressBar");

  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const progress = (scrollTop / docHeight) * 100;

    progressBar.style.width = `${progress}%`;

    if (scrollTop > 40) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }

    updateActiveNav();
  });
}

function updateActiveNav() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".site-nav a");

  let currentSection = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 160;

    if (window.scrollY >= sectionTop) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");

    if (link.getAttribute("href") === `#${currentSection}`) {
      link.classList.add("active");
    }
  });
}

function observeRevealElements() {
  const revealElements = document.querySelectorAll(".reveal:not(.visible)");

  const revealObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.14
    }
  );

  revealElements.forEach(element => revealObserver.observe(element));
}

function animateCounters() {
  const metricNumbers = document.querySelectorAll(".metric-card strong");

  const counterObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;

        const element = entry.target;
        const target = Number(element.dataset.count);
        const prefix = element.dataset.prefix || "";
        const suffix = element.dataset.suffix || "";
        const duration = 1300;
        const startTime = performance.now();

        function updateCounter(currentTime) {
          const elapsedTime = currentTime - startTime;
          const progress = Math.min(elapsedTime / duration, 1);
          const easedProgress = 1 - Math.pow(1 - progress, 3);
          const currentValue = target * easedProgress;

          const formattedValue =
            target % 1 === 0
              ? Math.round(currentValue)
              : currentValue.toFixed(2).replace(/\.00$/, "");

          element.textContent = `${prefix}${formattedValue}${suffix}`;

          if (progress < 1) {
            requestAnimationFrame(updateCounter);
          } else {
            element.textContent = `${prefix}${target}${suffix}`;
          }
        }

        requestAnimationFrame(updateCounter);
        counterObserver.unobserve(element);
      });
    },
    {
      threshold: 0.5
    }
  );

  metricNumbers.forEach(number => counterObserver.observe(number));
}

function init() {
  renderProjects();
  renderEvents();
  renderSystems();

  setupFilters();
  setupTabs();
  setupModalClose();
  setupEventModalClose();
  setupMobileNav();
  setupScrollEffects();
  observeRevealElements();
  animateCounters();
}

init();
