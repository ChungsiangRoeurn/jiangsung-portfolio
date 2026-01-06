import type {
  AboutMeItems,
  EmploymentItem,
  SiteConfig,
  SiteContent,
} from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "JiangSung",
  author: "Built with Astro.",
  image: "/chungsiang-logo.png",
  description: "JiangSung, Fullstack Developer based in Cambodia",
  lang: "km,en",
  siteLogo: "/chungsiang-logo.png",
  navLinks: [
    { text: "Home", href: "/" },
    { text: "Timeline", href: "/timeline" },
    { text: "Hobbies", href: "/hobbies" },
  ],

  socialLinks: [
    {
      text: "LinkedIn",
      href: "https://www.linkedin.com/in/chungsiang-roeurn/",
      icon: "/icons/linkedin.svg",
    },
    {
      text: "Github",
      href: "https://github.com/ChungsiangRoeurn",
      icon: "/icons/github.svg",
    },
    {
      text: "Facebook",
      href: "https://web.facebook.com/chungsiang.roeurn.79",
      icon: "/icons/facebook.svg",
    },
    {
      text: "Telegram",
      href: "https://t.me/rn_chungsiang",
      icon: "/icons/telegram.svg",
    },
  ],
  socialImage: "/seo.png",
  canonicalURL: "https://chungsiang.co",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "CHUNGSIANG ROEURN.",
    specialty: "Fullstack Developer",
    summary1:
      "Hey, I’m Jiang-Sung — a fullstack developer excited to create and innovate!",
    summary2: "Have a project in mind? Let's make it happen.",
    email: "rn.chungsiang@gmail.com",
  },
  projects: [
    {
      name: "1965.Store Ecommerce",
      summary:
        "A mid-level e-commerce platform offering easy online purchasing and payment, designed to be simpler than other options!",
      link: "https://chungsiang.co/",
      code: "https://github.com/ChungsiangRoeurn/express-api",
      technologies: [
        "ReactJS",
        "Typescript",
        "Tailwind CSS",
        "ShadCN",
        "ExpressAPI",
        "Prisma",
      ],
    },
    {
      name: "Book Borrow Library App",
      summary:
        "A peer-to-peer book borrowing platform built during a 2025 hackathon. I focused on both frontend development and project architecture.",
      link: "https://y-reporter.vercel.app/",
      code: "https://github.com/ChungsiangRoeurn/Y-REPORTER",
      technologies: ["NextJS", "Tailwind CSS", "ShadCN", "GoogleAPI"],
    },
    {
      name: "JiangSung Portfolio",
      summary:
        "A showcase of a person’s information for clients through a portfolio website.",
      link: "https://chungsiang.co/",
      code: "https://github.com/ChungsiangRoeurn/",
      technologies: [
        "AstroJS",
        "Typescript",
        "ShadCN",
        "Lucide-React",
        "MangaAPI",
      ],
    },
  ],
  about: {
    description: `
      I am passionate about technology and love building digital products that solve real-world problems.

      I'm a student in the field of Computer Science, based in Cambodia 🇰🇭.

      Whether it's:
      - Personal websites to showcase your brand
      - Custom projects tailored to your needs
      - Web performance and optimization

      I focus on quality and functionality, collaborating closely with every client to bring their ideas to life.

      Ready to take your project to the next level? Let’s work together!
    `,
    image: "/chungsiang.png",
  },
};
export const imageGrid = [
  {
    id: 1,
    image: "sheep.jpg",
    class: "row-span-2 col-span-1", // Tall portrait
    aspect: "aspect-[3/4]",
    category: "photography",
  },
  {
    id: 2,
    image: "camcyber.jpg",
    class: "col-span-2 row-span-1", // Wide landscape
    aspect: "aspect-[4/3]",
    category: "nature",
  },
  {
    id: 3,
    image: "dl.jpg",
    class: "col-span-2 row-span-2", // Large square
    aspect: "aspect-square",
    category: "featured",
  },
  {
    id: 4,
    image: "imhere.jpg",
    class: "col-span-1 row-span-1", // Small portrait
    aspect: "aspect-[2/3]",
    category: "photography",
  },
  {
    id: 5,
    image: "hereisme.jpg",
    class: "col-span-1 row-span-1", // Small landscape
    aspect: "aspect-[3/2]",
    category: "urban",
  },
  {
    id: 6,
    image: "alsome.jpg",
    class: "col-span-1 row-span-1", // Small square
    aspect: "aspect-square",
    category: "abstract",
  },
  {
    id: 7,
    image: "learn.jpg",
    class: "col-span-1 row-span-1", // Small square
    aspect: "aspect-square",
    category: "abstract",
  },
];

