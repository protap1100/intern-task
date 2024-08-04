import NavIcons from "./NavIcons";

const Navbar = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-4xl my-10 text-blue-500 ">Logo</h1>
      <div className="">
        <NavIcons></NavIcons>
      </div>
    </div>
  );
};

export default Navbar;