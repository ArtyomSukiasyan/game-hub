const getNumber = () => {
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  return getRandomInt(13) !== 1 ? 2 : 4;
};

export default getNumber;
