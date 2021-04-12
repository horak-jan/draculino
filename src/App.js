import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { StateProvider } from "./State";
import "./styles/App.css";
import Navbar from "./components/navbar/Navbar.js";
import Home from "./views/Home";
import Kurzy from "./views/Kurzy";
import Onas from "./views/Onas";
import ChciZacit from "./views/ChciZacit";
import Kontakty from "./views/Kontakty";
import Pobocky from "./views/Pobocky";
import PobockaDetails from "./views/PobockaDetails";
import FourOFour from "./views/FourOFour";
import Footer from "./views/Footer";
import WebmasterPage from "./views/WebmasterPage";
import Registrace from "./views/Registrace";
import SportDetails from "./views/SportDetails";

const App = () => {
  const initialState = {
    selectedSport: {
      sport: "Jiu-Jitsu",
    },
    selectedGym: {
      gym: "Ostrava",
    },
    selectedPlace: {
      pobocka: {
        city: "Ostrava",
        coach: "Jan „Nitro“ Heindl (hnědý pás)",
        mobil: "+420 739 537 778",
        address: "Moravská 964/2, Ostrava-Vítkovice",
        email: "ostrava@draculino.cz",
        fb: "www.facebook.com/draculino.ostrava",
        ig: "www.instagram.com/draculino.ostrava",
        coordinates: {
          lat: "49.797858449926544",
          lng: "18.26885214051194",
        },
        sports: ["BJJ", "BJJ PRO DĚTI", "OPEN MAT"],
        image:
          "https://www.draculino.cz/wp-content/uploads/2017/10/ostrava2.jpg",
      },
    },
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "pickSport":
        return {
          ...state,
          selectedSport: action.setSport,
        };
      case "pickGym":
        return { ...state, selectedGym: action.setGym };
      case "pickPlace":
        return {
          ...state,
          selectedPlace: action.setPlace,
        };
      default:
        return state;
    }
  };

  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <Router>
        <Navbar />

        <Switch>
          <Route exact path="/chcizacit" component={ChciZacit} />
          <Route exact path="/onas" component={Onas} />
          <Route exact path="/pobocky" component={Pobocky} />
          <Route exact path="/pobocka" component={PobockaDetails} />
          <Route exact path="/kurzy" component={Kurzy} />
          <Route exact path="/kontakty" component={Kontakty} />
          <Route exact path="/webmaster" component={WebmasterPage} />
          <Route exact path="/registrace" component={Registrace} />
          <Route exact path="/detailkurzu" component={SportDetails} />
          <Route exact path="/" component={Home} />
          <Route exact path="/*" component={FourOFour} />
        </Switch>

        <Footer />
      </Router>
    </StateProvider>
  );
};

export default App;
