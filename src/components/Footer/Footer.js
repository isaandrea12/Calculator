import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`${styles.container}`}>
      <p>
        &copy;{currentYear}{" "}
        <a
          href="https://github.com/isaandrea12/Calculator"
          className={styles.containerLink}
          target="_blank"
          rel="noreferrer"
        >
          Isabel Muñiz
        </a>
      </p>
    </footer>
  );
};

export default Footer;
