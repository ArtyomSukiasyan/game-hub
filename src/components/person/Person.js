import React from "react";
import styles from "./Person.module.css";

export default function Person({ img, title }) {
  return (
    <div className={styles.member}>
      <div className={styles.imgBx}>
        <img alt="img" src={img} />
      </div>
      <div className={styles.details}>
        <div>
          <h2>{title}</h2>
        </div>
      </div>
    </div>
  );
}
