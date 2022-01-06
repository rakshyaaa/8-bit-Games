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
import closeicon from "./images/canceloverlay.png";
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
    image: {
      src: supermario,
      alt: "Super Mario Bros",
    },
    category: ["All Games", "Action", "Adventure", "Strategy"],
    releaseDate: "January 1985",
    developer: "Nintendo",
    numOfPlayers: 2,
  },
  {
    title: "Excite Bike",
    image: {
      src: excitebike,
      alt: "Excite Bike",
    },
    category: ["All Games", "Adventure", "Sports", "Strategy"],
    releaseDate: "Feburary 2001",
    developer: "Nintendo",
    numOfPlayers: 1,
  },
  {
    title: "Pacman",
    image: {
      src: pacman,
      alt: "Pacman",
    },
    category: ["All Games", "Action"],
    releaseDate: "March 1985",
    developer: "Nintendo",
    numOfPlayers: 1,
  },
  {
    title: "Castlevania",
    image: {
      src: castlevania,
      alt: "Castlevania",
    },
    category: ["All Games", "Action", "Strategy"],
    releaseDate: "March 1985",
    developer: "Nintendo",
    numOfPlayers: 2,
  },
  {
    title: "Duck Hunt",
    image: {
      src: duckhunt,
      alt: "Duck Hunt",
    },
    category: ["All Games", "Sports", "Strategy"],
    releaseDate: "April 1985",
    developer: "Nintendo",
    numOfPlayers: 2,
  },
  {
    title: "The Legend of Zelda",
    image: {
      src: legendofzelda,
      alt: "The Legend of Zelda",
    },
    category: ["All Games", "Action", "Adventure"],
    releaseDate: "May 1985",
    developer: "Nintendo",
    numOfPlayers: 2,
  },
  {
    title: "Mega Man",
    image: {
      src: megaman,
      alt: "Mega Man",
    },
    category: ["All Games", "Sports", "Strategy"],
    releaseDate: "June 1985",
    developer: "Nintendo",
    numOfPlayers: 3,
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

  descriptionDetail: "Developed by: jellybean",
};

/*----------------------------- overlay --------------------------*/

export const overlayContent = {
  buttonText: "Play Game",
  closeIcon: {
    src: closeicon,
    alt: "closeicon",
  },
  gameInfo: ["NES release date", "Developer", "Number of players"],
};
