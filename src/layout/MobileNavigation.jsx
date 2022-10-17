import { useState, useContext } from "react";
import AuthContext from "../context/auth-context";
import { Link } from "react-router-dom";
import { BsJustifyRight, BsX } from "react-icons/bs";
import { IconContext } from "react-icons";

import classes from "./MobileNavigation.module.css";

const MobileNavigation = () => {
  const [showNav, setShowNav] = useState(false);

  const showNavHandler = () => {
    setShowNav(!showNav);
  };

  const ctx = useContext(AuthContext);

  return (
    <IconContext.Provider value={{ color: "#289cbe", size: "30px" }}>
      <div className={classes.navigation}>
        <nav className={classes["main__navigation"]}>
          <div className={classes.logo}>Neonify</div>
          <input type="text" className={classes.input} placeholder="Search" />
          {showNav && (
            <div className={classes.modal}>
              <ul className={classes["links__list"]}>
                <input
                  type="text"
                  className={classes["input__mob"]}
                  placeholder="Search"
                />
                <li className={classes.links} onClick={showNavHandler}>
                  <Link to="/" className={classes.link}>
                    Home
                  </Link>
                </li>
                <li className={classes.links} onClick={showNavHandler}>
                  <Link to="/about" className={classes.link}>
                    About
                  </Link>
                </li>
                <li className={classes.links} onClick={showNavHandler}>
                  <Link to="/products" className={classes.link}>
                    Products
                  </Link>
                </li>
                <button
                  className={classes.button__logout}
                  onClick={ctx.onLogout}
                >
                  Logout
                </button>
              </ul>
            </div>
          )}

          <div className={classes["mobile__icons"]} onClick={showNavHandler}>
            {!showNav ? <BsJustifyRight /> : <BsX />}
          </div>
        </nav>
      </div>
    </IconContext.Provider>
  );
};

export default MobileNavigation;
