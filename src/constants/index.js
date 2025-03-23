import {
  nitk,
  bbs,
  cluboard,
  cash_flow,
  gdsc,
  iris,
  ecell,
  jee,
  alma, 
  alumni, 
  sfs,
  kalakriti,
  genesis,
  microsoft,
  outreachy,
  portfolio,
  cdc,
  chargeswap,
  placeicon,
  recruitment,
  huntly,
  oracle,
  mhtcet, 
  ge,
  accenture,
  comicify_ai,
  shoppingCart,
  greentrust,
  netflix,
  averlon,
  devfolio,
  pba,
  ethglobal,
  polkadot,
  lightspeed,
  dennisivy,
  manipal,
  icon,
  ethforall,
  ethindia
} from "../assets";

import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillMail,
  AiOutlineTwitter,
  AiFillHtml5,
  AiOutlineGitlab,
} from "react-icons/ai";

import {
  SiDjango,
  SiJavascript,
  SiBootstrap,
  SiReact,
  SiTailwindcss,
  SiGraphql,
  SiPython,
  SiCplusplus,
  SiC,
  SiRubyonrails,
  SiJquery,
  SiVisualstudiocode,
  SiPostman,
  SiGit,
  SiMysql,
  SiSolidity,
  SiNetlify,
  SiChartdotjs,
  SiVite,
  SiArduino,
  SiWeb3Dotjs,
  SiIpfs,
  SiDotnet,
  SiTwilio,
  SiFlutter,
  SiReplit,
  SiFlask,
  SiFigma,
  SiGooglemaps,
  SiOpenai,
  SiGooglecloud,
  SiNextdotjs,
  SiMicrosoftazure,
  SiSpring,
  SiSpringboot,
  SiNodedotjs,
  SiEclipseide,
  SiIntellijidea,
  SiSpringsecurity,
  SiFirebase,
  SiExpress,
  SiMongodb,
  SiRedux
} from "react-icons/si";

import {
  FaHardHat,
  FaRust
} from "react-icons/fa";

import {
  IoIosNotificationsOutline
} from "react-icons/io";

import {
  FaGolang
} from "react-icons/fa6";

import { DiCss3, DiJava, DiMsqlServer, DiRuby } from "react-icons/di";

export const resumeLink = "https://drive.google.com/file/d/1S0sHNlTmV3Afi115SPayl1VqQFQ46FNy/view?usp=sharing";
export const repoLink = "https://github.com/rik634/Portfolio-website";

export const callToAction = "https://www.linkedin.com/in/riya-kotalwar-45b046214/";

export const navLinks = [
  {
    id: "skills",
    title: "Skills & Experience",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "achievements",
    title: "Achievements",
  },
  {
    id: "projects",
    title: "Projects",
  },
  // {
  //   id: "openSource",
  //   title: "Open Source",
  // },
  {
    id: "extraCurricular",
    title: "Extra Curricular",
  },
  {
    id: "contactMe",
    title: "Contact Me",
  },
];

// Add your past academic experiences here
export const educationList = [
  {
    id: "education-1",
    icon: bbs,
    title: "Indian Institute of Technology Bhubaneswar",
    degree: "Bachelor of Technology",
    duration: "November 2020 - May 2024",
    content1: "Major: Electrical Engineering",
    // content2: "Minor: Information Technology",
  },
  // {
  //   id: "education-2",
  //   icon: pba,
  //   title: "Polkadot Blockchain Academy",
  //   degree: "",
  //   duration: "May 2024 - June 2024",
  //   content1: "Graduated with a distinction in the fifth cohort of the Polkadot Blockchain Academy at the National University of Singapore.",
  // },
];

