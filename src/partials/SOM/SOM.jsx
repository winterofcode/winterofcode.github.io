import React from "react";
import "./SOM.scss";
// @ts-ignore
import students from "assets/image 4.svg";
// @ts-ignore
import organisations from "assets/image 5.svg";
// @ts-ignore
import mentors from "assets/image 6.svg";

const SOM = () => {
  return (
    <div className="content-container">
      <div className="title-container">
        <h1 className="title">Let's Build Something Awesome Together</h1>
        <br />
        <p className="description">
          Developer Students Club of NSEC brings to you Winter of Code, a
          month-long extravaganza of Open Source contribution. Join students,
          organisations, and mentors to build amazing projects together.
        </p>
        <br />
      </div>

      <div className="card-containerSOM">
        <div className="cardSOM">
          <div className="card-header">
            <h2>Students</h2>
          </div>
          <img src={students} alt="Students" className="card-image1" />
          <p className="card-description">
            Students interested in Winter of Code can register by filling a
            form. Selected students will work with mentors from their accepted
            organisations. They'll amalgamate with their organisations before
            coding, learning about the community. Students have one month to
            code and meet deadlines agreed upon with mentors. Successful
            completion earns cool schwags.
          </p>
        </div>

        <div className="cardSOM">
          <div className="card-header">
            <h2>Organisations</h2>
          </div>
          <img
            src={organisations}
            alt="Organisations"
            className="card-image"
          />
          <p className="card-description">
            Open source organisations can apply to be mentor organisations. Once
            accepted, organisations discuss ideas with students and decide on
            proposals to mentor. They provide feedback, guiding each student
            through the program. Mentors and students collaborate to determine
            milestones and requirements. Mentor interaction is a vital part of
            the program.
          </p>
        </div>

        <div className="cardSOM">
          <div className="card-header">
            <h2>Mentors</h2>
          </div>
          <img src={mentors} alt="Mentors" className="card-image1" />
          <p className="card-description">
            Mentors guide students throughout their projects, reviewing code
            samples. They offer valuable feedback, suggesting improvements.
            Mentors determine if a student has successfully completed the
            Winter of Code project. Students are then notified of the
            pass/fail status, and schwags are delivered accordingly.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SOM;
