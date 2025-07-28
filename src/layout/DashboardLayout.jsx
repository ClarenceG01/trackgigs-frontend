import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const DashboardLayout = () => {
  const [expand, setExpand] = useState(true);
  return (
    <div className="min-h-screen">
      <Sidebar expand={expand} setExpand={setExpand} />
      <div
        className={`transition-all duration-300 m-0 ${
          expand ? "md:ml-[250px]" : "md:ml-[100px]"
        }  overflow-y-auto`}
      >
        <Outlet />
      </div>
    </div>
  );
};
export default DashboardLayout;
