import Hit_Button from "../buttons/Hit_Button";
import Stay_Button from "../buttons/Stay_Button";
import Next_Hand_Button from "../buttons/Next_Hand_Button";
import "./Middle_Row.css";

const Middle_Row = ({ hit, startNextHand, nextCard, deck, dealerHand }) => {
  return (
    <div className="middle-row">
      <div className="hit-stay-cont">
        <Next_Hand_Button startNextHand={startNextHand} />
        <Hit_Button hit={hit} />
        <Stay_Button nextCard={nextCard} deck={deck} dealerHand={dealerHand} />
      </div>
    </div>
  );
};

export default Middle_Row;
