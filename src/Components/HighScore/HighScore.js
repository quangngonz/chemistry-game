import React, { useEffect, useState } from "react";
import DataTable, { createTheme } from "react-data-table-component";
import axios from "axios";
import styled from "styled-components";
import "./HighScore.css";

createTheme("solarized", {
  text: {
    primary: "#fff",
    secondary: "#fff",
  },
  background: {
    default: "#23439e",
  },
  context: {
    background: "#cb4b16",
    text: "#FFFFFF",
  },
  divider: {
    default: "#131f41",
  },
  action: {
    button: "rgba(0,0,0,.54)",
    hover: "rgba(0,0,0,.08)",
    disabled: "rgba(0,0,0,.12)",
  },
});

const HighScorePage = ({ goHome }) => {
  // return a table with name and score (grid)
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://isph-chemistry-game.herokuapp.com/getScore")
      .then((res) => {
        setData(res.data.scores);
      });
  }, []);

  const columns = [
    {
      name: "Name",
      selector: (row) => row.name,
    },
    {
      name: "Score",
      selector: (row) => row.score,
    },
  ];

  return (
    <RankingTitleContainer>
      <RankingTitle>Ranks</RankingTitle>
      <RankingTable>
        <DataTable
          columns={columns}
          data={data}
          theme="solarized"
          responsive
          fixedHeader
        />
      </RankingTable>
      <button
        style={{ width: "200px", marginTop: "10px" }}
        class="button-28"
        onClick={goHome}
      >
        Home
      </button>
    </RankingTitleContainer>
  );
};

const RankingTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #131f41;
  height: 100vh;
  text-align: center;
`;

const RankingTable = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 40%;
`;

const RankingTitle = styled.h1`
  font-size: 3rem;
  color: #fff;
  margin-bottom: 1rem;
`;

export default HighScorePage;
