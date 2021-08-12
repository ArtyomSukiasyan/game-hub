import React from "react";
import GameList from "../GameList/GameList";
import styles from "./Games.module.css";

export default function Games() {
  return (
    <div className={styles.games}>
      <GameList />
    </div>
  );
}
