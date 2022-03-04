import { useEffect } from "react";
import { withRouter, Route, Switch } from "react-router-dom";
import { me } from "./store";
import { useSelector, useDispatch } from "react-redux";
import Pre_Login_Page from "./components/login/Pre_Login_Page";
import Login_Page from "./components/login/Login_Page";
import Home_Page from "./components/Home_Page";
import Play_Game_Page from "./components/Play_Game_Page";
import Start_Game_Page from "./components/Start_Game_Page";

const Routes = () => {
  const dispatch = useDispatch();
  useEffect(() => dispatch(me()), []);

  const auth = useSelector((state) => state.auth);

  return auth.id ? (
    <Switch>
      <Route exact path="/home" component={Home_Page} />
      <Route exact path="/start" component={Start_Game_Page} />
      <Route exact path="/play" component={Play_Game_Page} />
    </Switch>
  ) : (
    <Switch>
      <Route exact path="/" component={Pre_Login_Page} />
      <Route exact path="/login" component={Login_Page} />
    </Switch>
  );
};

export default withRouter(Routes);
