import React from "react";
import { useHistory } from "react-router-dom";
import { useStateValue } from "../../State";

const SinglePobocka = (props) => {
  let { city, coach, mobil, address, email } = props.pobocka;

  const [{ selectedPlace }, dispatch] = useStateValue();
  let history = useHistory();

  const pickThisPlace = (place) => {
    try {
      dispatch({
        type: "pickPlace",
        setPlace: place,
      });

      //redirect to picked place
      history.push("/pobocka");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="single-pobocka">
      <h2>{city}</h2>
      <p>{coach}</p>
      <p>Email: {email}</p>
      <p>Mobil: {mobil}</p>
      <p>Adresa: {address}</p>
      <button onClick={() => pickThisPlace(props)}>Více informací</button>
    </div>
  );
};

export default SinglePobocka;
