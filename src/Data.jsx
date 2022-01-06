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
import facebook from "./images/facebook.png";
import instagram from "./images/instagram.png";
import twitter from "./images/twitter.png";

import person from "./images/person.jpg";

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
  image: {
    src: mario,
    alt: "Mario Image",
  },
};

/*--------------------------testimonial ------------------*/

export const testimonial = {
  title: "Loved by everyone",
  testimonials: [
    {
      image: {
        src: person,
        alt: "Johan Smith",
      },
      name: "Johan Smith",
      rating: 4,
      description: "Retro Games is the best!",
      subDescription:
        "Best Retro Game ever. Just Click and start playing. Reminds me of my childhood. Just amazing.",
    },
    {
      image: {
        src: person,
        alt: "Karen Brown",
      },
      name: "Karen Brown",
      rating: 3,
      description: "Could be better.",
      subDescription:
        "Best Retro Game ever. Just Click and start playing. Reminds me of my childhood. Just amazing.",
    },
    {
      image: {
        src: person,
        alt: "Rudolf Kilnman",
      },
      name: "Rudolf Kilnman",
      rating: 5,
      description: "One word. Amazing.",
      subDescription:
        "Best Retro Game ever. Just Click and start playing. Reminds me of my childhood. Just amazing.",
    },
  ],
};

/* ------------------------ Footer ---------------------------*/

export const footer = {
  items: [
    {
      alt: "facebook",
      src: facebook,
    },
    {
      alt: "instagram",
      src: instagram,
    },
    ,
    {
      alt: "twitter",
      src: twitter,
    },
  ],

  description: "Developed by: jellybean",
};
