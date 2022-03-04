import AppBar from "@mui/material/AppBar";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import Tab from "@mui/material/Tab";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import "./Headers.css";

const Header_NU = () => {
  return (
    <div>
      <AppBar
        position="sticky"
        elevation={0}
        style={{
          background: "linear-gradient(rgb(87, 5, 238), rgb(79, 6, 197))",
        }}
      >
        <Toolbar>
          <Grid container spacing={1} alignItems="center">
            <Grid item xs />
            <Grid item>
              <Link
                to="/login"
                className="Login-text"
                style={{ textDecoration: "none" }}
              >
                Login
              </Link>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{ zIndex: 0 }}
        style={{
          background:
            "linear-gradient( rgb(79, 6, 197), rgb(61, 7, 146), rgb(58, 8, 116))",
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
        component="div"
        position="sticky"
        elevation={0}
        sx={{ zIndex: 0 }}
        style={{
          background:
            "linear-gradient(rgb(58, 8, 116), rgb(33, 6, 65), rgb(25, 4, 49))",
        }}
      >
        {" "}
        <Link to="/">
          <Tab label="Casino" />
        </Link>
      </AppBar>
    </div>
  );
};

export default Header_NU;
