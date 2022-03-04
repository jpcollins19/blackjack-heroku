import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchDealerHand } from "../../store";
import Dealer_Hand_Row from "./Dealer_Hand_Row";
import Dealer_Cards_Row from "./Dealer_Cards_Row";
import "./Dealer_Hand.css";

const Dealer_Hand = ({ nextCard }) => {
  const dispatch = useDispatch();
  let dealerHand = useSelector((state) => state.dealerHand);

  useEffect(() => {
    dispatch(fetchDealerHand());
  }, [dealerHand]);

  const startingHand = dealerHand.slice(0, 2);

  return (
    <div>
      <Dealer_Hand_Row startingHand={startingHand} nextCard={nextCard} />
      <Dealer_Cards_Row />
    </div>
  );
};

export default Dealer_Hand;
