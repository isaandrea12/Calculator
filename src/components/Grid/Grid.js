import React from "react";
import styles from "./Grid.module.css";
import {
  FaMinus,
  FaPlus,
  FaDivide,
  FaTimes,
  FaEquals,
  FaBackspace,
} from "react-icons/fa";

const Grid = ({
  handleClearClick,
  calculation,
  setCalculation,
  handleEqualsClick,
  handleOperatorClick,
  handleBackClick,
}) => {
  const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];

  return (
    <div className={`container mt-4 ${styles.gridContainer}`}>
      <div className={styles.gridItem}>
        <button className="btn btn-primary btn-lg" onClick={handleClearClick}>
          C
        </button>
        <button
          className="btn btn-primary btn-lg"
          onClick={() => handleOperatorClick("/")}
        >
          {<FaDivide />}
        </button>
        <button
          className="btn btn-primary btn-lg"
          onClick={() => handleOperatorClick("*")}
        >
          {<FaTimes />}
        </button>
        <button className="btn btn-primary btn-lg" onClick={handleBackClick}>
          <FaBackspace />
        </button>
        <div>
          {numbers.map((number) => {
            return (
              <button
                className="btn btn-primary btn-lg"
                onClick={() => {
                  setCalculation(calculation + `${number}`);
                }}
              >
                {number}
              </button>
            );
          })}
          <button
            className="btn btn-primary btn-lg"
            onClick={() => handleOperatorClick("+")}
          >
            {<FaPlus />}
          </button>
          <button
            className="btn btn-primary btn-lg"
            onClick={() => handleOperatorClick("-")}
          >
            {<FaMinus />}
          </button>

          <button
            className="btn btn-primary btn-lg"
            onClick={handleEqualsClick}
          >
            <FaEquals />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Grid;
