import { HashRouter as Router } from "react-router-dom";
import Start_Game_Button from "./buttons/Start_Game_Button";
import "./Start_Game.css";

const Start_Game_Page = () => {
  return (
    <Router>
      <div className="start-game-page">
        <Start_Game_Button />
      </div>
    </Router>
  );
};

export default Start_Game_Page;
