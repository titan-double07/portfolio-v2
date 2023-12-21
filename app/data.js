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

export const links = [
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

export const skills = [
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

export const aboutPage = {
  "about me": {
    description: `I'm really passionate about creating websites and web apps that people would love to use. As a web developer, my goal is simple: to build visually stunning, easy-to-navigate sites that leave a positive impression and works seamlessly well. I bring together my programming skills and a strong design sense to make mobile-friendly websites that work like a charm✨. By understanding what businesses need and what users want, I turn ideas into beautiful and functional interfaces. I'm all about improving user experience through user-friendly designs, I'm constantly learning and adapting to the latest trends, aiming to make the web experience better, one click at a time😁.`,
    education: {
      degree: "Bachelor of Technology in Project Management",
      university: "Federal University of Technology,Owerri",
      date: "2016 - 2023",
    },
  },
  certifications: [
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
      name: "Front-End Development - HTML, CSS, and JavaScript",
      issuer: "Zuri Team",
      date: "2022",
      url: "https://drive.google.com/file/d/16fDORIUwZaSUsWW6EmHouo6djLXBXNpH/view",
    },
  ],
  "work experience": [
    {
      company: "Zuri Team",
      position: "web developer internship",
      date: "AUG 2022",
      description: [
        "Reported back to the instructor to receive day - to - day tasks and responsibilities.",
        "Developed user - facing features and implemented interactive functionalities for web applications using HTML, CSS, and JavaScript.",
        "Gained knowledge in interactive and responsive web development",
        "Worked on various projects using Html, CSS, and JavaScript.",
      ],
    },
    {
      company: "Seplat Energy",
      position: "public relations officer",
      date: "AUG 2019",
      description: [
        "Worked with the community relations department of seplat petroleum development company now seplat energy at the 2019 Seplat energy community development program for ohaji egbema in Owerri imo state",
      ],
    },
    {
      company: "AtlasMkt.io",
      position: "front-end developer ",
      date: "NOV 2023 - DEC 2023",
      description: [
        "While contracte dto Atlas i was in charge of developing some of the feature of the web application, such as the category, order, wallet pages etc.",
      ],
    },
  ],
  skills: [
    {
      name: "Front-End Development",
      description: `Proficiency with the basics front-end development, grounded with the knowlegde of HTML, CSS, and JavaScript to build user friendly and responsive web applications.`,
    },
    {
      name: "Web Design",
      description: `with tools such as FIGMA and PHOTOSHOP and the knowledge of design principles and user - centered design techniques to create visually appealing and intuitive interfaces.`,
    },
    {
      name: "CSS Framwork",
      description: `Taking my CSS skills to the next level, i acqured the knowledge of CSS frameworks such as BOOTSTRAP and TAILWIND CSS, that helped me boost my production time.`,
    },
    {
      name: "JavaScript Framework/Library",
      description: `Another boost to my skill set, i also acquired the knowledge of JavaScript framework libraries such as REACT.JS, and NEXT.JS that helped me to build more dynamic web applications more efficiently and quickly.`,
    },
    {
      name: "Animation with Framer Motion",
      description: `with the incorporation of FRAMER MOTION with REACT, i can breathe life into any web application, with intuitive and captivating animations.`,
    },
    {
      name: "Version Control",
      description: `Proficiency in using GIT for source code management and collaboration.`,
    },
    {
      name: "API Integration and Database Management",
      description: `strong experience with in integrating RESTful APIs to fetch and display data from databases (MONGODB, MYSQL,) in web applications.`,
    },
  ],
};

export const projects = [
  {
    url: "https://loopstudios-titanweb.vercel.app/",
    text: "Loopstudios landing page",
    image: "/images/loopstudios-desktop-min.png",
    description:
      "Loop Studios is a captivating responsive webpage created using Next.js, TailwindCSS, Redux, and Framer Motion. With Next.js, it offers excellent performance and responsiveness. TailwindCSS ensures a polished design across devices. Redux enables seamless data flow, while Framer Motion adds engaging animations. Experience a modern and immersive web journey with Loop Studios.",
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
    text: "Multi-stage SignUp Form",
    image: "/images/multi-stage-signUp-form.png",
    description:
      "A smooth responsive multi-stage signUp form, enabled with basic form validation and efficient data collection and tracking with the help of the react-hook-form library, the web app was built using Next.js, with TailwindCSS and FramerMotion to give it mordern UI/UX and smooth animated transitions",
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
    text: "Rock-Paper-Scissors App",
    image: "/images/rock-paper-scissors-app.png",
    description:
      "The Rock Paper Scissors app is a fun and interactive responsive web application created using React, TailwindCSS, and Redux. It offers an immersive gaming experience with smooth user interactions. The stylish design, powered by TailwindCSS, ensures a visually appealing interface. Redux enables efficient state management, enhancing the game logic and providing a seamless user experience. Enjoy playing Rock Paper Scissors in a modern and engaging way with this app ",
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
    text: "Stock Watchlist App",
    image: "/images/traders-app.png",
    description:
      "The Traders app is a web application developed with React, CSS, and React Query. It offers a convenient stock watchlist feature, allowing users to track their favorite stocks and stay updated on their performance. With a user-friendly interface and efficient data management, the Traders app provides an enjoyable trading experience. Stay informed and organized with this powerful stock watchlist application.",
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
    text: "Old Portfolio Website",
    image: "/images/portfolio-img.png",
    description: `ChisomWebDev's portfolio website is a personalized showcase of my web development journey. Powered by CSS and React, it presents a visually appealing and interactive platform to explore my skills and projects. With a clean and modern design, the website offers seamless navigation and highlights the essence of my work. Dive into my portfolio, witness my expertise firsthand, and discover the passion I bring to each project. Experience the artistry and innovation of ChisomWebDev's portfolio website in a concise and engaging format.`,
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
    text: "Ecommerce product page",
    image: "/images/ecommerce-product-page.png",
    description:
      "An ecommerce product page challenge from frontendmentor.io; showcasing my proficiency with react hooks such as useState, useReducer, useContext etc",
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
    text: "Simple Shopping Cart",
    image: "/images/simple-shopping-cart.png",
    description: "A Simple Shopping Cart made with redux",
    tools: [
      {
        text: "React",
        icon: <FaReact className="text-[#58c5ee] " />,
      },
      {
        text: "Redux",
        icon: <SiRedux className="text-[#8712f7]" />,
      },
    ],
  },
  {
    url: "https://titanwarlord007.github.io/Make-A-Wish-copy/",
    text: "Make A Wish website",
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
    text: "Bootstrap Website",
    image: "/images/bootstrap-website_img.png",
    description: "A mock bootstrap landing page",
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
