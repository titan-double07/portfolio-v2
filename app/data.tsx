import { DiPhotoshop } from "react-icons/di";
import {
  FaCommentDots,
  FaGitAlt,
  FaHome,
  FaSuitcase,
  FaTrello,
  FaUserAstronaut,
} from "react-icons/fa";
import {
  TbBrandBootstrap,
  TbBrandCss3,
  TbBrandFigma,
  TbBrandFramerMotion,
  TbBrandHtml5,
  TbBrandJavascript,
  TbBrandMongodb,
  TbBrandMysql,
  TbBrandNextjs,
  TbBrandNodejs,
  TbBrandReact,
  TbBrandRedux,
  TbBrandTailwind,
  TbBrandTypescript,
} from "react-icons/tb";

import { SiJira, SiPostgresql } from "react-icons/si";

import { AboutPageData, Link, Project, Tools } from "./types/types";

export const links: Link[] = [
  {
    id: 1,
    url: "/",
    text: "Home",
    icon: <FaHome />,
  },
  {
    id: 2,
    url: "/about",
    text: "About",
    icon: <FaUserAstronaut />,
  },
  {
    id: 3,
    url: "/projects",
    text: "Projects",
    icon: <FaSuitcase />,
  },
  {
    id: 4,
    url: "/comment",
    text: "Comment",
    icon: <FaCommentDots />,
  },
];
export const tools: Tools[] = [
  {
    text: "Figma",
    icon: <TbBrandFigma className="" />,
    category: "design",
  },
  {
    text: "Photoshop",
    icon: <DiPhotoshop className="text-[#2fa3f7]" />,
    category: "design",
  },
  {
    text: "NextJs",
    icon: <TbBrandNextjs className="icon " />,
    category: "front-end",
  },
  {
    text: "React",
    icon: <TbBrandReact className="text-[#61dafb] " />,
    category: "front-end",
  },
  {
    text: "TypeScript",
    icon: <TbBrandTypescript className="icon text-[#0076c6]" />,
    category: "front-end",
  },
  {
    text: "Redux",
    icon: <TbBrandRedux className="text-[#7a50be]" />,
    category: "front-end",
  },
  {
    text: "Framer Motion",
    icon: <TbBrandFramerMotion className="text-[#7500e3]" />,
    category: "front-end",
  },
  {
    text: "Tailwind",
    icon: <TbBrandTailwind className="text-[#06b6d4]" />,
    category: "front-end",
  },

  {
    text: "Bootstrap",
    icon: <TbBrandBootstrap className="text-[#7510f6]" />,
    category: "front-end",
  },
  {
    text: "Javascript",
    icon: <TbBrandJavascript className="text-[#efd81d]" />,
    category: "front-end",
  },
  {
    text: "CSS",
    icon: <TbBrandCss3 className="text-[#3a9bdc]" />,
    category: "front-end",
  },

  {
    text: "HTML",
    icon: <TbBrandHtml5 className="text-[#e5532d]" />,
    category: "front-end",
  },

  {
    text: "NodeJs",
    icon: <TbBrandNodejs className="icon text-[#509941]" />,
    category: "back-end",
  },
  {
    text: "mongoDB",
    icon: <TbBrandMongodb className="icon text-[#569134]" />,
    category: "back-end",
  },
  {
    text: "postgresql",
    icon: <SiPostgresql className="icon text-[#689dc9]" />,
    category: "back-end",
  },
  {
    text: "MySQL",
    icon: <TbBrandMysql className="icon text-[#007598]" />,
    category: "back-end",
  },

  {
    text: "Git/Github",
    icon: <FaGitAlt className="icon text-[#e94d32]" />,
    category: "workflow & collaboration",
  },
  {
    text: "Jira",
    icon: <SiJira className="icon text-[#357de8]" />,
    category: "workflow & collaboration",
  },
  {
    text: "Trello",
    icon: <FaTrello className="icon text-[#0080cb]" />,
    category: "workflow & collaboration",
  },
];

