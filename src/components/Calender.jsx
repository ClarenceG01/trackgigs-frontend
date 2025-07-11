import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { format } from "date-fns";

const CalendarDashboard = ({
  tasks,
  events,
  selectedDate,
  setSelectedDate,
}) => {
  console.log(tasks);
  return (
    <div className=" bg-white p-4">
      <h2 className="text-xl font-semibold mb-4 font-abz">🗓️ Calendar</h2>
      <Calendar
        onChange={setSelectedDate}
        value={selectedDate}
        className=" p-2 font-abz "
        tileContent={({ date, view }) => {
          if (view === "month") {
            const dateStr = format(date, "yyyy-MM-dd");
            const hasTask = tasks.some((t) => t.dueDate === dateStr);
            const hasEvent = events.some((e) => e.date === dateStr);

            return (
              <div className="flex justify-center mt-1">
                {(hasTask || hasEvent) && (
                  <span
                    className={`h-2 w-2 rounded-full ${
                      hasTask && hasEvent
                        ? "bg-purple-500"
                        : hasTask
                        ? "bg-blue-500"
                        : "bg-green-500"
                    }`}
                  ></span>
                )}
              </div>
            );
          }
          return null;
        }}
      />
    </div>
  );
};

export default CalendarDashboard;
