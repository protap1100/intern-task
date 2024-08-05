import { Link } from "react-router-dom";
import image from "../../assets/images/Group 1000001745.png";
import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [showRetypePassword, setShowRetypePassword] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    retypePassword: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.password !== form.retypePassword) {
      Swal.fire({
        title: "Wrong Password",
        text: "Passwords do not match!",
        icon: "error",
      });
      return;
    }
    createUser(form.email, form.password).then(
      Swal.fire({
        title: "Register Successful",
        text: "You Have Registered Successfully",
        icon: "success",
      })
    );
  };

  return (
    <div className="flex lg:flex-row container mx-auto flex-col-reverse justify-center items-center gap-6 mt-20">
      <div className="flex-1 px-5">
        <div>
          <h1 className="text-4xl text-center lg:text-left  text-blue-500">
            LOGO
          </h1>
          <h1 className="text-3xl text-center lg:text-left  font-bold mt-5">
            Sign in to Your Account
          </h1>
          <h1 className="mr-0  text-center lg:text-left  lg:mr-20 mt-4">
            Welcome back! Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Perferendis doloribus tenetur, ea voluptatem architecto
            beatae. Eum omnis debitis inventore at.
          </h1>
          <Link className="text-center lg:text-left text-blue-500 underline">
            Privacy And Policy
          </Link>
        </div>
        <div className="mt-10">
          <form onSubmit={handleSubmit}>
            <div className="mb-5">
              <label className="mb-3 block text-base font-medium text-[#07074D]">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="UserName"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
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
                  className="absolute  inset-y-0 right-0 pr-3 flex items-center"
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
              <label className="mb-3 block text-base font-medium text-[#07074D]">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type={showRetypePassword ? "text" : "password"}
                  name="retypePassword"
                  value={form.retypePassword}
                  onChange={handleChange}
                  placeholder="Retype Password"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
                <span
                  className="absolute  inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowRetypePassword(!showRetypePassword)}
                >
                  {showRetypePassword ? (
                    <FaEye className="text-gray-800 text-2xl cursor-pointer" />
                  ) : (
                    <FaEyeSlash className="text-gray-800 text-2xl cursor-pointer" />
                  )}
                </span>
              </div>
            </div>
            <h1 className="text-blue-500 mt-5 font-bold">
              <input
                className="mr-2"
                type="checkbox"
                name="terms"
                id="terms"
                required
              />
              Accept Terms of Services
            </h1>
            <div className="mt-5 flex flex-col  justify-center items-center">
              <button
                type="submit"
                className="p-4 rounded-xl bg-blue-500 hover:bg-blue-600 font-bold text-white w-2/4"
              >
                Sign Up
              </button>
              <h1 className="mt-5">
                Already Have An Account?
                <Link
                  className="text-blue-500 underline font-semibold ml-2"
                  to="/login"
                >
                  Login
                </Link>
              </h1>
            </div>
          </form>
        </div>
      </div>
      <div className="relative flex-1">
        <img
          src={image}
          alt="Nurse"
          className="rounded-xl w-full h-auto object-cover lg:block hidden"
        />

        <div className="absolute inset-0 hidden lg:flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
          <div className="text-center text-white p-6 bg-black bg-opacity-60 rounded-lg">
            <h1 className="text-2xl text-blue-500 mb-4 ">Create Account</h1>
            <p className="text-lg">Fill in Your Information</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
