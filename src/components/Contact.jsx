import React, { useState, useEffect } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    email: "",
    message: "",
  });

  const [captchaInput, setCaptchaInput] = useState(""); // User's CAPTCHA input
  const [status, setStatus] = useState(""); // Form submission status

  // Load CAPTCHA when the component mounts
  useEffect(() => {
    loadCaptchaEnginge(6); // Initialize CAPTCHA with 6 characters
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCaptchaChange = (e) => {
    setCaptchaInput(e.target.value); // Update CAPTCHA input
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate CAPTCHA
    if (!validateCaptcha(captchaInput)) {
      setStatus("Error! CAPTCHA is incorrect.");
      return;
    }

    // Example: Perform form submission logic
    setStatus("Success! Your message has been sent.");
    setFormData({ name: "", location: "", email: "", message: "" });
    setCaptchaInput(""); // Clear the CAPTCHA input
    loadCaptchaEnginge(6); // Reload CAPTCHA
  };

  return (
    <section id="contact" className="py-12 px-6 bg-white">
      <div className="container mx-auto flex flex-col md:flex-row space-y-12 md:space-y-0 md:space-x-12">
        {/* Contact Form */}
        <div className="md:w-full">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Contact Us
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-gray-800 text-lg mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="px-4 py-2 border rounded-lg text-gray-700"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="location" className="text-gray-800 text-lg mb-2">
                Project Location
              </label>
              <input
                type="text"
                name="location"
                id="location"
                value={formData.location}
                onChange={handleChange}
                className="px-4 py-2 border rounded-lg text-gray-700"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="text-gray-800 text-lg mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="px-4 py-2 border rounded-lg text-gray-700"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="message" className="text-gray-800 text-lg mb-2">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className="px-4 py-2 border rounded-lg text-gray-700"
                required
              ></textarea>
            </div>

            {/* CAPTCHA */}
            <div className="flex flex-col space-y-3">
              <LoadCanvasTemplate /> {/* Render the CAPTCHA */}
              <input
                type="text"
                value={captchaInput}
                onChange={handleCaptchaChange}
                placeholder="Enter the CAPTCHA above"
                className="px-4 py-2 border rounded-lg text-gray-700"
                required
              />
            </div>

            {/* Status Message */}
            {status && (
              <div
                className={`${
                  status.includes("Success") ? "text-green-500" : "text-red-500"
                } mt-4`}
              >
                {status}
              </div>
            )}

            <button
              type="submit"
              className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
