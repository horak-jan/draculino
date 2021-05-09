import React from "react";
import PobockaHeader from "../components/pobocky/PobockaHeader";
import PobockaInfo from "../components/pobocky/PobockaInfo";
import PobockaMap from "../components/pobocky/PobockaMap";
import { useStateValue } from "../State";

const PobockaDetails = () => {
  const [{ selectedPlace }] = useStateValue();

  let {
    coordinates,
    city,
    coach,
    mobil,
    address,
    email,
    image,
    sports,
  } = selectedPlace.pobocka;
  return (
    <div className="pobocka-details">
      <PobockaHeader image={image} city={city} sports={[sports]} />

      <PobockaInfo
        coach={coach}
        mobil={mobil}
        address={address}
        email={email}
      />
      <PobockaMap coordinates={coordinates} />
    </div>
  );
};

export default PobockaDetails;
