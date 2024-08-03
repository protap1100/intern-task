import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const navigate = useNavigate();
  const { logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => {
        alert("Logout Successful");
        navigate(location?.state ? location.state : "/");
      })
      .then((error) => console.log(error));
  };

  return (
    <div>
      <nav className="flex lg:flex-col  mt-6 flex-row justify-center items-center text-white">
        <ul className="flex gap-5 flex-col justify-center items-center lg:flex-row">
          <li className="bg-blue-300 p-2 hover:bg-blue-500 rounded">
            <Link to="/">Home</Link>
          </li>
          <li className="bg-blue-300 p-2 hover:bg-blue-500 rounded">
            <Link to="/login">Login</Link>
          </li>
          <li className="bg-blue-300 p-2 hover:bg-blue-500 rounded">
            <Link to="/register">Register</Link>
          </li>
          <li className="bg-blue-300 p-2 hover:bg-blue-500 rounded">
            <Link to="/all-item">All Item</Link>
          </li>
          <li
            onClick={handleLogout}
            className="bg-blue-300 p-2 cursor-pointer hover:bg-blue-500 rounded"
          >
            Log Out
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
