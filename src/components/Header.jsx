import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaRegWindowClose } from "react-icons/fa";
import logo from "../assets/image/logo.svg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-blue-800 h-16 flex flex-col py-7 sm:flex-row">
      <div className="container flex justify-between items-center">
        <div>
          <img src={logo} alt="Logo" width="152" height="48" />
        </div>

        <div className={`sm:flex ${isMenuOpen ? "flex" : "hidden"}`}>
          <ul className="flex gap-11">
            <li>
              <a className="text-[#fff]" href="#">
                About
              </a>
            </li>
            <li>
              <a className="text-[#fff]" href="#">
                Services
              </a>
            </li>
            <li>
              <a className="text-[#fff]" href="#">
                Pricing
              </a>
            </li>
            <li>
              <a className="text-[#fff]" href="#">
                Blog
              </a>
            </li>
          </ul>
        </div>

        <div className="w-[138px] h-12 relative">
          <div className=" flex items-center w-[138px] h-12 left-0 top-0 absolute transition-all  hover:bg-[#EF6D58] rounded-md border border-[#fff] border-opacity-30" />
          <a
            href="#"
            className=" left-[34.46px] top-[18px] absolute text-center text-white text-sm font-black font-['Epilogue'] uppercase text-[#fff] "
          >
            Contact
          </a>
        </div>

        {/* Toggle button for mobile navigation */}
        <div
          className="sm:hidden cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaRegWindowClose /> : <GiHamburgerMenu />}
        </div>
      </div>
    </header>
  );
};

export default Header;
