import React from "react";
import LoaderImg from "../../styles/gb-loader.png";

const Loader = () => {
  return (
    <div className="loader">
      <img alt="loading" src={LoaderImg} />
    </div>
  );
};

export default Loader;
