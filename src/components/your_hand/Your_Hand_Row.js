import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import "./Your_Hand.css";
import "../Card_Images.css";

const Your_Hand_Row = ({ startingHand }) => {
  const FC = useSelector((state) => state.yourHand[0]);

  let [firstCard, setFirstCard] = useState("");
  let [secondCard, setSecondCard] = useState("");
  let [dealOver, setDealOver] = useState(false);

  useEffect(() => {
    setFirstCard("");
    setSecondCard("");
    setDealOver(false);
  }, [FC]);

  const deal = () => {
    setDealOver(true);
    setTimeout(() => {
      deal1();
    }, 100);

    const deal1 = () => {
      setTimeout(() => {
        setFirstCard(startingHand[0]);
        deal2();
      }, 750);
    };

    const deal2 = () => {
      setTimeout(() => {
        setSecondCard(startingHand[1]);
      }, 2250);
    };
  };

  return (
    <div className="your-hand-row">
      <div className="card-cont-your-hand">
        {!dealOver && deal()}
        <div className={firstCard}></div>
        <div className={secondCard}></div>
      </div>
    </div>
  );
};

export default Your_Hand_Row;
