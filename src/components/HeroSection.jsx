import React from "react";

const HeroSection = () => {
  return (
    <section
      className="relative h-full w-full z-0 min-h-[800px]"
      // Adjust the 4rem to match your navbar height
    >
      {/* Background Video */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
        >
          <source src="src/assets/video/piano.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Text Overlay */}
      <div className="absolute inset-0 flex flex-col justify-center items-center bg-amber-900 bg-opacity-30 px-4 space-y-8">
        <h1 className="text-5xl font-playfair font-bold text-yellow-300">
          Master the Piano with Confidence
        </h1>
        <p className="mt-4 text-xl text-gray-300">
          Step-by-step lessons tailored for you
        </p>
        <button className="mt-6 px-6 py-3 bg-color-navy text-white rounded-lg hover:bg-color-gold hover:text-color-navy transition">
          Start Learning Now
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
