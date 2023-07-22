import {
  freelancer,
  figma,
  html,
  css,
  bootstrap,
  tailwind,
  materialui,
  javascript,
  node,
  react,
  redux,
  express,
  jwt,
  insomnia,
  mysql,
  mongodb,
  github,
  netlify,
  postgresql,
  php,
  python,
  django,
  fastapi,
  numpy,
  pandas,
  scipy,
  scikitlearn,
  tensorflow,
  pytorch,
  tableau,
  powerbi,
  // Projects
  fyp,
  crypto,
  movies,
  powerX,
  loopStudio,
  sunnySide,
  youtube,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const primary_skills = [
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "HTML",
    icon: html,
  },
  {
    name: "CSS",
    icon: css,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "Tailwind",
    icon: tailwind,
  },
  {
    name: "Material UI",
    icon: materialui,
  },
  {
    name: "CSS ",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Node",
    icon: node,
  },

  {
    name: "React",
    icon: react,
  },
  {
    name: "Redux",
    icon: redux,
  },
  {
    name: "Express",
    icon: express,
  },
  {
    name: "JWT",
    icon: jwt,
  },
  {
    name: "Insomnia",
    icon: insomnia,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "GitHub",
    icon: github,
  },
  {
    name: "Netlify",
    icon: netlify,
  },
];
const secondary_skills = [
  {
    name: "PostgreSQL",
    icon: postgresql,
  },
  {
    name: "PHP",
    icon: php,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Django",
    icon: django,
  },
  {
    name: "FastAPI",
    icon: fastapi,
  },
  {
    name: "NumPy",
    icon: numpy,
  },
  {
    name: "Pandas",
    icon: pandas,
  },
  {
    name: "SciPy",
    icon: scipy,
  },
  {
    name: "Scikit Learn",
    icon: scikitlearn,
  },
  {
    name: "TensorFlow",
    icon: tensorflow,
  },
  {
    name: "PyTorch",
    icon: pytorch,
  },
  {
    name: "Tableau",
    icon: tableau,
  },
  {
    name: "Power BI",
    icon: powerbi,
  },
];

const experiences = [
  {
    title: "Developer",
    company_name: "Fiver & Upwork",
    icon: freelancer,
    iconBg: "#383E56",
    date: "January 2023 - Present",
    points: [
      "As a freelance programmer, I have successfully tackled a range of programming tasks including OOP, DSA, Databases, Web Development and Data Analytics.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const projects = [
  // HTML, CSS, JS
  {
    name: "Loop Studio",
    description:
      "Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
      {
        name: "SCSS",
        color: "pink-text-gradient",
      },
      {
        name: "JQuery",
        color: "green-text-gradient",
      },
      {
        name: "JS",
        color: "green-text-gradient",
      },
    ],
    image: loopStudio,
    source_code_link: "https://github.com/theahmadfareed/Loop-Studio",
    website_link: "https://loopstudio-123.netlify.app/",
  },
  {
    name: "Sunny Side",
    description:
      "We are full service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
      {
        name: "SCSS",
        color: "pink-text-gradient",
      },
      {
        name: "JQuery",
        color: "green-text-gradient",
      },
      {
        name: "JS",
        color: "green-text-gradient",
      },
    ],
    image: sunnySide,
    source_code_link: "https://github.com/theahmadfareed/Sunny-Side",
    website_link: "https://sunnyside-123.netlify.app/",
  },
  // React
  {
    name: "Power X",
    description:
      "A local fitness studio which provides several trainings, live chat support, email support and much more. ",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
      {
        name: "JS",
        color: "green-text-gradient",
      },
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
    ],
    image: powerX,
    source_code_link: "https://github.com/theahmadfareed/Gym-X",
    website_link: "https://gymx-123.netlify.app/",
  },
  {
    name: "Movie Land",
    description: "Movies search website where user can search movies.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
      {
        name: "JS",
        color: "green-text-gradient",
      },
      {
        name: "React",
        color: "green-text-gradient",
      },
    ],
    image: movies,
    source_code_link: "https://github.com/theahmadfareed/Movie-Land",
    website_link: "https://movieland-123.netlify.app/",
  },
  {
    name: "Youtube Clone",
    description: "Youtube clone using React, MUI and Rapid-API.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
      {
        name: "MUI",
        color: "pink-text-gradient",
      },
      {
        name: "JS",
        color: "green-text-gradient",
      },
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "Rapid-API",
        color: "green-text-gradient",
      },
    ],
    image: youtube,
    source_code_link: "https://github.com/theahmadfareed/Youtube-Clone",
    website_link: "https://youtube-clone-xyz.netlify.app",
  },

  // MERN
  {
    name: "Crypto Tracker",
    description:
      "The Crypto Tracker project, created using MERN Stack and News and Coingecko APIs, functions as a news site where users can view the latest news about cryptocurrencies and much more.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Express",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: crypto,
    source_code_link: "https://github.com/theahmadfareed/MERN",
    website_link: "https://github.com/theahmadfareed/MERN",
  },
  // FARM
  {
    name: "Automated Product Sensing & Sentiments",
    description:
      "This project is created on FARM Stack. It's like a media monitoring site where user can search brands, competitors or hashtags to analyze market trends, brand health, customer's reviews and sentiments.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "FastAPI",
        color: "green-text-gradient",
      },
      {
        name: "MySQL",
        color: "pink-text-gradient",
      },
    ],
    image: fyp,
    source_code_link: "https://github.com/theahmadfareed/FARM",
    website_link: "https://github.com/theahmadfareed/FARM",
  },
];

export { primary_skills, secondary_skills, experiences, projects };
