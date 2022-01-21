import React, { useState } from "react";
import "./App.css";

import Game1 from "./Components/Game1/Game1";
import ScoreBoard from "./Components/Periodic_Table/ScoreBoard";
import Start from "./Components/Start/Start";
import PTable from "./Components/Table/PTable";
// import Test from "./Components/Test/Test";

// import PeriodicTable from "./Components/Periodic_Table/PeriodicTable";
// import Video from "./Components/Periodic_Table/Video";

function App() {
  const [Score, setScore] = useState(0);
  const [GameState, setGameState] = useState(0);
  const [HighScore, setHighScore] = useState(0);

  const time = new Date();
  time.setSeconds(time.getSeconds() + 100);

  const startGame1 = () => {
    setGameState(1);
  };

  const startGame2 = () => {
    setGameState(2);
  };

  const goHome = () => setGameState(0);

  return (
    <div className="">
      {GameState === 1 ? (
        <Game1
          setScore={setScore}
          Score={Score}
          setHighScore={setHighScore}
          HighScore={HighScore}
          setGameState={setGameState}
          expiryTimestamp={time}
        />
      ) : GameState === 2 ? (
        <PTable goHome={goHome} />
      ) : GameState === 3 ? (
        <ScoreBoard yourScore={Score} HighScore={HighScore} endGame={goHome} />
      ) : (
        <Start startGame1={startGame1} startGame2={startGame2} />
        // <Wrong />
      )}
    </div>
  );
}

export default App;
