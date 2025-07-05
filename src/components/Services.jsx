import { MdWorkOutline } from "react-icons/md";
import { IoIosTimer } from "react-icons/io";
import { GiCash } from "react-icons/gi";

const Services = () => {
  return (
    <div
      className=" min-h-screen flex flex-col-reverse md:flex-row items-center md:items-start justify-between font-inter "
      id="services"
    >
      <img src="/images/dash.png" width={350} height={100} alt="laptop img"  />
      <div className="my-5 md:my-0 md:w-1/2 flex flex-col items-center gap-8">
        <div className="flex flex-col gap-3 items-center md:flex-row md:items-start md:gap-5">
          <div className="bg-transparent shadow-icons rounded-md p-2">
            <MdWorkOutline className="text-green font-semibold size-8 " />
          </div>
          <div className="flex flex-col text-center md:text-left">
            <span className=" text-dark-text font-bold text-xl leading-normal">
              Organize Your Gigs
            </span>
            <span className="text-light-text text-lg leading-7 w-screen md:w-[400px]">
              Plan, track, and manage your freelance gigs with clarity — all
              from a single, intuitive dashboard.
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-3 items-center md:flex-row md:items-start md:gap-5">
          <div className="bg-transparent shadow-icons rounded-md p-2">
            <IoIosTimer className="text-green font-semibold size-8" />
          </div>
          <div className="flex flex-col text-center md:text-left">
            <span className="text-dark-text font-bold text-xl leading-normal">
              Stay Ahead of Deadlines
            </span>
            <span className="text-light-text text-lg leading-7 w-screen md:w-[400px]">
              Set due dates, get reminders, and stay on track so you always
              deliver your best work on time.
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-3 items-center md:flex-row md:items-start md:gap-5">
          <div className="bg-transparent shadow-icons rounded-md p-2">
            <GiCash className="text-green font-semibold size-8" />
          </div>
          <div className="flex flex-col text-center md:text-left">
            <span className="text-dark-text font-bold text-xl leading-normal">
              Track Payments Easily
            </span>
            <span className="text-light-text text-lg leading-7 w-screen md:w-[400px]">
              Monitor payments, update statuses, and keep a clear record of your
              earnings — stress-free and organized.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
