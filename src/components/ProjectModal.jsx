/* eslint-disable react/prop-types */
import { close } from "../assets/icons";
import { motion, AnimatePresence } from "framer-motion";

const ProjectModal = ({
  title,
  description,
  url,
  skills,
  github,
  handleCloseModal,
}) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-20">
      <AnimatePresence>
        <motion.div
          className="bg-white max-lg:m-20 lg:m-48 xl:m-96 rounded-2xl max-md:w-2/3"
          initial={{ scale: 0 }}
          animate={{ scale: 1, transition: { duration: 0.7, type: "spring" } }}
          exit={{ scale: 0, transition: { duration: 0.7 } }}
        >
          <div className="flex p-5 justify-between items-center border-b ">
            <h1 className="text-black font-okine font-bold text-xl">{title}</h1>
            <img
              src={close}
              alt="close button"
              className="cursor-pointer"
              onClick={() => handleCloseModal(false)}
              width={20}
            />
          </div>
          <div className="text-black font-palanquin pt-10 px-10">
            <p>{description}</p>
          </div>
          <div className="flex text-black font-palanquin pt-5 px-10">
            {skills.map((skill) => (
              <div
                className="mr-4 border bg-gradient-to-br from-brand-green-dark to-brand-green-light text-white p-2 rounded-xl"
                key={skill}
              >
                {skill}
              </div>
            ))}
          </div>
          <div className="text-black font-palanquin pt-5 pb-10 px-10">
            <p>
              Link:{" "}
              <a href={url} target="_blank">
                {url}
              </a>
            </p>
            {github && (
              <p>
                Github:{" "}
                <a href={github} target="_blank">
                  {github}
                </a>
              </p>
            )}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ProjectModal;
