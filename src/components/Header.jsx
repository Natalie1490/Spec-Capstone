import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to="/" style={{ textDecoration: "none" }}>
        <h2>License Lab</h2>
      </Link>
      <nav className="navbar">
        <Link to="Home" style={{ textDecoration: "none" }}>
          <h5>Quiz</h5>
        </Link>
        <Link to="Study" style={{ textDecoration: "none" }}>
          <h5>Study</h5>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
