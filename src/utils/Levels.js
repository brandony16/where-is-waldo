import sports from "../assets/levelImages/sports.jpg";
import winter from "../assets/levelImages/winter.jpg";
import factory from "../assets/levelImages/factory.jpg";
import track from "../assets/levelImages/track.jpg";
import fruit from "../assets/levelImages/fruit.jpg";
import moon from "../assets/levelImages/moon.jpg";
import hollywood from "../assets/levelImages/hollywood.jpg"

export const Levels = [
  {
    name: "Factory",
    difficulty: "easy",
    img: factory,
    characters: ["waldo"]
  },
  {
    name: "Sport Meet",
    difficulty: "easy",
    img: sports,
    characters: ["waldo"]
  },
  {
    name: "Winter",
    difficulty: "medium",
    img: winter,
    characters: ["waldo", "odlaw"]
  },
  {
    name: "HollyWood",
    difficulty: "medium",
    img: hollywood,
    characters: ["waldo", "wizard"]
  },
  {
    name: "Track",
    difficulty: "hard",
    img: track,
    characters: ["waldo", "wenda", "odlaw"]
  },
  {
    name: "Moon",
    difficulty: "hard",
    img: moon,
    characters: ["waldo", "wenda", "wizard"]
  },
  {
    name: "Fruit",
    difficulty: "extreme",
    img: fruit,
    characters: ["waldo", "wenda", "wizard", "odlaw"]
  },
]