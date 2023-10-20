import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  // {
  //   name: "Projects",
  //   hash: "#projects",
  // },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Ailleron - Mid Front-End Developer",
    location: "Rzeszów, PL",
    description:
      "Currently I'm developing Fintech project - a customer management system and a back-office solution for one of Poland's leading banking institutions, using in general React.js.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - present",
  },
  {
    title: "MoonBite - Junior Front-End Developer",
    location: "Rzeszów, PL",
    description:
      "At MoonBite I have learned Vue.js (also composition API and Vuex). I took part in the creation of e-commerce shop using vue and bagisto framework.",
    icon: React.createElement(CgWorkAlt),
    date: "2021",
  },
  {
    title: "Ideo - Trainee Front-End Developer",
    location: "Rzeszów, PL",
    description:
      "I had an internship in the Front-End field, I learned a lot about React.js, done some small and mid size tasks.",
    icon: React.createElement(CgWorkAlt),
    date: "2019",
  },
  {
    title: "University of Information technology and Managment",
    location: "Rzeszów, PL",
    description:
      "Full-time study at major Computer Science. At university I was exposed to languages such as C++, C#, LISP, PROLOG, Python, R. I learned a lot about Front-End (especially React.js) on my own, also done some simple application for academic credit and my own purpose.",
    icon: React.createElement(LuGraduationCap),
    date: "2017",
  },
  // {
  //   title: "Technical secondary school",
  //   location: "Sanok, PL",
  //   description:
  //     "At school I learned my first programming languages like PHP, SQL, HTML, CSS",
  //   icon: React.createElement(LuGraduationCap),
  //   date: "2013",
  // },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS/SCSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Redux",
  "styled-components",
  "Jest",
  "React Testing Library",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Express",
  "Framer Motion",
  "Webpack",
  "Vue",
] as const;
