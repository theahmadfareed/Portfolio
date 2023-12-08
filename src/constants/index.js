import {
  flask_jovian,
  dj,
  freelancer,
  laravel,
  figma,
  html,
  css,
  bootstrap,
  tailwind,
  materialui,
  sass,
  javascript,
  typescript,
  node,
  react,
  next,
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
  php_cms,
  crypto,
  movies,
  powerX,
  loopStudio,
  sunnySide,
  youtube,
  genius,
  ecomadmin,
  ecomclient,
  characters,
  ts,
  django,
  fyp_django,
  fyp_mern,
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
    name: "HTML",
    icon: html,
  },
  {
    name: "CSS",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
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
    name: "TypeScript",
    icon: ts,
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
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
  // {
  //   name: "Netlify",
  //   icon: netlify,
  // },
];
const secondary_skills = [
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
    name: "SASS",
    icon: sass,
  },
  {
    name: "Node",
    icon: node,
  },
  {
    name: "Express",
    icon: express,
  },
  {
    name: "React",
    icon: react,
  },
  {
    name: "Laravel",
    icon: laravel,
  },
  {
    name: "Django",
    icon: dj,
  },
  {
    name: "FastAPI",
    icon: fastapi,
  },
  {
    name: "Next",
    icon: next,
  },
];

