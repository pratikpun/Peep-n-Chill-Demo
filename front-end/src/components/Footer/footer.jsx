import React from "react";
import "./footer.css";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <footer className="d-flex justify-content-center">
      Pratik Pun &copy; {date}
    </footer>
  );
};

export default Footer;
