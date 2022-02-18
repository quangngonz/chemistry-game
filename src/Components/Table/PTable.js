import React, { useState } from "react";

import PeriodicTableScreen from "./PeriodicTableScreen";
// import Test from "../Test/Test";
import { Button, Modal } from "rsuite";
import "rsuite/dist/rsuite.min.css";

import "./PTable.css";

const converKToC = (K) => {
  const Celsius = K - 273.15;
  return Math.round(Celsius * 10) / 10;
};

const PTable = ({ goHome }) => {
  const [open, setOpen] = useState(false);

  const [DetailTitle, setDetailTitle] = useState("");
  const [DetailAtomicMass, setDetailAtomicMass] = useState(0);
  const [DeatilCategory, setDeatilCategory] = useState("");
  const [DetailDensity, setDetailDensity] = useState();
  const [DetailApperance, setDetailApperance] = useState("");
  const [Detailmolar_heat, setDetailmolar_heat] = useState(0);
  const [Detailmelt, setDetailmelt] = useState(0);
  const [Detailboil, setDetailboil] = useState(0);
  const [Detailsummary, setDetailsummary] = useState("");
  const [DetailSource, setDetailSource] = useState();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <h1>Periodic Table</h1>
      <PeriodicTableScreen
        handleOpen={handleOpen}
        setDetailTitle={setDetailTitle}
        setDetailAtomicMass={setDetailAtomicMass}
        setDeatilCategory={setDeatilCategory}
        setDetailDensity={setDetailDensity}
        setDetailApperance={setDetailApperance}
        setDetailmolar_heat={setDetailmolar_heat}
        setDetailmelt={setDetailmelt}
        setDetailboil={setDetailboil}
        setDetailsummary={setDetailsummary}
        setDetailSource={setDetailSource}
      />
      <Button onClick={goHome} appearance="primary" className="GoHome">
        <p>Home</p>
      </Button>
      <a
        target="_blank"
        href="https://github.com/Bowserinator/Periodic-Table-JSON"
        rel="noopener noreferrer"
        className="DataSource"
      >
        Data Source
      </a>

      <Modal open={open} onClose={handleClose}>
        <Modal.Header>
          <Modal.Title className="DetailTitle">
            {DetailTitle}
            <span className={`cat_name ${DeatilCategory}`}>
              {DeatilCategory}
            </span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {DetailApperance && (
            <div className="appearance">
              <strong>Appearance:</strong> {DetailApperance}
            </div>
          )}
          <div className="atom_info">
            <span>Atomic Mass: {DetailAtomicMass} | </span>
            <span>Density: {DetailDensity}</span>
            {Detailmolar_heat && <span> | Molar Heat: {Detailmolar_heat}</span>}
            {Detailmelt && <span> | Melt: {converKToC(Detailmelt)} ºC</span>}
            {Detailboil && <span> | Boil: {converKToC(Detailboil)} ºC</span>}
          </div>
          <div>
            {Detailsummary} ...{" "}
            <a target="_blank" href={DetailSource} rel="noopener noreferrer">
              Source
            </a>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose} appearance="primary">
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default PTable;
