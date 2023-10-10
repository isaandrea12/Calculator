import React, { useState } from "react";
import { FaMinus, FaPlus, FaDivide, FaTimes, FaEquals } from "react-icons/fa";
import styles from "./Calculator.module.css";

const Calculator = () => {
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [number, setNumber] = useState(0);
  const [calculation, setCalculation] = useState("");
  const [result, setResult] = useState(0);

  const handleClearClick = () => {
    setResult(0);
    setCalculation("");
  }
  
  const handleEqualsClick = () => {
    setResult(eval(calculation));
  }

  const handleOperatorClick = (operator) => {
    // Check if the last character is an operator before appending another one
    if (
      calculation.length > 0 &&
      "+-*/".includes(calculation[calculation.length - 1])
    ) {
      // Don't append another operator
      return;
    }
    setCalculation(calculation + operator);
  }

  return (
    <div className={styles}>
      {calculation}
      {numbers.map((number) => {
        return (
          <button
            className="btn btn-primary"
            onClick={() => {
              setNumber(number);
              setCalculation(calculation + `${number}`);
            }}
          >
            {number}
          </button>
        );
      })}
      <button
        className="btn btn-primary"
        onClick={() => handleOperatorClick("+")}
      >
        {<FaPlus />}
      </button>
      <button
        className="btn btn-primary"
        onClick={() => handleOperatorClick("-")}
      >
        {<FaMinus />}
      </button>
      <button
        className="btn btn-primary"
        onClick={() => handleOperatorClick("/")}
      >
        {<FaDivide />}
      </button>
      <button
        className="btn btn-primary"
        onClick={() => handleOperatorClick("*")}
      >
        {<FaTimes />}
      </button>

      <button 
        className="btn btn-primary" 
        onClick={handleEqualsClick}>
        <FaEquals />
      </button>
      <button
        className="btn btn-primary"
        onClick={handleClearClick}
      >
        C
      </button>
      {result}
    </div>
  );
};

export default Calculator;
