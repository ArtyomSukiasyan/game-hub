import { loadState } from "../../../helpers/localStorage";

export const saveData = async (request, record) => {
  try {
    const token = await JSON.parse(loadState("auth"));

    await request(
      "https://shavarshgame.herokuapp.com/api/save_data_2048/" + token.userId,
      "put",
      { record: record },
      {
        Authorization: `Bearer ${token.token}`,
      }
    );
  } catch (error) {
    return false;
  }
};
