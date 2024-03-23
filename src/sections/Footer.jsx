import {
  motion,
  useMotionValue,
  useMotionTemplate,
  animate,
} from "framer-motion";
import { useEffect } from "react";

const colors = ["#036666", "#469D89", "#99E2B4"];

const Footer = () => {
  const color = useMotionValue(colors[0]);
  const backgroundImage = useMotionTemplate`radial-gradient(100% 100% at 50% 0%, #000000 70%, ${color})`;

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
      className="bg-black p-10"
      style={{
        backgroundImage,
      }}
    >
      <div className="flex justify-center items-center">
        <h1 className="text-off-white text-lg font-okine">
          All rights reserved <span>&copy; </span>Joseph Reyes 2024
        </h1>
      </div>
    </motion.section>
  );
};

export default Footer;
