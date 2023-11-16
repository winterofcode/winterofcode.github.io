
import React from 'react';
import './Team.scss';
import { teamData } from 'constants/teamData';

const Bg = () => {
  return (
    <div className="container">
      <div className="bubbles">
        <span style={{
          // @ts-ignore
          "--i": "11"
        }}></span>
        <span style={{
          // @ts-ignore
          "--i": "12"
        }}></span>
        <span style={{
          // @ts-ignore
          "--i": "24"
        }}></span>
        <span style={{
          // @ts-ignore
          "--i": "10"
        }}></span>
        <span style={{
          // @ts-ignore
          "--i": "14"
        }}></span>
        <span style={{
          // @ts-ignore
          "--i": "23"
        }}></span>
        <span style={{
          // @ts-ignore
          "--i": "18"
        }}></span>
        <span style={{
          // @ts-ignore
          "--i": "16"
        }}></span>
        <span style={{
          // @ts-ignore
          "--i": "19"
        }}></span>
        <span style={{
          // @ts-ignore
          "--i": "20"
        }}></span>
        <span style={{
          // @ts-ignore
          "--i": "22"
        }}></span>
        <span style={{
          // @ts-ignore
          "--i": "25"
        }}></span>
        <span style={{
          // @ts-ignore
          "--i": "18"
        }}></span>
        <span style={{
          // @ts-ignore
          "--i": "21"
        }}></span>
        <span style={{
          // @ts-ignore
          "--i": "15"
        }}></span>
        <span style={{
          // @ts-ignore
          "--i": "13"
        }}></span>
        <span style={{
          // @ts-ignore
          "--i": "26"
        }}></span>
        <span style={{
          // @ts-ignore
          "--i": "17"
        }}></span>
        <span style={{
          // @ts-ignore
          "--i": "13"
        }}></span>
        <span style={{
          // @ts-ignore
          "--i": "11"
        }}></span>
        <span style={{
          // @ts-ignore
          "--i": "11"
        }}></span>
        <span style={{
          // @ts-ignore
          "--i": "12"
        }}></span>
        <span style={{
          // @ts-ignore
          "--i": "24"
        }}></span>
        <span style={{
          // @ts-ignore
          "--i": "10"
        }}></span>
        <span style={{
          // @ts-ignore
          "--i": "14"
        }}></span>
        <span style={{
          // @ts-ignore
          "--i": "23"
        }}></span>
        <span style={{
          // @ts-ignore
          "--i": "18"
        }}></span>
        <span style={{
          // @ts-ignore
          "--i": "16"
        }}></span>
        <span style={{
          // @ts-ignore
          "--i": "19"
        }}></span>
        <span style={{
          // @ts-ignore
          "--i": "20"
        }}></span>
        <span style={{
          // @ts-ignore
          "--i": "22"
        }}></span>
        <span style={{
          // @ts-ignore
          "--i": "25"
        }}></span>
        <span style={{
          // @ts-ignore
          "--i": "18"
        }}></span>
        <span style={{
          // @ts-ignore
          "--i": "21"
        }}></span>
        <span style={{
          // @ts-ignore
          "--i": "15"
        }}></span>
        <span style={{
          // @ts-ignore
          "--i": "24"
        }}></span>
        <span style={{
          // @ts-ignore
          "--i": "10"
        }}></span>
        <span style={{
          // @ts-ignore
          "--i": "14"
        }}></span>
        <span style={{
          // @ts-ignore
          "--i": "23"
        }}></span>
        <span style={{
          // @ts-ignore
          "--i": "18"
        }}></span>
        <span style={{
          // @ts-ignore
          "--i": "14"
        }}></span>
        <span style={{
          // @ts-ignore
          "--i": "23"
        }}></span>
        <span style={{
          // @ts-ignore
          "--i": "18"
        }}></span>
        <span style={{
          // @ts-ignore
          "--i": "16"
        }}></span>
        <span style={{
          // @ts-ignore
          "--i": "19"
        }}></span>
        <span style={{
          // @ts-ignore
          "--i": "20"
        }}></span>
        <span style={{
          // @ts-ignore
          "--i": "22"
        }}></span>
        <span style={{
          // @ts-ignore
          "--i": "25"
        }}></span>
        <span style={{
          // @ts-ignore
          "--i": "18"
        }}></span>
        <span style={{
          // @ts-ignore
          "--i": "21"
        }}></span>
        <span style={{
          // @ts-ignore
          "--i": "15"
        }}></span>
        <span style={{
          // @ts-ignore
          "--i": "13"
        }}></span>
        <span style={{
          // @ts-ignore
          "--i": "26"
        }}></span>
        <span style={{
          // @ts-ignore
          "--i": "17"
        }}></span>
        <span style={{
          // @ts-ignore
          "--i": "13"
        }}></span>
        <span style={{
          // @ts-ignore
          "--i": "11"
        }}></span>
        <span style={{
          // @ts-ignore
          "--i": "11"
        }}></span>
        <span style={{
          // @ts-ignore
          "--i": "12"
        }}></span>
        <span style={{
          // @ts-ignore
          "--i": "24"
        }}></span>
        <span style={{
          // @ts-ignore
          "--i": "12"
        }}></span>
        <span style={{
          // @ts-ignore
          "--i": "23"
        }}></span>
        <span style={{
          // @ts-ignore
          "--i": "18"
        }}></span>
        <span style={{
          // @ts-ignore
          "--i": "14"
        }}></span>
        <span style={{
          // @ts-ignore
          "--i": "23"
        }}></span>
        <span style={{
          // @ts-ignore
          "--i": "18"
        }}></span>
        <span style={{
          // @ts-ignore
          "--i": "25"
        }}></span>
        <span style={{
          // @ts-ignore
          "--i": "18"
        }}></span>
        <span style={{
          // @ts-ignore
          "--i": "21"
        }}></span>
      </div>
    </div>
  )
}

const SocialMediaLinks = ({ socials }) => (
  <div className="social-media-links">
    {socials.map((item, index) => (
      <div key={index} className="social-media-link">
        <a href={item.url} target="_blank" rel="noopener noreferrer">
         <img src={item.icon}/>
        </a>
      </div>
    ))}
  </div>
);

const Card = ({ image, name,title, socials }) => (
  <div className="card">
    <div className="card-content">
      <img src={image} alt={name} className="avatar" />
       <div className="info">
        <h3 >{name}</h3>
        <h4 style={{color:"#ffffffef",fontSize:"20px"}}>{title}</h4>
        <SocialMediaLinks socials={socials} />
      </div>
    </div>
  </div>
);

const CardContainer = ({ teamData }) => (
  <div className='floating'>
  <div className="card-container">
    {teamData.map((card, index) => (
      <Card key={index} {...card} />
    ))}
  </div>
  </div>
);



const Team = () => (
  <div className="team">
    <Bg/>
    <h1 className='heading'>Our Team</h1>
    <CardContainer teamData={teamData} />
  </div>
);

export default Team;

