// Cards.js
import "./Cards.css";
import gallery11 from "../../images/gallery11.png";
import gallery12 from "../../images/gallery12.png";
import gallery22 from "../../images/gallery22.png";
import gallery21 from "../../images/gallery21.png";
import gallery31 from "../../images/gallery31.png";
import gallery32 from "../../images/gallery32.png";
import gallery33 from "../../images/gallery33.png";
import before41 from "../../images/before41.jpg";
import after41 from "../../images/after41.jpg";
import before51 from "../../images/before51.jpg";
import after51 from "../../images/after51.jpg";
import before61 from "../../images/before61.jpg";
import after61 from "../../images/after61.jpg";
import beforeDriveway from "../../images/beforeDriveway1224.png";
import afterDriveway from "../../images/afterDriveway1224.png";
import beforeSidewalk from "../../images/beforeSidewalk1224.png";
import afterSidewalk from "../../images/afterSidewalk1224.png";

export const cards = [
  {
    image: gallery32,
    alt: "Image 0",
    caption: "Red Line & Blue Pressure Washing",
  },
  {
    image: gallery11,
    alt: "Image 1",
    caption: "Before",
  },
  {
    image: gallery12,
    alt: "Image 2",
    caption: "After",
  },
  {
    image: gallery22,
    alt: "Image 3",
    caption: "Before",
  },
  {
    image: gallery21,
    alt: "Image 4",
    caption: "After",
  },
  {
    image: gallery33,
    alt: "Image 5",
    caption: "Before",
  },
  {
    image: gallery31,
    alt: "Image 6",
    caption: "After",
  },
  { image: before41, alt: "Image 7", caption: "Before" },
  { image: after41, alt: "Image 8", caption: "After" },
  { image: before51, alt: "Image 9", caption: "Before" },
  { image: after51, alt: "Image 10", caption: "After" },
  { image: before61, alt: "Image 11", caption: "Before" },
  { image: after61, alt: "Image 12", caption: "After" },
  { image: beforeDriveway, alt: "Image 13", caption: "Before" },
  { image: afterDriveway, alt: "Image 14", caption: "After" },
  { image: beforeSidewalk, alt: "Image 15", caption: "Before" },
  { image: afterSidewalk, alt: "Image 16", caption: "After" },
];

function Cards() {
  return (
    <div className="cards">
      <div className="cards__container">
        {cards.map((card, index) => (
          <div className="cards__item" key={index}>
            <img src={card.image} alt={card.alt} className="cards__image" />
            <h3 className="cards__caption">{card.caption}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
