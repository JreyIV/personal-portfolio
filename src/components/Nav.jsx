import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { NavLinks } from "../constants";
import { hamburger } from "../assets/icons";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };
  const linkVars = {
    initial: {
      y: "30vh",
      transition: {
        duration: 0.5,
      },
      open: {
        y: 0,
        transition: {
          duration: 0.7,
        },
      },
    },
  };

  const containerVars = {
    initial: {
      transition: {
        staggerChildren: 0.09,
      },
    },
    open: {
      transition: {
        staggerChildren: 0.09,
      },
    },
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 1024);
      if (!isSmallScreen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isSmallScreen]);

  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/" className="flex">
          <h1 className="text-4xl font-okine font-bold ">Joseph.</h1>
        </a>
        <ul className="flex-1 flex justify-center items-center gap-20 max-lg:hidden">
          {NavLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href} className="font-okine leading-normal text-lg">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div
          className="hidden max-lg:block cursor-pointer"
          onClick={toggleMenu}
        >
          <img src={hamburger} alt="hamburger" width={25} height={25} />
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={menuVars}
              initial="initial"
              animate="animate"
              exit="exit"
              className="fixed left-0 top-0 w-full h-screen origin-top bg-black bg-opacity-90 p-10"
            >
              <div className="flex h-full flex-col">
                <div className="flex justify-between">
                  <h1 className="text-okine text-lg text-off-white">Joseph.</h1>
                  <p
                    className="cursor-pointer text-md text-off-white"
                    onClick={toggleMenu}
                  >
                    Close
                  </p>
                </div>
                <motion.div
                  variants={containerVars}
                  initial="initial"
                  animate="open"
                  className="flex flex-col h-full justify-center items-center gap-4"
                >
                  <ul>
                    {NavLinks.map((link) => (
                      <div className="" key={link.label}>
                        <li key={link.label}>
                          <a
                            href={link.href}
                            className="font-okine text-6xl leading-normal text-off-white uppercase"
                          >
                            {link.label}
                          </a>
                        </li>
                      </div>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Nav;
