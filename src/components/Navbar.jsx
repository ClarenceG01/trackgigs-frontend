import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
export default function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  return (
    <div className=" py-2 flex justify-between items-center relative ">
      <h1 className="font-logo text-green text-2xl md:text-3xl leading-6">
        TrackGigs
      </h1>
      <ul className="hidden md:flex gap-10 font-inter text-light-text text-lg">
        <li className="hover:text-green hover:font-semibold transition-colors duration-300 cursor-pointer">
          Home
        </li>
        <a href="#services">
          <li className="hover:text-green hover:font-semibold transition-colors duration-300 cursor-pointer">
            How It Works
          </li>
        </a>

        <li className="hover:text-green hover:font-semibold transition-colors duration-300 cursor-pointer">
          Features
        </li>

        <li className="hover:text-green hover:font-semibold transition-colors duration-300 cursor-pointer">
          FAQ
        </li>
      </ul>
      <div className="hidden md:flex gap-4">
        <Link
          to="/login"
          className="rounded-[10px] border-2 border-green text-light-text px-4 py-1.5 hover:bg-green hover:text-white transition-colors duration-300 cursor-pointer"
        >
          Login
        </Link>
        <Link
          to="/signup"
          className="rounded-[10px] bg-green text-white px-4 py-1.5 hover:border-2 hover:border-green hover:bg-transparent hover:text-light-text transition-colors duration-300 hover:px-3.5 hover:py-1 cursor-pointer"
        >
          Sign up
        </Link>
      </div>
      <div className="md:hidden">
        <GiHamburgerMenu
          className="text-4xl text-green"
          onClick={() => console.log("Menu clicked")}
        />
      </div>
      {isMenuOpen && (
        <div className="absolute top-10 -right-5 w-full bg-white shadow-md flex flex-col items-center gap-4 py-4 z-50 md:hidden">
          <ul className="flex flex-col gap-4 font-[var(--font-inter)] text-green text-lg">
            <li className="cursor-pointer" onClick={() => setMenuOpen(false)}>
              Home
            </li>
            <li className="cursor-pointer" onClick={() => setMenuOpen(false)}>
              Features
            </li>
            <li className="cursor-pointer" onClick={() => setMenuOpen(false)}>
              FAQ
            </li>
          </ul>
          <div className="flex flex-col gap-2 w-2/3">
            <button className="rounded-[10px] border-2 border-green text-green px-4 py-1.5 hover:bg-green hover:text-white transition-colors duration-300 cursor-pointer">
              Login
            </button>
            <button className="rounded-[10px] bg-green text-white px-4 py-1.5 hover:border-2 hover:border-green hover:bg-transparent hover:text-green transition-colors duration-300">
              Sign up
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
