import React from "react";

const PobockaInfo = (props) => {
  let { coach, address, mobil, email } = props;
  return (
    <div className="pobocka-info">
      <h3>{coach}</h3>
      <p>Mobil: {mobil}</p>
      <p>Email: {email}</p>
      <p>Adresa: {address}</p>
    </div>
  );
};

export default PobockaInfo;
