import React from "react";
import style from "../../style/about.module.css";

const Text = ({ paragraph, tittle }) => {
  return (
    <>
      <h1 className={style.tittle}>{tittle}</h1>
      <p className={style.paragraph}>{paragraph}</p>
    </>
  );
};

export default Text;
