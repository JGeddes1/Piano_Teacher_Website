import React from "react";
import StaticNavbar from "../components/StaticNavBar.jsx";

const OnlineLesson = () => {
  return (
    <div className="online-lessons-page bg-gray-100">
      <StaticNavbar />

      {/* Hero Section */}
      <section className="bg-color-navy bg-opacity-50 text-white py-16 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Learn Music Online from Anywhere
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Join our online lessons and unlock your musical potential with
            expert guidance.
          </p>
          <a
            href="#packages"
            className="px-8 py-3 bg-color-navy text-white rounded-lg font-bold hover:bg-color-gold transition"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* Why Choose Online Lessons */}
      <section className="py-12 px-6 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Why Choose Online Lessons?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
              <div className="w-16 h-16 mx-auto mb-4">
                <i className="fas fa-clock text-gray-800 text-4xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Flexible Schedule
              </h3>
              <p className="text-gray-600">
                Learn at a time that works best for you from the comfort of your
                home.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
              <div className="w-16 h-16 mx-auto mb-4">
                <i className="fas fa-chalkboard-teacher text-gray-800 text-4xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Expert Tutors
              </h3>
              <p className="text-gray-600">
                Learn from experienced and passionate music teachers.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
              <div className="w-16 h-16 mx-auto mb-4">
                <i className="fas fa-video text-gray-800 text-4xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Interactive Lessons
              </h3>
              <p className="text-gray-600">
                Enjoy live, interactive lessons designed to keep you engaged.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white py-12 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {["Contact Me", "Join the Class", "Start Learning"].map(
              (step, index) => (
                <div
                  key={index}
                  className="p-6 bg-gray-100 rounded-lg shadow-md"
                >
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    {`${index + 1}. ${step}`}
                  </h3>
                  <p className="text-gray-600">
                    {step === "Contact Me"
                      ? "Schedule your first lesson with me via email or phone."
                      : step === "Join the Class"
                      ? "Connect through Zoom or another video platform."
                      : "Receive personalized feedback and grow your skills."}
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Lesson Packages */}
      <section id="packages" className="py-12 px-6 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Lesson Packages
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Starter", price: "$20", details: "1 Lesson per week" },
              { name: "Standard", price: "$35", details: "2 Lessons per week" },
              { name: "Pro", price: "$50", details: "Unlimited lessons" },
            ].map((pkg, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {pkg.name}
                </h3>
                <p className="text-gray-600 mb-4">{pkg.details}</p>
                <p className="text-2xl font-bold text-gray-800">{pkg.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 px-6 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            What Our Students Say
          </h2>
          <p className="text-gray-600 italic mb-4">
            "David's online lessons transformed my playing!"
          </p>
          <p className="text-gray-600 italic">
            "Convenient, fun, and highly effective!"
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 px-6 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Frequently Asked Questions
          </h2>
          {[
            {
              question: "What platform do you use?",
              answer: "We use Zoom for seamless online classes.",
            },
            {
              question: "What do I need for online lessons?",
              answer:
                "A device with a camera and a stable internet connection.",
            },
          ].map((faq, index) => (
            <div key={index} className="mb-4">
              <p className="text-gray-800 font-semibold">{`Q: ${faq.question}`}</p>
              <p className="text-gray-600">{`A: ${faq.answer}`}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default OnlineLesson;
