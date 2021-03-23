import React from "react";
import Tournaments2020 from "./Tournaments2020.json";
import Tournaments2019 from "./Tournaments2019.json";
import Tournaments2018 from "./Tournaments2018.json";
import Tournaments2017 from "./Tournaments2017.json";
import Tournaments2016 from "./Tournaments2016.json";
import Tournaments2015 from "./Tournaments2015.json";
import Tournaments2014 from "./Tournaments2014.json";
import Tournaments2013 from "./Tournaments2013.json";
import Tournaments2012 from "./Tournaments2012.json";
import Tournaments2011 from "./Tournaments2012.json";
import Kids1 from "../../images/kids10.jpg";
import Kids2 from "../../images/kids16.jpg";
import Adults from "../../images/adultwin.jpg";

const Tournaments = () => {
  return (
    <div className="tournaments">
      <h2>Naše úspěchy na turnajích</h2>
      <p className="bold year">2020</p>
      {Tournaments2020.tournaments.map((tournament) => (
        <p className="grey">{tournament}</p>
      ))}

      <p className="bold year">2019</p>
      {Tournaments2019.tournaments.map((tournament) => (
        <p>{tournament}</p>
      ))}

      <img href="boys tournament" src={Kids1} />

      <p className="bold year">2018</p>
      {Tournaments2018.tournaments.map((tournament) => (
        <p className="grey">{tournament}</p>
      ))}

      <p className="bold year">2017</p>
      {Tournaments2017.tournaments.map((tournament) => (
        <p>{tournament}</p>
      ))}
      <img href="girls tournament" src={Kids2} />

      <p className="bold year">2016</p>
      {Tournaments2016.tournaments.map((tournament) => (
        <p className="grey">{tournament}</p>
      ))}

      <p className="bold year">2015</p>
      {Tournaments2015.tournaments.map((tournament) => (
        <p>{tournament}</p>
      ))}

      <img href="adults win" src={Adults} />

      <p className="bold year">2014</p>
      {Tournaments2014.tournaments.map((tournament) => (
        <p className="grey">{tournament}</p>
      ))}
      <p className="bold year">2013</p>
      {Tournaments2013.tournaments.map((tournament) => (
        <p>{tournament}</p>
      ))}

      <p className="bold year">2012</p>
      {Tournaments2012.tournaments.map((tournament) => (
        <p className="grey">{tournament}</p>
      ))}
      <p className="bold year">2011</p>
      {Tournaments2011.tournaments.map((tournament) => (
        <p>{tournament}</p>
      ))}
    </div>
  );
};

export default Tournaments;
