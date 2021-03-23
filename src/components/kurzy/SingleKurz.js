import React, { useState } from "react";

const SingleKurz = (props) => {
  let { name, shortText } = { ...props.kurz };

  return (
    <div className="single-kurz">
      <h2>
        <a href="/kurzy">{name}</a>
      </h2>

      <p>{shortText} </p>

      <button>
        <a href="/registrace">Registrovat</a>
      </button>
      <button>
        <a href="/detailkurzu">Více informací</a>
      </button>
    </div>
  );
};

export default SingleKurz;
