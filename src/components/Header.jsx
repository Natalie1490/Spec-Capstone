import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header>
      <h2 onClick={() => navigate("/")}>License Lab</h2>
      <nav className="navbar">
        {/* <h5 onClick={() => navigate("/Quiz")}>Quiz</h5> */}

        <h5 onClick={() => navigate("/Study")}>Study</h5>
      </nav>
    </header>
  );
};

export default Header;
