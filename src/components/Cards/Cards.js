// Cards.js
import "./Cards.css";
import { galleryData } from "../../data/galleryData";

function Cards() {
  // Flatten the gallery data into a simple array for the cards view
  const cards = galleryData.reduce((acc, item) => {
    if (item.type === "single") {
      acc.push({
        image: item.image,
        alt: item.alt,
        caption: item.caption,
      });
    } else {
      acc.push({
        image: item.before.image,
        alt: item.before.alt,
        caption: item.before.caption,
      });
      acc.push({
        image: item.after.image,
        alt: item.after.alt,
        caption: item.after.caption,
      });
    }
    return acc;
  }, []);

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
