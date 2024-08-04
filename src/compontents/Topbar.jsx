import { useState } from "react";
import image from "../assets/images/Group 12867.png";
import { FaRegBell } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import NavIcons from "./NavIcons";
import arrow from "../assets/images/arrow.png";
import notification from "../assets/images/Notification.png";

const Topbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    console.log("hi");
  };

  return (
    <div className="relative ">
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
          <h1 className="text-2xl border  p-2 rounded-full ">
            <img src={notification} alt="" />
          </h1>
          <h1 className="border border-r-gray-200 h-10"></h1>
          <h1 className="text-orange-400  text-xl">Log Out</h1>
          <h1
            onClick={handleLogout}
            className="text-xl p-3 rounded-full text-orange-400 bg-orange-50 cursor-pointer"
          >
            <img src={arrow} alt="" />
          </h1>
        </div>
      </div>
      {isMenuOpen && (
        <div className="fixed top-0 right-0 w-2/3 h-full bg-blue-500 shadow-lg z-50 ">
          <div className="flex justify-end items-center mb-5">
            <AiOutlineClose
              className="text-2xl cursor-pointer"
              onClick={toggleMenu}
            />
          </div>
          <div className="bg-blue-500 flex flex-col justify-end items-end py-20">
            <div className="flex pr-5 flex-col  items-end">
              <img src={image} alt="" />
              <div className="flex flex-col  items-end">
                <h1 className="text-white text-3xl">Sagor Soni</h1>
                <h1 className="text-xs">Sagorsoni@gmail.com</h1>
              </div>
            </div>
          </div>
          <div className="bg-white pt-2">
            <NavIcons></NavIcons>
          </div>
        </div>
      )}
    </div>
  );
};

export default Topbar;
