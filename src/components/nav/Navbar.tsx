import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const links = ["Home", "About", "Projects", "Contact"];

  return (
    <nav className="fixed top-0 w-full bg-white z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
        <Link
          to={"home"}
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="font-bold text-xl cursor-pointer hover:text-rose-400"
        >
          Jay Byeun
        </Link>
        <ul className="flex space-x-6">
          {links.map((link) => (
            <li key={link}>
              <Link
                activeClass="text-500"
                to={link.toLowerCase()}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="cursor-pointer hover:text-rose-400"
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
