import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div
      className={`container-fluid d-flex align-items-center justify-content-center custom-container mt-4 ${styles.customContainer} ${styles.bgCustom} ${styles.textCustom} ${styles.rounded}`}
    >
      <footer>© {currentYear} Isabel Muñiz</footer>
    </div>
  );
};

export default Footer;
