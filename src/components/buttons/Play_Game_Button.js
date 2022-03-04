import { Link } from "react-router-dom";
import "./Buttons.css";

const Play_Game_Button = () => {
  return (
    <Link to="/start" style={{ textDecoration: "none" }}>
      <button className="play-game-button">Play Game</button>
    </Link>
  );
};

export default Play_Game_Button;
