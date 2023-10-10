import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return <footer className={styles}>@{currentYear} Isabel Muñiz</footer>;
};

export default Footer;
