import Navbar from "../../compontents/Navbar";
import Topbar from "../../compontents/Topbar";
import Content from "./Content";

const MainContent = () => {
  return (
    <div className="grid grid-cols-12">
      {/* Navbar */}
      <div className="hidden lg:block col-span-1 border">
        <Navbar></Navbar>
      </div>
      <div className="lg:col-span-11 bg-white col-span-12">
        <div>
          <Topbar></Topbar>
        </div>
        <div className=" bg-gray-200 ">
          <Content></Content>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
