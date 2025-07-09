
export default function Hero() {
  return (
    <div className=" md:min-h-screen pb-3 md:pt-8 font-inter flex flex-col md:flex-row justify-center md:justify-between items-center md:items-start  gap-8 md:gap-20 dark:text-white">
      <div className="flex flex-col items-center md:items-start justify-start gap-6 md:w-[555px] text-center md:text-left">
        <h2 className=" text-[#191A15] text-4xl md:text-[60px] font-bold leading-12 md:leading-[80px]">
          Take Control <br /> of Your <br /> Freelance Life
        </h2>
        <img src='/images/Vector 32.svg' alt="vector" />
        <p className=" text-black font-inter font-medium text-lg leading-7 mt-4">
          Track your gigs, stay on top of deadlines, and never lose sight of
          your payments — all in one place.
        </p>
        <div className="hidden md:flex gap-4">
          <button className="rounded-4xl bg-green text-white px-4 py-1.5 hover:border-2 hover:border-green hover:bg-transparent hover:text-light-text transition-colors duration-300 hover:px-3.5 hover:py-1 cursor-pointer">
            Get Started
          </button>
          <button className="rounded-4xl border-2 border-green text-light-text px-4 py-1.5 hover:bg-green hover:text-white transition-colors duration-300 cursor-pointer">
            How it works
          </button>
        </div>
      </div>

      <div className="h-[400px] w-3/4 md:w-1/2 lg:w-1/3  bg-[url('/images/Frame46.png')] bg-cover bg-center bg-no-repeat flex items-center justify-center rounded-lg relative">
        <img
          src="/images/frame22.png"
          alt="hero-image"
          width={250}
          height={280}
          className="absolute bottom-0 rounded-bl-lg left-0"
        />
        <div className="bg-white rounded-lg flex flex-col items-start gap-0 px-2 py-0 absolute md:top-18 -left-7 md:-left-18 shadow-card">
          <span className="text-[#A9A7B6] text-sm font-light">
            Total Income
          </span>
          <div className="flex items-center gap-1 ">
            <span className="text-base text-black font-medium">Ksh 24500</span>
            <img
              src="/images/bar-chart.svg"
              alt="vector"
              width={20}
              height={20}
            />
          </div>
        </div>

        <img
          src="/images/Group58.png"
          alt="hero-image"
          width={40}
          height={40}
          className="absolute top-5 -right-5"
        />
        <img
          src="/images/Rectangle34.png"
          alt="hero-image"
          width={40}
          height={40}
          className="absolute -bottom-5 left-5"
        />
      </div>
    </div>
  );
}
