import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
export default function Home() {
  return (
    <div className="px-4 md:px-14 lg:px-28 relative">
      <Navbar />
      <Hero />
      <img
        src="/images/Ellipse36.png"
        alt="ellipse"
        className="absolute top-0 left-0 w-[400px] h-[400px]"
      />

      <div className="w-[150px] h-[150px] rounded-full bg-green absolute top-100 right-0 md:top-90 blur-[120px]"></div>
      <img
        src="/images/Ellipse38.svg"
        alt="ellipse"
        className="absolute top-15 -translate-x-1/2 left-1/2 w-[400px] h-[400px]"
      />
      <Services />
    </div>
  );
}
