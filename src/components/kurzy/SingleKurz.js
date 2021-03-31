import React from "react";
import { useHistory } from "react-router-dom";

import { useStateValue } from "../../State";

const SingleKurz = (props) => {
  let { name, shortText } = { ...props.kurz };
  const [{ selectedSport }, dispatch] = useStateValue();
  let history = useHistory();

  const readMore = (name) => {
    try {
      dispatch({
        type: "pickSport",
        setSport: name,
      });
      history.push("/detailkurzu");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="single-kurz">
      <h2 onClick={() => readMore(name)}>{name}</h2>

      <p>{shortText} </p>

      <a href="/registrace">
        <button>Registrovat</button>
      </a>

      <button onClick={() => readMore(name)}>Více informací</button>
    </div>
  );
};

export default SingleKurz;
