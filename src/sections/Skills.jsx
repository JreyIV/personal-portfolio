import { motion } from "framer-motion";
import { skills } from "../constants";

const Skills = () => {
  return (
    <motion.section className="bg-black-gray-dark w-full">
      <div className="flex flex-wrap items-center justify-center gap-40 max-xl:gap-20 p-10">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: -75 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { delay: index * 0.1, type: "spring" },
            }}
            viewport={{ amount: 0.5, once: true }}
            className="text-off-white text-center font-okine font-bold text-xl overflow-hidden"
          >
            <img
              src={skill.src}
              alt={skill.alt}
              className="max-w-full h-auto"
              width={skill.width}
              height={skill.height}
            />
            <h1>{skill.title}</h1>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Skills;
