const projects = [
  {
    id: 1,
    title: "Prosperna Portfolio",
    category: "ecommerce",
    tag: "SaaS / E-commerce Growth",
    image: "assets/projects/prosperna.jpg",
    description:
      "Supported 147 businesses through implementation, onboarding, adoption, retention, and revenue growth initiatives.",
    results: ["₱15.47M+ GMV", "₱2M+ SaaS closed", "15% retention lift"],
    problem:
      "Businesses needed stronger digital commerce adoption, better onboarding, clearer reporting, and stronger post-sale growth motions.",
    action:
      "Led implementation, stakeholder alignment, onboarding, QBRs, customer health tracking, and lifecycle improvement initiatives.",
    result:
      "Enabled ₱15.47M+ in e-commerce GMV, closed ₱2M+ in SaaS business, generated additional recurring revenue, and improved retention.",
    link: "#"
  },
  {
    id: 2,
    title: "Chroma Hospitality",
    category: "hospitality",
    tag: "Customer Success Recovery",
    image: "assets/projects/chroma.jpg",
    description:
      "Recovered a churn-risk hospitality account by diagnosing stakeholder, documentation, and technical blockers.",
    results: ["Issues fixed in 1 week", "Trust rebuilt", "Upsell paths found"],
    problem:
      "A major hospitality client had slow decision-making, unclear ownership, incomplete documentation, and multiple issues happening at once.",
    action:
      "Mapped stakeholders, identified root problems, set focused meetings, aligned internally, documented requirements, and presented a recovery plan.",
    result:
      "Urgent technical issues were fixed within a week, documentation was cleaned up, trust was rebuilt, and out-of-scope upsell opportunities surfaced.",
    link: "#"
  },
  {
    id: 3,
    title: "Harbour City Group",
    category: "ecommerce",
    tag: "Multi-Location Rollout",
    image: "assets/projects/harbour-city.jpg",
    description:
      "Led e-commerce rollout and operational readiness across restaurant locations and operational teams.",
    results: ["Multi-location rollout", "80+ users trained", "Operations enabled"],
    problem:
      "The group needed a structured rollout for online ordering across multiple restaurant locations with operational alignment.",
    action:
      "Managed onboarding, training, rollout readiness, stakeholder coordination, and operational handover.",
    result:
      "Improved digital commerce readiness, trained operational users, and supported smoother online ordering adoption.",
    link: "#"
  },
  {
    id: 4,
    title: "GoRocky",
    category: "healthcare",
    tag: "Lifecycle Revenue",
    image: "assets/projects/gorocky.jpg",
    description:
      "Built customer lifecycle, sales enablement, reactivation, and messaging systems that contributed to direct revenue growth.",
    results: ["₱3.7M+ revenue", "~50% repeat growth", "AI-assisted workflows"],
    problem:
      "The business needed stronger lifecycle messaging, reactivation, customer trust, and sales enablement systems.",
    action:
      "Built AI-assisted onboarding, objection handling, reactivation, customer education, and sales enablement frameworks.",
    result:
      "Generated ₱3.7M+ in direct revenue and helped improve repeat purchase performance by approximately 50%.",
    link: "#"
  },
  {
    id: 5,
    title: "Sun Savings Bank",
    category: "crm",
    tag: "Digital Experience",
    image: "assets/projects/sun-savings.jpg",
    description:
      "Supported website modernization, stakeholder requirements, UAT, and digital customer experience delivery.",
    results: ["UAT managed", "Go-live readiness", "Stakeholders aligned"],
    problem:
      "The bank needed a cleaner digital customer experience, stronger stakeholder alignment, and structured go-live readiness.",
    action:
      "Coordinated requirements, UAT, implementation timelines, feedback loops, and readiness tracking.",
    result:
      "Supported modernization of the bank’s digital presence and helped bring stakeholders toward final implementation readiness.",
    link: "#"
  },
  {
    id: 6,
    title: "CRM Transformation Work",
    category: "crm",
    tag: "Salesforce / HubSpot",
    image: "assets/projects/crm-transformation.jpg",
    description:
      "Delivered CRM transformation, workflow redesign, dashboards, and lifecycle visibility across enterprise environments.",
    results: ["17% lead conversion lift", "30% faster response", "Dashboards built"],
    problem:
      "Teams needed clearer CRM workflows, stronger reporting, better customer lifecycle visibility, and faster operational response.",
    action:
      "Redesigned workflows, built reporting dashboards, improved CRM structures, and aligned technical and business stakeholders.",
    result:
      "Improved lead conversion, reduced response times, and created better executive visibility across customer and revenue operations.",
    link: "#"
  }
];

