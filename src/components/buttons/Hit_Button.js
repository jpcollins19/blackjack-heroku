import { useSelector } from "react-redux";
import "./Buttons.css";

const Hit_Button = ({ hit }) => {
  const yourHandTotal = useSelector((state) => state.yourHandCalc);
  const userTurn = useSelector((state) => state.userTurn);
  const handHasBeenDealt = useSelector((state) => state.handHasBeenDealt);

  return (
    <button
      disabled={!userTurn || yourHandTotal >= 21 || !handHasBeenDealt}
      onClick={() => hit()}
      className="hit-button"
    >
      Hit
    </button>
  );
};

export default Hit_Button;
