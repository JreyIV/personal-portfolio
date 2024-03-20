import { useEffect } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  animate,
} from "framer-motion";

import ProjectCard from "../components/ProjectCard";

const colors = ["#036666", "#469D89", "#99E2B4"];

const Projects = () => {
  const color = useMotionValue(colors[0]);
  const backgroundImage = useMotionTemplate`radial-gradient(100% 100% at 50% 100%, #212121 90%, ${color})`;

  useEffect(() => {
    animate(color, colors, {
      ease: "easeInOut",
      duration: 5,
      repeat: Infinity,
      repeatType: "mirror",
    });
  });

  return (
    <motion.section
      id="projects"
      className="bg-black-gray text-white w-full flex flex-col justify-center p-20 max-lg:p-10 max-lg:pt-20"
      style={{
        backgroundImage,
      }}
    >
      <div className="flex flex-col items-center justify-center text-center gap-10 max-xl:gap-10">
        <h1 className="font-okine font-bold text-4xl text-brand-green">
          My Recent Projects
        </h1>
        <p className="font-palanquin text-xl text-off-white">
          I prioritize projects that fuel my passion for learning and growth.
          Whether refining existing skills or venturing into new territories, I
          embrace each opportunity to expand my knowledge and capabilities as a
          developer.
        </p>
      </div>
      <div className="flex justify-center gap-10 p-20">
        <ProjectCard
          title="Example 1"
          image={"https://picsum.photos/id/1018/720/480"}
        />
        <ProjectCard
          title="Example 2"
          image={"https://picsum.photos/id/1018/720/480"}
        />
        <ProjectCard
          title="Example 3"
          image={"https://picsum.photos/id/1018/720/480"}
        />
      </div>
    </motion.section>
  );
};

export default Projects;
