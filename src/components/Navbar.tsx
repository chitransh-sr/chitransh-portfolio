import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const handleLinkClick = () => {
    setNav(false);
  };

  return (
    <div className="fixed top-0 z-10 flex h-[80px] w-full items-center justify-between bg-[#0a192f] px-4 text-gray-300">
      <div>
        <h1 className="text-4xl font-bold text-[#64ffda]">Chitransh</h1>
      </div>

      <ul className="hidden md:flex space-x-4">
        <li className="border-b-2 border-transparent px-4 py-2 font-medium hover:border-[#64ffda] hover:text-[#64ffda]">
          <a href="#home">Home</a>
        </li>
        <li className="border-b-2 border-transparent px-4 py-2 font-medium hover:border-[#64ffda] hover:text-[#64ffda]">
          <a href="#about">About</a>
        </li>
        <li className="border-b-2 border-transparent px-4 py-2 font-medium hover:border-[#64ffda] hover:text-[#64ffda]">
          <a href="#experience">Experience</a>
        </li>
        <li className="border-b-2 border-transparent px-4 py-2 font-medium hover:border-[#64ffda] hover:text-[#64ffda]">
          <a href="#skills">Skills</a>
        </li>
        <li className="border-b-2 border-transparent px-4 py-2 font-medium hover:border-[#64ffda] hover:text-[#64ffda]">
          <a href="#projects">Projects</a>
        </li>
        <li className="border-b-2 border-transparent px-4 py-2 font-medium hover:border-[#64ffda] hover:text-[#64ffda]">
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div onClick={handleClick} className="z-10 cursor-pointer md:hidden">
        {!nav ? <FaBars size={30} /> : <FaTimes size={30} />}
      </div>

      <ul
        className={`${
          !nav
            ? "hidden"
            : "absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center bg-[#0a192f]"
        }`}
      >
        <li className="py-6 text-4xl">
          <a href="#home" className="block" onClick={handleLinkClick}>
            Home
          </a>
        </li>
        <li className="py-6 text-4xl">
          <a href="#about" className="block" onClick={handleLinkClick}>
            About
          </a>
        </li>
        <li className="py-6 text-4xl">
          <a href="#experience" className="block" onClick={handleLinkClick}>
            Experience
          </a>
        </li>
        <li className="py-6 text-4xl">
          <a href="#skills" className="block" onClick={handleLinkClick}>
            Skills
          </a>
        </li>
        <li className="py-6 text-4xl">
          <a href="#projects" className="block" onClick={handleLinkClick}>
            Projects
          </a>
        </li>
        <li className="py-6 text-4xl">
          <a href="#contact" className="block" onClick={handleLinkClick}>
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
