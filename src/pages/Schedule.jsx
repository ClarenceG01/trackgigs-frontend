import { useState } from "react";
import { format } from "date-fns";
// dummy data
import { tasks, events } from "../data";
import CalendarDashboard from "../components/Calender";
const Schedule = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const formattedSelectedDate = format(selectedDate, "yyyy-MM-dd");
  const tasksForDay = tasks.filter(
    (task) => task.dueDate === formattedSelectedDate
  );

  const eventsForDay = events.filter(
    (event) => event.date === formattedSelectedDate
  );
  return (
    <div className="flex justify-around">
      <CalendarDashboard
        tasks={tasks}
        events={events}
        formattedSelectedDate={formattedSelectedDate}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
      {/* Details */}
      <div className="w-full md:w-1/2 bg-white p-6">
        <h2 className="text-xl font-semibold mb-4 text-center font-abz">
          🗓️ Details for {formattedSelectedDate}
        </h2>

        <div>
          <h3 className="font-semibold text-lg mb-2 text-blue-500 font-abz">
            Tasks
          </h3>
          {tasksForDay.length > 0 ? (
            <table className="table table-zebra font-inter">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-4 py-2">Task</th>
                  <th className="px-4 py-2">Gig</th>
                  <th className="px-4 py-2">Due Date</th>
                </tr>
              </thead>
              <tbody>
                {tasksForDay.map((task) => (
                  <tr key={task.id}>
                    <td>{task.title}</td>
                    <td>{task.gig}</td>
                    <td>{task.dueDate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="text-gray-500">No tasks for this day.</p>
          )}
        </div>

        <div className="mt-6">
          <h3 className="font-semibold text-lg mb-2 text-green-500 font-abz">
            Events
          </h3>
          {eventsForDay.length > 0 ? (
            <table className="table table-zebra font-inter">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-4 py-2"></th>
                  <th className="px-4 py-2">Date</th>
                  <th className="px-4 py-2">Gig Name</th>
                  <th className="px-4 py-2">Client</th>
                </tr>
              </thead>
              <tbody>
                {eventsForDay.map((event) => (
                  <tr key={event.id}>
                    <td>{event.title}</td>
                    <td>{event.date}</td>
                    <td>{event.gig}</td>
                    <td>{event.client}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="text-gray-500">No events for this day.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Schedule;
