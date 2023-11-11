import React from "react";
import "./SOM.scss"; // Import the SCSS file


const Build = () => {
  return (
    
      <div className="content-container">

        <div className="card-container">
          <div className="card">
            <div className="card-header">
              <h2>Students</h2>
            </div>
            <img src="assets/motive_students.png" alt="Students" className="card-image" />
            <p className="card-description">
              Students who are interested can register for the Winter of Code by
              filling a form. Students who are selected will work with mentors
              of the organisation that they are accepted for. If accepted,
              students amalgamate with their organisations prior to the start of
              coding and learn more about their organisation’s community.
              Students then have one month to code and meet the deadlines agreed
              upon with their mentors. On successful completion of the program
              students will be rewarded with some cool schwags.
            </p>
          </div>

          <div className="card">
            <div className="card-header">
              <h2>Organisations</h2>
            </div>
              
            <p className="card-description">
              Open source organisations can apply to be mentor organisations.
              Once accepted, organisations discuss possible ideas with students
              and then decide on the proposals they wish to mentor for the
              winter. They provide feedback to help guide each student through
              the program. Mentors and students work together to determine
              appropriate milestones and requirements for the winter. Mentor
              interaction is a vital part of the program.
            </p>
            <img
                src="assets/motive_organisations.png"
                alt="Organisations"
                className="card-image"
              />
          </div>

          <div className="card">
            <div className="card-header">
              <h2>Mentors</h2>
            </div>
            <img src="assets/motive_mentor.png" alt="Mentors" className="card-image" />
            <p className="card-description">
              Mentors guide the students throughout their projects and review
              their code samples multiple times. They provide valuable feedback
              and suggest possible improvements to the code. They also determine
              if a student has successfully completed the Winter of code 2020
              project. Students are then notified of the pass/fail status and
              schwags are delivered accordingly.
            </p>
          </div>
        </div>
      </div>

  );
};

export default Build;
