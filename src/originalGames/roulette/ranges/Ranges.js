import React, { useState } from "react";
import { func } from "prop-types";
import styles from "./Ranges.module.css";

function Ranges({ checkRanges }) {
  const [dev, setDev] = useState([false, false, false]);
  const range1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const range2 = [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
  const range3 = [25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36];

  const clickedStyles = {
    backgroundColor: "gold",
  };

  return (
    <div className={styles.ranges}>
      <div
        onClick={() => {
          checkRanges(range1);
          setDev([true, false, false]);
        }}
        style={dev[0] ? clickedStyles : null}
      >
        <span>1-12</span>
      </div>
      <div
        onClick={() => {
          checkRanges(range2);
          setDev([false, true, false]);
        }}
        style={dev[1] ? clickedStyles : null}
      >
        <span>13-24</span>
      </div>
      <div
        onClick={() => {
          checkRanges(range3);
          setDev([false, false, true]);
        }}
        style={dev[2] ? clickedStyles : null}
      >
        <span>25-36</span>
      </div>
    </div>
  );
}

Ranges.protoType = {
  checkRanges: func.isRequired,
};

export default Ranges;
