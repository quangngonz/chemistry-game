import React from "react";

import "./Wrong.css";

const Wrong = ({ Value, maxValue, onFinish }) => {
  const [PenaltySeconds, setPenaltySeconds] = React.useState(3);

  React.useEffect(() => {
    PenaltySeconds > 0 &&
      setTimeout(() => setPenaltySeconds(PenaltySeconds - 1), 1000);
    PenaltySeconds === 0 &&
      setTimeout(() => {
        onFinish();
      }, 1000);
    // eslint-disable-next-line
  }, [PenaltySeconds]);

  return (
    <div className="Wrong ">
      <h1 class="">Wrong</h1>
      <progress
        class="progressBar animated"
        value={PenaltySeconds}
        max={maxValue}
      />
      <p style={{ margin: 0 }}>{PenaltySeconds}</p>
    </div>
  );
};

export default Wrong;
