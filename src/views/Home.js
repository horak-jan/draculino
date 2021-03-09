import React from "react";
import HomeOne from "../components/home/HomeOne";
import HomeTwo from "../components/home/HomeTwo";
import HomeThree from "../components/home/HomeThree";
import HomeFour from "../components/home/HomeFour";

const Home = () => {
  return (
    <div className="home">
      <HomeOne />
      <HomeTwo />
      <HomeThree />
      <HomeFour />
    </div>
  );
};

export default Home;
