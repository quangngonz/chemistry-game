import React from "react";
import data from "./PeriodicTableJSON.json";
import "./PeriodicTable.css";

const colorMap = {
  "noble gas": "#FFBC42",
  "alkaline earth metal": "#EC674E",
  "diatomic nonmetal": "#D81159",
  "alkali metal": "#8F2D56",
  "transition metal": "#58586B",
  "post-transition metal": "#218380",
  lanthanide: "#4AABAF",
  metalloid: "#73D2DE",
};

const PeriodicTableScreen = ({
  handleOpen,
  setDetailTitle,
  setDetailAtomicMass,
  setDeatilCategory,
  setDetailDensity,
  setDetailApperance,
  setDetailmolar_heat,
  setDetailmelt,
  setDetailboil,
  setDetailsummary,
  setDetailSource,
}) => {
  return (
    <div className="periodic-table">
      {data.elements.map((element) => (
        <div
          className="element"
          key={element.name}
          style={{
            gridRow: element.ypos,
            gridColumn: element.xpos,
            borderColor: colorMap[element.category],
            width: "64px",
          }}
          onClick={() => {
            setDetailTitle(element.name);
            setDetailAtomicMass(element.atomic_mass);
            setDeatilCategory(element.category);
            setDetailDensity(element.density);
            setDetailApperance(element.appearance);
            setDetailmolar_heat(element.molar_heat);
            setDetailmelt(element.melt);
            setDetailboil(element.boil);
            setDetailsummary(element.summary);
            setDetailSource(element.source);
            handleOpen();
          }}
        >
          <strong>{element.symbol}</strong>
          <small className="number">{element.number}</small>
          <small className="name">{element.name}</small>
        </div>
      ))}
    </div>
  );
};

export default PeriodicTableScreen;
