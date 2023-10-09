import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return <footer>@{currentYear} Isabel Muñiz</footer>;
};

export default Footer;
