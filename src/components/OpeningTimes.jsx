import React from "react";
import { FaClock } from "react-icons/fa";

const OpeningTimes = () => {
  const schedule = [
    { day: "Monday", time: "9:00 AM - 5:00 PM" },
    { day: "Tuesday", time: "9:00 AM - 5:00 PM" },
    { day: "Wednesday", time: "9:00 AM - 5:00 PM" },
    { day: "Thursday", time: "9:00 AM - 5:00 PM" },
    { day: "Friday", time: "9:00 AM - 5:00 PM" },
    { day: "Saturday", time: "10:00 AM - 3:00 PM" },
    { day: "Sunday", time: "Closed" },
  ];

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 w-full md:w-2/3 lg:w-1/2 mx-auto">
      <div className="flex items-center space-x-3 mb-6">
        <FaClock className="text-red-400 text-2xl" />
        <h2 className="text-2xl font-semibold text-gray-700">Opening Times</h2>
      </div>
      <ul className="divide-y divide-gray-200">
        {schedule.map((entry, index) => (
          <li
            key={index}
            className="flex justify-between items-center py-3 px-4 hover:bg-gray-50 transition duration-200"
          >
            <span className="text-lg text-gray-600 font-medium">
              {entry.day}
            </span>
            <span
              className={`${
                entry.time === "Closed"
                  ? "text-red-500 font-semibold"
                  : "text-gray-600"
              } text-lg`}
            >
              {entry.time}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OpeningTimes;
