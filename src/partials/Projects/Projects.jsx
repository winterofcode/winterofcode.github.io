import React from "react";
import "./Projects.scss";
import Cards from "components/Cards/Cards";
import projectData from "constants/projectData";
// import Card from 
const Projects = () => {
  return (
    <>
        <div className="container">
        {projectData.map((projectData, index) =>
            <div key={projectData.name + index}>
              <Cards/>
            </div>
            )}
        </div>
    </>
  )
};

export default Projects;
