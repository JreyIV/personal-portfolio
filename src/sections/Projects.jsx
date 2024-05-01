import { useState } from "react";
import { motion } from "framer-motion";

import { projects } from "../constants";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";
import { FEM } from "../assets/images";

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
      <div className="flex flex-wrap justify-center gap-10 max-sm:px-2 px-10 pt-20 pb-20">
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
      <div className="mt-20 max-md:mt-2 flex flex-col items-center text-center">
        <motion.h2
          initial={{ opacity: 0, y: 75 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="font-okine font-bold text-brand-green text-4xl"
        >
          The Fundamentals
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 75 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-xl text-off-white font-palanquin mt-10 max-md:text-lg "
        >
          With all the noise around the different frameworks and libraries,
          it&apos;s easy to forget about the fundamentals. I believe in keeping
          up with my pure html, css, and javascript because it allows me to be
          more adaptable to other technologies since they are the backbone of
          web development. For this reason, I have created a portfolio that
          houses all of my vanilla html, css, and javascript challenges. I
          continue to add to this portfolio daily as I continue to hone my
          skills. Check it out!
        </motion.p>
        <motion.a
          href="https://jreyiv.github.io/frontend-mentor/"
          target="_blank"
          className="mt-10"
          initial={{ opacity: 0, y: 75 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <img src={FEM} alt="frontend-mentor image" />
        </motion.a>
        <p className="mt-2 font-palanquin text-off-white">click me ^</p>
      </div>
    </section>
  );
};

export default Projects;
