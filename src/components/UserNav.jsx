import { useState } from "react";
import { createPortal } from "react-dom";
import { CiSearch } from "react-icons/ci";
import { IoMdNotificationsOutline, IoIosArrowDown, IoIosLogOut  } from "react-icons/io";

import { useAuthStore } from "../store/useAuthStore";
export default function UserNav() {
  const { user, logout } = useAuthStore();
  const [visibleDetails, setVisibleDetails] = useState(false);
  return (
    <nav className="flex items-center border-b border-gray-200 py-2 px-6 space-x-2">
      <h1 className="lg:w-1/2 w-fit text-[#000606] text-2xl tracking-[0.16px]">
        Dashboard
      </h1>
      <div className="flex justify-center items-center gap-4 flex-1">
        <div className="flex items-center gap-3 px-2.5 py-1 h-fit border border-gray-300 rounded-lg">
          <CiSearch className="size-6 " />
          <input
            type="search"
            name=""
            id=""
            className="w-full border-0 outline-none"
          />
        </div>
        <div className="relative">
          <IoMdNotificationsOutline className="size-7" />
          <div className="absolute -top-2 -right-1.5 bg-green text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            1
          </div>
        </div>
        <div className="flex items-center gap-2">
          <img
            src="https://github.com/shadcn.png"
            alt=""
            className="inline-block size-10 rounded-full ring-2 ring-white"
          />
          <div>
            <p className="text-[#292D32]">{user.name}</p>
          </div>
          <IoIosArrowDown
            className="size-5 inline-block cursor-pointer"
            onClick={() => setVisibleDetails((prev) => !prev)}
          />
        </div>
        {visibleDetails &&
          createPortal(
            <div className="flex flex-col space-y-2 absolute top-12 right-0 shadow-lg rounded-md p-4 bg-white z-50 font-abz">
				<p className="text-[#585858] text-sm text-center">{user.email}</p>
              <div className="space-y-1">
                <button className="cursor-pointer hover:bg-gray-100 hover:text-red-600 p-2 rounded-md transition-all duration-300 flex items-center" onClick={() => logout()}>
					<IoIosLogOut className="inline-block mr-2 size-5 " />
                  Logout
                </button>
              </div>
            </div>,
            document.body
          )}
      </div>
    </nav>
  );
}
