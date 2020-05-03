import React, { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { useDispatch } from "react-redux";
import { searchQuestions } from "../redux/action/question";
import { logout } from "../redux/action/user";
import { useHistory } from "react-router-dom";
import { token } from "../config/apiEndpoints";
import { useUser } from "../custom-hooks/useUser";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

export default function Header() {
  const classes = useStyles();
  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useUser();
  const onSearhKeyDown = e => {
    if (e.keyCode === 13 && searchText) {
      dispatch(searchQuestions(searchText));
    }
  };

  const handleLogout = () => {
    localStorage.removeItem(token);
    dispatch(logout());
    history.push("/");
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <div className="navigation-bar">
            <div className="left-link">
              <Typography variant="h6" className={classes.title}>
                <Link className="menu-link" to="/">
                  Repair My Ship
                </Link>
              </Typography>
            </div>
            <div className="search-bar">
              <TextField
                id="searchText"
                name="search"
                type="text"
                margin="dense"
                autoFocus
                className="search-text"
                value={searchText}
                onChange={e => setSearchText(e.target.value)}
                placeholder="search question"
                onKeyDown={e => onSearhKeyDown(e)}
              />
            </div>
            <div className="right-link">
              <Button color="inherit">
                <Link className="menu-link" to="/">
                  Home
                </Link>
              </Button>
              <Button color="inherit">
                <Link className="menu-link" to="/askQuestion">
                  Ask Question
                </Link>
              </Button>
              <Button color="inherit">
                {user ? (
                  <a href="#" onClick={handleLogout} className="menu-link">
                    Logout
                  </a>
                ) : (
                  <Link className="menu-link" to="/login">
                    Login
                  </Link>
                )}
              </Button>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
