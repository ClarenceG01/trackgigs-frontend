import React from "react";

export default function App() {
  return (
    // coming soon page
    <div className="bg-gradient-to-t from-green via-green/80 min-h-screen py-3 px-5 relative font-abz">
      <img
        src="/images/trackgigs-nobg.png"
        alt="trackgigs-logo"
        className="w-[100px]"
      />
      <div className="flex flex-row justify-between mt-18 w-fit space-x-15">
        <div className="w-[10px] bg-white/50 rounded"></div>
        <div className="font-inter w-[500px]">
          <h2 className=" text-white font-bold">COMING SOON</h2>
          <p className="text-white text-lg mt-2">
            Track your freelance projects, stay on top of deadlines, and never
            lose sight of your payments — all in one place.
          </p>
        </div>
      </div>
      {/* join waitlist */}
      <div className="flex flex-row justify-between mt-15 w-fit space-x-15">
        <div className="font-inter w-[450px]">
          <h2 className=" text-white font-semibold text-5xl">
            Get notified when we launch
          </h2>
          {/* form */}
          <form className="mt-4 flex items-center gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="py-2 px-4 rounded bg-white/20 text-white placeholder:text-white focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button
              type="submit"
              className="w-full bg-green text-white p-2  rounded hover:bg-green/80 transition-colors"
            >
              Join Waitlist
            </button>
          </form>
        </div>
      </div>
      {/* coming soon image */}
      <img
        src="/images/coming-soon1.svg"
        alt="coming-soon"
        className="absolute w-[80px] mx-auto mt-8 bottom-0 right-0 overflow-hidden"
      />
    </div>
  );
}
