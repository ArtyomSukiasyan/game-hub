import { useState } from "react";
import Language from "../../language/Language";
import MiniLoading from "../../loading/loading";
import CreateBlok from "./gameBlok";

import { deleteNumbers } from "./getNumbers";
import RangeSlider from "./range_Slider";

import styles from "./style.module.css";

const url = "https://shavarshgame.herokuapp.com/api/sudoku/";

const Sudoku = () => {
  const [gameMtr, setMtr] = useState([]);
  const [isStart, setIsStart] = useState(false);
  const [load, setLoad] = useState(false);


  const setData = async (index) => {
    try {
      setLoad(true);
    } catch (e) {}
  };

  const start = (index = 20) => {
    if (index > 19 && 61 > index) {
      setIsStart(true);

      setData(index);
    }
  };

  return (
    <div className={styles.sudoku}>
      {isStart ? (
        load ? (
          <div className={styles.table_sudoku}>
            <CreateBlok arrMtr={gameMtr} />
            <div className={styles.border}></div>
            <div className={styles.border2}></div>
            <div className={styles.border3}></div>
            <div className={styles.border4}></div>
          </div>
        ) : (
          <MiniLoading />
        )
      ) : (
        <RangeSlider start={start} />
      )}
    </div>
  );
};
export default Sudoku;
