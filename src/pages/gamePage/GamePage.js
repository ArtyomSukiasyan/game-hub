import React from "react";
import { useParams } from "react-router-dom";
import Game2048 from "../../originalGames/2048_game/2048";
import Interviewer from "../../originalGames/interviewer/Interviewer";
import Minesweeper from "../../originalGames/minesweeper/minesweeper";
import Roulette from "../../originalGames/roulette/Game";
import Sudoku from "../../originalGames/sudoku/sudoku";
import TacToe from "../../originalGames/TicTacToe/Components/TacToe/TacToe";
import Turtles from "../../originalGames/turtlesMemory/Turtles";

export default function GamePage() {
  const { type } = useParams();
  console.log(type);
  let game;
  switch (type) {
    case "tic-tac-toe":
      return (game = <TacToe />);
    case "interviewer":
      return (game = <Interviewer />);
    case "sudoku":
      return (game = <Sudoku />);
    case "mines":
      return (game = <Minesweeper />);
    case "turtlesMemory":
      return (game = <Turtles />);
    case "roulette":
      return (game = <Roulette />);
    case "2048":
      return (game = <Game2048 />);
  }
  return (
    <div>
      {game}
    </div>
  );
}
