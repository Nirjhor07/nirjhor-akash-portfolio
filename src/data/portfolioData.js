export const personalInfo = {
  name: "Ashraf Hossain Akash",
  nickname: "Ashraf Hossain Akash",
  handle: "nr7",
  title: "Full Stack Developer",
  tagline:
    "Building modern, scalable, and intelligent digital experiences through full-stack development and AI-driven innovation.",
  about: [
    "Im a passionate Full Stack Web Developer focused on building modern, responsive, and scalable web applications that deliver real-world impact. With strong expertise in JavaScript, React, Next.js, Node.js, and MongoDB, I enjoy transforming ideas into clean, functional, and user-friendly digital experiences. I love working across both frontend and backend development, creating seamless applications with efficient APIs and engaging UI/UX.",
    "Currently, I’m expanding my knowledge in TypeScript, backend architecture, and AI integration to build smarter and more optimized applications. I’m always eager to learn new technologies, solve challenging problems, and improve my development skills through real projects and continuous practice.",
    "Beyond coding, I enjoy turning creative ideas into real products that people can actually use and benefit from. I believe in writing clean code, building meaningful solutions, and continuously growing as a developer in the modern tech ecosystem.",
  ],
  avatar: "/images/nirjhor.png", // custom developer image
  resumeUrl: "#",
  socials: {
    github: "https://github.com/Nirjhor07",
    linkedin: "https://www.linkedin.com/in/nirjhor07",
    twitter: "https://twitter.com",
    facebook: "https://www.facebook.com/share/1DCZ3nCSrA/",
  },
};

export const stats = [
  { value: "1+ Yrs", label: "Professional Experience" },
  { value: "21+", label: "Completed Projects" },
  { value: "91%", label: "ML Model Accuracy" },
  { value: "500+", label: "Git Contributions" },
];

export const services = [
  {
    title: "Full Stack Development",
    description:
      "Architecting responsive, lightning-fast web applications using Next.js, React, Node.js, and MongoDB. Secure, scalable, and optimized for SEO.",
    icon: "Layers",
  },
  {
    title: "Machine Learning Solutions",
    description:
      "Designing intelligent neural networks, natural language processors, and predictive analytics dashboards using Python, TensorFlow, and PyTorch.",
    icon: "Brain",
  },
  {
    title: "Creative UI/UX Engineering",
    description:
      "Developing gorgeous, motion-rich interfaces utilizing GSAP, Lenis smooth scroll, and Framer Motion for breathtaking client experiences.",
    icon: "Sparkles",
  },
];

