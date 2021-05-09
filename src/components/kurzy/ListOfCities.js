import React from "react";
const ListOfCities = (props) => {
  return (
    <ul>
      {props.cities.map((city) => (
        <li key={city}>{city}</li>
      ))}
    </ul>
  );
};

export default ListOfCities;
