import { useSelector, useDispatch } from "react-redux";
import {
  usersTurn,
  dealersTurn,
  handOver,
  nextHandStarted,
  setGameMessage,
  nextHandReady,
} from "../../store";
import "./Buttons.css";

const Next_Hand_Button = ({ startNextHand }) => {
  const dispatch = useDispatch();

  const nextHandIsReady = useSelector((state) => state.nextHandIsReady);

  return (
    <button
      onClick={() => {
        dispatch(setGameMessage(""));
        dispatch(usersTurn(false));
        dispatch(dealersTurn(false));
        startNextHand();
        dispatch(handOver(false));
        dispatch(nextHandStarted(true));
        dispatch(nextHandReady(false));
      }}
      disabled={!nextHandIsReady}
      className="next-hand-button"
    >
      Next Hand
    </button>
  );
};

export default Next_Hand_Button;
