import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="nav">
      <a href="/">
        <img
          alt="logo"
          src="https://res.cloudinary.com/dsdaneoq8/image/upload/v1620592952/draculino/gb-logo-main_atpepu.jpg"
        />{" "}
      </a>
      <ul>
        <li>
          <Link to="/">Úvod</Link>
        </li>
        <li>
          <Link to="/onas">O nás</Link>
        </li>
        <li>
          <Link to="chcizacit">Nábor</Link>
        </li>
        <li>
          <Link to="/pobocky">Kde trénujeme</Link>
        </li>
        <li>
          <Link to="/kurzy">Kurzy</Link>
        </li>
        <li>
          <Link to="/kontakty">Kontakty</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
