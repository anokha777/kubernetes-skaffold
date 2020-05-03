import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useSelector, useDispatch } from "react-redux";
import { signup } from '../redux/action/user';
import { useHistory } from "react-router-dom";

const SignUp = () => {

  const [fname, setfname] = useState('');
  const [lname, setlname] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [invalidForm, setFormState] = useState(false);
  const history = useHistory();

  const dispatch = useDispatch();
  const { isSignUpFailed } = useSelector(
    state => ({
      isSignUpFailed: state.user.isSignUpFailed
    })
  );


  //validate form
  const validate = () => {
    if (!(fname && lname && userName && password && confirmPassword)) {
      setErrorMessage('please fill mandotory fields');
      setFormState(true);
      return false;
    }

    if (confirmPassword !== password) {
      setErrorMessage('password and confirmPassword are not same ');
      setFormState(true);
      return false;
    }
    return true;
  }

  const handleSubmitClick = e => {
    e.preventDefault();
    if (validate()) {
      dispatch(signup(fname, lname, userName, password));
      history.push("/login");
    }
  };


  const handleCancelClick = () => {
    history.push("/");
  };

  return (
    <div className="sign-up">
      <div className="sign-up__heading">
        <h1>Sign UP</h1>
      </div>
      {invalidForm && (
        <div className="sign-up__error-message">
          <p>{errorMessage}</p>
        </div>
      )}

      {isSignUpFailed && (
        <div className="sign-up-validation__error-message">
          <p>Something went wrong. Please try again</p>
        </div>
      )}
      <form className="sign-up-form">
        <TextField
          id="firstName"
          name="firstName"
          label="First Name"
          type="text"
          margin="dense"
          autoFocus
          InputLabelProps={{
            className: "sign-up__first-name-label"
          }}
          className="sign-up__input-first-name"
          value={fname}
          onChange={e => setfname(e.target.value)}
        />

        <TextField
          id="lastName"
          name="lastName"
          label="Last Name"
          type="text"
          margin="dense"
          autoFocus
          InputLabelProps={{
            className: "sign-up__last-name-label"
          }}
          className="sign-up__input-last-name"
          value={lname}
          onChange={e => setlname(e.target.value)}
        />
        <TextField
          id="userName"
          name="userName"
          label="User Name"
          type="text"
          margin="dense"
          autoFocus
          InputLabelProps={{
            className: "sign-up__user-name-label"
          }}
          className="sign-up__input-user-nam"
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
            className: "sign-up__password-label"
          }}
          className="sign-up__input-password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <TextField
          id="confirmPassword"
          name="confirmPassword"
          label="Confirm Password"
          type="password"
          margin="dense"
          autoFocus
          InputLabelProps={{
            className: "sign-up__confirm-password-label"
          }}
          className="sign-up__input-confirm-password"
          value={confirmPassword}
          onChange={e => setConfirmPassword(e.target.value)}
        />
        <div className="buttons-row">
          <Button
            type="submit"
            variant="outlined"
            color="primary"
            className="sign-up__button"
            onClick={handleSubmitClick}
          >
            Sign Up
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
        <a href="/login" className="sign-up__existing-user">
          Alrady Member
        </a>
      </form>
    </div>
  );
};

export default SignUp;
