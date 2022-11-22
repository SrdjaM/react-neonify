import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/auth-context";

import classes from "./Navigation.module.css";

const Navigation = () => {
  const ctx = useContext(AuthContext);

  return (
    <div className={classes.navigation}>
      <nav className={classes["main__navigation"]}>
        <Link to="/" className={classes.logo}>
          Neonify
        </Link>
        <input type="text" className={classes.input} placeholder="Search" />
        <ul className={classes["links__list"]}>
          <li className={classes.links}>
            <Link to="/" className={classes.link}>
              Home
            </Link>
          </li>
          <li className={classes.links}>
            <Link to="/about" className={classes.link}>
              About
            </Link>
          </li>
          <li className={classes.links}>
            <Link to="/products" className={classes.link}>
              Products
            </Link>
          </li>
        </ul>

        <button className={classes.button__logout} onClick={ctx.onLogout}>
          Logout
        </button>
      </nav>
    </div>
  );
};

export default Navigation;
