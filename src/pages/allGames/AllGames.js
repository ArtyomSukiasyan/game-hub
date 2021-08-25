import React from "react";
import Header from "../../components/header/Header";
import Roulette from "../../originalGames/roulette/Game";
import Turtles from "../../originalGames/turtlesMemory/Turtles";
import Interviewer from "../../originalGames/interviewer/Interviewer";


export default function AllGames() {
  return (
    <div>
      <Header />
      {/* <Roulette /> */}
      {/* <Turtles /> */}
      <Interviewer />
    </div>
  );
}