const experiences = [
  {
    title: "Developer",
    company_name: "Fiver",
    icon: freelancer,
    iconBg: "#383E56",
    date: "April 2023 - Present",
    points: [
      "As a freelance programmer, I have successfully tackled a range of programming tasks including OOP, DSA, Databases, Web Development and Data Analytics.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const projects = {
  "HTML, CSS, JS Projects": [
    {
      name: "Loop Studio",
      description:
        "Loop Studio has been producing world-class virtual reality projects for some of the best companies around the globe.",
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
        "Creative-Service-Agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.",
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
  ],
  "PHP Projects": [
    {
      name: "Learn.io",
      description: "Search blogs, like-blogs and much more.",
      tags: [
        {
          name: "HTML",
          color: "green-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "Bootstrap",
          color: "green-text-gradient",
        },
        {
          name: "JS",
          color: "pink-text-gradient",
        },
        {
          name: "JQuery",
          color: "pink-text-gradient",
        },
        {
          name: "AJAX",
          color: "pink-text-gradient",
        },
        {
          name: "PHP",
          color: "orange-text-gradient",
        },
        {
          name: "MySQL",
          color: "orange-text-gradient",
        },
      ],
      image: php_cms,
      source_code_link:
        "https://github.com/theahmadfareed/LearnPhp/tree/main/PHP_Course/09%20-%20Project/CMS",
      website_link:
        "https://github.com/theahmadfareed/LearnPhp/tree/main/PHP_Course/09%20-%20Project/CMS",
    },
  ],
  "Flask Projects": [
    {
      name: "Jovian",
      description:
        "Your Gateway to Opportunities! Explore a diverse range of jobs tailored to your skills and interests. Seamlessly apply for your dream position with just a click. Need assistance or have questions? Connect with us through our Contact Form. Your journey to a fulfilling career starts here!",
      tags: [
        {
          name: "HTML",
          color: "green-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
        {
          name: "Bootstrap",
          color: "else-text-gradient",
        },
        {
          name: "Flask",
          color: "else-text-gradient",
        },
        {
          name: "MySQL",
          color: "orange-text-gradient",
        },
      ],
      image: flask_jovian,
      source_code_link: "https://github.com/theahmadfareed/Jovian",
      website_link: "https://github.com/theahmadfareed/Jovian",
    },
  ],
  "React Projects": [
    {
      name: "Movie Land",
      description:
        "Search movies, tv-shows, watch trailers, see cast and much more.",
      tags: [
        {
          name: "React.js",
          color: "green-text-gradient",
        },
        {
          name: "Redux",
          color: "green-text-gradient",
        },
        {
          name: "SASS",
          color: "pink-text-gradient",
        },
        {
          name: "TMDB-API",
          color: "orange-text-gradient",
        },
      ],
      image: movies,
      source_code_link: "https://github.com/theahmadfareed/Movie-Land",
      website_link: "https://movieland-123.netlify.app/",
    },
    {
      name: "Youtube Lite",
      description:
        "Youtube clone with minimal design and functionality using React, Tailwind and Youtube-API.",
      tags: [
        {
          name: "React.js",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "Youtube-API",
          color: "orange-text-gradient",
        },
      ],
      image: youtube,
      source_code_link: "https://github.com/theahmadfareed/Youtube-Lite",
      website_link: "https://youtube-lite-123.netlify.app/",
    },
    {
      name: "Power X",
      description:
        "A Fitness Studio which provides several trainings, live chat support, email support and much more. ",
      tags: [
        {
          name: "React.js",
          color: "green-text-gradient",
        },
        {
          name: "MUI",
          color: "pink-text-gradient",
        },
        {
          name: "Firebase",
          color: "orange-text-gradient",
        },
      ],
      image: powerX,
      source_code_link: "https://github.com/theahmadfareed/Gym-X",
      website_link: "https://gymx-123.netlify.app/",
    },
  ],
  "FastAPI Projects": [
    {
      name: "Automated Product Sensing & Sentiments",
      description:
        "This project is created on FARM Stack. It's like a media monitoring site where user can search brands, competitors or hashtags to analyze market trends, brand health, customer's reviews and sentiments.",
      tags: [
        {
          name: "React.js",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "Reddit-API",
          color: "else-text-gradient",
        },
        {
          name: "News-API",
          color: "else-text-gradient",
        },
        {
          name: "Vader",
          color: "else-text-gradient",
        },
        {
          name: "FastAPI",
          color: "orange-text-gradient",
        },
        {
          name: "MySQL",
          color: "orange-text-gradient",
        },
      ],
      image: fyp,
      source_code_link: "https://github.com/theahmadfareed/FARM",
      website_link: "",
    },
  ],
  "MERN Projects": [
    {
      name: "Crypto Tracker",
      description:
        "The Crypto Tracker project, created using MERN Stack, News and Coingecko APIs, functions as a news site where users can view the latest news about cryptocurrencies and much more.",
      tags: [
        {
          name: "React.js",
          color: "green-text-gradient",
        },
        {
          name: "Redux",
          color: "green-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
        {
          name: "News-API",
          color: "else-text-gradient",
        },
        {
          name: "Coingecko-API",
          color: "else-text-gradient",
        },
        {
          name: "Express",
          color: "else-text-gradient",
        },
        {
          name: "MongoDB",
          color: "orange-text-gradient",
        },
      ],
      image: crypto,
      source_code_link: "https://github.com/theahmadfareed/MERN",
      website_link: "",
    },
    {
      name: "Automated Product Sensing & Sentiments",
      description:
        "This project is created on MERN Stack. It's like a media monitoring site where user can search brands, competitors or hashtags to analyze market trends, brand health, customer's reviews and sentiments.",
      tags: [
        {
          name: "React.js",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "Reddit-API",
          color: "else-text-gradient",
        },
        {
          name: "News-API",
          color: "else-text-gradient",
        },
        {
          name: "Sentiment",
          color: "else-text-gradient",
        },
        {
          name: "Express",
          color: "orange-text-gradient",
        },
        {
          name: "MongoDB",
          color: "orange-text-gradient",
        },
      ],
      image: fyp_mern,
      source_code_link: "https://github.com/theahmadfareed/FYP_MERN",
      website_link: "https://github.com/theahmadfareed/FYP_MERN",
    },
  ],
  "FARM Projects": [
    {
      name: "Automated Product Sensing & Sentiments",
      description:
        "This project is created on FARM Stack. It's like a media monitoring site where user can search brands, competitors or hashtags to analyze market trends, brand health, customer's reviews and sentiments.",
      tags: [
        {
          name: "React.js",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "Reddit-API",
          color: "else-text-gradient",
        },
        {
          name: "News-API",
          color: "else-text-gradient",
        },
        {
          name: "Vader",
          color: "else-text-gradient",
        },
        {
          name: "FastAPI",
          color: "orange-text-gradient",
        },
        {
          name: "MySQL",
          color: "orange-text-gradient",
        },
      ],
      image: fyp,
      source_code_link: "https://github.com/theahmadfareed/FARM",
      website_link: "",
    },
  ],
  "LAMP Projects": [
    {
      name: "Learn.io",
      description: "Search blogs, like-blogs and much more.",
      tags: [
        {
          name: "HTML",
          color: "green-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "Bootstrap",
          color: "green-text-gradient",
        },
        {
          name: "JS",
          color: "pink-text-gradient",
        },
        {
          name: "JQuery",
          color: "pink-text-gradient",
        },
        {
          name: "AJAX",
          color: "pink-text-gradient",
        },
        {
          name: "PHP",
          color: "orange-text-gradient",
        },
        {
          name: "MySQL",
          color: "orange-text-gradient",
        },
      ],
      image: php_cms,
      source_code_link:
        "https://github.com/theahmadfareed/LearnPhp/tree/main/PHP_Course/09%20-%20Project/CMS",
      website_link:
        "https://github.com/theahmadfareed/LearnPhp/tree/main/PHP_Course/09%20-%20Project/CMS",
    },
  ],
  "NEXT Projects": [
    {
      name: "AI Characters",
      description:
        "AI tool which you can use for creating AI Characters for conversation.",
      tags: [
        {
          name: "React.js",
          color: "green-text-gradient",
        },
        {
          name: "Next.js",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "OpenAPI, Replicate",
          color: "orange-text-gradient",
        },
        {
          name: "Clerk, Prisma, MySQL, PlanetScale",
          color: "orange-text-gradient",
        },
        {
          name: "Pinecone, Upstash",
          color: "orange-text-gradient",
        },
        {
          name: "Stripe",
          color: "orange-text-gradient",
        },
      ],
      image: characters,
      source_code_link: "https://github.com/theahmadfareed/Character_Pro",
      website_link: "https://character-pro.vercel.app/",
    },
    {
      name: "Genius",
      description:
        "AI tool which you can use for blog writing, photo generation, code completion, video generation and much more.",
      tags: [
        {
          name: "React.js",
          color: "green-text-gradient",
        },
        {
          name: "Next.js",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "OpenAPI, Replicate",
          color: "orange-text-gradient",
        },
        {
          name: "Clerk, Prisma, MySQL, PlanetScale",
          color: "orange-text-gradient",
        },
        {
          name: "Stripe, Crisp",
          color: "orange-text-gradient",
        },
      ],
      image: genius,
      source_code_link: "https://github.com/theahmadfareed/Genius_Pro",
      website_link: "https://genius-pro-iota.vercel.app/",
    },
    {
      name: "E-Commerce-CMS",
      description: "An E-Commerce Store Admin panel for managing products.",
      tags: [
        {
          name: "React.js",
          color: "green-text-gradient",
        },
        {
          name: "Next.js",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "Radix UI",
          color: "pink-text-gradient",
        },
        {
          name: "Clerk, Prisma, MySQL, PlanetScale",
          color: "orange-text-gradient",
        },
        {
          name: "Stripe",
          color: "orange-text-gradient",
        },
      ],
      image: ecomadmin,
      source_code_link: "https://github.com/theahmadfareed/E-Commerce-Admin",
      website_link: "https://e-commerce-admin-alpha.vercel.app/",
    },
    {
      name: "E-Commerce-Store",
      description:
        "An E-Commerce Store for purchasing products of different catagories.",
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
          name: "Tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "React.js",
          color: "green-text-gradient",
        },
        {
          name: "Next.js",
          color: "green-text-gradient",
        },
      ],
      image: ecomclient,
      source_code_link: "https://github.com/theahmadfareed/E-Commerce-Client",
      website_link: "https://e-commerce-client-beryl.vercel.app/",
    },
  ],
  "Django Projects": [
    {
      name: "Automated Product Sensing & Sentiments",
      description:
        "This project is created on FARM Stack. It's like a media monitoring site where user can search brands, competitors or hashtags to analyze market trends, brand health, customer's reviews and sentiments.",
      tags: [
        {
          name: "React.js",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "Reddit-API",
          color: "else-text-gradient",
        },
        {
          name: "News-API",
          color: "else-text-gradient",
        },
        {
          name: "Vader",
          color: "else-text-gradient",
        },
        {
          name: "Django",
          color: "orange-text-gradient",
        },
        {
          name: "MySQL",
          color: "orange-text-gradient",
        },
      ],
      image: fyp_django,
      source_code_link: "https://github.com/theahmadfareed/Backend",
      website_link: "https://github.com/theahmadfareed/Backend",
    },
  ],
  "Laravel Projects": [],
};

// Orignal
// const projects = [
//   // Next.js
//   {
//     name: "AI Characters",
//     description:
//       "AI tool which you can use for creating AI Characters for conversation.",
//     tags: [
//       {
//         name: "React.js",
//         color: "green-text-gradient",
//       },
//       {
//         name: "Next.js",
//         color: "green-text-gradient",
//       },
//       {
//         name: "Tailwind",
//         color: "pink-text-gradient",
//       },
//       {
//         name: "OpenAPI, Replicate",
//         color: "orange-text-gradient",
//       },
//       {
//         name: "Clerk, Prisma, MySQL, PlanetScale",
//         color: "orange-text-gradient",
//       },
//       {
//         name: "Pinecone, Upstash",
//         color: "orange-text-gradient",
//       },
//       {
//         name: "Stripe",
//         color: "orange-text-gradient",
//       },
//     ],
//     image: characters,
//     source_code_link: "https://github.com/theahmadfareed/Character_Pro",
//     website_link: "https://character-pro.vercel.app/",
//   },
//   {
//     name: "Genius",
//     description:
//       "AI tool which you can use for blog writing, photo generation, code completion, video generation and much more.",
//     tags: [
//       {
//         name: "React.js",
//         color: "green-text-gradient",
//       },
//       {
//         name: "Next.js",
//         color: "green-text-gradient",
//       },
//       {
//         name: "Tailwind",
//         color: "pink-text-gradient",
//       },
//       {
//         name: "OpenAPI, Replicate",
//         color: "orange-text-gradient",
//       },
//       {
//         name: "Clerk, Prisma, MySQL, PlanetScale",
//         color: "orange-text-gradient",
//       },
//       {
//         name: "Stripe, Crisp",
//         color: "orange-text-gradient",
//       },
//     ],
//     image: genius,
//     source_code_link: "https://github.com/theahmadfareed/Genius_Pro",
//     website_link: "https://genius-pro-iota.vercel.app/",
//   },
//   {
//     name: "E-Commerce-CMS",
//     description: "An E-Commerce Store Admin panel for managing products.",
//     tags: [
//       {
//         name: "React.js",
//         color: "green-text-gradient",
//       },
//       {
//         name: "Next.js",
//         color: "green-text-gradient",
//       },
//       {
//         name: "Tailwind",
//         color: "pink-text-gradient",
//       },
//       {
//         name: "Radix UI",
//         color: "pink-text-gradient",
//       },
//       {
//         name: "Clerk, Prisma, MySQL, PlanetScale",
//         color: "orange-text-gradient",
//       },
//       {
//         name: "Stripe",
//         color: "orange-text-gradient",
//       },
//     ],
//     image: ecomadmin,
//     source_code_link: "https://github.com/theahmadfareed/E-Commerce-Admin",
//     website_link: "https://e-commerce-admin-alpha.vercel.app/",
//   },
//   {
//     name: "E-Commerce-Store",
//     description:
//       "An E-Commerce Store for purchasing products of different catagories.",
//     tags: [
//       {
//         name: "HTML",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "CSS",
//         color: "pink-text-gradient",
//       },
//       {
//         name: "Tailwind",
//         color: "pink-text-gradient",
//       },
//       {
//         name: "React.js",
//         color: "green-text-gradient",
//       },
//       {
//         name: "Next.js",
//         color: "green-text-gradient",
//       },
//     ],
//     image: ecomclient,
//     source_code_link: "https://github.com/theahmadfareed/E-Commerce-Client",
//     website_link: "https://e-commerce-client-beryl.vercel.app/",
//   },
//   // FARM
//   {
//     name: "Automated Product Sensing & Sentiments",
//     description:
//       "This project is created on FARM Stack. It's like a media monitoring site where user can search brands, competitors or hashtags to analyze market trends, brand health, customer's reviews and sentiments.",
//     tags: [
//       {
//         name: "React",
//         color: "green-text-gradient",
//       },
//       {
//         name: "Tailwind",
//         color: "pink-text-gradient",
//       },
//       {
//         name: "Reddit-API",
//         color: "else-text-gradient",
//       },
//       {
//         name: "News-API",
//         color: "else-text-gradient",
//       },
//       {
//         name: "Vader",
//         color: "else-text-gradient",
//       },
//       {
//         name: "FastAPI",
//         color: "orange-text-gradient",
//       },
//       {
//         name: "MySQL",
//         color: "orange-text-gradient",
//       },
//     ],
//     image: fyp,
//     source_code_link: "https://github.com/theahmadfareed/FARM",
//     website_link: "",
//   },
//   // MERN
//   {
//     name: "Crypto Tracker",
//     description:
//       "The Crypto Tracker project, created using MERN Stack, News and Coingecko APIs, functions as a news site where users can view the latest news about cryptocurrencies and much more.",
//     tags: [
//       {
//         name: "React",
//         color: "green-text-gradient",
//       },
//       {
//         name: "Redux",
//         color: "green-text-gradient",
//       },
//       {
//         name: "CSS",
//         color: "pink-text-gradient",
//       },
//       {
//         name: "News-API",
//         color: "else-text-gradient",
//       },
//       {
//         name: "Coingecko-API",
//         color: "else-text-gradient",
//       },
//       {
//         name: "Express",
//         color: "else-text-gradient",
//       },
//       {
//         name: "MongoDB",
//         color: "orange-text-gradient",
//       },
//     ],
//     image: crypto,
//     source_code_link: "https://github.com/theahmadfareed/MERN",
//     website_link: "",
//   },
//   // React.js
//   {
//     name: "Movie Land",
//     description:
//       "Search movies, tv-shows, watch trailers, see cast and much more.",
//     tags: [
//       {
//         name: "React",
//         color: "green-text-gradient",
//       },
//       {
//         name: "Redux",
//         color: "green-text-gradient",
//       },
//       {
//         name: "SASS",
//         color: "pink-text-gradient",
//       },
//       {
//         name: "TMDB-API",
//         color: "orange-text-gradient",
//       },
//     ],
//     image: movies,
//     source_code_link: "https://github.com/theahmadfareed/Movie-Land",
//     website_link: "https://movieland-123.netlify.app/",
//   },
//   {
//     name: "Youtube Lite",
//     description:
//       "Youtube clone with minimal design and functionality using React, Tailwind and Youtube-API.",
//     tags: [
//       {
//         name: "React",
//         color: "green-text-gradient",
//       },
//       {
//         name: "Tailwind",
//         color: "pink-text-gradient",
//       },
//       {
//         name: "Youtube-API",
//         color: "orange-text-gradient",
//       },
//     ],
//     image: youtube,
//     source_code_link: "https://github.com/theahmadfareed/Youtube-Lite",
//     website_link: "https://youtube-lite-123.netlify.app/",
//   },
//   {
//     name: "Power X",
//     description:
//       "A Fitness Studio which provides several trainings, live chat support, email support and much more. ",
//     tags: [
//       {
//         name: "React",
//         color: "green-text-gradient",
//       },
//       {
//         name: "MUI",
//         color: "pink-text-gradient",
//       },
//       {
//         name: "Firebase",
//         color: "orange-text-gradient",
//       },
//     ],
//     image: powerX,
//     source_code_link: "https://github.com/theahmadfareed/Gym-X",
//     website_link: "https://gymx-123.netlify.app/",
//   },
//   // HTML, CSS, JS
//   {
//     name: "Loop Studio",
//     description:
//       "Loop Studio has been producing world-class virtual reality projects for some of the best companies around the globe.",
//     tags: [
//       {
//         name: "HTML",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "CSS",
//         color: "pink-text-gradient",
//       },
//       {
//         name: "Bootstrap",
//         color: "pink-text-gradient",
//       },
//       {
//         name: "SCSS",
//         color: "pink-text-gradient",
//       },
//       {
//         name: "JQuery",
//         color: "green-text-gradient",
//       },
//       {
//         name: "JS",
//         color: "green-text-gradient",
//       },
//     ],
//     image: loopStudio,
//     source_code_link: "https://github.com/theahmadfareed/Loop-Studio",
//     website_link: "https://loopstudio-123.netlify.app/",
//   },
//   {
//     name: "Sunny Side",
//     description:
//       "Creative-Service-Agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.",
//     tags: [
//       {
//         name: "HTML",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "CSS",
//         color: "pink-text-gradient",
//       },
//       {
//         name: "Bootstrap",
//         color: "pink-text-gradient",
//       },
//       {
//         name: "SCSS",
//         color: "pink-text-gradient",
//       },
//       {
//         name: "JQuery",
//         color: "green-text-gradient",
//       },
//       {
//         name: "JS",
//         color: "green-text-gradient",
//       },
//     ],
//     image: sunnySide,
//     source_code_link: "https://github.com/theahmadfareed/Sunny-Side",
//     website_link: "https://sunnyside-123.netlify.app/",
//   },
// ];

export { primary_skills, secondary_skills, experiences, projects };
