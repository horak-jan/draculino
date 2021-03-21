import React from "react";
import { Link } from "react-router-dom";
import LogoNavLarge from "../../images/gb-logo-main.jpg";

const Nav = () => {
  return (
    <nav className="nav">
      <img alt="logo" src={LogoNavLarge} />
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
