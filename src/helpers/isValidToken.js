import { loadState } from "./localStorage";

export const validToken = async (request) => {
  try {
    const token = await JSON.parse(loadState("auth"));

    const newData = await request(
      "https://shavarshgame.herokuapp.com/api/is_auth/" + token.userId,
      "get",
      null,
      {
        Authorization: `Bearer ${token.token}`,
      }
    );

    return newData ? newData : false;
  } catch (error) {
    return false;
  }
};
