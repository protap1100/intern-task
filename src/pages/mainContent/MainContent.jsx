import Navbar from "../../compontents/Navbar";
import Topbar from "../../compontents/Topbar";
import Content from "./Content";

const MainContent = () => {
  return (
    <div className=" grid grid-cols-12">
      {/* Navbar */}
      <div className="bg-blue-200 hidden lg:block col-span-1 border ">
        <Navbar></Navbar>
      </div>
      <div className="lg:col-span-11 col-span-12">
        <div className="bg-blue-200">
          <Topbar></Topbar>
        </div>
        <div className=" mt-10">
          <Content></Content>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
