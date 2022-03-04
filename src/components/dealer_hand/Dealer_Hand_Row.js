import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  handDealt,
  usersTurn,
  nextHandStarted,
  gameMessageRelayed,
} from "../../store";
import Game_Message from "./Game_Message";
import "./Dealer_Hand.css";
import "../Card_Images.css";

const Dealer_Hand_Row = ({ startingHand, nextCard }) => {
  const dispatch = useDispatch();

  const FC = useSelector((state) => state.dealerHand[0]);
  const dealerTurn = useSelector((state) => state.dealerTurn);
  const nextHandHasStarted = useSelector((state) => state.nextHandHasStarted);

  let [firstCard, setFirstCard] = useState("");
  let [secondCard, setSecondCard] = useState("");
  let [showingCard, setShowingCard] = useState("");

  useEffect(() => {
    setFirstCard("");
    setSecondCard("");
  }, [FC]);

  const deal = () => {
    setTimeout(() => {
      deal1();
    }, 100);

    const deal1 = () => {
      dispatch(handDealt(true));
      dispatch(nextHandStarted(false));
      setTimeout(() => {
        setFirstCard("card-back");
        setShowingCard(startingHand[0]);
        deal2();
      }, 2000);
    };

    const deal2 = () => {
      setTimeout(() => {
        setSecondCard(startingHand[1]);

        dealIsOver();
      }, 2000);
    };

    const dealIsOver = () => {
      setTimeout(() => {
        dispatch(handDealt(true));
        dispatch(usersTurn(true));
        dispatch(gameMessageRelayed(false));
      }, 1000);
    };
  };

  return (
    <div className="dealer-hand-row">
      <div className="card-cont-dealer-hand">
        {nextHandHasStarted && deal()}

        {!dealerTurn ? (
          <div className={firstCard}></div>
        ) : (
          <div className={showingCard}></div>
        )}

        <div className={secondCard}></div>
      </div>
      <Game_Message nextCard={nextCard} />
    </div>
  );
};

export default Dealer_Hand_Row;
