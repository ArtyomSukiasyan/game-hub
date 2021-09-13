import { useEffect, useRef, useState } from "react";
import styles from "./style.module.css";

const SlidBox = ({ obj, isSlid, index, changeQueue }) => {
  const [left, setLeft] = useState(-10);
  const [opacity, setOpacity] = useState("0");
  const [transition, setTransition] = useState("0");

  useEffect(() => {
    if (isSlid) {
      blokLeft();
    } else {
      setLeft(-10);
      setOpacity("0");
      setTransition("0");
    }

    return () => {
      setLeft(0);
    };
  }, [isSlid]);

  const blokLeft = () => {
    if (isSlid) {
      setLeft(160);
      setOpacity(".9");
      setTransition("9.5");
      setTimeout(() => {
        setLeft(-10);
        setOpacity("0");
        setTransition("0");
      }, 8000);
    }
  };
  return (
    <div
      onClick={() => {
        changeQueue(index);
      }}
      className={styles.miniSlideImg}
      style={{ opacity: "1" }}
    >
      <div className={styles.imgFlex}>
        <img className={styles.miniImg} src={obj.miniImg} />
        <div className={styles.textName}>{obj.gameName}</div>
      </div>
      <div
        className={styles.blokLeft}
        style={{
          left: left + "px",
          opacity: opacity,
          transition: "all " + transition + "s ease",
          top: "-5px",
          width: "160px",
          margin: "4px",
          height: "53px",
          backgroundColor: "rgb(85, 72, 68)",
        }}
      ></div>
    </div>
  );
};
export default SlidBox;
