import React, { useEffect, useState } from "react";
import styles from "./FAQ.scss";

import { CaretRightOutlined } from "@ant-design/icons";
import { Collapse, Space } from "antd";
import { theme, ConfigProvider } from "antd";
import faqData from "constants/faqData";

const FAQ = () => {
  const { token } = theme.useToken();
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 640);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="faq">
      <h1 className={styles.head_faq}>FAQs</h1>
      <ConfigProvider
        theme={{
          token: {
            Collapse: {
              headerPadding: "5px 10px",
              contentPadding: "2px 10px ",
              fontSize: isSmallScreen ? "10px" : "15px", // fixed syntax error
            },
            Input: {
              colorPrimary: "#eb2f96",
              algorithm: true, // Enable algorithm
            },
          },
        }}
      > 
        {faqData.map((item, index) => {
          return (
            <Collapse className={styles.accordion_collapse} 
              expandIcon={({ isActive }) => (
                <CaretRightOutlined
                  style={{
                    padding: "7px 2px",
                  }}
                  rotate={isActive ? 90 : 0}
                />
              )}
              key={index}
              accordion={true}
              style={{
                background: "#E0F4FF",
                marginBottom: "20px",
              }}
            >
              <Collapse.Panel header={item.label} key={item.key}>
                <p
                  className={styles.accordion_text}
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
