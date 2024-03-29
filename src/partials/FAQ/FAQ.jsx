import React, { useEffect, useState } from "react";
import "./FAQ.scss";

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
    <div className="faq" id="faq">
      <h1 className="head_faq">FAQs</h1>
      <ConfigProvider
        theme={{
          token: {
            // @ts-ignore
            Collapse: {
              headerPadding: "5px 10px",
              contentPadding: "2px 10px ",
              fontSize: isSmallScreen ? "16px" : "18px", // fixed syntax error
            },
            Input: {
              colorPrimary: "#eb2f96",
              algorithm: true,
            },
          },
        }}
      >
        {faqData.map((item, index) => {
          return (
            <Collapse
              className={"accordion_collapse"}
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
                  className={"accordion_text"}
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
