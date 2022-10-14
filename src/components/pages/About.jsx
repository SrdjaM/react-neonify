import classes from "./About.module.css";

const About = () => {
  return (
    <div className={classes["about__container"]}>
      <div className={classes.text}>
        We are a company specializing in neon lights, for all your needs. From
        design, to production and implementation, our professionalism will not
        leave you indifferent. Lights are our passion and neon lights are our
        means of expression. Contact us and see for yourself why we are the
        world leaders in this industry. Whether you want to enhance your
        ambience or light up the show, we are here for you. <br /> <br />
        Neonify
      </div>
    </div>
  );
};

export default About;
