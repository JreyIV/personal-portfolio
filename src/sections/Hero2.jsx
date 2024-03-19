import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { HeroImageFull, HeroImageMountain } from "../assets/images";

const Hero2 = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

  return (
    <div className="w-full h-screen overflow-hidden relative grid place-items-center">
      <motion.div style={{ y: textY }} className="text-center relative z-40">
        <h1 className="text-6xl md:text-8xl text-off-white font-okine font-bold">
          Joseph Reyes
        </h1>
        <h2 className="text-brand-green font-okine font-bold text-2xl md:text-4xl">
          Web Developer
        </h2>

        <div className="inline-block">
          <p className="text-lg md:text-xl font-okine text-off-white animation-typewriter pt-3">
            Ideas to reality, one line at a time
          </p>
        </div>
      </motion.div>

      <motion.div
        className="absolute inset-0 z-30"
        style={{
          backgroundImage: `url(${HeroImageMountain})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      ></motion.div>

      <motion.div
        className="absolute inset-0 z-20"
        style={{
          backgroundImage: `url(${HeroImageFull})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          y: backgroundY,
        }}
      ></motion.div>
    </div>
  );
};

export default Hero2;
