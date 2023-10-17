import React from "react";
import styles from "./Display.module.css";

const Display = ({ calculation, result }) => {
  return (
    <div className={styles.container}>
      <div className="card-body">
        <div className={styles.calculation}>{calculation}</div>
        <div className={styles.result}>{result}</div>
      </div>
    </div>
  );
};

export default Display;
