import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Home = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      {user ? (
        <div>Hello {user?.displayName || user?.email}</div>
      ) : (
        <Link to="/login">Login Here</Link>
      )}
    </div>
  );
};

export default Home;
