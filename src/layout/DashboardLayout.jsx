import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const DashboardLayout = () => {
  const [expand, setExpand] = useState(true);
  return (
    <div className="min-h-screen">
      <Sidebar expand={expand} setExpand={setExpand} />
      <div
        className={`transition-all duration-300 ${
          expand ? "ml-[250px]" : "ml-[100px]"
        } overflow-y-auto`}
      >
        <Outlet />
      </div>
    </div>
  );
};
export default DashboardLayout;