export const skillCategories = [
  {
    id: "frontend",
    title: "Frontend Architecture",
    tagline: "High-performance reactive interfaces & motion design systems",
    accent: "purple",
    glowColor: "rgba(208, 188, 255, 0.12)",
    badgeColor: "text-purple-400 bg-purple-500/10 border-purple-500/20",
    skills: [
      {
        name: "Next.js & React 19",
        role: "App Router, SSR, Server Components & Hooks",
        icon: "Zap",
        projects: ["StudyNook", "Ticket Lagbe", "SkillSphere"],
        highlight: "Core Full-Stack",
      },
      {
        name: "Tailwind CSS & Design Tokens",
        role: "Modern HUD tokens, responsive layouts & themes",
        icon: "Layout",
        projects: ["StudyNook", "Ticket Lagbe", "KeenKeeper"],
        highlight: "Design Systems",
      },
      {
        name: "Framer Motion & GSAP",
        role: "Kinetic UI animations, smooth scroll & physics",
        icon: "Sparkles",
        projects: ["SkillSphere", "Portfolio UI"],
        highlight: "Motion Design",
      },
      {
        name: "Modern JavaScript (ES6+)",
        role: "Asynchronous runtime, modular architecture & DOM",
        icon: "Code2",
        projects: ["QR Generator", "KeenKeeper"],
        highlight: "Core Language",
      },
      {
        name: "Redux Toolkit & Context API",
        role: "Predictable centralized state & session pipelines",
        icon: "Layers",
        projects: ["KeenKeeper", "Digital Tools"],
        highlight: "State Architecture",
      },
    ],
  },
  {
    id: "backend",
    title: "Backend & Systems",
    tagline: "High-throughput APIs, database architecture & secure auth",
    accent: "blue",
    glowColor: "rgba(173, 198, 255, 0.12)",
    badgeColor: "text-blue-400 bg-blue-500/10 border-blue-500/20",
    skills: [
      {
        name: "Node.js & Express.js",
        role: "RESTful architecture, middleware routing & controllers",
        icon: "Server",
        projects: ["StudyNook", "Ticket Lagbe", "KeenKeeper"],
        highlight: "API Services",
      },
      {
        name: "MongoDB & Mongoose",
        role: "Document modeling, aggregation pipelines & indexing",
        icon: "Database",
        projects: ["StudyNook", "Ticket Lagbe", "SkillSphere"],
        highlight: "NoSQL Database",
      },
      {
        name: "Better Auth & JWT",
        role: "OAuth, session tokens & role-based access control (RBAC)",
        icon: "ShieldCheck",
        projects: ["StudyNook", "Ticket Lagbe"],
        highlight: "Auth & Security",
      },
      {
        name: "Stripe Payment Gateway",
        role: "Checkout workflows, automated settlements & webhooks",
        icon: "CreditCard",
        projects: ["Ticket Lagbe"],
        highlight: "Fintech Settlement",
      },
      {
        name: "PostgreSQL & SQL",
        role: "Relational data structures & ACID query integrity",
        icon: "Binary",
        projects: ["Backend Research"],
        highlight: "Relational DB",
      },
    ],
  },
  {
    id: "ai_ml",
    title: "AI & Intelligence",
    tagline: "Machine learning models, forecasting & data pipelines",
    accent: "cyan",
    glowColor: "rgba(0, 219, 231, 0.12)",
    badgeColor: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
    skills: [
      {
        name: "Python (TensorFlow & PyTorch)",
        role: "Neural networks, model architectures & training loops",
        icon: "BrainCircuit",
        projects: ["ML Research", "Cargo Forecasting"],
        highlight: "Deep Learning",
      },
      {
        name: "Scikit-Learn",
        role: "Classification, regression models & evaluation metrics",
        icon: "Cpu",
        projects: ["Logistics Forecasting Model"],
        highlight: "Predictive AI",
      },
      {
        name: "Pandas & NumPy",
        role: "High-dimensional data wrangling, transforms & EDA",
        icon: "Gauge",
        projects: ["Supply Chain Analytics"],
        highlight: "Data Engineering",
      },
      {
        name: "Computer Vision & NLP",
        role: "Text embeddings, NLP tokenization & image processing",
        icon: "Workflow",
        projects: ["AI Explorations"],
        highlight: "Applied Vision/NLP",
      },
    ],
  },
  {
    id: "tools",
    title: "Ecosystem & DevOps",
    tagline: "Deployment infrastructure, testing & developer workflows",
    accent: "emerald",
    glowColor: "rgba(52, 211, 153, 0.12)",
    badgeColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    skills: [
      {
        name: "Git & GitHub Workflows",
        role: "Branch strategies, collaborative PRs & version tracking",
        icon: "GitBranch",
        projects: ["All Repositories"],
        highlight: "Version Control",
      },
      {
        name: "Vercel & Netlify Edge",
        role: "Edge functions, global CDN deployment & CI/CD",
        icon: "Globe",
        projects: ["StudyNook", "Ticket Lagbe", "SkillSphere"],
        highlight: "Cloud & Edge",
      },
      {
        name: "Postman & API Testing",
        role: "Endpoint debugging, environment variables & testing",
        icon: "Terminal",
        projects: ["Express Endpoints"],
        highlight: "API Quality",
      },
      {
        name: "Vite & Build Tooling",
        role: "Fast HMR environments & production optimization",
        icon: "Boxes",
        projects: ["Digital Tools", "Book Vibes"],
        highlight: "Build Tooling",
      },
    ],
  },
];

// Backwards-compatible export for any legacy references
export const techStack = {
  frontend: skillCategories[0].skills,
  backend: skillCategories[1].skills,
  machineLearning: skillCategories[2].skills,
  tools: skillCategories[3].skills,
};

