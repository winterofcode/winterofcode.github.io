import React from "react";
import "./Footer.scss";
import {
  InstagramOutlined,
  FacebookOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
// @ts-ignore
import wocLogo from "../../assets/wocLogo1.png";
// @ts-ignore
import gdscLogo from "../../assets/gdscLogo1.png";
import footerData from "../../constants/footerData";

const Footer = () => {
  const openInNewWindow = (url) => {
    window.open(url, "_blank");
  };
  return (
    <div className="footer" >
      <div className="footer_top">
        <div className="footer_logo">
          <div className="footer_logo_first">
            <img src={wocLogo} className="footer_woc_logo" alt="" />
            <h1 className="footer_logo_text">Winter Of Code</h1>
          </div>
          <div className="footer_logo_socials">
            <InstagramOutlined
              className="footer_logo_socials_icons1"
              style={{ cursor: "pointer" }}
              onClick={() => openInNewWindow(footerData.instagram)}
            />
            <FacebookOutlined
              className="footer_logo_socials_icons2"
              style={{ cursor: "pointer" }}
              onClick={() => openInNewWindow(footerData.facebook)}
            />
            <TwitterOutlined
              className="footer_logo_socials_icons3"
              style={{ cursor: "pointer" }}
              onClick={() => openInNewWindow(footerData.twitter)}
            />
          </div>
        </div>
        <div className="footer_resources">
          <h1 className="footer_resources_heading">Resources</h1>
          <p
            className="footer_resources_text"
            style={{ cursor: "pointer" }}
            onClick={() => openInNewWindow(footerData.introToMl)}
          >
            Intro to AIML
          </p>
          <p
            className="footer_resources_text"
            style={{ cursor: "pointer" }}
            onClick={() => openInNewWindow(footerData.logoGenerator)}
          >
            Logo Generator
          </p>
          <p
            className="footer_resources_text"
            style={{ cursor: "pointer" }}
            onClick={() => openInNewWindow(footerData.nsecGo)}
          >
            DSC NSEC Go
          </p>
          <p
            className="footer_resources_text"
            style={{ cursor: "pointer" }}
            onClick={() => openInNewWindow(footerData.fullStackProjects)}
          >
            Full Stack Projects
          </p>
          <p
            className="footer_resources_text"
            style={{ cursor: "pointer" }}
            onClick={() => openInNewWindow(footerData.cloud)}
          >
            30 Days Of Google Cloud
          </p>
        </div>
        <div className="footer_socials">
          <h1 className="footer_socials_heading">DSC NSEC Handles</h1>
          <p
            className="footer_socials_text"
            style={{ cursor: "pointer" }}
            onClick={() => openInNewWindow(footerData.instagram)}
          >
            Instagram
          </p>
          <p
            className="footer_socials_text"
            style={{ cursor: "pointer" }}
            onClick={() => openInNewWindow(footerData.facebook)}
          >
            Facebook
          </p>
          <p
            className="footer_socials_text"
            style={{ cursor: "pointer" }}
            onClick={() => openInNewWindow(footerData.twitter)}
          >
            Twitter
          </p>
          <p
            className="footer_socials_text"
            style={{ cursor: "pointer" }}
            onClick={() => openInNewWindow(footerData.telegram)}
          >
            Telegram
          </p>
          <p
            className="footer_socials_text"
            style={{ cursor: "pointer" }}
            onClick={() => openInNewWindow(footerData.youtube)}
          >
            YouTube
          </p>
        </div>
      </div>
      <div className="footer_bottom">
        <img src={gdscLogo} alt="" />
        <p>© 2023 DSC NSEC. All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
