import React from "react";
import Slider from "react-slick";
import { FaStar } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    id: 1,
    name: "Emily Johnson",
    feedback:
      "David is an incredible piano teacher! He has helped me improve my technique and confidence. Highly recommended!",
    rating: 5,
    image: "https://via.placeholder.com/80", // Replace with actual image URL
  },
  {
    id: 2,
    name: "Michael Smith",
    feedback:
      "David’s teaching style is fun and engaging. My son has shown remarkable improvement in just a few months.",
    rating: 5,
    image: "https://via.placeholder.com/80", // Replace with actual image URL
  },
  {
    id: 3,
    name: "Sophia Williams",
    feedback:
      "Learning piano with David has been such a great experience. His lessons are tailored to my pace and interests.",
    rating: 4,
    image: "https://via.placeholder.com/80", // Replace with actual image URL
  },
  {
    id: 4,
    name: "James Brown",
    feedback:
      "David is patient, knowledgeable, and a joy to learn from. I always look forward to my lessons!",
    rating: 5,
    image: "https://via.placeholder.com/80", // Replace with actual image URL
  },
];

const TestimonialsCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };

  return (
    <section className="bg-color-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-700 mb-8">
          What My Students Say
        </h2>

        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-color-navy rounded-lg shadow-lg p-6 flex flex-col items-center text-center space-y-4"
            >
              {/* Profile Image */}
              <div className="flex justify-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full object-cover border-2 border-color-gold"
                />
              </div>

              {/* Name */}
              <h3 className="text-lg font-semibold text-white">
                {testimonial.name}
              </h3>

              {/* Rating */}
              <div className="flex justify-center items-center">
                {[...Array(5)].map((_, index) => (
                  <FaStar
                    key={index}
                    className={`${
                      index < testimonial.rating
                        ? "text-yellow-400"
                        : "text-white"
                    } text-lg`}
                  />
                ))}
              </div>

              {/* Feedback */}
              <p className="text-white text-sm">{testimonial.feedback}</p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
