import { NavLinks } from "../constants";
import { hamburger } from "../assets/icons";

const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/" className="flex">
          <h1 className="text-5xl font-okine font-bold">Joseph.</h1>
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
        <div className="hidden max-lg:block">
          <img src={hamburger} alt="hamburger" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
