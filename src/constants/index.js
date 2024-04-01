import { react, javascript, html, css, node } from "../assets/icons";
import {
  //   placeholder,
  segthlon,
  nails_by_tay,
  shutopia,
} from "../assets/images";

export const NavLinks = [
  { href: "#home", label: "Home" },
  { href: "#about-me", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact-me", label: "Contact" },
];

export const aboutInfo = [
  {
    title: "Name",
    description: "Joseph Reyes",
  },
  {
    title: "Email",
    description: "jreyes1919@gmail.com",
  },
  {
    title: "Education",
    description: "Depaul University",
  },
  {
    title: "Employment",
    description: "Open",
  },
];

export const skills = [
  {
    src: react,
    alt: "react",
    width: 100,
    height: 100,
    title: "React",
  },
  {
    src: javascript,
    alt: "javascript",
    width: 90,
    height: 90,
    title: "Javascript",
  },
  { src: html, alt: "html", width: 80, height: 80, title: "HTML" },
  { src: css, alt: "css", width: 80, height: 80, title: "CSS" },
  {
    src: node,
    alt: "node",
    width: 100,
    eight: 100,
    title: "Node",
  },
];

export const projects = [
  {
    title: "Nails By Tay",
    image: nails_by_tay,
    description:
      "I created a website for a local nail technician. I designed the website using Figma and built it using React, Tailwind, and Framer Motion. The website was built to be responsive and mobile-friendly as most of her clieints are college students around the chicagoland area. I worked extensively with my client, often doing revisions until it was exactly what she wanted. I also used Midjourney to make custom photos such as for her logo and the about section picture.",
    url: "https://nails-by-tay.netlify.app/",
    skills: ["Javascript", "HTML", "Tailwind", "React", "Framer Motion"],
    github: "https://github.com/JreyIV/nails-by-tay",
  },
  {
    title: "Segthlon",
    image: segthlon,
    description:
      "As part of a collaborative effort with a skilled team, I contributed to the development of the Segthlon website. I was tasked to create a modern and user-friendly experience that accurately represents their brand and engages their target audience effectively. In this project, I collaborated closely with a UI/UX designer to bring the Segthlon website to life. Leveraging our collective expertise, we ensured that every aspect of the website—from design to functionality—aligned seamlessly with Segthlon's objectives and brand identity.",
    url: "https://www.segthlon.com/",
    skills: ["Javascript", "HTML", "CSS", "Bootstrap"],
  },
  {
    title: "Shutopia",
    image: shutopia,
    description:
      "I created a shoe website as a side project. This was the project that I used to practice using tailwind for the first time. This was mostly used as a styling practice so I did not spend time adding functionality to the buttons but plan to do so in the future.",
    url: "https://shutopia.netlify.app/",
    skills: ["Javascript", "HTML", "Tailwind", "React"],
  },
];

export const checklist = [
  "Your full name",
  "A valid email address",
  "Company you work for (if applicable)",
  "A brief description of your inquiry",
];
