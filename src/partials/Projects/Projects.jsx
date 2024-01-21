// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Projects.scss";
import newProjectData from "constants/newProjectData";
import ProjectCard from "components/ProjectCard/ProjectCard";

const Projects = () => {
  return (
    <div className="projects">
      <div className="projects-container">
        <h1>Projects</h1>
        <div className="projects-card-conatiner">
          {newProjectData.map((project, index) => (
            <ProjectCard data={project} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
