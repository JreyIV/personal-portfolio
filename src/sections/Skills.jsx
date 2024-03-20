import {
  motion,
  useMotionTemplate,
  useMotionValue,
  animate,
} from "framer-motion";
import { useEffect } from "react";
import { skills } from "../constants";

const colors = ["#036666", "#469D89", "#99E2B4"];

const Skills = () => {
  const color = useMotionValue(colors[0]);
  const backgroundImage = useMotionTemplate`radial-gradient(100% 100% at 50% 0%, #18191A 70%, ${color})`;

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
      className="bg-black-gray-dark w-full"
      style={{
        backgroundImage,
      }}
    >
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
            viewport={{ once: true }}
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
