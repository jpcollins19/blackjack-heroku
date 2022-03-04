import { Link } from "react-router-dom";
import "./Buttons.css";

const Start_Game_Button = () => {
  return (
    <Link to="/play" style={{ textDecoration: "none" }}>
      <button className="start-game-button">Deal First Hand</button>
    </Link>
  );
};

export default Start_Game_Button;
