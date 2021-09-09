import React from "react";

import styles from "./style.module.css";

const Form = ({ changeImput, roome, submit }) => {
  return (
    <fieldset className={styles.fieldset}>
      <input
        onChange={changeImput}
        value={roome}
        className={styles.input}
        type="search"
      />
      <button onClick={submit} className={styles.button} type="submit">
        S
      </button>
    </fieldset>
  );
};

export default Form;
