import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Murad Yusubov",
  initials: "MY",
  url: "https://muradyusubov.com",
  location: "Baku, Azerbaijan",
  locationLink: "https://www.google.com/maps/place/Baku",
  description:
    "Full-stack developer with 3+ years of experience building performant, scalable web applications with modern technologies.",
  summary:
    "I'm Murad Yusubov, an 18-year-old self-taught full-stack developer with 3+ years of experience shipping production code. I've led frontend teams, built complex CRM platforms from scratch, and delivered features serving real users. I specialize in React, Next.js, TypeScript, Node.js, and PostgreSQL, building scalable SaaS platforms, CRM systems, and financial management apps. Expert in REST APIs, GraphQL, Tailwind CSS, and modern JavaScript. I'm driven by impact: building software that works, scales, and solves real problems.",

  avatarUrl: "/me.png",

  skills: [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Remix",
    "React Router",
    "Node.js",
    "Express",
    "Prisma",
    "PostgreSQL",
    "MongoDB",
    "TailwindCSS",
    "AWS",
    "Firebase",
    "Clerk",
    "Git",
  ],

  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],

  contact: {
    email: "muradyusubovdev@icloud.com",
    tel: "+994709224340",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/biolater",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/murad-yusubov",
        icon: Icons.linkedin,
        navbar: true,
      },
      Email: {
        name: "Send Email",
        url: "mailto:muradyusubovdev@icloud.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "ASCND",
      href: "https://ascnd.tv",
      badges: [],
      location: "Remote",
      title: "Frontend Developer",
      logoUrl: "/logo.png",
      start: "February 2025",
      end: "May 2025",
      description:
        "Architected and shipped the complete frontend for a creator monetization platform enabling content creators to monetize through subscription tiers and pay-per-view models. Designed and implemented a sophisticated video access control system with granular tier-based permissions, allowing creators to offer partial content access (e.g., 10-minute preview for basic tier, full access for premium). Integrated Stripe payment processing to handle multiple subscription packages and one-time purchases. Engineered scalable component architecture using Remix and React Router, establishing API contracts with backend team to optimize data fetching patterns. Delivered production-grade authentication flows, content locking mechanisms, and responsive UI with TailwindCSS.",
    },
    {
      company: "Softsync",
      href: "https://app.softsync.ai",
      badges: [],
      location: "Remote",
      title: "Frontend Team Lead",
      logoUrl: "/logo-softsync.jpg",
      start: "May 2025",
      end: "Present",
      description:
        "Leading frontend development for an enterprise CRM platform (Folk.app-inspired) serving a 14-person team. Architected core UI infrastructure including a production-ready table component supporting multiple data types, keyboard navigation, and dynamic column reordering. Designed and implemented drag-and-drop pipeline views and modular entity management system (Deals, Companies, People). Manage a team of 2 frontend developers while delivering critical features: AI-powered workspace analytics tool, intelligent merge suggestions with manual and automatic workflows, entity enrichment, and email integration with custom sender support. Established GraphQL integration with Codegen for type-safe API consumption. Implemented comprehensive error tracking (Sentry) and analytics (PostHog). Built scalable component library with Next.js, TypeScript, ShadCN UI, and Tailwind CSS, ensuring consistent performance across Pipeline, Table, and Groups view types.",
    },
    // {
    //   company: "OnlyGamers",
    //   href: null,
    //   badges: [],
    //   location: "Remote",
    //   title: "Frontend Developer",
    //   logoUrl: "/onlygamers.png",
    //   start: "April 2024",
    //   end: "July 2024",
    //   description:
    //     "Developed core UI infrastructure and content management tools for a social gaming platform. Created a reusable component library with Next.js and TailwindCSS, implementing responsive layouts optimized for gaming content. Improved application performance by implementing code splitting and lazy loading strategies, reducing initial bundle size through dynamic imports. Contributed to platform infrastructure modernization by refactoring components for modularity and establishing consistent design patterns, setting the foundation for the platform's evolution into ASCND.",
    // },
  ],

  education: [
    {
      school: "Giresun University",
      href: "https://giresun.edu.tr",
      degree: "Bachelor's Degree in Computer Science",
      logoUrl: "/giresun-university.png",
      start: "November 2024",
      end: "2028 (Expected)",
    },
  ],

  projects: [
    {
      title: "Student Budget Buddy",
      href: "https://github.com/Biolater/student-budget-buddy",
      dates: "Feb 2025 – May 2025",
      active: false,
      description:
        "Financial management platform designed for students to track spending, manage budgets, and gain AI-powered insights. Features multi-currency support with real-time conversion, intelligent budget management with automatic expense linking, and recurring transactions with flexible frequencies. Integrated ChatGPT API for natural language financial queries and built interactive dashboard with spending trends and category breakdowns.",
      technologies: [
        "Next.js",
        "TypeScript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Clerk",
        "Express.js",
        "ChatGPT API",
        "Charts.js",
      ],
      links: [
        {
          type: "GitHub (Frontend)",
          href: "https://github.com/Biolater/Student-Budget-Buddy",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "GitHub (Backend)",
          href: "https://github.com/Biolater/Student-Budget-Buddy-Backend",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Live Demo",
          href: "https://student-bugdet-buddy-lyje.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/student-budget-buddy.png",
      video: ""
    },
    {
      title: "ScopeMatter",
      href: "https://github.com/Biolater/scopematter",
      dates: "Jul 2025 – Oct 2025",
      active: false,
      description:
        "Micro-SaaS preventing scope creep for freelancers through structured workflows from requests to change orders. Includes secure project sharing, professional PDF exports, and analytics—built to validate subscription model viability.",
      technologies: [
        "Next.js 15",
        "TypeScript",
        "Prisma",
        "PostgreSQL",
        "TailwindCSS",
        "Clerk",
        "HeroUI",
        "Supabase",
        "Express.js",
        "Redis",
      ],
      links: [
        {
          type: "GitHub (Frontend)",
          href: "https://github.com/Biolater/scopematter",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "GitHub (Backend)",
          href: "https://github.com/Biolater/scopematter-be",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Live Demo",
          href: "https://scopematter.xyz",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "https://9nghnaawajmv9mqf.public.blob.vercel-storage.com/scopematter",
    },
  ],
} as const;