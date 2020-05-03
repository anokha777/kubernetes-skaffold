import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { login, resetIsLoginFailed } from '../redux/action/user';
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const LogIn = () => {

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [invalidForm, setFormState] = useState(false);
  const history = useHistory();

  const dispatch = useDispatch();
  const { loggedIn, isLoginFailed, logInErrorMessage } = useSelector(
    state => ({
      loggedIn: state.user.loggedIn,
      isLoginFailed: state.user.isLoginFailed,
      logInErrorMessage: state.user.logInErrorMessage
    })
  );

  useEffect(() => {
    console.log(loggedIn, 'loggedIn');
    if (loggedIn) {
      history.push("/");
    }
  }, [loggedIn])

  const validateForm = () => {
    if (!(userName && password)) {
      setErrorMessage('please fill mandotory fields');
      setFormState(true);
      return false;
    }
    return true;
  }

  const handleSubmitClick = e => {
    e.preventDefault();
    dispatch(resetIsLoginFailed());
    if (validateForm()) {
      dispatch(login(userName, password));
    }
  }

  const handleCancelClick = () => {
    history.push("/");
  };

  return (
    <div className="log-in">
      <div className="log-in__heading">
        <h1>Log In</h1>
      </div>
      <form>
        {invalidForm && (
          <div className="log-in__error-message">
            <p>{errorMessage}</p>
          </div>
        )}

        {isLoginFailed && (
          <div className="log-in__error-message">
            <p>{logInErrorMessage}</p>
          </div>
        )}

        <TextField
          id="userName"
          name="userName"
          label="User Name"
          type="text"
          margin="dense"
          autoFocus
          InputLabelProps={{
            className: "log-in__user-name-label"
          }}
          className="log-in__input-user-nam"
          value={userName}
          onChange={e => setUserName(e.target.value)}
        />
        <TextField
          id="password"
          name="password"
          label="Password"
          type="password"
          margin="dense"
          autoFocus
          InputLabelProps={{
            className: "log-in__password-label"
          }}
          className="log-in__input-password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <div className="buttons-row">
          <Button
            type="button"
            variant="outlined"
            color="primary"
            className="log-in__btn"
            onClick={handleSubmitClick}
          >
            Log In
        </Button>
          <Button
            type="button"
            variant="outlined"
            color="primary"
            className="log-in__back-button"
            onClick={handleCancelClick}
          >
            Back
            </Button>
        </div>
      </form>
      <a href="/signup" className="sign-up__existing-user" >
        Click here to sign up
        </a>
    </div>
  );
};

export default LogIn;
