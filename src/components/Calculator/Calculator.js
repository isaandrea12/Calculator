import React, { useState } from "react";
import styles from "./Calculator.module.css";
import Grid from "../Grid/Grid";
import Display from "../Display/Display";

const Calculator = () => {
  const [calculation, setCalculation] = useState("");
  const [result, setResult] = useState(0);
  const operations = ["+", "-", "/", "*", "%"];

  const handleClearClick = () => {
    setResult(0);
    setCalculation("");
  };

  const handleEqualsClick = () => {
    // eslint-disable-next-line
    setResult(eval(calculation));
  };

  const handleOperatorClick = (operator) => {
    if (calculation === "") {
      return;
    }

    // Check if the last character is an operator before appending another one
    if (operations.includes(calculation[calculation.length - 1])) {
      // Don't append another operator
      return;
    }

    // Handle specific cases for "×" and "÷"
    if (operator === "×") {
      setCalculation(calculation + "*");
    } else if (operator === "÷") {
      setCalculation(calculation + "/");
    } else {
      setCalculation(calculation + operator);
    }
  };

  const handleBackClick = () => {
    setCalculation((prevCalculation) => {
      // remove last character from the calculation
      const updatedCalculation = prevCalculation.slice(0, -1);

      setResult(0);

      return updatedCalculation;
    });
  };

  return (
    <div className={`${styles.container}`}>
      <Display calculation={calculation} result={result} />
      <Grid
        calculation={calculation}
        setCalculation={setCalculation}
        result={result}
        handleClearClick={handleClearClick}
        handleEqualsClick={handleEqualsClick}
        handleOperatorClick={handleOperatorClick}
        handleBackClick={handleBackClick}
      />
    </div>
  );
};

export default Calculator;
