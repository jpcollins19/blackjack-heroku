import { connect } from "react-redux";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import HelpIcon from "@mui/icons-material/Help";
import IconButton from "@mui/material/IconButton";
import LinkM from "@mui/material/Link";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { logout } from "../../store";
import "./Headers.css";

const Header_U = ({ handleClick }) => {
  const lightColor = "rgba(255, 255, 255, 0.7)";
  return (
    <div>
      <AppBar
        style={{
          background: "linear-gradient(rgb(8, 39, 8), rgb(10, 66, 10))",
        }}
        position="sticky"
        elevation={0}
      >
        <Toolbar>
          <Grid container spacing={1} alignItems="center">
            <Grid item xs />
            <Grid item>
              <Link
                to="/"
                onClick={handleClick}
                className="Login-text"
                style={{ textDecoration: "none" }}
              >
                Logout
              </Link>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <AppBar
        position="static"
        elevation={0}
        sx={{ zIndex: 0 }}
        style={{
          background: "linear-gradient(rgb(10, 66, 10), rgb(9, 85, 9))",
        }}
      >
        <Toolbar>
          <Grid container alignItems="center" spacing={1}>
            <Grid item xs>
              <Typography
                color="inherit"
                variant="h3"
                component="h1"
                textAlign="center"
              >
                Blackjack
              </Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <AppBar
        position="static"
        elevation={0}
        sx={{ zIndex: 0 }}
        style={{
          background:
            "linear-gradient(rgb(9, 85, 9), rgb(10, 66, 10), rgb(8, 39, 8))",
        }}
      >
        <Link to="/home">
          <Tab label="Play Game" />
        </Link>
      </AppBar>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleClick() {
      dispatch(logout());
    },
  };
};

export default connect(null, mapDispatchToProps)(Header_U);
