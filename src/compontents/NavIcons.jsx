import { Link } from "react-router-dom";
import { FaUserFriends } from "react-icons/fa";

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
              <img src="" alt="" /> <p>Home</p>
            </Link>
            <Link
              className="flex w-full items-center hover:border-l-4 hover:border-black p-4 bg-white mt-2 gap-3"
              to="#"
            >
              <FaUserFriends></FaUserFriends> <p>New Listing</p>
            </Link>
            <Link
              className="flex w-full items-center hover:border-l-4 hover:border-black p-4 bg-white mt-2 gap-3"
              to="#"
            >
              <img src="" alt="" /> <p>Search</p>
            </Link>
            <Link
              className="flex w-full items-center hover:border-l-4 hover:border-black p-4 bg-white mt-2 gap-3"
              to="#"
            >
              <img src="" alt="" /> <p>About</p>
            </Link>
            <Link
              className="flex w-full items-center hover:border-l-4 hover:border-black p-4 bg-white mt-2 gap-3"
              to="#"
            >
              <img src="" alt="" /> <p>Favorite</p>
            </Link>
            <h1 className="border border-gray-400 my-6 mx-2"></h1>
            <Link
              className="flex w-full items-center hover:border-l-4 hover:border-black p-4 bg-white mt-2 gap-3"
              to="#"
            >
              <img src="" alt="" /> <p>Help Center</p>
            </Link>
            <Link
              className="flex w-full items-center hover:border-l-4 hover:border-black p-4 bg-white mt-2 gap-3"
              to="#"
            >
              <img src="" alt="" /> <p>Setting</p>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavIcons;
