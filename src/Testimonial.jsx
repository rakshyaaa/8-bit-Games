// import rating from "./images/star.png";
import TestimonialCard from "./TestimonialCard";
import { useState, useEffect } from "react";

// const ratingImage = {
//   src: rating,
//   alt: "rating",
// };

export default function Testimonial({ testimonial }) {
  const [selectedTestimonial, setSelectedTestimonial] = useState(0);

  useEffect(() => {
    let timer = setInterval(() => {
      setSelectedTestimonial(
        (selectedTestimonial) =>
          (selectedTestimonial + 1) % testimonial.testimonials.length
      );
    }, 3000);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div className="testimonials">
      <h1>{testimonial.title}</h1>
      <div className="testimonialCarousel">
        {testimonial.testimonials.map((testimonial, index) => {
          return (
            <TestimonialCard
              testimonial={testimonial}
              index={index}
              selectedTestimonial={selectedTestimonial}
            />
          );
        })}
      </div>
      <div className="testimonialCarouselDots">
        {testimonial.testimonials.map((testimonial, index) => {
          return (
            <span
              className="testimonialCarouselDot"
              style={{
                backgroundColor:
                  selectedTestimonial === index ? "blue" : "#f2f6ff",
              }}
              onClick={() => setSelectedTestimonial(index)}
            ></span>
          );
        })}
      </div>
    </div>
  );
}
