import React from "react";
import Data from "../../constants/SponsorData";
import SponsorsCard from "./SponsorsCard";
import "./Sponsors.scss";

function Sponsors() {
  return (
    <div style={{marginBottom: "30px"}}>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Sponsors</h1>
      <div className="Sponsor-section">
        {Data.map((user) => (
          <SponsorsCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default Sponsors;
