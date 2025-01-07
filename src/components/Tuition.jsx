import React from "react";
import { FaHome, FaLaptop } from "react-icons/fa"; // Import icons from react-icons

const Tuition = () => {
  return (
    <section className="bg-white py-10 px-5">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">
          Piano Tuition Costs
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: Piano Lessons at Home */}
          <div
            className="relative bg-cover bg-center rounded-lg overflow-hidden shadow-lg"
            style={{
              backgroundImage: "url('https://via.placeholder.com/600x400')",
            }}
          >
            <div className="bg-color-gold bg-opacity-50 p-8 text-color-navy rounded-lg">
              {/* Icon */}
              <div className="flex items-center mb-4">
                <FaHome className="text-3xl text-color-navy mr-2" />
                <h3 className="text-2xl font-bold">Piano Lessons at Home</h3>
              </div>

              {/* Pricing Info */}
              <p className="text-xl font-semibold mb-4">£50 per hour</p>
              <p>📍 North London and surrounding areas</p>
              <p className="mt-2">
                Shorter lessons: £30 for 30 minutes, £40 for 45 minutes.
              </p>
              <p className="mt-4">
                🎵 Discounts: Save 10% on block bookings, holiday crash courses,
                or intensive programs.
              </p>

              {/* Call-to-action */}
              <button className="mt-6 bg-color-navy hover:bg-color-gold text-white py-2 px-4 rounded-lg">
                Learn More About Home Lessons
              </button>
            </div>
          </div>

          {/* Card 2: Online Piano Tuition */}
          <div
            className="relative bg-cover bg-center rounded-lg overflow-hidden shadow-lg"
            style={{
              backgroundImage: "url('https://via.placeholder.com/600x400')",
            }}
          >
            <div className="bg-color-gold bg-opacity-50 p-8 text-color-navy rounded-lg">
              {/* Icon */}
              <div className="flex items-center mb-4">
                <FaLaptop className="text-3xl text-color-navy mr-2" />
                <h3 className="text-2xl font-bold">Online Piano Tuition</h3>
              </div>

              {/* Pricing Info */}
              <p className="text-xl font-semibold mb-4">£45 per hour</p>
              <p>🌍 Available from anywhere you live</p>
              <p className="mt-2">
                Shorter lessons: £25 for 30 minutes, £35 for 45 minutes.
              </p>
              <p className="mt-4">
                🎵 Discounts: Save 10% on block bookings, holiday crash courses,
                or intensive programs.
              </p>

              {/* Call-to-action */}
              <button className="mt-6 bg-teal-500 hover:bg-teal-600 text-white py-2 px-4 rounded-lg">
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