// Add your past achievments here for example - rankings in hackathons/events
export const achievements = [
  {
    id: "a-1",
    icon: microsoft,
    event: "Microsoft Engage Mentorship Program",
    position: "Participant",
    content1: "Developed an automated attendance system during the Microsoft Engage Mentorship Program, enhancing record accuracy and efficiency through automation. ",
    content2: "This project demonstrated my problem-solving skills and ability to create impactful solutions.",
    
    project: "https://github.com/rik634/Automated-Attendance-System",
    
  },
  {
    id: "a-2",
    icon: outreachy,
    event: "Outreachy Mentorship Program",
    position: "Participant",
    content1: "Gained valuable insights into technology, open-source contributions, and learning opportunities through the Outreachy mentorship program. ",
    content2: "The experience included guidance on exploring tech careers, enhancing my technical skills, and building confidence in contributing to impactful projects",
    link: "https://www.outreachy.org",
  },
  // {
  //   id: "a-3",
  //   icon: jee,
  //   event: "IIT-JEE",
  //   position: "Scored the rank 8811 in JEE Advanced 2020",
  //   content1: "1st Runner Up Overall by Lightspeed among 107 hackers",
  //   content2: "Top 3 projects using Replit",
  //   content3: "1st Runner Up by Amazon Web Services (AWS)",
  //   article: "https://shorturl.at/fhjsT",
  // },
  // {
  //   id: "a-4",
  //   icon: mhtcet,
  //   event: "The Maharashtra Common Entrance Test (MHT-CET)",
  //   content1: "Scored 99.97 percentile among 5L participants.",
  //   content2: "The Maharashtra Common Entrance Test",

  //   link: "https://cetcell.mahacet.org/",
  // },
];

// Add your software developments skills here for example - programming languages, frameworks etc.
export const skills = [
  {
    title: "Programming Languages",
    items: [
      {
        id: "pl-1",
        icon: SiCplusplus,
        name: "C++",
      },
      {
        id: "pl-2",
        icon: DiJava,
        name: "Java",
      },
      {
        id: "pl-3",
        icon: SiC,
        name: "C",
      },
      {
        id: "pl-4",
        icon: AiFillHtml5,
        name: "HTML",
      },
      {
        id: "pl-5",
        icon: DiCss3,
        name: "CSS",
      },
      {
        id: "pl-6",
        icon: SiJavascript,
        name: "JavaScript",
      }
    ],
  },
  {
    title: "Frameworks/Libraries",
    items: [
      {
        id: "f-1",
        icon: SiSpring,
        name: "Spring",
      },
      {
        id: "f-2",
        icon: SiSpringboot,
        name: "Springboot",
      },
      {
        id: "f-3",
        icon: SiReact,
        name: "ReactJS",
      },
      {
        id: "f-4",
        icon: SiBootstrap,
        name: "Bootstrap",
      },
      {
        id: "f-5",
        icon: SiNodedotjs,
        name: "NodeJS",
      },
    ],
  },
  {
    title: "Tools",
    items: [
      {
        id: "t-1",
        icon: SiMysql,
        name: "MySQL",
      },
      {
        id: "t-2",
        icon: SiPostman,
        name: "Postman",
      },
      {
        id: "t-3",
        icon: SiVisualstudiocode,
        name: "VS Code",
      },
      {
        id: "t-4",
        icon: SiGit,
        name: "Git",
      },
      {
        id: "t-5",
        icon: AiFillGithub,
        name: "GitHub",
      },
      {
        id: "t-6",
        icon: AiOutlineGitlab,
        name: "Gitlab",
      },
      {
        id: "t-7",
        icon: SiEclipseide,
        name: "Eclipse",
      },
      {
        id: "t-8",
        icon: SiIntellijidea,
        name: "IntelliJ",
      },
    ],
  },
];

// Add your current/past professional work experience here
export const experiences = [
  {
    organisation: "Accenture, India",
    logo: accenture,
    link: "https://www.accenture.com/in-en",
    positions: [
      {
        title: "Software Development Engineer",
        duration: "June 2024 - Present",
        content: [
          {
            text: " Developed microservices using Java Spring Boot and Node.js,delivering scalable solutions for enterprise applications. Participated in design reviews and translated requirements into efficient code architecture. ",
            link: "",
          },
          {
            text: " Built responsive UIs with ReactJS and integrated RESTful APIs to enhance user experience. Wrote Unit andFunctional tests for robust application development. Collaborated in an Agile environment, contributing to sprint planning and daily stand-ups",
            link: ""
          }
        ],
      },
    ],
  },
  {
    organisation: "GE HealthCare",
    logo: ge,
    link: "https://www.gehealthcare.in/",
    positions: [
      {
        title: "Software Developer Intern",
        duration: "May 2023 - July 2023",
        content: [
          {
            text: "Developed a PoC to streamline the conversion of CSV datasets to COCO JSON format, reducing data processing time by 65% and improving model training efficiency.",
            link: ""
          },
          {
            text: "Automated data transformation with Python scripts, improving data quality by 40%. Established a secure API Gateway for real-time communication.",
            link: ""
          }
        ],
      },
    ],
  },
];

