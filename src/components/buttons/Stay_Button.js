import { useDispatch, useSelector } from "react-redux";
import {
  dealerIsUpThunk,
  usersTurn,
  dealersTurn,
  setGameMessage,
} from "../../store";
import "./Buttons.css";

const Stay_Button = ({ nextCard, deck, dealerHand }) => {
  const dispatch = useDispatch();

  const handHasBeenDealt = useSelector((state) => state.handHasBeenDealt);
  const userTurn = useSelector((state) => state.userTurn);
  const yourHandCalc = useSelector((state) => state.yourHandCalc);

  return (
    <button
      disabled={!userTurn || yourHandCalc >= 21 || !handHasBeenDealt}
      onClick={() => {
        dispatch(usersTurn(false));
        dispatch(dealersTurn(true));
        dispatch(dealerIsUpThunk(nextCard + 1, deck, dealerHand));
        dispatch(setGameMessage("Dealer is up!"));
      }}
      className="stay-button"
    >
      Stay
    </button>
  );
};

export default Stay_Button;
