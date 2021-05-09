import React from "react";

import { useStateValue } from "../State";
import All from "../components/kurzy/KurzyDetails.json";
import ImageSlider from "../components/ui/ImageSlider";
import ListOfCities from "../components/kurzy/ListOfCities";
const SportDetails = () => {
  const [{ selectedSport }] = useStateValue();

  //filter picked sport
  const sportToDisplay = All.find((sport) => sport.name === selectedSport);
  const {
    name,
    firstP,
    secondP,
    header,
    singleImage,
    multipleImages,
    cities,
  } = sportToDisplay;

  return (
    <div className="sport-details">
      <ImageSlider slides={multipleImages} />

      <ListOfCities cities={cities} />

      <h2>{name}</h2>
      <div className="ps">
        <p>{firstP}</p>
        <h3>{header}</h3>
        <img src={singleImage} className="singleImg" alt={name} />
        <p>{secondP}</p>
      </div>
    </div>
  );
};

export default SportDetails;
