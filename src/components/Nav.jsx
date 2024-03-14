import { useState, useEffect } from "react";
import { NavLinks } from "../constants";
import { hamburger } from "../assets/icons";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
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
        {isOpen && (
          <div>
            <ul className="flex gap-6">
              {NavLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="font-okine leading-normal">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Nav;
