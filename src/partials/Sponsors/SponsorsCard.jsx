import React from "react";
import "./SponsorsCard.scss";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const SponsorsCard = ({ user }) => {
  return (
    <div className="sponsor-card" style={{backgroundColor: user.bgColor}}>
      <div className="circle">
        <img src={user.profileImage} alt={user.name} />
      </div>
      <div className="overlay" style={{ backgroundColor: user.color }}>
        <h2 style={{marginBottom: "15px"}}>{user.tag}</h2>
        <div>
          <a
            href={user.websiteLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{ margin: "10px" }}
          >
            <FaExternalLinkAlt style={{ fontSize: "25px" }} />
          </a>
          <a
            href={user.linkedInLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{ margin: "10px" }}
          >
            <FaLinkedin style={{ fontSize: "30px" }} />
          </a>
        </div>
      </div>
      <div className="name-container">
        <h3>{user.name}</h3>
      </div>
    </div>
  );
};

export default SponsorsCard;
