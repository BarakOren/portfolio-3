import sp from "../../assets/sp-gif.gif";
import coffee from "../../assets/coffee-gif.gif";
import Writer from "../../assets/writer-gif.gif";
import NuxtBlog from "../../assets/crypto-gif.gif";
import webflow from "../../assets/webflow-gif.gif";
import rotem from "../../assets/rotembrum.gif";

export const Data = [
  {
    name: "Rotem Brum's Portfolio",
    info:
      "Freelance portfolio website for a designer and a calligraphy artist.",
    subInfo: [
      "built with MERN stack.",
    ],
    image: rotem,
    tech: ['React', 'StyledcomponentsLogo', 'NodejsLogo', 'MongodbLogo'],
    website: "https://rotem-brum.info/",
    github: null
  },
  {
    name: "Spot Finder",
    info:
      "SpotFinder is an application for extreme sports enthusiasts. locating, searching and navigate to spots based on different types of elements and obstacles",
    subInfo: [
      "Interactive map containing locations uploaded by users. include features like adding new locations, navigation, searchbar and more.",
      "Using Firebase to store, add or change data about locations and users.",
      "built with React and Firebase."
    ],
    image: sp,
    tech: ['React', 'StyledcomponentsLogo', 'FirebaseLogo', 'MapboxLogo'],
    website: "https://spotfinder-e8871.web.app/",
    github: "https://github.com/BarakOren/spot-finder"
  },
  {
    name: "Writer App",
    info:
      "A tool for graffiti artists that simulates combinations of specific color shades that art companeis produce.",
    subInfo: [
      "Design and develop a solution for a real-life problem.",
      "Programmed the website and app with react and redux.",
      "Designed the app and website with Figma."
    ],
    image: Writer,
    tech: ['React', 'ReduxLogo', 'StyledcomponentsLogo'],
    website: "https://barakoren.github.io/WriterApp/",
    github: "https://github.com/BarakOren/WriterApp"
  },
  {
    name: "Nuxt Crypto Blog",
    info: "Crypto coins blog built with NUXT",
    subInfo: ["Built with Nuxt, TailwindCSS, and Firebase"],
    image: NuxtBlog,
    tech: ['Nuxt', 'TailWind', 'FirebaseLogo'],
    website: "https://barakoren.github.io/NuxtCryptoBlog/",
    github: "https://github.com/BarakOren/NuxtCryptoBlog"
  },
  {
    name: "COFFEE DISCOVERY",
    info: "Discover the best and closest coffee shops with Next.js",
    subInfo: ["Built with Next.js."],
    image: coffee,
    tech: ['NextLogo'],
    website: "https://coffee-discovery-e245nvyeo-defqon32.vercel.app/",
    github: "https://github.com/BarakOren/coffee-discovery"
  },
  {
    name: "Webflow Portfolio",
    info: "My portfolio website using Webflow",
    subInfo: [],
    image: webflow,
    tech: ['WebflowLogo'],
    website: "https://barak-oren.webflow.io/",
    github: null
  }
];
