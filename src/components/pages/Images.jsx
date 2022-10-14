import classes from "./Images.module.css";
import ImagesData from "../ImagesData";

const Images = () => {
  return (
    <div className={classes["images__container"]}>
      <div className={classes.images}>
        {ImagesData.map(({ src }) => (
          <img src={src} key={src} alt="neon light" />
        ))}
      </div>
    </div>
  );
};

export default Images;
