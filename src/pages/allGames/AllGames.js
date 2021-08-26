import React from "react";
import GameList from "../../components/gameList/GameList";
import styles from './AllGames.module.css'

export default function AllGames() {
  return (
    <div className={styles.allGames}>      
      <GameList />
    </div>
  );
}
