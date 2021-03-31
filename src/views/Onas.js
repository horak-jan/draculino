import React from "react";
import Rules from "../components/oNas/Rules";
import Tournaments from "../components/oNas/Tournaments";
import Vinicius from "../components/oNas/Vinicius";

const Onas = () => {
  return (
    <div className="o-nas">
      <Vinicius />
      <Rules />
      <Tournaments />
    </div>
  );
};

export default Onas;
