import img1 from "./images/slide1.png";
import img2 from "./images/slide2.png";
import img3 from "./images/slide3.png";
import logoImg from "./images/8bit-logo.png";
import supermario from "./images/supermariobros.png";
import castlevania from "./images/castlevania.png";
import duckhunt from "./images/duckhunt.png";
import legendofzelda from "./images/legendofzelda.png";
import pacman from "./images/pacman.png";
import excitebike from "./images/excitebike.png";
import megaman from "./images/megaman.png";
import mario from "./images/mario.png";

/*----------------- NavBar data ------------------------*/

export const navItems = [
  {
    title: "Games",
    url: "#game",
  },
  {
    title: "About",
    url: "#about",
  },
  {
    title: "Updates",
    url: "#",
  },
];

export const logoImage = {
  imageSrc: logoImg,
  url: "/",
};

/*------------------Carousel Data ------------------------*/

export const carouselImages = [
  { id: 0, src: img1, alt: "game1.png" },
  { id: 1, src: img2, alt: "game2.png" },
  { id: 2, src: img3, alt: "game2.png" },
];

export const carouselText = {
  title: "Collection of retro games",
  subTitle: "Play a number of Nintendo 64 classic games.",
};

/*---------------------Game Section Data --------------------*/

export const gameSectionText = "All the retro games in one place";

export const gameCategories = [
  "All Games",
  "Action",
  "Adventure",
  "Arcade",
  "Sports",
  "Strategy",
];

export const games = [
  {
    title: "Super Mario Bros",
    src: supermario,
    alt: "Super Mario Bros",
  },
  {
    title: "Excite Bike",
    src: excitebike,
    alt: "Excite Bike",
  },
  {
    title: "Pacman",
    src: pacman,
    alt: "Pacman",
  },
  {
    title: "Castlevania",
    src: castlevania,
    alt: "Castlevania",
  },
  {
    title: "Duck Hunt",
    src: duckhunt,
    alt: "Duck Hunt",
  },
  {
    title: "The Legend of Zelda",
    src: legendofzelda,
    alt: "The Legend of Zelda",
  },
  {
    title: "Mega Man",
    src: megaman,
    alt: "Mega Man",
  },
];

/*---------------------About----------------------- */

export const about = {
  title: "About 8-bit Games",
  description:
    "8-Bit games provides free retro games on-site for everyone to play. Bringing back nostalgic memories of NES classic games online.",
  marioImage: {
    src: mario,
    alt: "Mario Image",
  },
};

/*--------------------------testimonial ------------------*/