const clientSites = [
  {
    name: "Prosperna",
    type: "SaaS / E-commerce Platform",
    url: "https://www.prosperna.com",
    note: "Platform adoption, onboarding, customer success, and revenue growth."
  },
  {
    name: "Sun Savings Bank",
    type: "Banking / Corporate Website",
    url: "#",
    note: "Website modernization, stakeholder alignment, UAT, and go-live readiness."
  },
  {
    name: "Chroma Hospitality",
    type: "Hospitality Group",
    url: "#",
    note: "Account recovery, customer success, documentation, and expansion opportunities."
  },
  {
    name: "Harbour City Group",
    type: "Restaurant / E-commerce",
    url: "#",
    note: "Multi-location digital commerce rollout and operational readiness."
  },
  {
    name: "Baker J",
    type: "Hospitality / F&B",
    url: "#",
    note: "Platform onboarding, adoption, and digital commerce enablement."
  },
  {
    name: "Firehouse Pizza",
    type: "Restaurant / F&B",
    url: "#",
    note: "E-commerce adoption and operational enablement."
  },
  {
    name: "BUM Equipment",
    type: "Retail / E-commerce",
    url: "#",
    note: "Digital commerce adoption, onboarding, and platform enablement."
  },
  {
    name: "GoRocky",
    type: "Healthcare / Lifecycle Revenue",
    url: "#",
    note: "Customer lifecycle operations, sales enablement, and reactivation workflows."
  },
  {
    name: "Add Client Website",
    type: "Placeholder Slot",
    url: "#",
    note: "Replace this with another public client website, launch, or project."
  },
  {
    name: "Add Client Website",
    type: "Placeholder Slot",
    url: "#",
    note: "Use this slot for future client work, portfolio proof, or case study link."
  },
  {
    name: "Add Client Website",
    type: "Placeholder Slot",
    url: "#",
    note: "You can duplicate these objects in script.js to add more cards."
  },
  {
    name: "Add Client Website",
    type: "Placeholder Slot",
    url: "#",
    note: "Keep only public/approved client examples here."
  }
];

const events = [
  {
    title: "Speaking Engagement",
    category: "speaker",
    image: "assets/events/speaking-1.jpg",
    description: "Add a photo of you speaking, presenting, or leading a session.",
    size: "large"
  },
  {
    title: "Client Discussion",
    category: "client",
    image: "assets/events/networking-1.jpg",
    description: "Add a photo of you talking with clients, teams, or stakeholders.",
    size: ""
  },
  {
    title: "Industry Event",
    category: "networking",
    image: "assets/events/active-1.jpg",
    description: "Add proof of you attending, connecting, and learning in the room.",
    size: ""
  },
  {
    title: "Panel / Workshop",
    category: "speaker",
    image: "assets/events/speaking-2.jpg",
    description: "Add event photos where you were involved in a session or discussion.",
    size: ""
  },
  {
    title: "Networking Moment",
    category: "networking",
    image: "assets/events/networking-2.jpg",
    description: "Add photos of professional conversations, summits, or meetups.",
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

function renderClientSites() {
  clientSitesGrid.innerHTML = clientSites
    .map(site => {
      const isPlaceholder = site.name.toLowerCase().includes("add client");

      return `
        <article class="client-site-card reveal">
          <span class="placeholder-badge">${site.type}</span>
          <h3>${site.name}</h3>
          <p>${site.note}</p>
          <a href="${site.url}" target="_blank">
            ${isPlaceholder ? "Replace this slot →" : "Visit site →"}
          </a>
        </article>
      `;
    })
    .join("");

  observeRevealElements();
}

function renderEvents(filter = "all") {
  const filteredEvents =
    filter === "all"
      ? events
      : events.filter(event => event.category === filter);

  eventsGrid.innerHTML = filteredEvents
    .map(event => {
      return `
        <article class="event-card ${event.size} reveal" data-category="${event.category}">
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
  renderClientSites();
  renderEvents();
  renderSystems();

  setupFilters();
  setupTabs();
  setupModalClose();
  setupMobileNav();
  setupScrollEffects();
  observeRevealElements();
  animateCounters();
}

init();
