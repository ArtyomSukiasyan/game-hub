const sumX = (mtr, moveX = "") => {
  const newMtr = mtr.reduce((acc, item) => {
    const arr = item.filter((item) => item !== false);
    const sumArr = arr.map((it, index, arr) => {
      if (it && it === arr[index + 1]) {
        arr[index + 1] = false;
        return it * 2;
      }
      return it;
    });

    let arr2 = sumArr.filter((item) => item !== false);
    if (moveX === "right") {
      let arrXright = arr2.reduce(
        (acc2, item2, index, arr) => {
          acc2[acc2.length - arr.length + index] = item2;
          return acc2;
        },
        [false, false, false, false]
      );
      return [...acc, arrXright];
    }
    const arrXleft = arr2.reduce(
      (acc2, item2, index, arr) => {
        acc2[index] = item2;
        return acc2;
      },
      [false, false, false, false]
    );
    return [...acc, arrXleft];
  }, []);
  return newMtr;
};

const sumY = (mtr, move = "") => {
  const newMtr = mtr.reduce((acc, item, index, array) => {
    const arr = array.map((item2) => {
      return item2[index];
    });
    return [...acc, arr];
  }, []);
  const turnRight = move === "bottom" ? sumX(newMtr, "right") : sumX(newMtr);
  const turnLeft = turnRight.reduce((acc, item, index, array) => {
    const arr = array.map((item2) => {
      return item2[index];
    });
    return [...acc, arr];
  }, []);
  return turnLeft;
};

const MoveTop = (
  direction,
  mtr = [
    [false, false, false, false],
    [false, 4, 2, false],
    [4, 8, 8, 4],
    [false, false, false, false],
  ]
) => {
  // sumX(mtr, "right"); // right or left
  // sumX(mtr, "left");
  if (direction === "top" || direction === "bottom") {
    return sumY(mtr, direction);
  } else {
    return sumX(mtr, direction);
  }
};

export default MoveTop;
