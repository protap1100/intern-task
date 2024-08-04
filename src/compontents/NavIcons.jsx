import { Link } from "react-router-dom";
import setting from "../assets/images/Setting.png";
import cycle from "../assets/images/Info-Circle.png";
import category from "../assets/images/Category.png";
import heart from "../assets/images/fi_heart.png";
import friend from "../assets/images/2 User.png";
import search from "../assets/images/Search.png";
import paper from "../assets/images/Paper.png";
const NavIcons = () => {
  return (
    <div className="mb-10">
      <nav>
        <ul>
          <li>
            <Link
              className="flex w-full items-center hover:border-l-4 hover:border-black  p-4 bg-white mt-2 gap-3"
              to="#"
            >
              <img src={category} alt="" /> <p>Home</p>
            </Link>
            <Link
              className="flex w-full items-center hover:border-l-4 hover:border-black p-4 bg-white mt-2 gap-3"
              to="#"
            >
              <img src={friend} alt="" /> <p>New Listing</p>
            </Link>
            <Link
              className="flex w-full items-center hover:border-l-4 hover:border-black p-4 bg-white mt-2 gap-3"
              to="#"
            >
              <img src={search} alt="" />
              Search
            </Link>
            <Link
              className="flex w-full items-center hover:border-l-4 hover:border-black p-4 bg-white mt-2 gap-3"
              to="#"
            >
              <img src={paper} alt="" /> <p>About</p>
            </Link>
            <Link
              className="flex w-full items-center hover:border-l-4 hover:border-black p-4 bg-white mt-2 gap-3"
              to="#"
            >
              <img src={heart} alt="" /> <p>Favorite</p>
            </Link>
            <h1 className="border border-gray-400 my-6 mx-2"></h1>
            <Link
              className="flex w-full items-center hover:border-l-4 hover:border-black p-4 bg-white mt-2 gap-3"
              to="#"
            >
              <img src={cycle} alt="" /> <p>Help Center</p>
            </Link>
            <Link
              className="flex w-full items-center hover:border-l-4 hover:border-black p-4 bg-white mt-2 gap-3"
              to="#"
            >
              <img src={setting} alt="" /> <p>Setting</p>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavIcons;
