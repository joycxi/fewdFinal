import { useState } from "react";
import tarot from "./tarot.json";

const TarotCards = (props) => {
  const [expand, setExpand] = useState(false);
  const toggleExpand = () => setExpand((prevExpand) => !prevExpand);
  console.log(expand);

  return (
    <div className="accordion">
      <button className="yourMama" onClick={toggleExpand}>
        Major Arcana <span>{expand ? "-" : "+"}</span>
      </button>
      {expand && (
        <div className="tarotCards">
          <ul>
            {tarot.cards
              .filter((card) => card.arcana === "Major Arcana")
              .map((card) => (
                <li key={card.number}>{card.name}</li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default TarotCards;
