import { useState } from "react";
import classes from "./WelcomePage.module.css";
import MainPage from "./MainPage";

const WelcomePage = (props) => {
  const [closeModal, setCloseModal] = useState(false);

  const closeModalHandler = () => {
    setCloseModal(true);
  };

  return (
    <div>
      {!closeModal ? (
        <div className={classes.main} onClick={closeModalHandler}>
          Welcome <span>{props.name}</span>
        </div>
      ) : (
        <MainPage />
      )}
    </div>
  );
};

export default WelcomePage;
