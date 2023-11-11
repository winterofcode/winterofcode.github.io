import React, { useState, useEffect } from "react";
import "./Statistics.scss";
import { FiUser } from "react-icons/fi";
import { ImUserTie } from "react-icons/im";
import { VscOrganization } from "react-icons/vsc";

const AnimatedNumber = ({ value, duration = 2000, showPlus = true }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);

      setCount(Math.floor(value * percentage));

      if (progress < duration) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);

    return () => {
      setCount(value); // Ensure the final value is displayed when the component unmounts
    };
  }, [value, duration]);

  return (
    <strong className="stat-number">
      {count}
      {showPlus && "+"}
    </strong>
  );
};

const Statistics = () => {
  return (
    <div className="statistics-container">
      <div className="statistics-box">
        <FiUser size={"70px"} />
        <br />
        <AnimatedNumber value={400} showPlus />
        <span className="stat-label">Students</span>
      </div>
      <div className="statistics-box">
        <VscOrganization size={"70px"} />
        <br />
        <AnimatedNumber value={10} showPlus />
        <span className="stat-label">Organisations</span>
      </div>
      <div className="statistics-box">
        <ImUserTie size={"70px"} />
        <br />
        <AnimatedNumber value={40} showPlus />
        <span className="stat-label">Mentors</span>
      </div>
    </div>
  );
};

export default Statistics;
