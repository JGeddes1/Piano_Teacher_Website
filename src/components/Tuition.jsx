import React from "react";
import { FaHome, FaLaptop } from "react-icons/fa"; // Import icons from react-icons

const Tuition = () => {
  return (
    <section className=" py-10 px-5">
      <div className="w-5/6 mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl font-extrabold text-gray-800 text-center mb-12 tracking-wide">
          Piano Tuition Costs
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: Piano Lessons at Home */}
          <div className="relative rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
            <div
              className="h-48 bg-cover bg-center"
              style={{
                backgroundImage: "url('https://via.placeholder.com/600x400')",
              }}
            ></div>
            <div className="bg-white p-8 rounded-b-lg">
              {/* Icon */}
              <div className="flex items-center mb-4">
                <FaHome className="text-4xl text-blue-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-700">
                  Piano Lessons at Home
                </h3>
              </div>

              {/* Pricing Info */}
              <p className="text-xl font-semibold text-gray-800 mb-4">
                £50 per hour
              </p>
              <p className="text-gray-600">
                📍 North London and surrounding areas
              </p>
              <p className="text-gray-600 mt-2">
                Shorter lessons: £30 for 30 minutes, £40 for 45 minutes.
              </p>
              <p className="text-gray-600 mt-4">
                🎵 Discounts: Save 10% on block bookings, holiday crash courses,
                or intensive programs.
              </p>

              {/* Call-to-action */}
              <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg transition duration-300">
                Learn More About Home Lessons
              </button>
            </div>
          </div>

          {/* Card 2: Online Piano Tuition */}
          <div className="relative  rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
            <div
              className="h-48 bg-cover   bg-center"
              style={{
                backgroundImage: "url('https://via.placeholder.com/600x400')",
              }}
            ></div>
            <div className="bg-white p-8 rounded-b-lg">
              {/* Icon */}
              <div className="flex items-center mb-4">
                <FaLaptop className="text-4xl text-color-burgundy mr-3" />
                <h3 className="text-2xl font-bold text-gray-700">
                  Online Piano Tuition
                </h3>
              </div>

              {/* Pricing Info */}
              <p className="text-xl font-semibold text-gray-800 mb-4">
                £45 per hour
              </p>
              <p className="text-gray-600">
                🌍 Available from anywhere you live
              </p>
              <p className="text-gray-600 mt-2">
                Shorter lessons: £25 for 30 minutes, £35 for 45 minutes.
              </p>
              <p className="text-gray-600 mt-4">
                🎵 Discounts: Save 10% on block bookings, holiday crash courses,
                or intensive programs.
              </p>

              {/* Call-to-action */}
              <button className="mt-6 bg-color-burgundy hover:bg-teal-600 text-white py-2 px-6 rounded-lg transition duration-300">
                Discover Online Tuition Options
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tuition;
