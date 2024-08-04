import { Link } from "react-router-dom";
import image from "../../assets/images/Group 1000001700.png";

const Banner = () => {
  return (
    <div className="flex p-8 flex-col gap-10 lg:flex-row items-center justify-between  rounded-xl">
      <div className="flex-1">
        <h1 className="text-2xl font-medium">
          I Am Looking for Massage Therapist Near...
        </h1>
        <h1 className="mt-3">
          In using this site, I agree to be bound by the
          <Link className="text-blue-500 underline font-bold mx-1">
            Terms of Services
          </Link>
          and
          <Link className="text-blue-500 underline font-bold  mx-1">
            Privacy Policy
          </Link>
        </h1>
        <div className="mt-10">
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"></div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 ps-10 text-sm  border  rounded-lg bg-blue-50    dark:text-white "
              placeholder="ZIP code or city name"
              required
            />
            <button
              type="submit"
              className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm px-4 py-2  "
            >
              Go
            </button>
          </div>
        </div>
      </div>
      <div className="flex-1 flex justify-end">
        <img src={image} alt="" />
      </div>
    </div>
  );
};

export default Banner;
