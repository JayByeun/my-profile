import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";
function getUserId() {
  let userId = localStorage.getItem("userId");
  if (!userId) {
    // Generate a random string (or UUID)
    userId = crypto.randomUUID();
    localStorage.setItem("userId", userId);
  }
  return userId;
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const links = ["Home", "About", "Resume", "Contact"];
  const [visits, setVisits] = useState({ total: 0, today: 0 });

  useEffect(() => {
    const userId = getUserId();

    fetch(`https://jay-byeun.vercel.app/api/visit?username=${userId}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("User visit data:", data.user);
        console.log("Total visits:", data.total);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <nav className="fixed top-0 w-full bg-white z-50 shadow">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <Link
          to="home"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="font-bold text-xl cursor-pointer hover:text-rose-400"
        >
          Jay Byeun
        </Link>

        <div className="flex gap-2 text-sm stats">
          <h3>Visitor stats</h3>
          <span>Today: {visits.today}</span>
          <span>Total: {visits.total}</span>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-6">
          {links.map((link) => (
            <li key={link}>
              <Link
                activeClass="text-rose-500"
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

        {/* Mobile Hamburger */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <ul className="flex flex-col space-y-4 px-6 py-4">
            {links.map((link) => (
              <li key={link}>
                <Link
                  to={link.toLowerCase()}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={() => setIsOpen(false)} // close menu when clicked
                  className="block cursor-pointer hover:text-rose-400"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
