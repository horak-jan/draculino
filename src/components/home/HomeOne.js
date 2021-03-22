import React from "react";
import HomeHeader from "./HomeHeader";
import HomeLargeScreen from "./HomeLargeScreen";
import HomeOneContact from "./HomeOneContact";
import HomeOneCovid from "./HomeOneCovid";

const HomeOne = () => {
  return (
    <div className="home-one">
      <HomeHeader />

      <HomeOneCovid />

      <HomeLargeScreen />

      <HomeOneContact />
    </div>
  );
};

export default HomeOne;
