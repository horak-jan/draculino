import React from "react";
import SingleKurz from "../components/kurzy/SingleKurz";
import KurzyData from "../components/kurzy/Kurzy.json";

const Kurzy = () => {
  return (
    <div className="kurzy">
      {KurzyData.map((kurz) => (
        <SingleKurz kurz={kurz} key={kurz.name} />
      ))}
    </div>
  );
};

export default Kurzy;
