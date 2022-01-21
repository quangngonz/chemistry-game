import React, { useState, useEffect } from "react";
import { Line } from "rc-progress";

import "./Game1.css";

import PeriodicTable from "../Periodic_Table/PeriodicTable";
import data from "./PeriodicTableJSON.json";
import Wrong from "./Wrong";

const Game1 = ({ Score, setScore, HighScore, setHighScore, setGameState }) => {
  const [ElementName, setElementName] = useState();
  const [counter, setCounter] = useState(100);
  const [testState, setTestState] = useState(1);

  const [Penalty, setPenalty] = useState(false);

  const DataList = data.elements;

  const submitAnswer = (element) => {
    if (element === ElementName) {
      setScore((Score += 1));

      if (Score > HighScore) {
        setHighScore(Score);
      }
      newQuestion();
    } else {
      setPenalty(true);
    }
  };

  const EndGame = () => {
    localStorage.setItem("highscore", HighScore);
    setGameState(3);
  };

  const newQuestion = () => {
    var randomElements = Math.floor(Math.random() * 119);
    setElementName(DataList[randomElements].name);

    console.log(DataList[randomElements]);
    console.log(typeof DataList);
  };

  React.useEffect(() => {
    testState > 0 &&
      setTimeout(() => {
        setScore(0);
        setTestState(testState - 1);
      }, 1);
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
    counter === 0 && EndGame();
    // eslint-disable-next-line
  }, [counter]);

  useEffect(() => {
    newQuestion();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="FadeIn">
      <PeriodicTable submitAnswer={submitAnswer} />
      <Line
        percent={counter}
        strokeWidth="3"
        strokeColor="#0000FF"
        strokeLinecap="square"
        className="time"
      />
      <div className="Endgame">
        <button class="button-24" onClick={EndGame}>
          End Game
        </button>
      </div>
      {Penalty && (
        <Wrong
          className="wrongScreen FadeIn"
          maxValue={3}
          onFinish={() => setPenalty(false)}
        />
      )}

      <h1 className="ScoreBoard">
        Score: {Score} &nbsp; | &nbsp; High Score: {HighScore} &nbsp; | &nbsp;
        Time: {counter} seconds
      </h1>
      <h1 className="question">Find the Element: {ElementName}</h1>
    </div>
  );
};

export default Game1;
