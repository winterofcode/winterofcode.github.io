import React, { useState, useEffect, useRef } from "react";
import "./Statistics.scss";

import { PiUser } from "react-icons/pi";
import { PiBuildings } from "react-icons/pi";
import { HiOutlineUserGroup } from "react-icons/hi";

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
  const statisticsRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    });
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Change this threshold as needed
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    if (statisticsRef.current) {
      observer.observe(statisticsRef.current);
    }

    return () => {
      if (statisticsRef.current) {
        observer.unobserve(statisticsRef.current);
      }
    };
  }, []);

  return (
    <div className="statistics-container" ref={statisticsRef}>
      {isVisible && (
        <>
          <div className="statistics-box">
            <PiUser className="user-icon" size={"36px"} />
            <br />
            <AnimatedNumber value={400} showPlus />
            <span className="stat-label">Students</span>
          </div>
          <div className="statistics-box">
            <PiBuildings className="pi-buildings-icon" size={"36px"} />
            <br />
            <AnimatedNumber value={10} showPlus />
            <span className="stat-label">Organizations</span>
          </div>
          <div className="statistics-box">
            <HiOutlineUserGroup className="mentor-icon" size={"36px"} />
            <br />
            <AnimatedNumber value={40} showPlus />
            <span className="stat-label">Mentors</span>
          </div>
        </>
      )}
    </div>
  );
};

export default Statistics;
