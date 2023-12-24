import React from "react";
import style from "../../style/homepage.module.css";
import Card from "../Card";

const Section = ({ title, array }) => {
  return (
    <div className={style.section}>
      {title ? <h1>{title}</h1> : <></>}
      <div className={style.cardWrapper}>
        {array ? (
          array.map((b, i) => {
            return (
              <Card
                image={b.image}
                title={b.title}
                price={b.price}
                link={b.link}
                key={`${i}${b.title}`}
              />
            );
          })
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Section;