export const aboutPageData: AboutPageData = {
  about: {
    description: [
      `I began my web development journey in 2021, committing fully in 2022. At times, I felt overwhelmed by the amount of knowledge I needed to acquire 🤯, but I persisted one step at a time , I grew to love the process of creating and improving digital experiences. Every hurdle has been a stepping stone, and I'm proud of how much I've accomplished.`,

      `My ultimate goal as a web developer is to use my skills to solve problems and improve lives through user-centric solutions. I am dedicated to working hard, staying curious, and embracing continuous learning to unlock new possibilities in technology.`,

      `When I'm not coding, I enjoy swimming 🏊‍♂️, reading manga, listening to audiobooks and music 👂, watching movies 🍿, drawing, and gaming 🎮. While I've scaled back on these activities to focus on my career, they remain integral to my creativity and balance.
`,
    ],
    education: {
      institution: "Federal University of Technology,Owerri",
      degree: "Bachelor of Technology in Project Management",
      date: "2016 - 2023",
    },
  },
  certifications: [
    {
      name: "Bachelor of Technology in Project Management",
      issuer: "Federal University of Technology,Owerri",
      date: "2023",
    },
    {
      name: "Javascript Algorithms and Data Structures",
      issuer: "freeCodeCamp",
      date: "2022",
      url: "https://www.freecodecamp.org/certification/fccc439be82-76a9-4b66-af24-f091f59a6748/javascript-algorithms-and-data-structures",
    },
    {
      name: "Web Development Foundations",
      issuer: "Udacity",
      date: "2022",
      url: "https://drive.google.com/file/d/16-xyQSFOYpklTrPqKuS2gtKRj47ydLPu/view",
    },
    {
      name: "Front-End Development",
      issuer: "Zuri Team",
      date: "2022",
      url: "https://drive.google.com/file/d/16fDORIUwZaSUsWW6EmHouo6djLXBXNpH/view",
    },
  ],
  experience: [
    {
      company: "The Pake Group",
      employmentType: "full-time",
      details: [
        {
          role: "project manager",
          date: "JUL 2024 - Present",
          description: [
            `Orchestrated project planning and execution, coordinating cross-functional efforts between frontend,
backend, and design teams to ensure seamless feature development.`,
            `Monitored project progress using tools like Jira and Trello, implementing necessary adjustments to maintain alignment with timelines and deliverables, leading to successful and timely completion.
`,
            `Facilitated communication between stakeholders and technical teams, ensuring clarity on project goals and priorities to avoid delays or misalignments.
`,
          ],
        },
        {
          role: "front-end developer",
          date: "FEB 2024 - Present",
          description: [
            `Developed and maintained a real estate management solution app, integrating multiple APIs, including CMS APIs, Google Maps, Socket.io, and Next-Auth, to deliver a comprehensive platform for real estate services.
`,
            `Revamped the RCCGHE website, improving user experience with intuitive design updates and incorporating user feedback to refine the interface.
`,
            `Accelerated the development of the NoSlag web app (an inventory management system) to meet tight deadlines, focusing on performance optimization and feature delivery.`,
            `Implemented a data transfer feature to allow users to import Excel data directly into the app, streamlining the onboarding process and reducing manual input efforts.
`,
            `Adapted swiftly to using the Next.js pages directory and resolved critical bugs preventing TailwindCSS functionality, ensuring codebase compatibility and improved styling performance.
`,
            `Optimized user interfaces, refining designs based on user feedback to enhance interactivity and satisfaction.`,
          ],
        },
      ],
    },
    {
      company: "AtlasMkt",
      employmentType: "contract",
      details: [
        {
          role: "front-end developer ",
          date: "NOV - DEC 2023",
          description: [
            "Developed and implemented user-facing features for their atlasmkt web application (product management system). ",
            "Ensured proper backend API integration, making sure it functioned properly and as expected",
            "Further boosted my proficiency with Next.Js as I encountered problems and resolved those problems by seeking out more knowlege and better understanding of Next.Js",
          ],
        },
      ],
    },
    {
      company: "Zuri Team",
      employmentType: "Apprenticeship",
      details: [
        {
          role: "web developer Apprentice",
          date: "AUG 2022",
          description: [
            "Developed user - facing features and implemented interactive functionalities for web applications using HTML, CSS, and JavaScript.",
            "Gained knowledge in interactive and responsive web development",
            "Worked on various projects using Html, CSS, and JavaScript.",
          ],
        },
      ],
    },
    {
      company: "Seplat Energy",
      employmentType: "freelance",
      details: [
        {
          role: "public relations officer",
          date: "AUG, 2019",
          description: [
            "Worked with the community relations department at Seplat energy community development program for ohaji egbema in Owerri imo state",
            "Gained better knowledge and experience in communication and dealing with people",
          ],
        },
      ],
    },
  ],
  skills: [
    {
      name: "Front-End Development",
      description: `I specialize in developing dynamic, user-friendly web applications that deliver exceptional user experiences. By leveraging modern frameworks and libraries, I ensure seamless functionality, responsive designs, and optimal performance. My focus is on writing clean, maintainable code and implementing advanced features to meet project goals.`,
      tools: tools.filter((tool) => tool.category === "front-end"),
    },
    {
      name: "Web Design",
      description: `I have a foundational understanding of creating visually appealing and user-friendly designs. Using tools like Figma and Photoshop, I focus on developing layouts and prototypes that prioritize functionality and user needs. I’m eager to continue refining my design skills to deliver more engaging and accessible digital experiences just as i did with this portfoilio and professional projects.`,
      tools: tools.filter((tool) => tool.category === "design"),
    },
    {
      name: "Back-End Development",
      description: `I have foundational experience in building server-side applications and managing databases to support dynamic web applications. My work includes developing simple APIs, managing data flow, and integrating back-end systems with front-end interfaces to deliver full-stack solutions.`,
      tools: tools.filter((tool) => tool.category === "back-end"),
    },
    {
      name: "Workflow & Collaboration",
      description: `I utilize tools and methodologies to streamline workflows, manage projects effectively, and enhance team collaboration. By ensuring smooth version control, efficient task tracking, and clear communication, I help deliver projects on time while maintaining high standards.`,
      tools: tools.filter(
        (tool) => tool.category === "workflow & collaboration"
      ),
    },
  ],
};

