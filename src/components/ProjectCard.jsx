/* eslint-disable react/prop-types */
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const ProjectCard = ({
  title,
  image,
  description,
  url,
  skills,
  onClick,
  github,
}) => {
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

  const handleClick = () => {
    onClick(title, description, url, skills, github);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: 200 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.3 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        className="project-card relative h-96 w-80 rounded-xl cursor-pointer"
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
            backgroundSize: "cover",
            backgroundPositionX: "center",
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
            className="font-okine text-lg "
            style={{
              transform: "translateZ(50px)",
            }}
          >
            Click Me for Details!
          </p>
        </div>
      </motion.div>
      <div className="bg-white"></div>
    </>
  );
};

export default ProjectCard;
