import classes from "./Footer.module.css";

import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import { IconContext } from "react-icons/lib";

const Footer = () => {
  return (
    <IconContext.Provider value={{ color: "#289cbe", size: "20px" }}>
      <div className={classes.footer}>
        <div className={classes.logo}>Neonify</div>
        <div className={classes.left}>
          <ul className={classes.list}>
            <li className={classes.link}>About Us</li>
            <li className={classes.link}>Products</li>
            <li className={classes.link}>Awards</li>
            <li className={classes.link}>Sponsors</li>
          </ul>
        </div>
        <div className={classes.right}>
          <ul className={classes.list}>
            <li className={classes.link}>About Us</li>
            <li className={classes.link}>Products</li>
            <li className={classes.link}>Awards</li>
            <li className={classes.link}>Sponsors</li>
          </ul>
        </div>

        <div className={classes.social}>
          <div className={classes.icon}>
            <BsFacebook />
          </div>
          <div className={classes.icon}>
            <BsInstagram />
          </div>
          <div className={classes.icon}>
            <BsLinkedin />
          </div>
          <div className={classes.icon}>
            <BsTwitter />
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
};

export default Footer;
