import React from "react";
import "./About.scss";

const About = () => {
  return (
    <div className="main-container">
      <h1 className="header">About The Program</h1>

      <p className="description">
        Winter of Code is a program aimed to increase participation for the
        Google Summer of Code program among students in colleges and
        universities.
        <br />
        <br />
        Winter of Code is here to light up your winter spirits with the wide
        world of open source development. This initiative aims to prepare you
        for the grand Google Summer of Code. Join us for a month-long
        programming project with an open-source organisation.
        <br />
        <br />
        As a part of the Winter of Code, students are paired with mentors from
        the participating organisation. This initiative aims at developing your
        skills in real-world software development in a wide range of
        specializations. In turn, the participating organisation gets to know
        your potential and also gives you the correct exposure that you need in
        your formative years. Above all, we hope you get encouraged into the
        world of open source and develop more code for the benefit of all.
      </p>
    </div>
  );
};

export default About;
