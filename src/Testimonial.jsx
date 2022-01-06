import TestimonialCard from "./TestimonialCard";
import { useState, useEffect } from "react";

export default function Testimonial({ title, testimonials }) {
  const [selectedTestimonial, setSelectedTestimonial] = useState(0);

  useEffect(() => {
    let timer = setInterval(() => {
      setSelectedTestimonial(
        (selectedTestimonial) => (selectedTestimonial + 1) % testimonials.length
      );
    }, 3000);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div className="testimonials">
      <h1>{title}</h1>
      <div className="testimonialCarousel">
        {testimonials.map((testimonial, index) => {
          return (
            <TestimonialCard
              image={testimonial.image}
              name={testimonial.name}
              rating={testimonial.rating}
              description={testimonial.description}
              subDescription={testimonial.subDescription}
              index={index}
              selectedTestimonial={selectedTestimonial}
            />
          );
        })}
      </div>
      <div className="testimonialCarouselDots">
        {testimonials.map((testimonial, index) => {
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
