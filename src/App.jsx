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
  gameCategories,
  games,
  about,
  testimonial,
  footer,
} from "./Data";

function App() {
  return (
    <div>
      <Navbar logoImage={logoImage} navItems={navItems} />
      <ImageCarousel
        images={carouselImages}
        title={carouselText.title}
        subtitle={carouselText.subTitle}
        delay={5000}
        defaultValue={2}
      />
      <Game
        gameSectionText={gameSectionText}
        gameCategories={gameCategories}
        games={games}
      />
      <About about={about} />
      <Testimonial testimonial={testimonial} />
      <Footer footer={footer} />
    </div>
  );
}

export default App;
