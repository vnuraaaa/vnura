import React from "react";
import logo from "../assets/logo.png";
import style from "../style/footer.module.css";

const Footer = () => {
  return (
    <>
      <div className={style.footer}>
        <div className={style.section}>
          <img src={logo} alt="logo" />
          <p className={style.paragraph}>
            Commodo consequat. Duis aute irure dolor in reprehenderit in
            <br />
            Voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            <br />
            Excepteur sint occaecat cupidatat non
          </p>
        </div>
        <div className={style.section}>
          <p>Address: Lorem Ipsum</p>
          <p>Call: +01 1234567890</p>
          <p>Email: demo@gmail.com</p>
        </div>

        <div className={style.copyright}>
          <p>2020 All Rights Reserved. Design by Free html Templates</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
