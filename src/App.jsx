import { useState } from "react";
import "./App.css";

import ImageCarousel from "./ImageCarousuel";
import Navbar from "./Navbar";
import Game from "./Game";
import About from "./About";
import {
  logoImage,
  navItems,
  carouselImages,
  carouselText,
  gameSectionText,
  gameCategories,
  games,
  about,
} from "./Data";

function App() {
  return (
    <div>
      <Navbar logoImage={logoImage} navItems={navItems} />
      <ImageCarousel
        images={carouselImages}
        title={carouselText.title}
        subtitle={carouselText.subTitle}
      />
      <Game
        gameSectionText={gameSectionText}
        gameCategories={gameCategories}
        games={games}
      />
      <About about={about} />
    </div>
  );
}

export default App;