export const techTickerRows = {
  row1: [
    { name: "Next.js 16", role: "App Router & SSR", tag: "SSR / SSG", icon: "Zap", accent: "cyan" },
    { name: "React 19", role: "Hooks & Concurrent UI", tag: "Core UI", icon: "Atom", accent: "purple" },
    { name: "Tailwind CSS", role: "Design Tokens & HUD", tag: "Styling", icon: "Wind", accent: "cyan" },
    { name: "Framer Motion", role: "Kinetic Physics & HUD", tag: "Motion", icon: "Sparkles", accent: "purple" },
    { name: "HeroUI & DaisyUI", role: "Component Engineering", tag: "UI Kit", icon: "Layout", accent: "blue" },
    { name: "GSAP & Lenis", role: "Smooth Kinetic Scroll", tag: "Interactions", icon: "Gauge", accent: "emerald" },
    { name: "JavaScript (ES6+)", role: "Async Runtime & DOM", tag: "Language", icon: "Code2", accent: "amber" },
    { name: "Redux & Context", role: "State Pipelines & Stores", tag: "State", icon: "Layers", accent: "purple" },
  ],
  row2: [
    { name: "Node.js & Express", role: "RESTful API Controllers", tag: "API Engine", icon: "Server", accent: "emerald" },
    { name: "MongoDB & Mongoose", role: "Document DB & Aggregations", tag: "NoSQL DB", icon: "Database", accent: "emerald" },
    { name: "Better Auth & JWT", role: "OAuth, Sessions & RBAC", tag: "Security", icon: "ShieldCheck", accent: "blue" },
    { name: "Stripe API", role: "Checkout & Settlement Webhooks", tag: "Fintech", icon: "CreditCard", accent: "purple" },
    { name: "Python & PyTorch", role: "Neural Deep Architectures", tag: "AI / ML", icon: "BrainCircuit", accent: "cyan" },
    { name: "Scikit-Learn", role: "Forecasting & Predictive Models", tag: "Data Models", icon: "Cpu", accent: "blue" },
    { name: "Pandas & NumPy", role: "Data Cleansing & Transforms", tag: "Data Science", icon: "Binary", accent: "cyan" },
    { name: "Vercel Edge & CI/CD", role: "Global Cloud CDN & Edge", tag: "Cloud Edge", icon: "Globe", accent: "emerald" },
    { name: "Postman", role: "Endpoint Contract Testing", tag: "API QA", icon: "Terminal", accent: "amber" },
  ],
};

export const techSlider = [
  { name: "Next.js", icon: "react.png" },
  { name: "React", icon: "react.png" },
  { name: "Node.js", icon: "nodejs.png" },
  { name: "MongoDB", icon: "mongo.png" },
  { name: "JavaScript", icon: "js.png" },
  { name: "Python", icon: "js.png" },
  { name: "Tailwind", icon: "react.png" },
];

export const projects = [
  {
    title: "StudyNook — Modern Room-Booking Platform",
    category: "Full Stack",
    featured: true,
    description:
      "StudyNook is a full-stack reservation engine designed to connect students and professionals with quiet workspaces. It features dynamic room discovery, interval-overlap booking validation to eliminate double-bookings, secure OAuth/JWT authentication, and self-service dashboards for both hosts and students.",
    tech: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "HeroUI",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Better Auth",
      "JWT",
    ],
    image: "/images/studyNook.png",
    github: "https://github.com/Nirjhor07/assignment_9_studynook_client",
    live: "https://assignment-9-studynook-client.vercel.app",
  },
  {
    title: "Ticket Lagbe — Multi-Tenant Ticketing Platform",
    category: "Full Stack",
    featured: true,
    description:
      "A full-stack, multi-tenant reservation system built with Next.js, Express.js, and MongoDB. Features strict role-based access control (RBAC) across admins, vendors, and users, supporting end-to-end workflows including listing verification, vendor reservation approval, Recharts analytics, and Stripe payment settlement.",
    tech: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "HeroUI",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Better Auth",
      "Stripe",
      "Recharts",
    ],
    image: "/images/ticket-lagbe.png",
    github: "https://github.com/Nirjhor07/ticket-lagbe",
    live: "https://ticket-lagbe.vercel.app",
  },
  {
    title: "SkillSphere - Online Learning Platform",
    category: "Full Stack",
    featured: false,
    description:
      "SkillSphere is a modern online learning platform built with Next.js, React, and MongoDB that allows users to explore courses, learn from instructors, and track their learning progress in a seamless and interactive experience.",
    tech: [
      "Next.js",
      "Tailwind CSS",
      "MongoDB",
      "Framer Motion",
      "HTML5",
      "CSS3",
      "JavaScript",
    ],
    image: "/images/skill.png",
    github: "https://github.com/Nirjhor07/skillsphere_online_learning_platform",
    live: "https://skillsphere-online-learning-platfor-psi.vercel.app",
  },
  {
    title: "KeenKeeper - Friendship Management Platform",
    category: "Full Stack",
    featured: false,
    description:
      "KeenKeeper is a friendship management platform designed to help you stay organized and connected with your social network. Whether you want to track how often you interact with friends, analyze your communication patterns, or simply manage your contacts better—KeenKeeper makes it easy and beautiful.",
    tech: [
      "Next.js",
      "Node.js",
      "daisyUI",
      "HTML5",
      "CSS3",
      "JavaScript",
      "Tailwind CSS",
      "MongoDB",
      "Context API",
    ],
    image: "/images/Keen.png",
    github: "https://github.com/Nirjhor07/KeenKeeper-a7",
    live: "https://keen-keeper-a7-black.vercel.app/",
  },
  {
    title: "QR Code Generator — Static & Client-Side Utility",
    category: "Utility",
    featured: false,
    description:
      "A fast, browser-based QR code generator built with Vanilla JS and Tailwind CSS that creates static, permanent codes with no backend dependency. Supports multiple payload types—including URLs, vCards, plain text, and Google Maps locations with coordinate extraction—alongside custom colors, dimensions, and logo embedding.",
    tech: ["JavaScript", "HTML5", "Tailwind CSS"],
    image: "/images/qr-code.png",
    github: "https://github.com/Nirjhor07/Qr-Code-Generator-By-Nirjhor-Akash",
    live: "https://nirjhor07.github.io/Qr-Code-Generator-By-Nirjhor-Akash/",
  },
  {
    title: "Digital Tools Platform",
    category: "Frontend",
    featured: false,
    description:
      "A modern digital tools e-commerce platform built with React, Vite, and Tailwind CSS. This project highlights premium digital services and features an interactive pricing system along with a user-friendly interface.",
    tech: ["React", "Vite", "Tailwind CSS", "daisyUI", "React Router"],
    image: "/images/digi.png",
    github: "https://github.com/Nirjhor07/my-assignment-6-Digitools-platform",
    live: "https://digitools-by-nirjhor07.netlify.app/",
  },
  {
    title: "Book Vibes - Book Store",
    category: "Frontend",
    featured: false,
    description:
      "Book Vibes is a modern online book store built with React, Vite, and Tailwind CSS. This project highlights premium digital services and features an interactive pricing system along with a user-friendly interface.",
    tech: ["React", "Vite", "Tailwind CSS", "daisyUI", "React Router"],
    image: "/images/book.png",
    github: "https://github.com/Nirjhor07/-book-vibe-react-route-project-",
    live: "https://book-vibe-by-nirjhor-akash.netlify.app/",
  },
];

