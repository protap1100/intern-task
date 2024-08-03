import { Link, useLocation, useNavigate } from "react-router-dom";
import image from "../../assets/images/nurse.jpg";
import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../../provider/AuthProvider";
import image2 from "../../assets/images/Group (1).png";
import image3 from "../../assets/images/facebook.png";

const Login = () => {
  const { logIn, googleSignIn } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    logIn(form.email, form.password)
      .then(() => {
        alert("User Login Successful");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        alert(`Login failed: ${error.message}`);
      });
  };


  const handleGoogleLogin = () => {
    googleSignIn()
      .then((result) => {
        alert(`User signed in: ${result.user.displayName}`);
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        alert(`Login failed: ${error.message}`);
      });
  };

  return (
    <div className="flex flex-col-reverse lg:flex-row justify-center items-center gap-6 mt-20 p-4">
      <div className="w-full lg:w-1/2 px-5 lg:px-20 ">
        <div>
          <h1 className="text-4xl text-blue-500">LOGO</h1>
          <h1 className="text-3xl font-bold mt-5">Log in to Your Account</h1>
          <p className="mt-4 lg:mr-20">Welcome back! Login to your account.</p>
        </div>
        <div  className="mt-5 flex gap-5">
          <div onClick={handleGoogleLogin} className="flex gap-3 p-5 px-10 font-bold rounded-xl bg-gray-200 cursor-pointer ">
            <img src={image2} alt="" />
            <h1>Google</h1>
          </div>
          <div className="flex gap-3 p-5 px-10 font-bold rounded-xl text-white bg-blue-600 ">
            <img src={image3} alt="" />
            <h1>Facebook</h1>
          </div>
        </div>
        <div className="mt-10">
          <form onSubmit={handleSubmit}>
            <div className="mb-5">
              <label className="mb-3 block text-base font-medium text-[#07074D]">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter Your Email"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label className="mb-3 block text-base font-medium text-[#07074D]">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="Password"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
                <span
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <FaEye className="text-gray-800 text-2xl cursor-pointer" />
                  ) : (
                    <FaEyeSlash className="text-gray-800 text-2xl cursor-pointer" />
                  )}
                </span>
              </div>
            </div>
            <div className="mb-5">
              <button
                type="submit"
                className="w-full rounded-md bg-blue-500 py-3 px-6 text-white font-medium text-base outline-none focus:shadow-md"
              >
                Login
              </button>
            </div>
            <div className="flex justify-between">
              <h1 className="">
                <input className=" mr-5" type="checkbox" name="" id="" />
                Remember me{" "}
              </h1>
              <h1 className="text-blue-500 cursor-pointer underline">
                Forget Password
              </h1>
            </div>
            <p className="mt-5">
              New here?
              <Link
                className="text-blue-500 underline font-semibold ml-2"
                to="/register"
              >
                Join Us
              </Link>
            </p>
          </form>
        </div>
      </div>
      <div className="w-full lg:w-1/2">
        <img
          src={image}
          alt="Nurse"
          className="rounded-xl w-full h-auto object-cover"
        />
      </div>
    </div>
  );
};

export default Login;
