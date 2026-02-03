import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Nikhil Dubey",
  initials: "Mr.",
  url: "https://github.com/nikhil-d-s",
  location: "India",
  locationLink: "https://www.google.com/maps/place/india",
  description:
    "Backend Engineer with hands-on experience building scalable AI agents, automation systems, and workflow tools. I specialise in Generative AI and backend development with Python and FastAPI.",
  summary:
    "Backend Engineer passionate about building intelligent systems. Currently working on multi-agent workflows and I specialise in Android development (Flutter) and backend development with Python and FastAPI. Skilled in Data Structures and Algorithms, focused on writing efficient and optimized solutions.",
  avatarUrl: "/me.png",
  skills: [
    "Flask",
    "Deep Learning",
    "PyTorch",
    "Agentic AI",
    "Multi-agent Workflows",
    "Langchain",
    "LangGraph",
    "Flutter",
    "RAGs",
    "FastAPI",
    "SQLAlchemy",
    "Pandas",
    "NumPy",
    "AWS Cloud Practitioner"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "nikhildubey.devs@gmail.com",
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/nikhil-d-s",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/nikhil--dubey/",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/nikhilkilling",
        icon: Icons.x,
        navbar: true,
      },
      Cal: {
        name: "Book a Call",
        url: "https://cal.com/nikhildevs",
        icon: Icons.calendar,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "nikhildubey.devs@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [],
  education: [
    {
      school: "KIET Group of Institutions",
      href: "",
      degree: "Bachelor of Technology in Computer Science",
      logoUrl: "/kiet.jpeg",
      start: "2024",
      end: "2028",
    },
  ],
  projects: [
    {
      title: "SensorTower Dashboard",
      href: "https://github.com/Nikhil-d-s/SensorTower-Dashboard  ",
      //dates: "2024 - Present",
      active: true,
      description:
        "This tool makes it super easy to fetch data from 28+ SensorTower API endpoints using your App IDs. You can fetch in bulk mode or individually with custom parameters, and get clean JSON output ready for analysis.",
      technologies: [
        "React",
        "SensorTowerAPIs",
        "TypeScript",
      ],
      links: [
        {
          type: "Website",
          href: "https://sensortower-analysis.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Nikhil-d-s/SensorTower-Dashboard",
          icon: <Icons.github className="size-3" />,
        },

      ],
      image: "",
      video: "",
    },
    {
      title: "CS50x Projects",
      href: "https://github.com/nikhil-d-s/",
      //dates: "2024",
      active: true,
      description:
        "Worked on multiple CS50x projects, focusing mainly on Flask-based web development. Built full-stack applications with authentication, databases, and clean backend logic while following strong software design principles.",
      technologies: [
        "Python",
        "Cryptography",
        "SQL",
        "Git",
        "C",
      ],
      links: [
        {
          type: "Website",
          href: "https://cs50.dev/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/nikhil-d-s",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "JanParichay Dashboard",
      href: "https://github.com/nikhil-d-s/uidaimusks",
      //dates: "2024",
      active: true,
      description:
        "This project provides a complete analysis of biometric registration data across India, covering 54 states and union territories with over 5.4 million records.",
      technologies: [
        "Python",
        "Machine Learning",
        "Data Analytics",
        "Data Visualization",
        "Data Engineering",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/nikhil-d-s/UIDAIMusks",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Zero",
      href: "https://github.com/nikhil-d-s/zero",
      //dates: "2024",
      active: true,
      description:
        "Zero is a beautifully minimalistic To-Do app designed for simplicity and speed. It helps you focus on zeroing out your daily tasks with a clean interface, smooth animations, and efficient local data storage using Hive.",
      technologies: [
        "Flutter",
        "Dart",
        "Hive",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/nikhil-d-s/zero",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },

  ],
  hackathons: [
    {
      title: "IROC 2026",
      dates: "January - current, 2026",
      location: "India",
      description:
        "Part of a 7-member team in designing and demonstrating autonomous navigation and exploration systems for micro-UAVs to simulate future planetary (e.g., Mars) missions without GPS, emphasising innovation in robotics, vision-based navigation and autonomous data collection",
      image: "/iroc.jpeg",
      links: [],
    },
    {
      title: "UIDAI Data Hackathon",
      dates: "January 2th - 20th, 2026",
      location: "India",
      description:
        "JanParichay Analysis Project, analyzing how India’s digital ID login system is used across government services. Studied usage patterns, bottlenecks, and security aspects to suggest improvements in efficiency and user experience.",
      image: "/uidai.png",
      // win: "3rd Place Winner",
      links: [],
    },
  ],
} as const;
