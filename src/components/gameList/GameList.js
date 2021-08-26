import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import interviewer from "../../img/interviewer.PNG";
import sudoku from "../../img/sudoku.PNG";
import mines from "../../img/mines.PNG";
import roulette from "../../img/roulette.png";
import turtles from "../../img/turtles.PNG";
import game2048 from "../../img/2048.PNG";
import ticTacToe from "../../img/ticTacToe.PNG";
import rockPaper from '../../img/rock.png'
import styles from "./GameList.module.css";

export default function GameList() {
  const [games, setGames] = useState(null);

  const data = [
    {
      url: roulette,
      title: "Roulette",
      description: "some description",
      id: 1,
      route: "/game/roulette",
    },
    {
      url: turtles,
      title: "Turtles Memory",
      description: "some description2",
      id: 2,
      route: "/game/turtlesMemory",
    },
    {
      url: game2048,
      title: "2048",
      description: "some description3",
      id: 3,
      route: "/game/2048",
    },
    {
      url: ticTacToe,
      title: "Tic-Tac-Toe",
      description: "some description4",
      id: 4,
      route: "/game/tic-tac-toe",
    },
    {
      url: interviewer,
      title: "Interviewer",
      description: "some description4",
      id: 5,
      route: "/game/interviewer",
    },
    {
      url: sudoku,
      title: "Sudoku",
      description: "some description4",
      id: 6,
      route: "/game/sudoku",
    },
    {
      url: mines,
      title: "Mines Weeper",
      description: "some description4",
      id: 7,
      route: "/game/mines",
    },
    {
      url: rockPaper,
      title: "Rock_Paper_Scissors",
      description: "some description4",
      id: 8,
      route: "/game/RockPaperScissors",
    },
  ];

  useEffect(() => {
    setGames(data);
  }, []);

  return (
    <>
      {games &&
        games.map((d) => (
          <Link to={d.route} key={d.id} className={styles.forOneGame}>
            <div className={styles.forImg}>
              <img alt="gameName" src={d.url} />
            </div>
            <div className={styles.textPart}>
              <h2>{d.title}</h2>
            </div>
          </Link>
        ))}
    </>
  );
}
