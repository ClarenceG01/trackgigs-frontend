import { CiSearch } from "react-icons/ci";
import { IoMdNotificationsOutline, IoIosArrowDown } from "react-icons/io";
import { useAuthStore } from "../store/useAuthStore";
export default function UserNav() {
  const { user } = useAuthStore();
  return (
    <nav className="flex items-center border-b border-gray-200 py-2 px-6">
      <h1 className="w-1/2 text-[#000606] text-2xl tracking-[0.16px]">
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
            <p className="text-[#292D32] opacity-40">{user.email}</p>
          </div>
          <IoIosArrowDown className="size-5 inline-block cursor-pointer" />
        </div>
      </div>
    </nav>
  );
}
