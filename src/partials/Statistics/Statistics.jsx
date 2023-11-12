import React, { useState, useEffect } from "react";
import "./Statistics.scss";

import { PiUser } from 'react-icons/pi';
import { PiBuildings } from 'react-icons/pi';
import{HiOutlineUserGroup} from 'react-icons/hi'


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
    <strong className="stat-number" >
      {count}
      {showPlus && "+"}
    </strong>
  );
};

const Statistics = () => {
  return (
    <div className="statistics-container">
      <div className="statistics-box">
        <PiUser className="user-icon" size={"70px"} />
        <br />
        <AnimatedNumber value={400} showPlus />
        <span className="stat-label">Students</span>
      </div>
      <div className="statistics-box">
        <PiBuildings className="pi-buildings-icon" size={"70px"} />
        <br />
        <AnimatedNumber value={10} showPlus />
        <span className="stat-label">Organisations</span>
      </div>
      <div className="statistics-box">
        <HiOutlineUserGroup className="mentor-icon" size={"70px"} />
        <br />
        <AnimatedNumber value={40} showPlus />
        <span className="stat-label">Mentors</span>
      </div>
    </div>
  );
};

export default Statistics;
