import React from "react";
import axios from "axios";

import "./ScoreBoard.css";

const sendData = async (name, score) => {
  var currentdate = new Date();
  var datetime =
    currentdate.getDate() +
    "/" +
    (currentdate.getMonth() + 1) +
    "/" +
    currentdate.getFullYear() +
    " " +
    currentdate.getHours() +
    ":" +
    currentdate.getMinutes() +
    ":" +
    currentdate.getSeconds();

  // const data = JSON.stringify({ name: name, score: score, time: datetime });

  const options = {
    method: "POST",
    url: "https://isph-chemistry-game.herokuapp.com/sendScore",
    headers: { "Content-Type": "application/json" },
    data: { name: name, score: score, time: datetime },
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
};

const ScoreBoard = ({ yourScore, HighScore, endGame }) => {
  const [validName, setValidName] = React.useState(false);
  const [name, setName] = React.useState("");

  const GoBack = () => {
    if (name) {
      sendData(name, yourScore);
      endGame();
    } else {
      setValidName(true);
    }
  };

  return (
    <div className="ScoreBoard--End">
      <div className="ScoreBoard--container">
        <h1 className="ScoreBoard--title">Game Finished!</h1>

        <h2 className="ScoreBoard--Details">
          Score: {yourScore} &nbsp; | &nbsp; High Score: {HighScore}
        </h2>

        <input
          type="text"
          className={validName ? " NameNeed" : "NameInput"}
          onChange={(event) => setName(event.target.value)}
          placeholder="Your Name"
        />
        <h5 style={{ marginBottom: "5px" }}>{validName && "Name needed!"}</h5>

        <button class="button-28" onClick={GoBack}>
          Home
        </button>
      </div>
    </div>
  );
};

export default ScoreBoard;
