import rating from "./images/star.png";

const ratingImage = {
  src: rating,
  alt: "rating",
};

export default function TestimonialCard({
  image,
  name,
  rating,
  description,
  subDescription,
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
        <img className="testimonialCardImage" {...image} />
        <p className="reviewer">{name}</p>
        <p className="review">{description}</p>
        <div className="rating">
          {[...Array(rating)].map((e, i) => {
            return <img className="ratingImage" {...ratingImage} />;
          })}
        </div>
        <p className="subreview">{subDescription}</p>
      </div>
    </div>
  );
}
