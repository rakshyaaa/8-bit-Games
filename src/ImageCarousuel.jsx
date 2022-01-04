import { useState } from "react";

export default function ImageCarousel({ images, title, subTitle }) {
  const [selectedImg, setSelectedImg] = useState(0);

  return (
    <div className="carousel">
      {images.map((image, index) => {
        return (
          <div className="carouselImages">
            <img
              key={image.id}
              style={{ display: selectedImg === index ? "block" : "none" }}
              {...image}
            />
          </div>
        );
      })}
      <div className="carouselDots">
        {images.map((image, index) => {
          return (
            <span
              className="carouselDot"
              style={{
                backgroundColor: selectedImg === index ? "blue" : "white",
              }}
              onClick={() => setSelectedImg(index)}
            ></span>
          );
        })}
      </div>

      <div className="carouselInfo">
        <h1>{title}</h1>
        <p>{subTitle}</p>
      </div>
    </div>
  );
}
