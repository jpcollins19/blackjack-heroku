import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserHand } from "../../store";
import Your_Hand_Row from "./Your_Hand_Row";
import Your_Cards_Row from "./Your_Cards_Row";
import "./Your_Hand.css";

const Your_Hand = () => {
  const dispatch = useDispatch();
  const yourHand = useSelector((state) => state.yourHand);

  useEffect(() => {
    dispatch(fetchUserHand());
  }, []);

  const startingHand = yourHand.slice(0, 2);
  const hitCards = yourHand.slice(2);

  return (
    <div>
      <Your_Cards_Row hitCards={hitCards} />
      <Your_Hand_Row startingHand={startingHand} />
    </div>
  );
};

export default Your_Hand;
