function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
const randomBlok = (gametablevalue, id) => {
  let index = 0;
  gametablevalue.forEach((element) => {
    element.forEach((elemen2) => {
      if (!elemen2) {
        index += 1;
      }
    });
  });
  index = getRandomInt(index - 1);

  const bord = gametablevalue.map((item) =>
    item.map((item2) => {
      if (!item2) {
        if (index === 0) {
          index -= 1;
          return id;
        }
        index -= 1;
        return item2;
      }
      return item2;
    })
  );
  return bord;
};
export default randomBlok;
