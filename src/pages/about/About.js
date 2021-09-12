import React from "react";
import Person from "../../components/person/Person";
import styles from "./About.module.css";
import img1 from "../../img/lg.png";
import img2 from "../../img/rock.png";
import img3 from "../../img/turtles.PNG";
import img4 from "../../img/hangman.png";

export default function About() {
  const info = [
    {
      img: img1,
      title: "Name Surname",
    },
    {
      img: img2,
      title: "Name Surname",
    },
    {
      img: img3,
      title: "Name Surname",
    },
    {
      img: img4,
      title: "Name Surname",
    },
  ];

  return (
    <section className={styles.sec}>
      <div className={styles.content}>
        <div className={styles.teamGroup}>
          <h3>Meet Our Expert</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the .
          </p>
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
