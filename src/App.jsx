import { useState } from "react";
import "./App.css";

import ImageCarousel from "./ImageCarousuel";
import Navbar from "./Navbar";
import Game from "./Game";
import About from "./About";
import Testimonial from "./Testimonial";
import Footer from "./Footer";
import {
  logoImage,
  navItems,
  carouselImages,
  carouselText,
  gameSectionText,
  about,
  testimonial,
  footer,
  games,
} from "./Data";

function App() {
  return (
    <div>
      <Navbar logoImage={logoImage} navItems={navItems} />
      <ImageCarousel
        images={carouselImages}
        title={carouselText.title}
        subTitle={carouselText.subTitle}
        delay={5000}
        defaultValue={0}
      />
      <Game text={gameSectionText} collections={games} />
      <About
        title={about.title}
        description={about.description}
        image={about.image}
      />
      <Testimonial
        title={testimonial.title}
        testimonials={testimonial.testimonials}
      />
      <Footer items={footer.items} description={footer.descriptionDetail} />
    </div>
  );
}

export default App;
