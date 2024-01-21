import React from "react";
import "./Community.scss";
import Marquee from "react-fast-marquee";
import { community } from "constants/communityData";

const Community = () => {
  return (
    <div className="scroll">
      <h1 className="community">Community Partners</h1>
      <Marquee pauseOnHover speed={70}>
        {community.map((item) => {
          return (
            <a
              target="_blank"
              href={item.link}
              key={item.name}
              rel="noreferrer"
            >
              <img className="image" src={item.url} alt={item.name} />
            </a>
          );
        })}
        {community.map((item) => {
          return (
            <a
              target="_blank"
              href={item.link}
              key={item.name}
              rel="noreferrer"
            >
              <img className="image" src={item.url} alt={item.name} />
            </a>
          );
        })}
      </Marquee>
      <Marquee pauseOnHover speed={70} direction="right">
        {community.map((item) => {
          return (
            <a
              target="_blank"
              href={item.link}
              key={item.name}
              rel="noreferrer"
            >
              <img className="image" src={item.url} alt={item.name} />
            </a>
          );
        })}
        {community.map((item) => {
          return (
            <a
              target="_blank"
              href={item.link}
              key={item.name}
              rel="noreferrer"
            >
              <img className="image" src={item.url} alt={item.name} />
            </a>
          );
        })}
        {community.map((item) => {
          return (
            <a
              target="_blank"
              href={item.link}
              key={item.name}
              rel="noreferrer"
            >
              <img className="image" src={item.url} alt={item.name} />
            </a>
          );
        })}
      </Marquee>
    </div>
  );
};

export default Community;
