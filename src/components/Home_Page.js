import { HashRouter as Router } from "react-router-dom";
import Play_Game_Button from "./buttons/Play_Game_Button";
import "./Home.css";

const Home_Page = () => {
  return (
    <Router>
      <div className="home-page">
        <Play_Game_Button />
      </div>
    </Router>
  );
};

export default Home_Page;
