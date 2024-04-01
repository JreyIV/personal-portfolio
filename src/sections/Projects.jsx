import { useState } from "react";
import { motion } from "framer-motion";

import { projects } from "../constants";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";

const Projects = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalProps, setModalProps] = useState({});

  const handleClick = (title, description, url, skills, github) => {
    setModalProps({ title, description, url, skills, github });
    setIsOpen(true);
  };

  return (
    <section
      id="projects"
      className="bg-black-gray text-white w-full flex flex-col justify-center p-20 max-lg:p-10 max-lg:pt-20 overflow-hidden"
    >
      <div className="flex flex-col items-center justify-center text-center gap-10 max-xl:gap-10">
        <motion.h1
          className="font-okine font-bold text-4xl text-brand-green"
          initial={{ opacity: 0, y: 75 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          My Recent Projects
        </motion.h1>
        <motion.p
          className="font-palanquin text-xl text-off-white"
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          I prioritize projects that fuel my passion for learning and growth.
          Whether refining existing skills or venturing into new territories, I
          embrace each opportunity to expand my knowledge and capabilities as a
          developer.
        </motion.p>
      </div>
      <div className="flex flex-wrap justify-center gap-10 max-sm:px-2 px-10 pt-20">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            image={project.image}
            description={project.description}
            url={project.url}
            skills={project.skills}
            github={project.github}
            onClick={handleClick}
          />
        ))}
      </div>
      {modalIsOpen && (
        <ProjectModal {...modalProps} handleCloseModal={setIsOpen} />
      )}
    </section>
  );
};

export default Projects;
