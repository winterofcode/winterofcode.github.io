import React from "react";
import "./Apply.scss";
import { Button, Flex, message } from "antd";

// const boxStyle = {
//   width: '100%',
//   height: 120,
// };

const Apply = () => {
  return (
    <>
      <div className="box" id="organization">
        <div className="heading">Apply</div>
        <div className="discription">
          Start your journey with Winter Of Code & be a part of our Open Source
          community
          <br />
          Check the Timeline section .Applications will open on the mentioned
          date.
        </div>
        <div className="buttons">
          <div className="btn_wrap1">
            <Button
              type="primary"
              className="primary"
              onClick={() =>
                message.warning(
                  "Applications for Organisations have not started yet."
                )
              }
            >
              Apply As Organisation
            </Button>
            <Button
              type="primary"
              className="primary"
              onClick={() =>
                message.warning(
                  "Applications for Community Partners have not started yet."
                )
              }
            >
              Apply As Community Partner
            </Button>
          </div>
          <div className="btn_wrap2">
            <Button
              type="primary"
              className="primary"
              onClick={() =>
                message.warning(
                  "Applications for Mentors have not started yet."
                )
              }
            >
              Apply As Mentor
            </Button>
            <Button
              type="primary"
              className="primary"
              onClick={() =>
                message.warning(
                  "Applications for Students have not started yet."
                )
              }
            >
              Apply As Student
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Apply;
