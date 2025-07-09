import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const CalendarWidget = ({ tasks }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  // Filter tasks for the selected day
  const tasksForDate = tasks.filter(
    (task) =>
      new Date(task.dueDate).toDateString() === selectedDate.toDateString()
  );

  return (
    <div className="">
      <Calendar onChange={setSelectedDate} value={selectedDate} />
      <div className="mt-1">
        <h3 className="font-semibold text-lg mb-2">
          Tasks due on {selectedDate.toDateString()}
        </h3>
        {tasksForDate.length > 0 ? (
          <ul className="space-y-2">
            {tasksForDate.map((task, idx) => (
              <li
                key={idx}
                className={`px-3 py-2 rounded-lg ${
                  task.status === "completed"
                    ? "text-green-900 bg-green"
                    : task.status.includes("progress")
                    ? "text-amber-600 bg-amber-200"
                    : "text-red-600 bg-red-200"
                }`}
              >
                {task.title}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No tasks for this day.</p>
        )}
      </div>
    </div>
  );
};

export default CalendarWidget;
