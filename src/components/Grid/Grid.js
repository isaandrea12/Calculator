import React from "react";
import styles from "./Grid.module.css";
// import { FaBackspace } from "react-icons/fa";

const Grid = ({
  handleClearClick,
  calculation,
  setCalculation,
  handleEqualsClick,
  handleOperatorClick,
  handleBackClick,
}) => {
  const btnValues = [
    ["C", "del", "÷", "×"],
    [7, 8, 9, "+"],
    [4, 5, 6, "-"],
    [1, 2, 3, "="],
    [".", 0],
  ];

  return (
    <div className={styles.gridContainer}>
      {btnValues.flat().map((btn, i) => {
        return (
          <button
            key={i}
            className={`${styles.btn} ${btn === "=" ? styles.equals : ""} ${
              btn === "÷" || btn === "×" || btn === "-" || btn === "+" 
                ? styles.operatorBtns
                : ""
            } ${styles.textBig}`}
            value={btn}
            onClick={
              btn === "C"
                ? handleClearClick
                : btn === "="
                ? handleEqualsClick
                : btn === "÷" || btn === "×" || btn === "-" || btn === "+" 
                ? () => {
                    handleOperatorClick(btn);
                  }
                : btn === "del"
                ? handleBackClick
                : () => {
                    setCalculation(calculation + `${btn}`);
                  }
            }
          >
            {btn}
          </button>
        );
      })}
    </div>
  );
};

export default Grid;
