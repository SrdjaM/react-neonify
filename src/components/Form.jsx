import { useEffect, useState, useContext } from "react";
import AuthContext from "../context/auth-context";

import classes from "./Form.module.css";

const Form = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false);

  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredPasswordTouched, setEnteredPasswordTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== "";
  const enteredEmailIsValid =
    enteredEmail.trim() !== "" && enteredEmail.includes("@");
  const enteredPasswordIsValid =
    enteredPassword.trim() !== "" && enteredPassword.length > 6;

  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;
  const mailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;
  const passwordInputIsInvalid =
    !enteredPasswordIsValid && enteredPasswordTouched;

  const authCtx = useContext(AuthContext);

  const nameInputHandler = (e) => {
    setEnteredName(e.target.value);
  };

  const emailInputHandler = (e) => {
    setEnteredEmail(e.target.value);
  };

  const passwordInputHandler = (e) => {
    setEnteredPassword(e.target.value);
  };

  const nameOnBlurHandler = () => {
    setEnteredNameTouched(true);
  };

  const emailOnBlurHandler = () => {
    setEnteredEmailTouched(true);
  };

  const passwordOnBlurHandler = () => {
    setEnteredPasswordTouched(true);
  };

  useEffect(() => {
    if (enteredNameIsValid && enteredEmailIsValid && enteredPasswordIsValid) {
      setFormIsValid(true);
    }
  }, [enteredNameIsValid, enteredEmailIsValid, enteredPasswordIsValid]);

  const submitHandler = (e) => {
    e.preventDefault();

    setEnteredNameTouched(true);
    setEnteredEmailTouched(true);
    setEnteredPasswordTouched(true);

    if (
      !enteredNameIsValid ||
      !enteredEmailIsValid ||
      !enteredPasswordIsValid
    ) {
      return;
    }

    if (formIsValid) {
      authCtx.onLogin(enteredName, enteredEmail, enteredPassword);
    }

    const httpSend = {
      name: enteredName,
      email: enteredEmail,
      password: enteredPassword,
    };

    props.onAddName(httpSend);

    setEnteredName("");
    setEnteredNameTouched(false);
    setEnteredEmail("");
    setEnteredEmailTouched(false);
    setEnteredPassword("");
    setEnteredPasswordTouched(false);
  };

  const nameInputClasses = nameInputIsInvalid
    ? `${classes.invalid}`
    : `${classes.input}`;

  const mailInputClasses = mailInputIsInvalid
    ? `${classes.invalid}`
    : `${classes.input}`;

  const passwordInputClasses = passwordInputIsInvalid
    ? `${classes.invalid}`
    : `${classes.input}`;

  return (
    <form action="submit" className={classes.form} onSubmit={submitHandler}>
      <input
        type="text"
        id="name"
        className={nameInputClasses}
        placeholder="Your name please"
        onChange={nameInputHandler}
        value={enteredName}
        onBlur={nameOnBlurHandler}
      />

      {nameInputIsInvalid && (
        <p className={classes["error-message"]}>Please enter valid name</p>
      )}

      <input
        type="text"
        id="email"
        className={mailInputClasses}
        placeholder="Your email please"
        value={enteredEmail}
        onChange={emailInputHandler}
        onBlur={emailOnBlurHandler}
      />

      {mailInputIsInvalid && (
        <p className={classes["error-message"]}>Please enter valid email</p>
      )}

      <input
        type="password"
        id="password"
        className={passwordInputClasses}
        placeholder="Your password please"
        value={enteredPassword}
        onChange={passwordInputHandler}
        onBlur={passwordOnBlurHandler}
      />
      {passwordInputIsInvalid && (
        <p className={classes["error-message"]}>Please enter valid password</p>
      )}
      <button type="submit" className={classes.btn}>
        Submit
      </button>
    </form>
  );
};

export default Form;
