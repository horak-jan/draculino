import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./styles/App.css";
import Navbar from "./components/navbar/Navbar.js";
import Home from "./views/Home";
import Kurzy from "./views/Kurzy";
import Onas from "./views/Onas";
import ChciZacit from "./views/ChciZacit";
import Kontakty from "./views/Kontakty";
import Pobocky from "./views/Pobocky";
import FourOFour from "./views/FourOFour";
import Footer from "./views/Footer";
import WebmasterPage from "./views/WebmasterPage";

const App = () => {
  return (
    <Router>
      <Navbar />

      <Switch>
        <Route exact path="/chcizacit" component={ChciZacit} />
        <Route exact path="/onas" component={Onas} />
        <Route exact path="/pobocky" component={Pobocky} />
        <Route exact path="/kurzy" component={Kurzy} />
        <Route exact path="/kontakty" component={Kontakty} />
        <Route exact path="/webmaster" component={WebmasterPage} />
        <Route exact path="/" component={Home} />
        <Route exact path="/*" component={FourOFour} />
      </Switch>

      <Footer />
    </Router>
  );
};

export default App;
