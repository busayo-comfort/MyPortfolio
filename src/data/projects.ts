import { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "contract-shield",
    name: "Contract Shield",
    tagline: "Legal protection tooling for freelancers and contractors",
    problemStatement:
      "Freelancers in Nigeria routinely take on work without enforceable agreements, leaving them exposed to scope creep, late payment, and disputes with no legal recourse.",
    motivation:
      "Collaborating on this with Marvel to understand how software can reduce real legal risk — not just automate forms but structure agreements that actually hold up.",
    whatItAchieves:
      "Gives contractors a guided flow to generate, review, and store enforceable contracts — reducing reliance on ad hoc WhatsApp agreements.",
    description:
      "A Next.js collaborative project focused on simplifying contract generation and management for independent contractors and small agencies.",
    learnings: [
      "Onboarding into an existing codebase from GitHub cold",
      "Understanding missing lib/ and env dependencies before writing any code",
      "Structuring legal logic as user-facing flows",
    ],
    status: "ongoing",
    isHighlight: true,
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: "/projects/contract-shield.png",
    links: {
      github: "",
    },
    category: "fullstack",
  },
  {
    slug: "vendora",
    name: "Vendora",
    tagline: "A full-stack multi-vendor e-commerce marketplace",
    problemStatement:
      "Most e-commerce starter projects only cover the buyer side. Building a platform that handles multiple vendor storefronts, inventories, and payouts in one system requires a fundamentally different architecture.",
    motivation:
      "Wanted to go beyond a basic CRUD store and understand what production marketplace architecture actually looks like — vendor isolation, analytics, notifications, and payment splits.",
    whatItAchieves:
      "A working marketplace with vendor dashboards, product management, cart/wishlist, real analytics, and Paystack payment integration.",
    description:
      "Full-stack marketplace built with Next.js frontend and Node/Express + MongoDB backend. Includes TanStack Query, Chart.js analytics, and a notification system.",
    learnings: [
      "TanStack Query cache invalidation at scale",
      "Migrating client state (cart/wishlist) to server-side MongoDB",
      "Debugging MongoDB URI connection issues in production-like environments",
      "Chart.js with named npm imports to avoid CDN/scale registration bugs",
    ],
    status: "completed",
    isHighlight: false,
    tech: ["Next.js", "Node.js", "Express", "MongoDB", "TanStack Query", "Chart.js", "Tailwind CSS"],
    image: "/projects/vendora.png",
    links: {
      github: "",
      live: "",
    },
    category: "fullstack",
  },
  {
    slug: "threadly",
    name: "Threadly",
    tagline: "A real-time chat application with persistent rooms",
    problemStatement:
      "Most chat app tutorials stop at basic Socket.io messaging. Understanding how to structure a production chat system — message persistence, room state, auth — requires going much further.",
    motivation:
      "Level 4 school project, built as a monorepo with a clear separation between the Next.js frontend API and the dedicated Socket.io server — deliberately structured to reflect real production patterns.",
    whatItAchieves:
      "Real-time group messaging with room creation, persistent message history, and user authentication across a monorepo architecture.",
    description:
      "Monorepo chat app with a Next.js frontend (REST API) and a separate Node/Express + Socket.io server. Built as a Level 4 academic project.",
    learnings: [
      "Monorepo structuring for fullstack projects",
      "Socket.io room management and event architecture",
      "Separating REST from WebSocket concerns cleanly",
    ],
    status: "completed",
    isHighlight: false,
    tech: ["Next.js", "Node.js", "Express", "Socket.io", "MongoDB"],
    image: "/projects/threadly.png",
    links: {
      github: "",
    },
    category: "fullstack",
  },
  {
    slug: "oau-portal-clone",
    name: "OAU School Portal Clone",
    tagline: "A replica of the OAU student portal, rebuilt in Django",
    problemStatement:
      "The original portal is poorly structured and unreliable. Cloning it was a deliberate exercise to learn how Python/Django handles authentication, sessions, and form-heavy admin systems.",
    motivation:
      "Chose a system I already understood as a user so I could focus on the engineering challenge — replicating real portal logic in a new stack rather than designing from scratch.",
    whatItAchieves:
      "Working Django app with login, dashboard, course registration, and result viewing flows that mirror the real portal's structure.",
    description:
      "A Django-based clone of the Obafemi Awolowo University student portal, built to master Python backend development and Django's ORM and auth system.",
    learnings: [
      "Django ORM for relational data",
      "Django's built-in auth and session management",
      "Form handling and validation in Python",
      "How to map an existing system's logic to a new stack",
    ],
    status: "completed",
    isHighlight: false,
    tech: ["Python", "Django", "SQLite", "HTML/CSS"],
    image: "/projects/oau-portal.png",
    links: {
      github: "",
    },
    category: "backend",
  },
  {
    slug: "shoply",
    name: "Shoply",
    tagline: "A clean e-commerce frontend with cart and product management",
    problemStatement:
      "Needed a focused project to nail the fundamentals of React state management, hooks, and product flow before moving to a full-stack implementation.",
    motivation:
      "Built as a stepping stone — deliberately scoped to frontend only so every architectural decision was about state, not backend plumbing.",
    whatItAchieves:
      "Functional storefront with product listing, filtering, cart management, and persistent state using custom hooks.",
    description:
      "React/Vite e-commerce frontend with product filtering, cart logic, and a clean component architecture.",
    learnings: [
      "Custom hook design (useAddToCart, useWishlist)",
      "Debugging accumulation logic and scope in hooks",
      "Component architecture for e-commerce flows",
    ],
    status: "completed",
    isHighlight: false,
    tech: ["React", "Vite", "Tailwind CSS", "JavaScript"],
    image: "/projects/shoply.png",
    links: {
      github: "",
      live: "",
    },
    category: "frontend",
  },
  {
    slug: "amazon-clone",
    name: "Amazon Clone",
    tagline: "Frontend replica of Amazon's core shopping experience",
    problemStatement:
      "Reverse-engineering a product used by millions is one of the fastest ways to understand design decisions and UI patterns that survive at scale.",
    motivation:
      "Intentional clone project — not to replicate branding, but to understand the information architecture, component hierarchy, and interaction patterns behind a high-traffic commerce site.",
    whatItAchieves:
      "Pixel-close replica of core Amazon pages with working cart state, product detail routing, and responsive layout.",
    description:
      "A frontend Amazon clone focusing on layout accuracy, component reuse, and cart state management.",
    learnings: [
      "Breaking down complex layouts into composable components",
      "Understanding information hierarchy in high-conversion UI",
    ],
    status: "completed",
    isHighlight: false,
    tech: ["React", "Tailwind CSS"],
    image: "/projects/amazon-clone.png",
    links: {
      github: "",
    },
    category: "clone",
  },
  {
    slug: "recipe-finder",
    name: "Recipe Finder",
    tagline: "Search and save recipes using a public food API",
    problemStatement:
      "Working with third-party APIs introduces a class of problems — rate limits, data shaping, loading states, error boundaries — that internal state never does.",
    motivation:
      "Deliberately chose a public API project to practice integrating external data cleanly into a React UI, with proper loading and error handling patterns.",
    whatItAchieves:
      "Search-driven app that fetches, displays, and lets users save recipes from a public food API with full loading and error state handling.",
    description:
      "React app powered by a public recipe API. Focuses on async data fetching, error boundaries, and a clean search-to-detail flow.",
    learnings: [
      "API integration patterns in React",
      "Handling loading, error, and empty states gracefully",
      "Shaping external API data to match your component contracts",
    ],
    status: "completed",
    isHighlight: false,
    tech: ["React", "Tailwind CSS", "REST API"],
    image: "/projects/recipe-finder.png",
    links: {
      github: "",
      live: "",
    },
    category: "frontend",
  },
];

export const highlightedProject = projects.find((p) => p.isHighlight);
export const otherProjects = projects.filter((p) => !p.isHighlight);