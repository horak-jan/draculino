import React from "react";
const SingleContact = (props) => {
  let { city, coach, mobil, address, email, fb, ig } = props.gym;

  return (
    <div className="single-contact">
      <h3>{city}</h3>
      <p>
        <span className="bold">hlavní trenér:</span> {coach}
      </p>
      <p>
        <span className="bold">mobil:</span> {mobil}
      </p>
      <p>
        <span className="bold">email:</span> {email}
      </p>
      <p>
        <span className="bold">tělocvična:</span> {address}
      </p>
    </div>
  );
};

export default SingleContact;
