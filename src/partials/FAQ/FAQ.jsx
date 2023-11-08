import React,{useEffect,useState} from "react";
import "./FAQ.scss";
import faq from "./faq";
import { CaretRightOutlined } from '@ant-design/icons';
import { Collapse, Space } from "antd";
import { theme, ConfigProvider } from "antd";
console.log(faq);
const FAQ = () => {
  const { token } = theme.useToken();
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  useEffect(() => {
    
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 640); 
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div className="faq">
      <h1 className="head-faq">FAQs</h1>
      <ConfigProvider
        theme={{
          token: {
            Collapse: {
              headerPadding: "5px 10px",
              contentPadding: "2px 10px ",
              fontSize: isSmallScreen ? "10px" : "15px" // fixed syntax error
            },
            Input: {
              colorPrimary: "#eb2f96",
              algorithm: true, // Enable algorithm
            },
          },
        }}
      >
        {faq.map((item, index) => {
          return (
            <Collapse
            expandIcon={({ isActive }) => <CaretRightOutlined style={{
              padding: "7px 2px",
            }} rotate={isActive ? 90 : 0} />}
              key={index}
              accordion={true}
              style={{
                background: "#E0F4FF",
                marginBottom: "20px",
              }}
            >
              <Collapse.Panel
                header={<div>{item.label}</div>}
                key={item.key}
               
              >
                <p
                  className="accordion-text"
                  style={{
                    padding: "0px",
                  }}
                >
                  {item.children}
                </p>
              </Collapse.Panel>
            </Collapse>
          );
        })}
      </ConfigProvider>
    </div>
  );
};

export default FAQ;
