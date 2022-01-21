import React from "react";

import "./ScoreBoard.css";

const ScoreBoard = ({ yourScore, HighScore, endGame }) => {
  return (
    <div className="ScoreBoard--End">
      <div className="ScoreBoard--container">
        <h1 className="ScoreBoard--title">Game Finished!</h1>
        <h2 className="ScoreBoard--Details">
          Score: {yourScore} &nbsp; | &nbsp; High Score: {HighScore}
        </h2>

        <button class="button-28" onClick={endGame}>
          Home
        </button>
      </div>
    </div>
  );
};

export default ScoreBoard;
