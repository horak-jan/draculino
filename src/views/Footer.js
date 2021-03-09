import React from "react";
import Copyright from "../components/footer/Copyright";
import HomeOneContactMedia from "../components/home/HomeOneContactMedia";
import Webmaster from "../components/footer/Webmaster";

const Footer = () => {
  return (
    <div className="footer">
      <HomeOneContactMedia />

      <Copyright />

      <Webmaster />
    </div>
  );
};

export default Footer;