export const experience = [
  {
    role: "Executive Assistant, Management",
    company: "Mach10 Holdings Ltd.",
    period: "2025 - Present",
    details:
      "Working as an Executive Assistant in management while also contributing to the company’s digital presence through web development. Developed and maintained the company website using Next.js, focusing on responsive design, performance optimization, and modern UI/UX practices. Assisted in managing workflows, coordinating operations, and supporting organizational tasks while applying technical skills to create scalable and user-friendly web solutions.",
  },
  {
    role: "IT Assistant (Intern)",
    company: "Cargo International Logistics Ltd",
    period: "2025 (3 Months Internship)",
    details:
      "Worked as an IT Assistant intern with a focus on understanding real-world supply chain and logistics operations. Joined the organization as part of a business-driven research initiative to gain domain knowledge in shipping, cargo handling, and distribution networks. This hands-on exposure directly supported my machine learning research, where I developed a forecasting model for business analysis. During the internship, I explored logistics data flows, operational bottlenecks, and distribution patterns, which helped me design more accurate and practical predictive models for supply chain forecasting.",
  },
  {
    role: "Entrepreneur / Digital Business Operator",
    company: "High Nation (Facebook Page)",
    period: "2021 - 2022",
    details:
      "Managed and operated a Facebook-based business page called 'High Nation' alongside university studies. Built direct business relationships with Chinese suppliers, sourced products, and handled end-to-end customer sales and communication. This entrepreneurial experience strengthened my skills in digital marketing, client communication, negotiation, and basic e-commerce operations. It also provided real-world exposure to product sourcing and online business management. Eventually paused the venture to fully focus on skill development and advancing my technical expertise in software and machine learning, after identifying gaps in my knowledge that I wanted to improve.",
  },
];

export const testimonials = [
  {
    quote:
      "Nirjhor has consistently shown exceptional potential across both technical and entrepreneurial domains. From building real-world business systems to exploring machine learning applications, he demonstrates a rare combination of curiosity, adaptability, and execution. His future in tech looks extremely promising.",
    name: "Former Supervisor",
    role: "Mach10 Holdings Ltd.",
  },
  {
    quote:
      "Nirjhor is a fast learner with strong problem-solving ability. During our collaboration, he showed great initiative in handling client communication and product sourcing while managing his studies. With continued focus on technical growth, he has a very strong future ahead.",
    name: "Business Partner",
    role: "High Nation (Facebook Business)",
  },
  {
    quote:
      "Nirjhor has a strong foundation and clear passion for software and machine learning. If he continues building his skills with this level of dedication, he is on a path toward becoming a highly capable full-stack and AI engineer.",
    name: "Academic Mentor",
    role: "University Guidance",
  },
];
