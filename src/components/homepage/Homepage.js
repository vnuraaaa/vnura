import style from "../../style/homepage.module.css";
import banner from "../../assets/banner-img.png";

import React from "react";

const Homepage = () => {
  return (
    <>
      <div className={style.container}>
        <div className={style.textContainer}>
          <h1 className={style.title}>Beauty Kit</h1>
          <p className={style.description}>
            Ncididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo
          </p>
          <button className={style.button}>BUY NOW</button>
        </div>
        <div className={style.imageContainer}>
          <img src={banner} alt="Beauty Kit" className={style.image} />
        </div>
      </div>
    </>
  );
};

export default Homepage;
