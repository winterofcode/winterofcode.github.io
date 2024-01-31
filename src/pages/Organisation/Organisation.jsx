import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./Organisation.scss";
import { Modal, Tag, message } from "antd";

const Organisation = () => {
  const location = useLocation();
  const cardData = location.state && location.state.cardData;
  const [isOpened, setIsOpened] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsOpened(true);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setIsOpened(false);
  };
  const openInNewWindow = (url) => {
    window.open(url, "_blank");
  };
  const colors = [
    "magenta",
    "red",
    "volcano",
    "orange",
    "gold",
    "lime",
    "green",
    "cyan",
    "blue",
    "geekblue",
    "purple",
  ];
  return (
    <div className="Organisation">
      <h1>{cardData.organization}</h1>
      <h3>{cardData.noOfProjects} projects</h3>
      <div className="Organisation-project">
        {cardData.projects.map((project) => (
          <div className="Organisation-project-card" key={project.id}>
            <div className="Organisation-project-card-first">
              <div className="Organisation-project-card-student">
                <h4>Students allowed</h4>
                <p>{project.students}</p>
              </div>
              <div className="Organisation-project-card-mentor">
                <h4>Mentors</h4>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  {project.mentor.map((mentor, index) => (
                    <div key={mentor.id}>
                      <p onClick={mentor.linkedin ? () => openInNewWindow(mentor.linkedin) : undefined}>
                        {mentor.name}
                        {index < project.mentor.length - 1 && ", "}
                      </p>

                    </div>
                  ))}
                </div>
              </div>

              <div className="Organisation-project-card-tech">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    maxWidth: "600px",
                    flexWrap: "wrap",
                  }}
                >
                  {project.techStack.map((tech, index) => (
                    <Tag
                      color="#108ee9"
                      style={{ fontSize: "1rem", marginBottom: "5px" }}
                    >
                      {tech}
                    </Tag>
                  ))}
                </div>
              </div>
            </div>
            <div className="Organisation-project-card-description">
              <h2>{project.name}</h2>
              {project.description.length > 150 ? (
                <p>
                  {project.description.substring(0, 350)}
                  {"... "}
                  <span
                    style={{
                      color: "white",
                      cursor: "pointer",
                      textDecoration: "underline",
                    }}
                    onClick={() => openModal(project)}
                  >
                    See More
                  </span>
                </p>
              ) : (
                <p>{project.description}</p>
              )}
            </div>
            <div className="Organisation-project-card-button">
              {" "}
              <button onClick={() => openInNewWindow(project.codeLink)}>
                View Code
              </button>
              <p
                style={{
                  color: "white",
                  paddingBottom: "3px",
                  borderBottom: "1px solid white",
                  margin: "0",
                }}
                onClick={() =>
                  openInNewWindow("https://forms.gle/oemhBfWoGXdxtTNm8")
                }
              >
                Apply now
              </p>
            </div>
          </div>
        ))}
      </div>
      {selectedProject && (
        <Modal
          title={cardData.organization}
          centered
          open={isOpened}
          onCancel={closeModal}
          width={1000}
          footer={null}
        >
          <div className="Modal">
            <h1>{selectedProject.name}</h1>
            <div>
              <div className="Modal-first">
                <div className="Modal-Students">
                  <h4>Students allowed</h4>
                  <p>{selectedProject.students}</p>
                </div>
                <div className="Modal-mentor">
                  <h4>Mentors</h4>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    {selectedProject.mentor.map((mentor, index) => (
                      <div key={mentor.id}>
                        <p onClick={mentor.linkedin ? () => openInNewWindow(mentor.linkedin) : undefined}>
                          {mentor.name}
                          {index < selectedProject.mentor.length - 1 && ", "}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="Modal-tech">
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      flexWrap: "wrap",
                    }}
                  >
                    {selectedProject.techStack.map((tech, index) => (
                      <div key={tech.id}>
                        <p>
                          <Tag
                            color={
                              colors[Math.floor(Math.random() * colors.length)]
                            }
                            style={{ fontSize: "1rem", marginBottom: "5px" }}
                          >
                            {tech}
                          </Tag>
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div
                className="scroll-modal"
                style={{ overflowY: "auto", maxHeight: "400px" }}
              >
                <p>{selectedProject.description}</p>
              </div>

              <div className="Modal-buttons">
                <button
                  onClick={() => openInNewWindow(selectedProject.codeLink)}
                >
                  View Code
                </button>

                <p
                  style={{ color: "#000000", cursor: "pointer" }}
                  onClick={() =>
                    openInNewWindow("https://forms.gle/oemhBfWoGXdxtTNm8")
                  }
                >
                  Apply now
                </p>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Organisation;
