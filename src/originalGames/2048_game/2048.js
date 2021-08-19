import { useCallback, useEffect, useState } from "react";

import check from "./check";
import pour from "./pour";
import startEvent from "./startEvent";
import isSimilar from "./isSimilar";
import styles from "./style.module.css";

const GamBam = () => {
  const [gametablevalue, setgametablevalue] = useState([]);
  const [table, setTable] = useState(<div></div>);

  const move = useCallback((newMtr) => {
    if (gametablevalue.length != 0) {
      let value = newMtr;
      if (isSimilar(value, gametablevalue)) {
        value = pour(value);
      }
      setgametablevalue(value);
      setTable(check(value));
    }
  });

  useEffect(() => {
    let value = [];
    for (let i = 0; i < 4; i++) {
      value[i] = [];
      for (let j = 0; j < 4; j++) {
        value[i] = [...value[i], false];
      }
    }

    value = pour(value);
    value = pour(value);
    setgametablevalue(value);
    setTable(check(value));
  }, []);

  useEffect(() => {
    startEvent("start", move, gametablevalue);
  }, [table]);

  return (
    <div className={styles.gamBam}>
      <div className={styles.gamBamBord}>{table}</div>
    </div>
  );
};
export default GamBam;
