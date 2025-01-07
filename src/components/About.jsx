import React from "react";
import { FaMusic } from "react-icons/fa";

const AboutSection = () => {
  return (
    <section className="relative flex flex-col md:flex-row mt-5 font-playfair  bg-gray-50 rounded-lg p-6 md:p10 shadow-md mx-auto w-5/6 ">
      {/* Left: Text Content */}
      <div className="md:w-full space-y-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <h2 className="text-3xl font-bold text-color-navy">
            Learn To Play Your Favourite Songs With David The Piano Teacher
          </h2>
        </div>

        {/* Heading */}
        <h1 className="text-lg md:text-lg text-gray-900">
          Hello, my name is David Steinberg, I’m a friendly and fun piano
          teacher experienced in teaching people of all ages and abilities. I
          can travel to your home for lessons locally in North London, or I can
          offer online tuition wherever you live.
        </h1>

        <h2 className="text-2xl font-bold text-color-navy">My Background</h2>
        <h1 className="text-lg md:text-lg text-gray-900">
          After graduating from University with a BA Honours in Music it didn’t
          take me long to decide to pursue teaching music as a career. I had
          already taken on one piano student at University and had researched
          music in education for the purposes of writing my final dissertation.
          Since then I have built up my London piano lessons client base into a
          busy teaching schedule and have been thoroughly enjoying teaching a
          variety of musical styles to both children and adults. I have been
          fully checked by the CRB (Criminal Records Bureau) and can show my
          certificate on request.
        </h1>

        <a
          href="#contact"
          className="mt-4 inline-block bg-color-gold text-white py-2 px-6 rounded-lg hover:bg-color-gold-dark transition"
        >
          Contact Me for Lessons Today!
        </a>
      </div>

      {/* Right: Image */}
      <div className="relative md:w-1/2 mt-6 md:mt-0 md:pl-10">
        <img
          src="src/assets/person.jpg"
          alt="Person"
          className="lg:w-5/6 w-full rounded-lg shadow-lg transform translate-x--4 rotate-2"
          style={{
            position: "relative",
            zIndex: 10, // Ensures image stays on top
            overflow: "visible", // Allows it to extend outside bounds
          }}
        />
      </div>
    </section>
  );
};

export default AboutSection;
