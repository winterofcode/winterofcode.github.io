import React from 'react';
import "./ProjectCard.scss"
// @ts-ignore
import gdscLogo from "../../assets/woc.svg"
import { useNavigate } from 'react-router-dom';
const ProjectCard = ({data}) => {
 
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/${data.organization}/projects`,{ state: { cardData: data } })
  }
  return (
    <div className='single-card-container'>
      <img src={data.imageUrl} alt="" />
      <div className='single-card-description'>
      <h2>{data.organization}</h2>
      <p>{data.noOfProjects} projects</p>
      <button onClick={handleClick}>View Details</button>
      </div>
      
    </div>
  );
}

export default ProjectCard;
