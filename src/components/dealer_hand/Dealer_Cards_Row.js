import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchDealerHand,
  handOver,
  nextHandReady,
  setGameMessage,
} from "../../store";
import "./Dealer_Hand.css";
import "../Card_Images.css";

const Dealer_Cards_Row = () => {
  const dispatch = useDispatch();

  const dealerTurn = useSelector((state) => state.dealerTurn);
  const dealerHand = useSelector((state) => state.dealerHand);
  const handIsOver = useSelector((state) => state.handIsOver);
  const hitCards = dealerHand.slice(2);
  const dealerHandTotal = useSelector((state) => state.dealerHandCalc);
  const yourHandTotal = useSelector((state) => state.yourHandCalc);

  let [cardRowInfo, setCardRowInfo] = useState([<div key={"joe"}></div>]);
  let [numOfHits, setNumOfHits] = useState(0);
  const keyArrayInfo = [];

  useEffect(() => {
    dispatch(fetchDealerHand());
    !dealerTurn && setCardRowInfo([<div key={"joe"}></div>]);
  }, [dealerTurn]);

  const relayCards = () => {
    const relayFinalHandInfo = () => {
      let gameResult;

      if (dealerHandTotal > 21) {
        gameResult = "Dealer busts, you win!";
      } else if (dealerHandTotal > yourHandTotal) {
        gameResult = "Dealer has won the hand";
      } else if (dealerHandTotal < yourHandTotal) {
        gameResult = "Dealer stays, you win!";
      } else if (dealerHandTotal === yourHandTotal) {
        gameResult = "Push";
      }

      dispatch(setGameMessage(gameResult));

      setTimeout(() => {
        numOfHits === hitCards.length && setNumOfHits(0);
        numOfHits === hitCards.length && dispatch(nextHandReady(true));
      }, 1000);
    };

    const showCards1 = () => {
      setTimeout(() => {
        setCardRowInfo((oldArray) => [
          ...oldArray,
          <div
            key={`${hitCards[numOfHits]}${numOfHits}`}
            className={hitCards[numOfHits]}
          ></div>,
        ]);

        setNumOfHits(numOfHits++);

        numOfHits !== hitCards.length &&
          setTimeout(() => {
            showCards1();
          }, 1000);

        numOfHits === hitCards.length && relayFinalHandInfo();
      }, 500);
    };

    const showCards = () => {
      setTimeout(() => {
        cardRowInfo.pop();

        setCardRowInfo((oldArray) => [
          ...oldArray,
          <div
            key={`${hitCards[numOfHits]}${numOfHits}`}
            className={hitCards[numOfHits]}
          ></div>,
        ]);

        setNumOfHits(numOfHits++);

        numOfHits !== hitCards.length &&
          setTimeout(() => {
            showCards1();
          }, 1000);

        numOfHits === hitCards.length && relayFinalHandInfo();
      }, 500);
    };

    hitCards.length === 0 ? relayFinalHandInfo() : showCards();
  };

  if (dealerTurn && !handIsOver) {
    dispatch(handOver(true));

    setTimeout(() => {
      relayCards();
    }, 2500);
  }

  return (
    <div className="dealer-cards-row">
      <div className="card-cont-marg-bottom">{cardRowInfo}</div>
    </div>
  );
};

export default Dealer_Cards_Row;
