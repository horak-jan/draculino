import React, { useState } from "react";
import { Link } from "react-router-dom";
import BurgerIconOpen from "../../styles/burger-icon-up.png";
import BurgerIconClosed from "../../styles/burger-icon-down.png";
import Logo from "../../images/gb-logo-burger.jpg";

const Burger = () => {
  const [visible, setVisible] = useState(false);

  return (
    <nav className="burger">
      <a href="/">
        <img id="logo" src={Logo} alt="logo gracie barra draculino" />
      </a>
      {/* burger button when closed/open*/}
      <div
        onClick={() => setVisible(true)}
        className={
          visible
            ? "burger-button-wrapper-opened"
            : "burger-button-wrapper-closed"
        }
      >
        <p>Menu</p>
        <img
          className="burger-button"
          alt="Closed menu button"
          src={BurgerIconClosed}
        />
      </div>
      {/* burger menu links */}
      <div className={visible ? "visible-style" : "hidden-style"}>
        <div>
          <ul>
            <li>
              <Link onClick={() => setVisible(false)} to="/">
                Úvod
              </Link>
            </li>
            <li>
              <Link onClick={() => setVisible(false)} to="/onas">
                O nás
              </Link>
            </li>
            <li>
              <Link onClick={() => setVisible(false)} to="chcizacit">
                Nábor
              </Link>
            </li>
            <li>
              <Link onClick={() => setVisible(false)} to="/pobocky">
                Kde trénujeme
              </Link>
            </li>
            <li>
              <Link onClick={() => setVisible(false)} to="/kurzy">
                Kurzy
              </Link>
            </li>
            <li>
              <Link onClick={() => setVisible(false)} to="/kontakty">
                Kontakty
              </Link>
            </li>
          </ul>
        </div>
        {/* burger button for closing */}

        <div
          onClick={() => setVisible(false)}
          className="burger-visible-button-wrapper"
        >
          <img
            className="burger-button"
            alt="Opened menu button"
            src={BurgerIconOpen}
          />
        </div>
      </div>
    </nav>
  );
};

export default Burger;
