import React from "react";
import GameList from "../gameList/GameList";
import styles from "./Games.module.css";

export default function Games() {
  return (
    <div>
      <div className={styles.flex_center}>
        <div className={styles.contener}>
          <p className={styles.gameName}>mutant ninja turtles</p>
        </div>
      </div>
      <div className={styles.games}>
        <GameList />
      </div>
    </div>
  );
}
