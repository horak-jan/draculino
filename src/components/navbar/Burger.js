import React, { useState } from "react";
import { Link } from "react-router-dom";

const Burger = () => {
  const [visible, setVisible] = useState(false);

  return (
    <nav className="burger">
      <a href="/">
        <img
          id="logo"
          src="https://res.cloudinary.com/dsdaneoq8/image/upload/v1620592952/draculino/gb-logo-burger_t4s8qb.jpg"
          alt="logo gracie barra draculino"
        />
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
          src="https://res.cloudinary.com/dsdaneoq8/image/upload/v1620593019/draculino/burger-icon-down_j6gyqr.png"
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
            src="https://res.cloudinary.com/dsdaneoq8/image/upload/v1620593020/draculino/burger-icon-up_fjlgkl.png"
          />
        </div>
      </div>
    </nav>
  );
};

export default Burger;
