import { loadState } from "./localStorage";

export const victories = async (request) => {
  try {
    const token = await JSON.parse(loadState("auth"));

    const newData = await request(
      "https://shavarshgame.herokuapp.com/api/victories/" + token.userId,
      "get",
      null,
      {
        Authorization: `Bearer ${token.token}`,
      }
    );
  } catch (error) {
    return false;
  }
};

export const losses = async (request) => {
  try {
    const token = await JSON.parse(loadState("auth"));

    const newData = await request(
      "https://shavarshgame.herokuapp.com/api/losses/" + token.userId,
      "get",
      null,
      {
        Authorization: `Bearer ${token.token}`,
      }
    );
  } catch (error) {
    return false;
  }
};
