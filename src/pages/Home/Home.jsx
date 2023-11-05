import React from "react";
import "./Home.scss";
import LandingHome from "partials/LandingHome/LandingHome";
import About from "partials/About/About";
import Statistics from "partials/Statistics/Statistics";
import SOM from "partials/SOM/SOM";
import Apply from "partials/Apply/Apply";
import Projects from "partials/Projects/Projects";
import Timeline from "partials/Timeline/Timeline";
import FAQ from "partials/FAQ/FAQ";

const Home = () => {
  return (
    <div>
      <LandingHome />
      <About />
      <Statistics />
      <SOM />
      <Apply />
      <Projects />
      <Timeline />
      <FAQ />
    </div>
  );
};

export default Home;
