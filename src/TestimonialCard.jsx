import rating from "./images/star.png";

const ratingImage = {
  src: rating,
  alt: "rating",
};

export default function TestimonialCard({
  testimonial,
  selectedTestimonial,
  index,
}) {
  return (
    <div
      className="testimonialCard"
      style={{
        display: selectedTestimonial === index ? "block" : "none",
      }}
    >
      <div className="testimonialCardInside">
        <img className="testimonialCardImage" {...testimonial.image} />
        <p className="reviewer">{testimonial.name}</p>
        <p className="review">{testimonial.description}</p>
        <div class="rating">
          {[...Array(testimonial.rating)].map((e, i) => {
            return <img className="ratingImage" {...ratingImage} />;
          })}
        </div>
        <p className="subreview">{testimonial.subDescription}</p>
      </div>
    </div>
  );
}
