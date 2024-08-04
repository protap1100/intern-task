import { useState } from "react";
import { useCityContext } from "./CityContext";
import image from "../../assets/images/Group 1000001700.png";
import { Link } from "react-router-dom";

const Banner = () => {
  const { setSearchTerm } = useCityContext();
  const [localSearchTerm, setLocalSearchTerm] = useState("");

  const handleSearch = () => {
    setSearchTerm(localSearchTerm);
  };

  return (
    <div className=" flex p-8 flex-col gap-10 lg:flex-row items-center justify-between rounded-xl">
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
          <Link className="text-blue-500 underline font-bold mx-1">
            Privacy Policy
          </Link>
        </h1>
        <div className="mt-10">
          <div className="relative">
            <input
              type="text"
              id="default-search"
              className="block w-full p-4 text-sm border rounded-lg bg-blue-50 "
              placeholder="ZIP code or city name"
              value={localSearchTerm}
              onChange={(e) => setLocalSearchTerm(e.target.value)}
            />
            <button
              type="button"
              onClick={handleSearch}
              className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-4 py-2 cursor-pointer"
            >
              Go
            </button>
          </div>
        </div>
      </div>
      <div className="flex-1 flex justify-end">
        <img src={image} alt="Banner" />
      </div>
    </div>
  );
};

export default Banner;
