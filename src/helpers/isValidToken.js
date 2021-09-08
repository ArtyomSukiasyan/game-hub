import { loadState } from "../components/originalGames/TicTacToe/Helpers/localStorage";

export const validToken = () => {
  return loadState("auth") ? JSON.parse(loadState("auth")).userId : false;
};
