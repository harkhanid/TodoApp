import React from "react";
import { Link } from "react-router-dom";
const footer = () => {
  return (
    <footer>
      <p>Copyright link</p>
      <Link to="/about"> About us</Link>
    </footer>
  );
};

export default footer;
