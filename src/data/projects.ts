import type { Project } from '@/types'

export const projects: Project[] = [
  {
    slug: 'contract-shield',
    name: 'Contract Shield',
    tagline: 'Legal protection tooling for freelancers and contractors in Nigeria.',
    problemStatement:
      'Freelancers in Nigeria routinely take on work without enforceable agreements — leaving them exposed to scope creep, late payment, and disputes with no legal recourse. Ad hoc WhatsApp agreements do not hold up.',
    motivation:
      'Collaborating with Marvel on this taught me things tutorials never cover — onboarding cold into a live codebase, diagnosing missing dependencies before writing a line, and structuring legal logic as flows that real people will actually complete.',
    whatItAchieves:
      'Gives contractors a guided flow to generate, review, and store enforceable contracts — reducing reliance on informal agreements and making legal protection the path of least resistance.',
    learnings: [
      'Onboarding into a live Next.js codebase from GitHub cold',
      'Diagnosing missing lib/ directory and .env.local keys before writing code',
      'Structuring legal logic as guided, user-friendly flows',
      'Collaborative architecture decisions across a shared codebase',
    ],
    status: 'ongoing',
    isHighlight: true,
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    image: '/contract-shield.png',
    links: {
      github: '',
    },
    category: 'collaborative',
  },
  {
    slug: 'vendora',
    name: 'Vendora',
    tagline: 'A full-stack multi-vendor marketplace with analytics, notifications, and payments.',
    problemStatement:
      'Most e-commerce projects only cover the buyer side. Building a platform that handles multiple vendor storefronts, separate inventories, and payouts in one system requires a fundamentally different architecture.',
    motivation:
      'I wanted to go beyond a basic CRUD store and understand what production marketplace architecture actually looks like — vendor isolation, real analytics, notification systems, and payment splits. Every major decision was intentional.',
    whatItAchieves:
      'A working marketplace with vendor dashboards, product management, cart and wishlist, real Chart.js analytics wired to live backend data, a Mongoose notification system, and Paystack payment integration.',
    learnings: [
      'TanStack Query cache invalidation at scale with useMutation and useQuery',
      'Migrating cart and wishlist state from localStorage to server-side MongoDB',
      'Fixing a Vercel MIME type deployment error by switching from routes to rewrites',
      'Chart.js named imports to avoid scale registration bugs in React Strict Mode',
      'Building a full notifications system — Mongoose model, controllers, frontend hook with dayjs',
    ],
    status: 'completed',
    isHighlight: false,
    tech: ['React', 'Vite', 'Node.js', 'Express', 'MongoDB', 'TanStack Query', 'Chart.js', 'Tailwind CSS'],
    image: '/vendora.png',
    links: {
      github: 'https://github.com/busayo-comfort/Shoply',
      live: 'https://vendora-eight-beta.vercel.app/',
    },
    category: 'fullstack',
  },
  {
    slug: 'threadly',
    name: 'Threadly',
    tagline: 'A real-time chat application with persistent rooms, built as a monorepo.',
    problemStatement:
      'Most chat app tutorials stop at basic Socket.io messaging. Understanding how to structure a production chat system — message persistence, room state, auth, and a clean separation of concerns — requires going much further.',
    motivation:
      'Built as a Level 4 academic project, I deliberately structured it as a monorepo with a clear split between the Next.js REST API and the dedicated Socket.io server — not because the brief required it, but because that is how it would look in production.',
    whatItAchieves:
      'Real-time group messaging with room creation, persistent message history, and user authentication across a clean monorepo architecture.',
    learnings: [
      'Monorepo structuring for full-stack Next.js and Node projects',
      'Socket.io room management and event architecture',
      'Separating REST concerns from WebSocket concerns cleanly',
      'Managing persistent message state across reconnections',
    ],
    status: 'completed',
    isHighlight: false,
    tech: ['Next.js', 'Node.js', 'Express', 'Socket.io', 'MongoDB'],
    image: '/threadly.png',
    links: {
      github: 'https://github.com/busayo-comfort/Threadly',
      live: 'https://threadly-e57k.onrender.com/',
    },
    category: 'fullstack',
  },
  {
    slug: 'vision-ui-dashboard',
    name: 'Vision UI Dashboard',
    tagline: 'Modern analytics dashboard with rich charts and a responsive admin UI.',
    problemStatement:
      'Building dashboards that feel smooth, scalable, and information-dense requires careful component structure, responsive layouts, and clean state organisation — skills that only come from building one end-to-end.',
    motivation:
      'I wanted to practice building a production-style admin dashboard with reusable UI components, chart visualisations, and the polished responsive patterns commonly used in SaaS platforms.',
    whatItAchieves:
      'An interactive dashboard interface with analytics cards, chart visualisations, responsive sidebar navigation, user overview sections, and a consistent dark-themed UI optimised for both desktop and mobile.',
    learnings: [
      'Building reusable dashboard UI components at scale',
      'Structuring scalable layouts in React',
      'Working with chart libraries and analytics visualisation',
      'Creating responsive sidebar and navigation systems',
      'Managing a consistent dark UI design system across components',
    ],
    status: 'completed',
    isHighlight: false,
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'React Charts', 'Framer Motion'],
    image: '/vision-ui.png',
    links: {
      github: '',
      live: '',
    },
    category: 'frontend',
  },
  {
    slug: 'oau-portal-clone',
    name: 'OAU Portal Clone',
    tagline: 'The OAU student portal rebuilt in Django to master Python backend architecture.',
    problemStatement:
      ' Cloning a system I already understood as a user let me focus entirely on the engineering challenge — mapping real portal logic to a new stack rather than designing from scratch.',
    motivation:
      'I chose a system I used daily so I could measure correctness against lived experience. Every flow — login, course registration, result viewing — had a known expected output, which made Django\'s ORM and auth system much easier to reason about.',
    whatItAchieves:
      'A working Django application with login, dashboard, course registration, and result viewing flows that mirror the original portal\'s structure and logic.',
    learnings: [
      'Django ORM for relational data modelling',
      'Django built-in auth and session management',
      'Form handling and server-side validation in Python',
      'Mapping an existing system\'s logic to a new stack',
    ],
    status: 'completed',
    isHighlight: false,
    tech: ['Python', 'Django', 'SQLite', 'HTML', 'CSS'],
    image: '/oau.png',
    links: {
      github: 'https://github.com/busayo-comfort/OAU',
    },
    category: 'clone',
  },
  {
    slug: 'recipe-finder',
    name: 'Recipe Finder',
    tagline: 'Search and save recipes via a public food API with full async state handling.',
    problemStatement:
      'Working with third-party APIs introduces a class of problems that internal state never does — rate limits, unpredictable data shapes, loading states, and error boundaries that need to degrade gracefully.',
    motivation:
      'I deliberately chose a public API project to practice integrating external data cleanly into a React UI. The goal was not the feature, it was the pattern — building async flows that handle every possible state correctly.',
    whatItAchieves:
      'A search-driven app that fetches, displays, and lets users save recipes from a public food API with proper loading, error, and empty state handling throughout.',
    learnings: [
      'API integration patterns in React with fetch and async/await',
      'Handling loading, error, and empty states as first-class UI concerns',
      'Shaping and normalising external API data to match component contracts',
      'Debouncing search inputs to avoid unnecessary API calls',
    ],
    status: 'completed',
    isHighlight: false,
    tech: ['React', 'Tailwind CSS', 'REST API', 'JavaScript'],
    image: '/recipe-finder.png',
    links: {
      github: 'https://github.com/busayo-comfort/Recipe-Finder-App',
      live: 'https://recipe-finder-app-theta-three.vercel.app/',
    },
    category: 'api-integration',
  },
  {
    slug: 'amazon-clone',
    name: 'Amazon Clone',
    tagline: 'Amazon\'s core shopping experience reverse-engineered to study high-conversion UI.',
    problemStatement:
      'Reverse-engineering a product used by hundreds of millions of people is one of the fastest ways to understand design decisions that survive at scale — information architecture, component hierarchy, and interaction patterns.',
    motivation:
      'This was an intentional deconstruction exercise. Not to replicate branding, but to understand why Amazon\'s layout makes the decisions it does — what drives a user from landing page to cart confirmation.',
    whatItAchieves:
      'A pixel-close replica of core Amazon pages with working cart state, product detail routing, and a fully responsive layout.',
    learnings: [
      'Breaking down a complex, dense layout into composable components',
      'Understanding information hierarchy in high-conversion commerce UI',
      'Managing cart state across multiple product and listing pages',
    ],
    status: 'completed',
    isHighlight: false,
    tech: ['React', 'Tailwind CSS', 'JavaScript'],
    image: '',
    links: {
      github: 'https://github.com/busayo-comfort/amazon-project',
    },
    category: 'clone',
  },
 
]

export const highlightedProject = projects.find(p => p.isHighlight)!
export const otherProjects = projects.filter(p => !p.isHighlight)