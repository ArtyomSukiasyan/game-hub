import getNumber from "./getNumber";
import randomBlok from "./randomBlok";

const pour = (gametablevalue) => {
  const tabl = randomBlok(gametablevalue, getNumber());
  return tabl;
};

export default pour;
