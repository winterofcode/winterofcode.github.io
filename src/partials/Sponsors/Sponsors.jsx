import React from "react";
import SponsorsCard from "./SponsorsCard";
import { sponsorData } from "constants/sponsorData";
import "./Sponsors.scss";

function Sponsors() {
  return (
    <div style={{ marginBottom: "30px" }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Sponsors</h1>
      <div className="sponsor-section">
        {sponsorData.map((user) => (
          <SponsorsCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default Sponsors;
