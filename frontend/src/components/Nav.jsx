import { useState } from "react";
import { navLinks } from "../constants";
import MenuIcon from "@mui/icons-material/Menu";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header
      className={`lg:px-[6rem] bg-white md:px-24 px-7 py-3  z-50 w-full   sticky top-0 border-b border-[#E5E5E5] `}
    >
      <nav className="flex justify-around items-center max-lg:justify-between   ">
        <a
          href="/"
          className="max-lg:w-[150px] max-lg:h-[42px] w-[195px] h-[55px]"
        >
          <img src={`hippo.png`} alt="logo" />
        </a>
        <ul className="flex gap-5 pt-4 max-gg:hidden ">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a href={link} className="text-[17px] text-[#202020]">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex gap-3">
          <button className=" bg-limegreen rounded-full hover:bg-white hover:text-limegreen text-white font-bold py-[9px] mt-2 px-11 text-[16px]  max-gg:hidden">
            Contact Us
          </button>
          <a className="text-lg items-center font-normal  gg:hidden">Menu</a>

          <button onClick={toggleNavbar}>
            <MenuIcon />
          </button>
        </div>
      </nav>
      <div
        className={` flex flex-col absolute right-10  text-left  ${
          isOpen ? "block" : "hidden"
        } mt-4 lg:mt-0 w-[200px]`}
      >
        <a href="#" className="block lg:inline-block mt-4 lg:mt-0 mr-4">
          Solutions
        </a>
        <a href="#" className="block lg:inline-block mt-4 lg:mt-0 mr-4">
          Examples
        </a>
        <a href="#" className="block lg:inline-block mt-4 lg:mt-0 mr-4">
          Pricing
        </a>
        <a href="#" className="block lg:inline-block mt-4 lg:mt-0 mr-4">
          Resources
        </a>
      </div>
    </header>
  );
};

export default Nav;
