import  { useState } from 'react';
import image from "../assets/images/Group 12867.png";
import { FaRegBell, FaArrowRight } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

const Topbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative">
      <div className="flex py-5 px-2 lg:px-10 justify-between items-center">
        <div className="lg:hidden block">
          <h1 className="text-2xl text-blue-600">LOGO</h1>
        </div>
        <div className="hidden lg:flex gap-5 items-center">
          <img src={image} alt="" />
          <div>
            <h1>Sagor Soni</h1>
            <h1>Sagorsoni@gmail.com</h1>
          </div>
        </div>
        <div className="lg:hidden flex items-center gap-3">
          <h1 className="text-xl border border-white p-2 rounded-full">
            <FaRegBell />
          </h1>
          <h1 className="text-xl cursor-pointer" onClick={toggleMenu}>
            <GiHamburgerMenu />
          </h1>
        </div>
        <div className="hidden lg:flex items-center gap-3">
          <h1 className="text-2xl border border-white p-2 rounded-full">
            <FaRegBell />
          </h1>
          <h1 className="border border-r-gray-200 h-10"></h1>
          <h1 className="text-orange-400  text-xl">Log Out</h1>
          <h1 className="text-xl p-3 rounded-full bg-orange-50">
            <FaArrowRight />
          </h1>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed top-0 right-0 w-2/3 h-full bg-white shadow-lg z-50 p-5">
          <div className="flex justify-between items-center mb-5">
            <h1 className="text-2xl">Menu</h1>
            <AiOutlineClose className="text-2xl cursor-pointer" onClick={toggleMenu} />
          </div>
          <ul className="space-y-4">
            <li className="text-lg">Home</li>
            <li className="text-lg">Profile</li>
            <li className="text-lg">Settings</li>
            <li className="text-lg">Log Out</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Topbar;
