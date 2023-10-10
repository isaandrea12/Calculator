import React from 'react'
import styles from "./Grid.module.css";

const Grid = (props) => {
  const gridData = [
    
  ];

  return (
    <div className={styles.gridContainer}>
    {gridData.map((item, index) => (
      <div key={index} className={styles.gridItem}>
        {item}
      </div>
    ))}
  </div>
  );
}

export default Grid