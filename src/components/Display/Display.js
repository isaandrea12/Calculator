import React from "react";
import styles from "./Display.module.css";

const Display = ({ calculation, result }) => {
  return (
    <div className={`card ${styles.cardBody}`}>
      <div className="card-body">
        {calculation}
        <br></br>
        {result}
      </div>
    </div>
  );
};

export default Display;
