import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { format } from "date-fns";
import ProgressChart from "../components/ProgressChart";
import CalendarDashboard from "../components/Calender";
import UserNav from "../components/UserNav";
// dummy data
import { tasks, events } from "../data";
const Dashboard = () => {
  const [taskStatus, setTaskStatus] = useState("all");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const formattedSelectedDate = format(selectedDate, "yyyy-MM-dd");
  const tasksForDay = tasks.filter(
    (task) => task.dueDate === formattedSelectedDate
  );

  const eventsForDay = events.filter(
    (event) => event.date === formattedSelectedDate
  );
  const projects = [
    {
      name: "Project 1",
      client: "Client A",
      dueDate: "2023-12-01",
      status: "In Progress",
      progress: "75",
    },
    {
      name: "Project 2",
      client: "Client B",
      dueDate: "2023-11-15",
      status: "Completed",
      progress: "100",
    },
    {
      name: "Project 3",
      client: "Client C",
      dueDate: "2023-10-30",
      status: "Pending",
      progress: "20",
    },
    {
      name: "Project 4",
      client: "Client D",
      dueDate: "2023-12-15",
      status: "In Progress",
      progress: "50",
    },
  ];

  return (
    <div className="min-h-screen font-abz">
      <UserNav />
      {/* dashboard stats */}
      <section className="py-3 px-4 md:px-8">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-[#060606] text-xl tracking-wide">Overview</h1>

          <div className="flex items-center gap-1 x">
            <p className="text-sm tracking-tight">Last 30 days</p>
            <IoIosArrowDown className="size-5 inline-block cursor-pointer" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex flex-col items-start gap-2.5 pt-4.5 pr-11 pb-6 pl-4.5 rounded-xl bg-white/34 shadow-dashcard">
            <div></div>
            <p className="text-[#797979] text-sm">Total Revenue</p>
            <p>Ksh 34900</p>
            <p>12% increase from last month</p>
          </div>
          <div className="flex flex-col items-start gap-2.5 pt-4.5 pr-11 pb-6 pl-4.5 rounded-xl bg-white/34 shadow-dashcard">
            <div></div>
            <p className="text-[#797979] text-sm">Total Revenue</p>
            <p>Ksh 34900</p>
            <p>12% increase from last month</p>
          </div>
          <div className="flex flex-col items-start gap-2.5 pt-4.5 pr-11 pb-6 pl-4.5 rounded-xl bg-white/34 shadow-dashcard">
            <div></div>
            <p className="text-[#797979] text-sm">Total Revenue</p>
            <p>Ksh 34900</p>
            <p>12% increase from last month</p>
          </div>
          <div className="flex flex-col items-start gap-2.5 pt-4.5 pr-11 pb-6 pl-4.5 rounded-xl bg-white/34 shadow-dashcard">
            <div></div>
            <p className="text-[#797979] text-sm">Total Revenue</p>
            <p>Ksh 34900</p>
            <p>12% increase from last month</p>
          </div>
        </div>
      </section>
      {/* project summary and overall progress */}
      <section className="flex flex-col md:flex-row gap-4 my-6 px-4 md:px-8">
        <div className="w-full md:w-1/2">
          <h1 className="text-[#060606] tracking-wide h-[40px] text-center md:text-left text-base md:text-lg ">
            Project summary
          </h1>
          <table className="table-sm table-zebra block mx-auto w-fit">
            <thead>
              <tr className="text-xs md:text-base">
                <td>Name</td>
                <td>Client Name</td>
                <td>Due Date</td>
                <td>Status</td>
                <td>Progress</td>
              </tr>
            </thead>
            <tbody>
              {projects.map((project, idx) => (
                <tr key={idx}>
                  <td>{project.name}</td>
                  <td>{project.client}</td>
                  <td>{project.dueDate}</td>
                  <td>{project.status}</td>
                  <td>
                    {/* {project.progress} */}
                    <ProgressChart percentage={project.progress} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col md:flex-row items-center md:items-start space-x-3 h-[40px] mb-5">
            <h2 className="text-[#060606] text-base md:text-lg tracking-wide">
              Upcoming Tasks
            </h2>
            {/* dropdown */}
            <div className="flex items-start md:items-center justify-between mb-4 gap-3 w-full md:w-fit">
              <div className="flex flex-row items-center gap-2 ">
                <p className="text-sm tracking-tight">Filter by:</p>
                <select
                  className="border border-gray-300 rounded-lg px-2 py-1"
                  onChange={(e) => setTaskStatus(e.target.value)}
                >
                  <option value="all">All</option>
                  <option value="in-progress">In Progress</option>
                  <option value="completed">Completed</option>
                  <option value="not-started">Not Started</option>
                </select>
              </div>
              <button className="bg-green text-white px-2 py-1 rounded-lg text-nowrap">
                Add Task
              </button>
            </div>
          </div>
          <table className="table-sm table-zebra mt-2">
            <thead>
              <tr className="text-sm md:text-base">
                <td>Title</td>
                <td>Gig</td>
                <td>Due Date</td>
                <td>Status</td>
              </tr>
            </thead>
            <tbody>
              {taskStatus === "all"
                ? tasks.map((task, idx) => (
                    <tr key={idx} >
                      <td>{task.title}</td>
                      <td>{task.gig}</td>
                      <td>{task.dueDate}</td>
                      <td className="text-nowrap">
                        <span
                          className={`${
                            task.status === "completed"
                              ? "text-green-900 bg-green"
                              : task.status.includes("progress")
                              ? "text-amber-600 bg-amber-200"
                              : "text-red-600 bg-red-200"
                          } rounded-2xl py-2 px-3 w-fit text-center`}
                        >
                          {task.status}
                        </span>
                      </td>
                    </tr>
                  ))
                : tasks
                    .filter((task) => task.status === taskStatus)
                    .map((task, idx) => (
                      <tr key={idx}>
                        <td>{task.title}</td>
                        <td>{task.gigName}</td>
                        <td>{task.dueDate.toLocaleDateString()}</td>
                        <td>
                          <span
                            className={`${
                              task.status === "completed"
                                ? "text-green-900 bg-green"
                                : task.status.includes("progress")
                                ? "text-amber-600 bg-amber-200"
                                : "text-red-600 bg-red-200"
                            } rounded-2xl py-2 px-3 w-fit text-center`}
                          >
                            {task.status}
                          </span>
                        </td>
                      </tr>
                    ))}
            </tbody>
          </table>
        </div>
      </section>
      {/* users tasks for each gig plus calendar */}
      <section className="py-3 px-8">
        <CalendarDashboard
          tasks={tasks}
          events={events}
          formattedSelectedDate={formattedSelectedDate}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
      </section>
    </div>
  );
};

export default Dashboard;
