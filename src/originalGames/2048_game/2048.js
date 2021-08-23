import { useCallback, useEffect, useState } from "react";

import check from "./check";
import pour from "./pour";
import startEvent from "./startEvent";
import isSimilar from "./isSimilar";
import styles from "./style.module.css";

const start = "start";
const gameSize = 4;

const Game2048 = () => {
  const [gametablevalue, setgametablevalue] = useState([]);
  const [table, setTable] = useState(null);
  const [points, setPoints] = useState(0);

  const move = useCallback((newМatrix) => {
    if (gametablevalue.length !== 0) {
      let value = newМatrix;
      if (isSimilar(value, gametablevalue)) {
        value = pour(value);
      }
      setgametablevalue(value);
      setTable(check(value));
    }
  });
  useEffect(() => {
    const game_points = gametablevalue.reduce((acc, item) => {
      acc += item.reduce((acc2, item2) => {
        acc2 += item2;
        return acc2;
      });
      return acc;
    }, 0);
    setPoints(game_points);
  }, [gametablevalue]);

  useEffect(() => {
    let value = [];
    for (let i = 0; i < gameSize; i++) {
      value[i] = [];
      for (let j = 0; j < gameSize; j++) {
        value[i] = [...value[i], false];
      }
    }

    value = pour(value);
    value = pour(value);
    setgametablevalue(value);
    setTable(check(value));
  }, []);

  useEffect(() => {
    startEvent(start, move, gametablevalue);
  }, [table]);

  return (
    <>
      <div className={styles.number_thing}>
        <div className={styles.screen}>
          <div className={styles.numbers}>{points}</div>
          <div className={styles.shine}></div>
          <div className={styles.bloom}></div>
        </div>
      </div>
      <div className={styles.gamBam}>
        <div className={styles.gamBamBord}>{table}</div>
      </div>
    </>
  );
};
export default Game2048;
