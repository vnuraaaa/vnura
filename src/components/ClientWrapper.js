import React from "react";
import style from "../style/client.module.css";
import client from "../assets/client-img.png";
const ClientWrapper = () => {
  return (
    <div className={style.cleintWrapper}>
      <h1 className={style.tittle}>WHAT SAYS CUSTOMERS</h1>
      <img src={client} alt="Loading....." />
      <p className={style.paragraph}>
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut <br />
        labore et dolore magna aliqua. Ut enim ad minim veniam, <br />
        quis nostrud exercitation eu
      </p>
    </div>
  );
};

export default ClientWrapper;
