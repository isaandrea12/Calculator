import React, { useState } from "react";
import { FaMinus, FaPlus, FaDivide, FaTimes, FaEquals } from "react-icons/fa";

const Grid = () => {
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const operations = ["+", "-", "/", "*"];
  const [number, setNumber] = useState(0);
  const [calculation, setCalculation] = useState("");
  const [result, setResult] = useState(0);

  const handleClearClick = () => {
    setResult(0);
    setCalculation("");
  }

  return (
    <div>
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
        onClick={() => setCalculation(calculation + "+")}
      >
        {<FaPlus />}
      </button>
      <button
        className="btn btn-primary"
        onClick={() => setCalculation(calculation + "-")}
      >
        {<FaMinus />}
      </button>
      <button
        className="btn btn-primary"
        onClick={() => setCalculation(calculation + "/")}
      >
        {<FaDivide />}
      </button>
      <button
        className="btn btn-primary"
        onClick={() => setCalculation(calculation + "*")}
      >
        {<FaTimes />}
      </button>

      <button
        className="btn btn-primary"
        onClick={() => {
          setResult(eval(calculation));
        }}
      >
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

export default Grid;
