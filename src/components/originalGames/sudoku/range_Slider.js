import { useState } from "react";
import styles from "./style.module.css";

const RangeSlider = ({ start }) => {
  const [index, setIndex] = useState(20);

  const change = (e) => {
    if (e.target.value > 19 && 61 > e.target.value) {
      setIndex(e.target.value);
    }
  };
  return (
    <>
      <h1 className={styles.Attention}>Select the difficulty of the game</h1>
      <h2 className={styles.Attention}>20-60</h2>
      <>
        <input
          onChange={change}
          className={styles.number_input}
          value={index}
          type="number"
          min="20"
          max="60"
        />
        <div className={styles.wrap}>
          <button onClick={() => start(index)} className={styles.button}>
            Starat
          </button>
        </div>
      </>
    </>
  );
};
export default RangeSlider;
