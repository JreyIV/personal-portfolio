import {
  motion,
  useMotionTemplate,
  useMotionValue,
  animate,
} from "framer-motion";
import { useEffect } from "react";
import { react, javascript, html, css, node } from "../assets/icons";

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
      className="bg-black w-full h-60 flex items-center justify-center gap-40 max-lg:gap-20 p-10"
      style={{
        backgroundImage,
      }}
    >
      <div className="text-off-white text-center font-okine font-bold text-xl">
        <img src={react} alt="react" width={100} height={100} />
        <h1>React</h1>
      </div>
      <div className="text-off-white text-center font-okine font-bold text-xl">
        <img src={javascript} alt="javascript" width={90} height={90} />
        <h1>Javascript</h1>
      </div>
      <div className="text-off-white text-center font-okine font-bold text-xl">
        <img src={html} alt="html" width={80} height={80} />
        <h1>HTML</h1>
      </div>
      <div className="text-off-white text-center font-okine font-bold text-xl">
        <img src={css} alt="css" width={80} height={80} />
        <h1>CSS</h1>
      </div>
      <div className="text-off-white text-center font-okine font-bold text-xl">
        <img src={node} alt="node" width={100} height={100} />
        <h1>Node</h1>
      </div>
    </motion.section>
  );
};

export default Skills;
