// images
import beachCardImg from "../media/images/portfolio/beach.png";
import candidCardImg from "../media/images/portfolio/candids.png";
import foodCardImg from "../media/images/portfolio/food.png";
import lifestyleCardImg from "../media/images/portfolio/lifestyle.png";
import monochromeCardImg from "../media/images/portfolio/monochrome.png";
import mountainCardImg from "../media/images/portfolio/mountains.png";
import starrySkyCardImg from "../media/images/portfolio/starrySky.png";
import weddingCardImg from "../media/images/portfolio/wedding.png";

const initState = {
  portfolioCardData: [
    {
      name: "Mighty Mountains",
      img: mountainCardImg,
    },
    {
      name: "Starry Skies",
      img: starrySkyCardImg,
    },
    {
      name: "Weddings",
      img: weddingCardImg,
    },
    {
      name: "Flavorful Foods",
      img: foodCardImg,
    },
    {
      name: "Lively Lifestyle",
      img: lifestyleCardImg,
    },
    {
      name: "Monochrome",
      img: monochromeCardImg,
    },
    {
      name: "Charismatic Candids",
      img: candidCardImg,
    },
    {
      name: "Beautiful Beaches",
      img: beachCardImg,
    },
  ],
};

const setPortfolioReducer = (state = initState, action) => {
  switch (action.type) {
    case "SET_PORTFOLIO":
      return { ...state };
    default:
      return { ...state };
  }
};

export default setPortfolioReducer;
