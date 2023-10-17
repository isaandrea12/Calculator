import React, { useState } from "react";
import styles from "./Calculator.module.css";
import Grid from "../Grid/Grid";
import Display from "../Display/Display";

const Calculator = () => {
  const [calculation, setCalculation] = useState("");
  const [result, setResult] = useState(0);
  const operations = ["+", "-", "÷", "×"];

  const handleClearClick = () => {
    setResult(0);
    setCalculation("");
  };

  const handleEqualsClick = () => {
    // eslint-disable-next-line
    setResult(eval(calculation));
  };

  const handleOperatorClick = (operator) => {
    // Check if the last character is an operator before appending another one
    if (
      calculation.length > 0 &&
      "+-*/".includes(calculation[calculation.length - 1])
    ) {
      // Don't append another operator
      return;
    }
    if (operator === "×") {
      setCalculation(calculation + "*");
      return;
    }

    setCalculation(calculation + operator);
  };

  const handleBackClick = () => {
    setCalculation((prevCalculation) => {
      const updatedCalculation = prevCalculation.substring(
        0,
        prevCalculation.length - 1,
      );

      // Check if the last character removed is an operation
      if (operations.includes(prevCalculation[prevCalculation.length - 1])) {
        // Reset the result to 0
        setResult(0);
      }

      return updatedCalculation;
    });
  };

  return (
    <div className={`${styles.container} ${styles.centerContainer}`}>
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
