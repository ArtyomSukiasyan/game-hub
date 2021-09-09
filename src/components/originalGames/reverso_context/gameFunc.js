export const isCardsSuitable = (dataF, dataC, random) => {
  const randomCard = random.name.split("");
  const [data1, data2] = [dataF.open.name.split(""), dataC.name.split("")];

  return !(
    (data1[data1.length - 1] === data2[data2.length - 1] &&
      dataF.open.index < dataC.index) ||
    (data1[data1.length - 1] !== data2[data2.length - 1] &&
      data2[data2.length - 1] === randomCard[data2.length - 1])
  );
};
