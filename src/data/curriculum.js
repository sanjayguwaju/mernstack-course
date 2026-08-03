export const curriculum = [
  {
    id: 1,
    title: "MERN STACK MASTERCLASS",
    subtitle: "Powered by AI & Modern Web Technologies",
    type: "title",
    content: "An 8-Module Comprehensive Curriculum\nBeginner to Production-Ready Developer",
    stats: [
      { label: "Modules", value: "8", icon: "BookOpen" },
      { label: "AI Integrated", value: "100%", icon: "Bot" },
      { label: "Live Portfolio", value: "1", icon: "Globe" }
    ]
  },
  {
    id: 2,
    title: "Who Is This Course For?",
    subtitle: "Setting Expectations",
    type: "expectations",
    myths: [
      { question: "Do I need to be good at math?", answer: "No. You just need basic logic.", icon: "Calculator", isMyth: true },
      { question: "Do I need a CS degree?", answer: "No. Skills matter more than paper.", icon: "GraduationCap", isMyth: true },
      { question: "What DO I need?", answer: "Logic, persistence, and a willingness to build.", icon: "Lightbulb", isMyth: false }
    ]
  },
  {
    id: 3,
    title: "Why JavaScript & MERN?",
    subtitle: "One language. Every layer.",
    type: "grid",
    content: "JavaScript is the ONLY language that runs natively in the browser. The MERN stack takes this superpower and extends it to the backend.",
    columns: [
      {
        heading: "Why Developers Love It",
        icon: "Heart",
        items: [
          "Learn one language (JS) for everything",
          "Massive community and NPM ecosystem",
          "Blazing fast JSON data handling"
        ]
      },
      {
        heading: "AI & Modern Tools",
        icon: "Bot",
        items: [
          "AI-assisted coding (Copilot, ChatGPT)",
          "Next.js for ultimate performance",
          "TypeScript for bulletproof code"
        ]
      },
      {
        heading: "High Demand",
        icon: "TrendingUp",
        items: [
          "Full-stack devs are heavily recruited",
          "Highly scalable for startups",
          "Excellent entry-level opportunities"
        ]
      }
    ]
  },
  {
    id: 4,
    title: "The MERN Architecture",
    subtitle: "How the pieces connect",
    type: "architecture"
  },
  {
    id: 5,
    title: "A Sneak Peek: Code is Just Logic",
    subtitle: "It's easier than it looks.",
    type: "code_peek"
  },
  {
    id: 6,
    title: "LESSON 1 & 2",
    subtitle: "JavaScript, Git & Frontend Basics",
    type: "lesson_module",
    lessons: [
      {
        title: "Lesson 1: Javascript With Git",
        icon: "Terminal",
        topics: [
          { name: "1.1 Intro & Setup", desc: "Web dev overview, MERN roadmap, Node.js, VSCode, Git setup" },
          { name: "1.2 JS Basics", desc: "Data Types, Variables, Operators, Functions, Arrays, Objects" },
          { name: "1.3 Advanced JS", desc: "Arrow Functions, Closures, Callbacks, async/await" },
          { name: "1.4 DSA Overview", desc: "Queue, Stack, Linked List, Searching and Sorting" },
          { name: "1.5 ES6+", desc: "Let/Const, Promises, Hoisting, Prototypes, OOP" },
          { name: "1.6 Git & Versioning", desc: "GitHub, Branching, Merging, Conflicts, PRs, Git Tags and Releases" },
          { name: "1.7 TypeScript", desc: "Interfaces, Enums, Tuples, Generics" }
        ]
      },
      {
        title: "Lesson 2: Frontend Tech & AI",
        icon: "Layout",
        topics: [
          { name: "2.1 Web Apps", desc: "Evolution of web, HTML/CSS/JS foundations" },
          { name: "2.2 Basic Web", desc: "Semantics, Accessibility, Generating HTML with AI" },
          { name: "2.3 TailwindCSS", desc: "Utility-first CSS, Setup, Custom configurations" },
          { name: "2.4 DOM Manipulation", desc: "Event handling, Traversal, Asynchronous operations" }
        ]
      }
    ]
  },
  {
    id: 7,
    title: "LESSON 3 & 4",
    subtitle: "React Ecosystem & Next.js",
    type: "lesson_module",
    lessons: [
      {
        title: "Lesson 3: React Fundamentals (with TS)",
        icon: "Atom",
        topics: [
          { name: "3.1 Introduction", desc: "Why React? Setup and Benefits" },
          { name: "3.2 Core Concepts", desc: "JSX, Components, State, Props, Lifecycle, Hooks" },
          { name: "3.3 Ecosystem", desc: "Gatsby, Remix, Next.js overview, Routing with react-router-dom" },
          { name: "3.4 Advanced React", desc: "Formik, APIs (REST/GRPC/SOAP/GraphQL), Global State (Redux/Zustand), WebSockets, TDD (Jest/RTL), AI Integration" }
        ]
      },
      {
        title: "Lesson 4: React with Next.js",
        icon: "ServerCrash",
        topics: [
          { name: "4.1 Intro to Next.js", desc: "Features, benefits, and framework comparisons" },
          { name: "4.2 Architecture", desc: "Best practices, file structuring for scalability" },
          { name: "4.3 Next.js Features", desc: "File-based Routing, SSR, SSG, SWR, API Routes, Middleware" },
          { name: "4.4 AI Integration", desc: "AI-powered chatbots, recommendations, automated debugging" }
        ]
      }
    ]
  },
  {
    id: 8,
    title: "LESSON 5 & 6",
    subtitle: "Frontend Projects & Node.js Backend",
    type: "lesson_module",
    lessons: [
      {
        title: "Lesson 5: Frontend Projects",
        icon: "Laptop",
        topics: [
          { name: "5.1 Project Module", desc: "Design & build MIS/CMS, Blog, E-commerce, POS using React/Next.js with AI debugging and live coding" }
        ]
      },
      {
        title: "Lesson 6: Node.js With Express",
        icon: "Server",
        topics: [
          { name: "6.1 Intro to Node.js", desc: "Event-driven architecture, NPM, Built-in Modules (fs, path, http), Async programming" },
          { name: "6.2 Express.js with AI", desc: "Setup, MVC Architecture, Middlewares, File Uploads (AWS/Cloudinary), Nodemailer, AI debugging tools (Copilot)" },
          { name: "6.3 Auth & Security", desc: "JWT, OAuth, Session Management, Role-Based Access Control (RBAC)" }
        ]
      }
    ]
  },
  {
    id: 9,
    title: "LESSON 7 & 8",
    subtitle: "Databases & Full-Stack Integration",
    type: "lesson_module",
    lessons: [
      {
        title: "Lesson 7: Database and Usages",
        icon: "Database",
        topics: [
          { name: "7.1 NoSQL (MongoDB)", desc: "SQL vs NoSQL, CRUD, Indexing, Aggregation, Mongoose, AI for complex pipelines" },
          { name: "7.2 SQL Database", desc: "MySQL/PostgreSQL/SQLite, Joins, Normalization, Transactions, ORMs, Generating queries with AI" }
        ]
      },
      {
        title: "Lesson 8: Project Modules",
        icon: "Rocket",
        topics: [
          { name: "8.1 Backend Projects", desc: "REST API development with Express, Node.js and DB integration" },
          { name: "8.2 AI Modules", desc: "Chatbot integration, content recommendations, intelligent forms" },
          { name: "8.3 Full-Stack Integrations", desc: "Management Systems, Real-Time Chat, E-commerce, Blog Platform" },
          { name: "8.4 Deployment", desc: "Deploying applications on Heroku, Vercel, and other platforms" }
        ]
      }
    ]
  },
  {
    id: 10,
    title: "A Note to Students",
    subtitle: "",
    type: "quote",
    quote: "You are not learning to code. You are learning to think differently — to break complex problems into small, solvable steps. The code is just the tool. The real skill is the ability to look at a blank screen and know how to begin.",
    author: "Let's build."
  },
  {
    id: 11,
    title: "Ready to Build?",
    subtitle: "Next Steps to Enroll",
    type: "cta",
    content: "The masterclass cohort is strictly limited to ensure personal code reviews and 1-on-1 mentorship.",
    steps: [
      { title: "Enroll Today", desc: "Secure your spot for the upcoming cohort.", icon: "CheckCircle" },
      { title: "Join the Discord", desc: "Meet your peers and setup your machine.", icon: "MessageSquare" },
      { title: "Day 0 Kickoff", desc: "We begin our journey together.", icon: "Rocket" }
    ],
    buttonText: "Join the Masterclass"
  }
];
