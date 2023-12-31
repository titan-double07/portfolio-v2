import {
  FaHome,
  FaSuitcase,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaBootstrap,
  FaUserAstronaut,
  FaCommentDots,
} from "react-icons/fa";
import { TbBrandFramerMotion } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io5";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiRedux,
  SiReactquery,
} from "react-icons/si";
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
    url: "/contact",
    text: "Contact",
    icon: <FaCommentDots />,
  },
];

export const tools: Tools[] = [
  {
    text: "Next.js",
    icon: <SiNextdotjs className="icon " />,
  },
  {
    text: "React",
    icon: <FaReact className="text-[#58c5ee] " />,
  },
  {
    text: "Tailwind",
    icon: <SiTailwindcss className="text-[#58c5ee]" />,
  },
  {
    text: "Framer Motion",
    icon: <TbBrandFramerMotion className="icon" />,
  },
  {
    text: "TypeScript",
    icon: <SiTypescript className="icon text-[#58c5ee]" />,
  },
  {
    text: "HTML",
    icon: <FaHtml5 className="text-[orangered]" />,
  },
  {
    text: "CSS",
    icon: <FaCss3Alt className="text-[#58c5ee]" />,
  },
  {
    text: "Javascript",
    icon: <IoLogoJavascript className="text-[#f5de19]" />,
  },

  {
    text: "Bootstrap",
    icon: <FaBootstrap className="text-[#8712f7]" />,
  },
  {
    text: "Redux",
    icon: <SiRedux className="text-[#8712f7]" />,
  },
];

