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
    "I'm Murad Yusubov, an 18-year-old self-taught full-stack developer with 3+ years of experience building and delivering web applications. I specialize in crafting scalable backends with Node.js and PostgreSQL, and building sleek, responsive frontends using React, Next.js, and TailwindCSS. I’ve contributed to multiple production-grade platforms across diverse teams, and consistently focus on clean code, performance, and real-world problem solving. I'm driven by impact — building software that works, scales, and makes life easier.",

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
        "Contributed to a creator-focused content platform by building reusable UI components and integrating backend APIs. Collaborated closely with the backend engineer to deliver modular features and improve developer workflows. Leveraged Remix and React Router to architect scalable data flows and dynamic page routing. Delivered production-grade, responsive layouts with smooth interaction patterns and clean, maintainable logic.",
    },
    {
      company: "Softsync",
      href: "https://app.softsync.ai",
      badges: [],
      location: "Remote",
      title: "Frontend Developer (Contract)",
      logoUrl: "/logo-softsync.jpg",
      start: "May 2025",
      end: "Present",
      description:
        "Built a modern CRM-style interface inspired by Folk.app. Delivered drag-and-drop pipelines, Kanban-style boards, and modular table views. Led frontend implementation for dynamic data grouping and real-time interactions using Next.js, Tailwind, and TypeScript. Collaborated with the backend and product lead to shape key user workflows.",
    },
    {
      company: "OnlyGamers",
      href: null,
      badges: [],
      location: "Remote",
      title: "Frontend Developer",
      logoUrl: "/onlygamers.png",
      start: "April 2024",
      end: "July 2024",
      description:
        "Developed core UI and content tools for a social gaming platform. Used Next.js and TailwindCSS to build reusable components and responsive layouts. Helped improve performance and prepare the platform for its pivot to ASCND.",
    },
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
        "A responsive budgeting app that helps students track expenses, manage category-based budgets, and gain insights through visualizations. Built as a full-stack application with Next.js, PostgreSQL, and Clerk. Features include recurring transactions, multi-currency support, and mobile-first design. Designed and shipped independently as a portfolio-grade product.",
      technologies: [
        "Next.js",
        "TypeScript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Clerk",
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
    },
    {
      title: "ScopeMatter",
      href: "https://github.com/Biolater/scopematter",
      dates: "Jul 2025 – Present",
      active: true,
      description:
        "ScopeMatter is a micro-SaaS platform that helps freelance developers and small agencies formalize project requirements, prevent scope creep, and manage client expectations. Built with Next.js 15, Prisma, PostgreSQL, and Clerk, it includes features such as project scoping, scope item tracking, structured change requests, and client management. Designed with a subscription-based model to validate SaaS viability.",
      technologies: [
        "Next.js 15",
        "TypeScript",
        "Prisma",
        "PostgreSQL",
        "TailwindCSS",
        "Clerk",
        "HeroUI",
        "Supabase",
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
      image: "/scopematter.png",
    },
  ],
} as const;
