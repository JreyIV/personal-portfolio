import { react, javascript, html, css, node } from "../assets/icons";
import { placeholder, segthlon } from "../assets/images";

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
    title: "Segthlon",
    image: segthlon,
    description:
      "As part of a collaborative effort with a skilled team, I contributed to the development of the Segthlon website. I was tasked to create a modern and user-friendly experience that accurately represents their brand and engages their target audience effectively. In this project, I collaborated closely with a UI/UX designer to bring the Segthlon website to life. Leveraging our collective expertise, we ensured that every aspect of the website—from design to functionality—aligned seamlessly with Segthlon's objectives and brand identity.",
    url: "https://www.segthlon.com/",
    skills: ["Javascript", "HTML", "CSS", "Bootstrap"],
  },
  {
    title: "Nails By Tay",
    image: placeholder,
    description:
      "This is a description for example 2. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit",
    url: "https://www.segthlon.com/",
    skills: ["Javascript", "HTML", "CSS", "React"],
  },
  {
    title: "Example 3",
    image: placeholder,
    description:
      "This is a description for example 3. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit",
    url: "https://www.segthlon.com/",
    skills: ["Javascript", "HTML", "CSS", "React"],
  },
];

export const checklist = [
  "Your full name",
  "A valid email address",
  "Company you work for (if applicable)",
  "A brief description of your inquiry",
];
