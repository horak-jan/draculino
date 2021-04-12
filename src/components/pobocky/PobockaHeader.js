import React from "react";

const PobockaHeader = (props) => {
  let { city, image, sports } = props;
  return (
    <div
      className="pobocka-header"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="pobocka-header-sports">
        {sports.map((sport) => (
          <p key={sport}>{sport}</p>
        ))}
      </div>
      <h1>{city}</h1>
    </div>
  );
};

export default PobockaHeader;
