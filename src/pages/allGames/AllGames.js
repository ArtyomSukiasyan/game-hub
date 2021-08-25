import React from "react";
import Header from "../../components/header/Header";
import Roulette from "../../originalGames/roulette/Game";
import Turtles from "../../originalGames/turtlesMemory/Turtles";
import Milioner from "../../originalGames/Milioner/Milioner";


export default function AllGames() {
  return (
    <div>
      <Header />
      {/* <Roulette /> */}
      {/* <Turtles /> */}
      <Milioner />
    </div>
  );
}
