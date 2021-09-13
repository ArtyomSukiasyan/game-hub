import React from "react";
import Person from "../../components/person/Person";
import styles from "./About.module.css";
import img1 from "../../img/team/img1.jpg";
import img2 from "../../img/team/img2.jpg";
import img3 from "../../img/team/img3.jfif";
import img4 from "../../img/hangman.png";

export default function About() {
  const info = [
    {
      img: img1,
      title: "Arthur Ghazaryan",
    },
    {
      img: img2,
      title: "Shavarsh Papoyan ",
    },
    {
      img: img3,
      title: "Artyom Sukiasyan",
    },
    {
      img: img4,
      title: "Armine Orujyan",
    },
  ];

  return (
    <section className={styles.sec}>
      <div className={styles.content}>
        <div className={styles.teamGroup}>
          <h3>Meet Our Experts</h3>
          <p>The best friendly experts you'll ever meet.</p>
        </div>
        <div className={styles.teamBx}>
          {info.map((el) => (
            <Person img={el.img} title={el.title} />
          ))}
        </div>
      </div>
    </section>
  );
}
