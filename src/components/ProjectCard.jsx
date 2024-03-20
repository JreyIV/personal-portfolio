/* eslint-disable react/prop-types */
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const ProjectCard = ({ image, title }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ["17.5deg", "-17.5deg"]
  );

  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ["-17.5deg", "17.5deg"]
  );

  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative h-96 w-72 rounded-xl bg-gradient-to-br from-slate-500 to-teal-200 cursor-pointer"
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
    >
      <div
        className="absolute inset-4 grid place-content-center rounded-xl  shadow-lg"
        style={{
          backgroundImage: `url(${image})`,
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
      >
        <h1
          className="text-center text-2xl font-okine font-bold text-white"
          style={{
            transform: "translateZ(50px)",
          }}
        >
          {title}
        </h1>
        <p
          className="font-okine text-lg"
          style={{
            transform: "translateZ(50px)",
          }}
        >
          Click Me for Details!
        </p>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
