import React from "react";

import PobockyList from "../components/pobocky/Pobocky.json";
import SinglePobocka from "../components/pobocky/SinglePobocka";
const Pobocky = () => {
  return (
    <div className="pobocky-view">
      {PobockyList.map((pobocka) => (
        <SinglePobocka key={pobocka.city} pobocka={pobocka} />
      ))}
    </div>
  );
};

export default Pobocky;
