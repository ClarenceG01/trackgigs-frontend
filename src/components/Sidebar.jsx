import { RxDashboard } from "react-icons/rx";
import { IoSettingsOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FaAnglesLeft, FaAnglesRight } from "react-icons/fa6";
import { FaTasks } from "react-icons/fa";
import { MdWork } from "react-icons/md";
const Sidebar = ({ expand, setExpand }) => {
  const sidebarContent = [
    {
      name: "Dashboard",
      icon: <RxDashboard className="size-6" />,
      route: "/dashboard",
    },
    {
      name: "Gigs",
      icon: <MdWork className="size-6" />,
      route: "gigs",
    },
    {
      name: "Tasks",
      icon: <FaTasks className="size-6" />,
      route: "tasks",
    },
    {
      name: "Settings",
      icon: <IoSettingsOutline className="size-6" />,
      route: "settings",
    },
    {
      name: "Settings",
      icon: <IoSettingsOutline className="size-6" />,
      route: "settings",
    },
  ];
  return (
    <div className="fixed">
      <div
        className={`${
          expand ? "w-[250px]" : "w-[100px]"
        } bg-green min-h-screen py-5 px-5 font-abz relative`}
      >
        <div
          className="absolute top-7 -right-5 bg-white flex items-center size-10 p-2 gap-2.5 rounded-full shadow-sidecircle cursor-pointer hover:scale-105 transition duration-300"
          onClick={() => setExpand((prev) => !prev)}
        >
          {expand ? (
            <FaAnglesLeft className="size-7 text-green" />
          ) : (
            <FaAnglesRight className="size-7 text-green" />
          )}
        </div>
        {expand ? (
          <h1 className="font-logo text-white text-lg md:text-3xl leading-6 text-center">
            TrackGigs
          </h1>
        ) : (
          <img src="/images/TrackGigs.png" alt="" />
        )}

        <button
          className={`${
            expand ? "bg-white" : ""
          } flex items-center gap-2 py-1 px-2.5 mt-8 mx-auto mb-12 rounded-2xl w-fit`}
        >
          <div className="bg-green flex justify-center items-center p-[5px] gap-4 rounded-3xl">
            <img src="/images/icons.svg" alt="" className="size-6" />
          </div>
          {expand && (
            <p className="text-center text-[#171717] font-inter">Add a gig</p>
          )}
        </button>
        <div className="flex flex-col gap-2.5">
          {sidebarContent.map((item, index) => (
            <Link
              to={item.route}
              key={index}
              className={`min-w-full flex items-center gap-2 py-1 px-2 rounded-full w-fit cursor-pointer hover:bg-white text-white hover:text-green transition-colors duration-300`}
            >
              <div
                className={`flex justify-center items-center gap-4 p-1.5 rounded-3xl ${
                  expand ? "bg-green" : ""
                }`}
              >
                <div
                  className={`${expand ? "text-white" : "hover:text-green"}`}
                >
                  {item.icon}
                </div>
              </div>
              {expand && <p className="text-left text-lg">{item.name}</p>}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
