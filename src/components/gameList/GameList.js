import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import img from "../../img/logo.jpg";
import styles from "./GameList.module.css";

export default function GameList() {
  const [game, setGame] = useState(null);

  const data = [
    {
      url: img,
      title: "Roulette",
      description: "some description",
      id: 1,
      route: "/game/roulette",
    },
    {
      url: img,
      title: "Turtles Memory",
      description: "some description2",
      id: 2,
      route: "/game/turtlesMemory",
    },
    {
      url: img,
      title: "2048",
      description: "some description3",
      id: 3,
      route: "/game/2048",
    },
    {
      url: img,
      title: "Tic-Tac-Toe",
      description: "some description4",
      id: 4,
      route: "/game/tic-tac-toe",
    },
    {
      url: img,
      title: "Interviewer",
      description: "some description4",
      id: 5,
      route: "/game/interviewer",
    },
    {
      url: img,
      title: "Sudoku",
      description: "some description4",
      id: 6,
      route: "/game/sudoku",
    },
    {
      url: img,
      title: "Mines Weeper",
      description: "some description4",
      id: 7,
      route: "/game/mines",
    },
  ];

  useEffect(() => {
    setGame(data);
  }, []);

  return (
    <>
      {game &&
        game.map((d) => (
          <Link to={d.route} key={d.id} className={styles.forOneGame}>
            <div className={styles.forImg}>
              <img alt="gameName" src={d.url} />
            </div>
            <div className={styles.textPart}>
              <h2>{d.title}</h2>
              <p>{d.description}</p>
            </div>
          </Link>
        ))}
    </>
  );
}
