import sp from "../../assets/sp.jpg";
import coffee from "../../assets/coffee2.jpg";
import Writer from "../../assets/writer-1.png";
import NuxtBlog from "../../assets/cryptoblog.jpg";
import webflow from "../../assets/webflow.jpg";

export const Data = [
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
    website: "https://barakoren.github.io/WriterApp/",
    github: "https://github.com/BarakOren/WriterApp"
  },
  {
    name: "Nuxt Crypto Blog",
    info: "Crypto coins blog built with NUXT",
    subInfo: ["Built with Nuxt, TailwindCSS, and Firebase"],
    image: NuxtBlog,
    website: "https://barakoren.github.io/NuxtCryptoBlog/",
    github: "https://github.com/BarakOren/NuxtCryptoBlog"
  },
  {
    name: "COFFEE DISCOVERY",
    info: "Discover the best and closest coffee shops with Next.js",
    subInfo: ["Built with Next.js."],
    image: coffee,
    website: "https://coffee-discovery-e245nvyeo-defqon32.vercel.app/",
    github: "https://github.com/BarakOren/coffee-discovery"
  },
  {
    name: "Webflow Portfolio",
    info: "My portfolio website using Webflow",
    subInfo: [],
    image: webflow,
    website: "https://barak-oren.webflow.io/",
    github: null
  }
];
