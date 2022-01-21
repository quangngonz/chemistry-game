import React, { useEffect, useState } from "react";

import "./Game2.css";
import table from "../../assets/PeriodicTable.png";

const Game2 = ({ endGame }) => {
  const [Question, setQuestion] = useState();

  const newQuestion = () => {
    setQuestion("hello 1234");
  };

  useEffect(() => {
    newQuestion();
  }, []);

  return (
    <div className="foo">
      <h1 className="title">Questions</h1>
      <div className="game2">
        <div className="game2--questions">
          <p>{Question}</p>
          <p>Hello</p>
          <button onClick={endGame}>Back</button>
        </div>

        <div className="game2--periodicTable">
          <img src={table} alt="Periodic Table" className="game2--table" />
        </div>
      </div>
    </div>
  );
};

export default Game2;
