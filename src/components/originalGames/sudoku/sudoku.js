import { useState } from "react";
import { useHttp } from "../../../hooks/useHttp";
import CreateBlok from "./gameBlok";

import { deleteNumbers } from "./getNumbers";
import RangeSlider from "./range_Slider";

import styles from "./style.module.css";

const Sudoku = () => {
  const [arrMtr, setArrMtr] = useState([]);
  const [gameMtr, setMtr] = useState([]);
  const [isStart, setIsStart] = useState(false);

  const { loading, request, error, clearError } = useHttp();

  const setData = async (index) => {
    try {
      const data = await request(
        "https://shavarshgame.herokuapp.com/api/sudoku/"
      );
      setArrMtr(data);
      setMtr(deleteNumbers(data, index));
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
        <div className={styles.table_sudoku}>
          <CreateBlok arrMtr={gameMtr} />
          <div className={styles.border}></div>
          <div className={styles.border2}></div>
          <div className={styles.border3}></div>
          <div className={styles.border4}></div>
        </div>
      ) : (
        <RangeSlider start={start} />
      )}
    </div>
  );
};
export default Sudoku;