// Add information about all the projects to be listed out in your portfolio
export const projects = [
  {
    id: "project-1",
    title: "Shopping Cart",
    github: "https://github.com/rik634/ShoppingCart",
    link: "https://comicify-ai.vercel.app/",
    image: shoppingCart,
    content:
      "Developed a robust shopping cart backend in Java, enabling seamless CRUD operations for efficient e-commerce management.",
    stack: [
      {
        id: "icon-1",
        icon: DiJava,
        name: "Java"
      },
      {
        id: "icon-2",
        icon: SiSpringsecurity,
        name: "Spring Security"
      },
      {
        id: "icon-3",
        icon: SiSpringboot,
        name: "Spring Boot"
      },
    ],
  },
  {
    id: "project-2",
    title: "Netflix Clone",
    github: "https://github.com/rik634/Netflix-Clone-2311",
    link: "https://green-trust-fantom.netlify.app/",
    image: netflix,
    content:
      "Developed a Netflix clone featuring user authentication, dynamic content rendering, and seamless media streaming functionality.",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React"
      },
      {
        id: "icon-2",
        icon: SiRedux,
        name: "Redux"
      },
      {
        id: "icon-3",
        icon: SiNodedotjs,
        name: "NodeJS"
      },
      {
        id: "icon-4",
        icon: SiFirebase,
        name: "Firebase"
      },
      {
        id: "icon-5",
        icon: SiExpress,
        name: "ExpressJS"
      },
      {
        id: "icon-6",
        icon: SiMongodb,
        name: "MongoDB"
      },
    ],
  },
  {
    id: "project-3",
    title: "ChargeSwap",
    github: "https://github.com/CommanderAstern/ChargeSwap",
    link: "https://devfolio.co/projects/chargeswap-3527",
    image: chargeswap,
    content:
      "A Blockchain-based EV-Battery swapping solution - winning project at ETHIndia'22, the world's largest Ethereum Hackathon",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React"
      },
      {
        id: "icon-3",
        icon: SiWeb3Dotjs,
        name: "Web3.js"
      },
      {
        id: "icon-4",
        icon: SiSolidity,
        name: "Solidity"
      },
      {
        id: "icon-5",
        icon: FaHardHat,
        name: "HardHat"
      },
      {
        id: "icon-6",
        icon: SiIpfs,
        name: "IPFS"
      },
      {
        id: "icon-7",
        icon: SiArduino,
        name: "Arduino"
      },
      {
        id: "icon-8",
        icon: IoIosNotificationsOutline,
        name: "Push Protocol"
      },
    ],
  },
  {
    id: "project-4",
    title: "Portfolio",
    github: "https://github.com/rik634/Portfolio-website",
    link: "https://riya-kotalwar-23sr08.netlify.app/",
    image: portfolio,
    content: "Personal portfolio website with React and Tailwind CSS.",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React"
      },
      {
        id: "icon-2",
        icon: SiTailwindcss,
        name: "Tailwind CSS"
      },
      {
        id: "icon-3",
        icon: AiFillHtml5,
        name: "HTML"
      },
    ],
  },
];

