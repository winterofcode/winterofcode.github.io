import React from "react";
import "./Apply.scss";
import { Button, Flex, Segmented } from 'antd';

const boxStyle = {
  width: '100%',
  height: 120,
};

const Apply = () => {
  return (
    
    <>
      <div className="box">
        <div className="heading">
          Apply
        </div>
        <div className="discription">
          Start your journey with Winter Of Code & be a part of our Open Source community
          <br />
          Check the Timeline section .Applications will open on the mentioned date.
        </div>
        <Flex gap="small" align="start" wrap="wrap">
        <Flex style={boxStyle} justify='space-around' align='center'>
          <Button type="primary" className="primary">Apply As Organisation</Button>
          <Button type="primary" className="primary">Apply As Community Partner</Button>
          <Button type="primary" className="primary">Apply As Mentor</Button>
          <Button type="primary" className="primary">Apply As Student</Button>
        </Flex>
        </Flex>
      </div>
    </>
    )
};

export default Apply;
