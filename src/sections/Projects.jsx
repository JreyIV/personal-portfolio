import { useEffect, useState } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  animate,
} from "framer-motion";

import { projects } from "../constants";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";

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

  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalProps, setModalProps] = useState({});

  const handleClick = (title, description, url, skills) => {
    console.log(`You clicked: ${title}`);
    setModalProps({ title, description, url, skills });
    setIsOpen(true);
  };

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
      <div className="flex flex-wrap justify-center gap-10 px-10 pt-20">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            image={project.image}
            description={project.description}
            url={project.url}
            skills={project.skills}
            onClick={handleClick}
          />
        ))}
      </div>
      {modalIsOpen && (
        <ProjectModal {...modalProps} handleCloseModal={setIsOpen} />
      )}
    </motion.section>
  );
};

export default Projects;
