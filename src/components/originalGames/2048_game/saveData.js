import { loadState } from "../components/originalGames/TicTacToe/Helpers/localStorage";

export const saveData = async (request) => {
  try {
    const token = await JSON.parse(loadState("auth"));
    console.log(token.token);
    const newData = await request(
      "https://shavarshgame.herokuapp.com/api/is_auth/" + token.userId,
      "put",
      null,
      {
        Authorization: `Bearer ${token.token}`,
      }
    );
    return newData ? newData[0] : false;
  } catch (error) {
    return false;
  }
};
