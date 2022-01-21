import React, { useEffect, useState } from "react";

import "./Start.css";

import logo from "../../assets/Logo.png";

const Start = ({ startGame1, startGame2 }) => {
  const [TopScore, setTopScore] = useState();

  useEffect(() => {
    setTopScore(localStorage.getItem("highscore"));
    console.log(TopScore);
    // eslint-disable-next-line
  }, []);

  return (
    <div className="Start--container">
      <img src={logo} alt="logo" className="logo" />
      <h1>CHEMISTRY GAME</h1>
      <p className="High-score">High Score: {TopScore}</p>

      <button className="button-64" onClick={startGame1}>
        <span className="text">Find the element</span>
      </button>
      <button className="button-64" onClick={startGame2}>
        <span className="text">Periodic Table</span>
      </button>

      <p className="author">By: Quang Ngo - Year 10</p>
    </div>
  );
};

export default Start;