// Add links to blogs here
export const blogPosts = [
  {
    id: "post-1",
    title: "Blog Post 01 - Title",
    link: "#",
    date: new Date().toLocaleDateString(), // Can be edited to any string format
    image: "https://via.placeholder.com/600/92c952",
    tags: [
      {
        id: "tag-1",
        name: "tag 01"
      },
      {
        id: "tag-2",
        name: "tag 03"
      },
      {
        id: "tag-3",
        name: "tag 03"
      },
    ],
  },
  {
    id: "post-2",
    title: "Blog Post 02 - Title",
    link: "#",
    date: new Date().toLocaleDateString(),
    image: "https://via.placeholder.com/600/d32776",
    tags: [
      {
        id: "tag-1",
        name: "tag 01"
      },
      {
        id: "tag-2",
        name: "tag 03"
      },
      {
        id: "tag-3",
        name: "tag 03"
      },
    ],
  },
  {
    id: "post-3",
    title: "Blog Post 03 - Title",
    link: "#",
    date: new Date().toLocaleDateString(),
    image: "https://via.placeholder.com/600/771796",
    tags: [
      {
        id: "tag-1",
        name: "tag 01"
      },
      {
        id: "tag-2",
        name: "tag 03"
      },
      {
        id: "tag-3",
        name: "tag 03"
      },
    ],
  },
];

// Highlight your GitHub stats like - Organisation, Issues Opened, Pull Requests etc.
export const stats = [
  {
    id: "stats-1",
    title: "Organisations",
    value: "2+",
  },
  {
    id: "stats-2",
    title: "Issues Opened",
    value: "6+",
  },
  {
    id: "stats-3",
    title: "Pull Requests",
    value: "6+",
  },
];

// List out the extra curricular activities you have induldged in like - student clubs, joining research groups etc.
export const extraCurricular = [
  {
    id: 1,
    organisation: "Alma Fiesta, IIT BBS",
    title: "Core Head",
    duration: "May 2021 - March 2023",
    content: [
      {
        text: "Managed a team of 50+ members as part of Alma Fiesta, overseeing digital operations, design coordination, and decoration tasks to ensure smooth event execution.",
      },   
    ],
    logo: alma,
  },
  {
    id: 2,
    organisation: "Alumni Cell, IIT Bhubaneswar",
    title: "Member",
    duration: "Dec 2021 - Nov 2022",
    content: [
      {
        text: "Maintained connections with alumni working across various roles internationally, fostering relationships and enhancing engagement as part of the Alumni Cell, International Relations Team.",
      },
    ],
    logo: alumni,
  },
  {
    id: 3,
    organisation: "Kalakriti, Fine Arts Society, IIT Bhubaneswar",
    title: "Member",
    duration: "Sep 2021 - Sep 2022",
    content: [
      {
        text: "Contributed to promoting and nurturing artistic culture within the college as an active member of the Fine Arts Society.",
      },
    ],
    logo: kalakriti,
  },
  {
    id: 4,
    organisation: "S4S, IIT Bhubaneswar",
    title: "Member",
    duration: "Jan 2021 - Jan 2022",
    content: [
      {
        text: "Actively participated in the Social Welfare Society, organizing and managing various social events to drive meaningful community impact.",
      },
    ],
    logo: sfs,
  },
  
];

// Links to your social media profiles
export const socialMedia = [
  {
    id: "social-media-1",
    icon: AiFillLinkedin,
    link: "https://www.linkedin.com/in/riya-kotalwar-45b046214/",
  },
  {
    id: "social-media-2",
    icon: AiFillGithub,
    link: "https://github.com/rik634",
  },
  {
    id: "social-media-3",
    icon: AiFillMail,
    link: "mailto:riyakotalwar562@gmail.com",
  },
];

// Your professional summary
export const aboutMe = {
    name: "Riya Kotalwar",
    githubUsername: 'rik634',
    tagLine: "SDE @Accenture | ex-SDE Intern @GE HealthCare | IITBBS'24 ",
    intro: "Software Developer from India who is either busy improving her craft or pondering over the next big idea."
}

// The maximum number of PRs to be displayed in the Open Source Contributions section.
export const itemsToFetch = 20;

// Add names of GitHub repos you'd like to display open source contributions from in the 'org/repo' format. 
export const includedRepos = ['publiclab/plots2', 'zulip/zulip', 'paritytech/polkadot-sdk'];
