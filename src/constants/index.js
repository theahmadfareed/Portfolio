import {
  carrent,
  jobit,
  tripguide,
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
  robos,
  movies,
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
  {
    name: "Robo Friends",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Redux",
        color: "green-text-gradient",
      },
    ],
    image: robos,
    source_code_link: "https://github.com/theahmadfareed/robofriends-redux",
    website_link: "https://github.com/theahmadfareed/robofriends-redux",
  },
  {
    name: "Movie Land",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
    ],
    image: movies,
    source_code_link: "https://github.com/",
    website_link: "https://github.com/",
  },
];

export { primary_skills, secondary_skills, experiences, projects };
