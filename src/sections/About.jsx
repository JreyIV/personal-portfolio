import { VenteuxPic } from "../assets/images";
import { motion } from "framer-motion";

const About = () => {
  const textAnimationVariant = {
    hidden: { opacity: 0, y: 75 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  const headerVariant = {
    hidden: { opacity: 0, x: 200 },
    visible: { opacity: 1, x: 0, transition: { delay: 0.8, type: "spring" } },
  };

  const textSliderVariant = {
    hidden: { left: 0 },
    visible: {
      left: "100%",
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  return (
    <section
      id="about-me"
      className=" bg-space-purple-dark flex items-center p-20 gap-10 w-full max-lg:flex-col"
    >
      <div className="flex flex-1 justify-center items-center">
        <img src={VenteuxPic} alt="me" width={500} className="image-blob" />
      </div>
      <div className="flex flex-1 flex-col relative">
        <motion.h1
          className="text-brand-green font-okine font-bold text-4xl"
          variants={headerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          A little bit about me...
        </motion.h1>
        <motion.div
          variants={textAnimationVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="text-off-white font-palanquin mt-6">
            Hey 👋, I&apos;m Joseph Reyes. I studied software development at
            DePaul University and have since found a passion for Web Development
            as I have a knack for creating seamless digital experiences. My
            favorite toolkit includes React, JavaScript, HTML, and CSS, where I
            leverage the power of modern libraries like framer-motion for
            stunning animations and Tailwind CSS for sleek styling. Whether
            it&apos;s diving into the latest programming trends or exploring new
            facets of life, I&apos;m always eager to learn and grow.
          </p>
          <p className="text-off-white font-palanquin mt-5">
            When I&apos;m not immersed in lines of code, you&apos;ll likely find
            me enjoying quality time with friends and family or playing with my
            pitbull. I love uncovering hidden gems at thrift stores, immersing
            myself in captivating video game worlds, indulging in a good read,
            or hitting the weights at the gym.
          </p>
          <p className="text-off-white font-palanquin mt-5">
            Feel free to reach out and connect with me! Oh, and by the way... I
            accept bribes in the form of boba and coffee.
          </p>
          <motion.div
            variants={textSliderVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{
              position: "absolute",
              top: 4,
              bottom: 4,
              left: 0,
              right: 0,
              background: "linear-gradient(to right, #036666, #99E2B4)",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
