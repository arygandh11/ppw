const projects = [
  {
    id: 'proj-ana',
    title: 'Ana',
    blurb: 'Electron · Claude · Tavus CVI — voice-first AI coding partner',
    description:
      "A desktop app that lets non-technical builders talk to an AI through a real-time photorealistic face to understand, plan, build, debug, and review code in a connected GitHub repo. A dynamic workspace (diagrams, planning canvas, live editor, diff viewer) shifts to match the conversation, backed by a two-call Claude pipeline (Haiku for intent, Sonnet for reasoning) and RAG over the repo.",
    tags: ['Electron', 'React', 'Claude', 'RAG'],
    githubUrl: 'https://github.com/arnavjainpro/ANA',
    demoUrl: '',
  },
  {
    id: 'proj-infrapilot',
    title: 'InfraPilot',
    blurb: 'Agentic AI · LangGraph · RAG — Jan 2026 – Present',
    description:
      'An agentic AI debugging assistant that triages CI failures and generates PR-ready fixes, integrating LangGraph, the GitHub API, vector search, and shell/test-runner tools. Reached 78% task success with a custom evaluation harness tracking tests, latency, and regressions.',
    tags: ['LangGraph', 'RAG', 'Python', 'LLMs'],
    githubUrl: '',
    demoUrl: '',
  },
  {
    id: 'proj-boothbuddy',
    title: 'SEC BoothBuddy',
    blurb: 'Student Engineers Council — career fair companion',
    description:
      "A career fair checklist app for TAMU's Student Engineers Council — track which companies you've visited, manage your visit list, and stay organized across a packed career fair day.",
    tags: ['Next.js', 'Tailwind', 'shadcn/ui'],
    githubUrl: '',
    demoUrl: 'https://v0-sec-boothbuddy-app.vercel.app',
  },
  {
    id: 'proj-bobapos',
    title: 'Boba POS System',
    blurb: 'Full-stack point-of-sale system',
    description:
      'A complete cashier and inventory system for a boba shop: order entry, real-time inventory tracking, X/Z-report generation, and sales analytics dashboards.',
    tags: ['React', 'Vite', 'Node.js'],
    githubUrl: '',
    demoUrl: 'https://project-3-x2.vercel.app',
  },
  {
    id: 'proj-screenmock',
    title: 'ScreenMock',
    blurb: 'Interactive screenshot viewer',
    description:
      'Transforms static screenshots into interactive, touch-responsive mockups for presentations and product demos.',
    tags: ['Next.js', 'Tailwind'],
    githubUrl: '',
    demoUrl: 'https://v0-screenshot-to-interactive-app.vercel.app',
  },
];

export default projects;