export const projects: Project[] = [
  {
    url: "https://pake-estate-admin.vercel.app/",
    title: "CMS Admin Dashboard",
    image: "",
    description: "",
    tools: [
      {
        text: "Next.js",
        icon: <TbBrandNextjs className="icon " />,
      },
      {
        text: "Tailwind",
        icon: <TbBrandTailwind className="text-[#58c5ee]" />,
      },
    ],
  },
  {
    url: "https://dv-autos-frontend.vercel.app/",
    title: "DV Autos",
    image: "",
    description: "",
    tools: [
      {
        text: "Next.js",
        icon: <TbBrandNextjs className="icon " />,
      },
      {
        text: "Tailwind",
        icon: <TbBrandTailwind className="text-[#58c5ee]" />,
      },
    ],
  },
  {
    url: "https://rccghge-website-revamp.vercel.app/",
    title: "RCCGHGE Website Revamp",
    image: "/images/rccghge-revamp.png",
    description: "",
    tools: [
      {
        text: "Next.js",
        icon: <TbBrandNextjs className="icon " />,
      },
      {
        text: "Tailwind",
        icon: <TbBrandTailwind className="text-[#58c5ee]" />,
      },
    ],
  },
  // loopstudios landing page
  {
    url: "https://loopstudios-titanweb.vercel.app/",
    gitUrl: "https://github.com/titan-double07/loopstudios-landing-page",
    title: "Loopstudios landing page",
    image: "/images/loopstudios-desktop-min.png",
    description:
      "LoopStudios' landing page is built using Next.js and Tailwind CSS. The Unsplash API has been used to provide beautiful images, and the Framer Motion animation has brought the app to life. The result is a simple yet interesting design that is reminiscent of the biblical story of God breathing life into man.",

    tools: [
      {
        text: "Next.js",
        icon: <TbBrandNextjs className="icon " />,
      },
      {
        text: "Tailwind",
        icon: <TbBrandTailwind className="text-[#58c5ee]" />,
      },
      {
        text: "Redux",
        icon: <TbBrandRedux className="text-[#764abc]" />,
      },
      {
        text: "Framer Motion",
        icon: <TbBrandFramerMotion className="icon" />,
      },
    ],
  },
  {
    url: "https://multi-stage-form-beta.vercel.app/",
    gitUrl: "https://github.com/titan-double07/multi-stage-form",
    title: "Multi-stage SignUp Form",
    image: "/images/multi-stage-signUp-form.png",
    description:
      "The web app features a smooth and responsive multi-stage sign-up form, which is equipped with basic form validation and efficient data collection and tracking capabilities curtsey of React Hook Form library. The app was developed using Next.js and incorporates TailwindCSS for a modern and user-friendly UI/UX design. Additionally, Framer Motion was used to create intuitive and interactive animated transitions throughout the app.",
    tools: [
      {
        text: "Next.js",
        icon: <TbBrandNextjs className="icon " />,
      },
      {
        text: "Tailwind",
        icon: <TbBrandTailwind className="text-[#58c5ee]" />,
      },
      {
        text: "Framer Motion",
        icon: <TbBrandFramerMotion className="icon" />,
      },
    ],
  },
  {
    url: "https://rock-paper-scissors-app-seven.vercel.app/",
    gitUrl: "https://github.com/titan-double07/rock-paper-scissors-app",
    title: "Rock-Paper-Scissors App",
    image: "/images/rock-paper-scissors-app.png",
    description:
      "Here is a rock-paper-scissors game that you can enjoy during your free time. It provides an engaging gaming experience with seamless user interactions and a stylish design, thanks to FrontendMentor. The game logic is enhanced by the use of Redux for efficient state management, resulting in a smooth user experience. Other tools that were utilized in the development process include React.js and Tailwind. ",
    tools: [
      {
        text: "React",
        icon: <TbBrandReact className="text-[#58c5ee] " />,
      },
      {
        text: "Tailwind",
        icon: <TbBrandTailwind className="text-[#58c5ee]" />,
      },
      {
        text: "Redux",
        icon: <TbBrandRedux className="text-[#8712f7]" />,
      },
    ],
  },

  {
    url: "https://old-portfolio-v1.vercel.app/",
    gitUrl: "https://github.com/titan-double07/portfolio",
    title: "Old Portfolio Website",
    image: "/images/portfolio-img.png",
    description: `This is an older version of my portfolio website. It features a responsive design and an attractive UI, which highlights my progress as a developer. I also meticulously organized the database so that it could be used to populate different pages and make editing more convenient. The website was built using CSS and React.`,
    tools: [
      {
        text: "React",
        icon: <TbBrandReact className="text-[#58c5ee] " />,
      },
      {
        text: "CSS",
        icon: <TbBrandCss3 className="text-[#58c5ee]" />,
      },
    ],
  },
  // {
  //   url: "https://ecommerce-product-page-nine-mauve.vercel.app/",
  //   gitUrl: "https://github.com/titan-double07/ecommerce-product-page",
  //   title: "Ecommerce product page",
  //   image: "/images/ecommerce-product-page.png",
  //   description:
  //     "An e-commerce product page challenge from frontendmentor.io showcasing my proficiency with React hooks such as useState, useReducer, useContext, etc. This will help me better understand React.",
  //   tools: [
  //     {
  //       text: "React",
  //       icon: <TbBrandReact className="text-[#58c5ee] " />,
  //     },
  //     {
  //       text: "Tailwind",
  //       icon: <TbBrandTailwind className="text-[#58c5ee]" />,
  //     },
  //   ],
  // },
];