export const techStack = [
  {
    name: "Astro",
    icon: "/tech/astro.svg",
    url: "https://astro.build/",
  },
  {
    name: "Tailwind",
    icon: "/tech/tailwind.svg",
    url: "https://tailwindcss.com",
  },
  {
    name: "JavaScript",
    icon: "/tech/javascript.svg",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "TypeScript",
    icon: "/tech/typescript.svg",
    url: "https://www.typescriptlang.org/",
  },
  {
    name: "ReactJS",
    icon: "/tech/react.svg",
    url: "https://react.dev/",
  },
  {
    name: "Expo",
    icon: "/tech/expo.svg",
    url: "https://expo.dev/",
  },
  {
    name: "NextJS",
    icon: "/tech/nextjs.svg",
    url: "https://nextjs.org/",
  },
  {
    name: "Shadcn",
    icon: "/tech/shadcn.svg",
    url: "https://ui.shadcn.com/",
  },
  {
    name: "Docker",
    icon: "/tech/docker.svg",
    url: "https://www.docker.com/",
  },
  {
    name: "NestJS",
    icon: "/tech/nestjs.svg",
    url: "https://nestjs.com/",
  },
  {
    name: "Prisma",
    icon: "/tech/prisma.svg",
    url: "https://www.prisma.io/",
  },
  {
    name: "Relational DB",
    icon: "/tech/database.svg",
  },
];
export const aboutMe: AboutMeItems[] = [
  {
    name: "ROEURN CHUNGSIANG,",
    content: [
      "A Fullstack Developer, which have journey began at the end of 2022 after finishing high school. Back then, I only knew a little about IT and thought it was mainly about designing websites. That changed when I joined RUPP in 2023 to study Computer Science. In the beginning, I had to learn many orientation subjects, which was quite challenging. But by my second year, the focus shifted more toward core IT subjects, and that’s when I truly found my passion. I explored UX/UI design with Adobe XD and Figma, studied web design, and even built a full-stack POS system with mentorship from senior students working at the Ministry of Public Works and Transport (MPWT). Later, I passed an internship as a Frontend Developer at the end of my second year at a startup company base in Phnom Penh, Cambodia. Where I gained real-world experience. Today, I’m working as a Mobile Developer with react native, building and maintaince fullstack app to make it good at both quality and user interface.",
    ],
  },
];

export const employmentItems: EmploymentItem[] = [
  {
    role: "Junior Mobile Developer",
    company: "NTX Mall Cambodia",
    duration: "Dec 2025 – Present",
    description:
      "Learning, building maintain real-world fullstack mobile app development and system design.",
    responsibilities: [
      "Maintain the fullstack mobile application using react Native",
      "Worked with MySQL and data modeling for backend services",
      "Improve better UI base requirement and testing application",
      "Collaborated with frontend, backend developers to ensure seamless API integration",
      "Mini App Telegram, Mobile App, and Web App Design & Development",
    ],
    technologies: [
      "Reactjs",
      "React Native",
      "TypeScript",
      "GraphQL",
      "MySQL",
      "Postman",
    ],
  },
  {
    role: "Junior Frontend Developer",
    company: "dreamsLAB",
    duration: "Dec 2024 – Jul 2025",
    description:
      "Developed and maintained full-stack web applications for clients across multiple industries.",
    responsibilities: [
      "Developed dynamic landing pages using Next.js and TailwindCSS",
      "Integrated frontend applications with backend APIs using Honojs",
      "Collaborated with designers using Figma to ensure accurate UI/UX implementation",
      "Built and maintained reusable UI components using Shadcn/UI",
    ],
    technologies: [
      "NextJS",
      "Reactjs",
      "TypeScript",
      "TailwindCSS",
      "ShadCN/UI",
      "HonoJS",
    ],
  },
  {
    role: "Frontend Developer Intern",
    company: "dreamsLAB",
    duration: "Aug 2024 – Nov 2024",
    description:
      "Completed a structured internship focused on building solid frontend foundations and real-world skills.",
    responsibilities: [
      "Assisted in building responsive components using React.js and TailwindCSS",
      "Learned Git workflows for version control and team collaboration",
      "Fixed minor UI bugs and improved cross-browser compatibility",
      "Participated in team meetings and code reviews to gain feedback and improve coding quality",
    ],
    technologies: [
      "ReactJS",
      "NextJS",
      "TypeScript",
      "TailwindCSS",
      "CMS",
      "Git",
    ],
  },
];