export const aboutPageData: AboutPageData = {
  "about": {
    description: [`I began my journey into the world of web development in 2021, but it wasn't until 2022 that I decided to take it seriously and fully commit myself to it. Despite the challenges I faced along the way, I found myself falling in love with the process.`,

      `At times, I felt overwhelmed by the amount of knowledge I needed to acquire 🤯, but I refused to give up. I persisted and continued to push forward, one step at a time 💪, until I realized how much I had grown. Looking back, I'm proud of the progress I have made and how far I have come 😌.,`,
      `During my leisure time, I enjoy swimming 🏊‍♂️, reading(manga😅), listening to music and audiobooks, watching movies, drawing, and playing games and of course coding 👨‍💻. Although I've had to reduce the amount of time I spend on these activities, I accept it as a small sacrifice to achieve my goal of becoming a developer.`,

      `My ultimate goal is to use my web development skills to help others by solving problems and making their lives easier. I am aware that this will require hard work, dedication, and a willingness to learn, but I'm excited about the possibilities that lie ahead 💯😁.`],
    education: {
      institution: "Federal University of Technology,Owerri",
      degree: "Bachelor of Technology in Project Management",
      date: "2016 - 2023",
    },
  },
  "certifications": [
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
  "experience": [
    {
      company: "AtlasMkt",
      position: "front-end developer ",
      date: "NOV - DEC, 2023",
      description: [
        "Developed and implemented user - facing features for their web applications ",
        'Ensured proper API integration, making sure it fuctiond properly and as expected',
        'Further boosted my proficiency with Next.Js as I encountered bugs and resolved those bug by seeking out more knowlege and better understanding next.js'
      ],
    },
    {
      company: "Zuri Team",
      position: "web developer internship",
      date: "AUG, 2022",
      description: [
        "Developed user - facing features and implemented interactive functionalities for web applications using HTML, CSS, and JavaScript.",
        "Gained knowledge in interactive and responsive web development",
        "Worked on various projects using Html, CSS, and JavaScript.",
      ],
    },
    {
      company: "Seplat Energy",
      position: "public relations officer",
      date: "AUG, 2019",
      description: [
        "Worked with the community relations department of seplat petroleum development company now seplat energy at the 2019 Seplat energy community development program for ohaji egbema in Owerri imo state",
        'Gained better knowledge and experience in communication and dealing with people',
      ],
    },

  ],
  "skills": [
    {
      name: "Front-End Development",
      description: `Proficiency with the basics of front-end development, grounded with the knowlegde of HTML, CSS, and javaScript to build user-friendly and responsive web applications.`,
    },
    {
      name: "Web Design",
      description: `With tools such as figma and photoshop and the knowledge of design principles and user-centered design techniques to create visually appealing and intuitive interfaces.`,
    },
    {
      name: "CSS Framwork",
      description: `Taking my CSS skills to the next level, I acqured the knowledge of CSS frameworks such as bootstrap and tailwind CSS, that helped me boost my production time.`,
    },
    {
      name: "JavaScript Framework/Library",
      description: `Another boost to my skill set, i also acquired the knowledge of JavaScript framework/libraries such as react.js, and next.js that helped me to build more dynamic web applications more efficiently and quickly.`,
    },
    {
      name: "Animation with Framer Motion",
      description: `With the incorporation of framer motion with react.js, i can breathe life into any web application, with intuitive and captivating animations.`,
    },
    {
      name: "Version Control",
      description: `Proficiency in using GIT for source code management and collaboration.`,
    },
    {
      name: "API Integration and Database Management",
      description: `strong experience with in integrating RESTful APIs to fetch and display data from databases (mongoDB, MYSQL,) in web applications.`,
    },
  ],
};

export const projects: Project[] = [
  {
    url: "https://loopstudios-titanweb.vercel.app/",
    gitUrl: "https://github.com/titanwarlord007/loopstudios-landing-page",
    title: "Loopstudios landing page",
    image: "/images/loopstudios-desktop-min.png",
    description:
      "LoopStudios' landing page is built using Next.js and Tailwind CSS. The Unsplash API has been used to provide beautiful images, and the Framer Motion animation has brought the app to life. The result is a simple yet interesting design that is reminiscent of the biblical story of God breathing life into man.",

    tools: [
      {
        text: "Next.js",
        icon: <SiNextdotjs className="icon " />,
      },
      {
        text: "Tailwind",
        icon: <SiTailwindcss className="text-[#58c5ee]" />,
      },
      {
        text: "Redux",
        icon: <SiRedux className="text-[#764abc]" />,
      },
      {
        text: "Framer Motion",
        icon: <TbBrandFramerMotion className="icon" />,
      },
    ],
  },
  {
    url: "https://multi-stage-form-beta.vercel.app/",
    gitUrl: "https://github.com/titanwarlord007/multi-stage-form",
    title: "Multi-stage SignUp Form",
    image: "/images/multi-stage-signUp-form.png",
    description:
      "The web app features a smooth and responsive multi-stage sign-up form, which is equipped with basic form validation and efficient data collection and tracking capabilities curtsey of React Hook Form library. The app was developed using Next.js and incorporates TailwindCSS for a modern and user-friendly UI/UX design. Additionally, Framer Motion was used to create intuitive and interactive animated transitions throughout the app.",
    tools: [
      {
        text: "Next.js",
        icon: <SiNextdotjs className="icon " />,
      },
      {
        text: "Tailwind",
        icon: <SiTailwindcss className="text-[#58c5ee]" />,
      },
      {
        text: "Framer Motion",
        icon: <TbBrandFramerMotion className="icon" />,
      },
    ],
  },
  {
    url: "https://rock-paper-scissors-app-seven.vercel.app/",
    gitUrl: "https://github.com/titanwarlord007/rock-paper-scissors-app",
    title: "Rock-Paper-Scissors App",
    image: "/images/rock-paper-scissors-app.png",
    description:
      "Here is a rock-paper-scissors game that you can enjoy during your free time. It provides an engaging gaming experience with seamless user interactions and a stylish design, thanks to FrontendMentor. The game logic is enhanced by the use of Redux for efficient state management, resulting in a smooth user experience. Other tools that were utilized in the development process include React.js and Tailwind. ",
    tools: [
      {
        text: "React",
        icon: <FaReact className="text-[#58c5ee] " />,
      },
      {
        text: "Tailwind",
        icon: <SiTailwindcss className="text-[#58c5ee]" />,
      },
      {
        text: "Redux",
        icon: <SiRedux className="text-[#8712f7]" />,
      },
    ],
  },
  {
    url: "https://traders-app-teal.vercel.app/",
    gitUrl: "https://github.com/titanwarlord007/traders-app",
    title: "Stock Watchlist App",
    image: "/images/traders-app.png",
    description:
      "A simple lightweight app for watching and tracking your favourite stock and staying updated on its performance. developed with React, CSS, and React Query,  using  useContext hook to efficiently manage and access shared data as well as custom hooks to encapsulate reusable logic, promoting code reusability.",
    tools: [
      {
        text: "React",
        icon: <FaReact className="text-[#58c5ee] " />,
      },

      {
        text: "React Query",
        icon: <SiReactquery className="text-[#ff3300]" />,
      },
      {
        text: "Tailwind",
        icon: <SiTailwindcss className="text-[#58c5ee]" />,
      },
    ],
  },
  {
    url: "https://chisomwebdev.vercel.app/",
    gitUrl: "https://github.com/titanwarlord007/portfolio",
    title: "Old Portfolio Website",
    image: "/images/portfolio-img.png",
    description: `This is an older version of my portfolio website. It features a responsive design and an attractive UI, which highlights my progress as a developer. I also meticulously organized the database so that it could be used to populate different pages and make editing more convenient. The website was built using CSS and React.`,
    tools: [
      {
        text: "React",
        icon: <FaReact className="text-[#58c5ee] " />,
      },
      {
        text: "CSS",
        icon: <FaCss3Alt className="text-[#58c5ee]" />,
      },
    ],
  },
  {
    url: "https://ecommerce-product-page-nine-mauve.vercel.app/",
    gitUrl: "https://github.com/titanwarlord007/ecommerce-product-page",
    title: "Ecommerce product page",
    image: "/images/ecommerce-product-page.png",
    description:
      "An e-commerce product page challenge from frontendmentor.io showcasing my proficiency with React hooks such as useState, useReducer, useContext, etc. This will help me better understand React.",
    tools: [
      {
        text: "React",
        icon: <FaReact className="text-[#58c5ee] " />,
      },
      {
        text: "Tailwind",
        icon: <SiTailwindcss className="text-[#58c5ee]" />,
      },
    ],
  },
  {
    url: "https://simple-shopping-cart-two.vercel.app/",
    gitUrl: "https://github.com/titanwarlord007/simple-shopping-cart",
    title: "Simple Shopping Cart",
    image: "/images/simple-shopping-cart.png",
    description: "A Simple Shopping Cart made with redux, used to learn and  practice how redux works ,built with react and tailwind",
    tools: [
      {
        text: "React",
        icon: <FaReact className="text-[#58c5ee] " />,
      },
      {
        text: "CSS",
        icon: <FaCss3Alt className="text-[#58c5ee]" />,
      },
      {
        text: "Redux",
        icon: <SiRedux className="text-[#8712f7]" />,
      },
    ],
  },
  {
    url: "https://titanwarlord007.github.io/Make-A-Wish-copy/",
    gitUrl: "https://github.com/titanwarlord007/Make-A-Wish-copy",
    title: "Make A Wish website",
    image: "/images/Make-A-Wish-copy_img.webp",
    description: "A copy of the Make A Wish foundation landing page",
    tools: [
      {
        text: "HTML",
        icon: <FaHtml5 className="text-[orangered]" />,
      },
      {
        text: "CSS",
        icon: <FaCss3Alt className="text-[#58c5ee]" />,
      },
      {
        text: "Javascript",
        icon: <IoLogoJavascript className="text-[#f5de19]" />,
      },
    ],
  },
  {
    url: "https://titanwarlord007.github.io/bootstrap-website/",
    gitUrl: "https://github.com/titanwarlord007/bootstrap-website",
    title: "Bootstrap Website",
    image: "/images/bootstrap-website_img.png",
    description: "A mock bootstrap landing page, ",
    tools: [
      {
        text: "HTML",
        icon: <FaHtml5 className="text-[orangered]" />,
      },
      {
        text: "Bootstrap",
        icon: <FaBootstrap className="text-[#8712f7]" />,
      },
    ],
  },
];
