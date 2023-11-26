import React from "react";
import "./Apply.scss";
import { Button, message } from "antd";

const Apply = () => {
  const openInNewWindow = (url) => {
    window.open(url, "_blank");
  };

  return (
    <>
      <div className="box" id="organization">
        <div className="heading">Apply</div>
        <div className="discription">
          Start your journey with Winter Of Code & be a part of our Open Source
          community.
          <br />
          Check the Timeline section. Applications will open on the mentioned
          date.
        </div>
        <div className="buttons">
          <div className="btn_wrap1">
            <Button
              type="primary"
              className="primary"
              onClick={() =>
                openInNewWindow("https://forms.gle/wx1CKpzGCt6yXY6M7")
              }
            >
              Apply As Organisation
            </Button>
            <Button
              type="primary"
              className="primary"
              onClick={() =>
                openInNewWindow("https://forms.gle/uY693jkYamRQ6bfv5")
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
                openInNewWindow("https://forms.gle/VCjpHpUvyR6Abr2W9")
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
