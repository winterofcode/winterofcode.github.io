import React, { useEffect, useState } from "react";
import { Drawer } from "antd";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
// @ts-ignore
import logo from "../../assets/org-logo.png";
import "./Navbar.scss";
import { Link, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const [navBackground, setNavBackground] = useState(false);
  const location = useLocation();
  useEffect(() => {
    if (location.pathname !== "/") {
      setNavBackground(true);
      return;
    }
    window.addEventListener("scroll", changeBackground);

    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, [location.pathname]);

  useEffect(() => {
    window.addEventListener("resize", changeSize);
    return () => {
      window.removeEventListener("resize", changeSize);
    };
  }, []);
  function changeBackground() {
    if (window.scrollY >= 400) {
      setNavBackground(true);
    } else {
      setNavBackground(false);
    }
  }
  function changeSize() {
    if (window.innerWidth > 900) {
      setShowNav(false);
    }
  }
  function closeNavMenu() {
    setShowNav(false);
    if (location.pathname !== "/") setNavBackground(false);
  }

  return (
    <>
      <div className={navBackground ? "navbar active" : "navbar"}>
        <div className="menuIcon" onClick={() => setShowNav(!showNav)}>
          {!showNav ? <GiHamburgerMenu /> : <RxCross2 />}
        </div>

        <div className="logo">
          <img className="logoImg" src={logo} alt="logo" />
          <HashLink smooth to="/#top" onClick={closeNavMenu}>
            <h1>Winter Of Code</h1>
          </HashLink>
        </div>
        <NavMenu />
      </div>
      <Drawer
        height={260}
        closeIcon={false}
        placement="bottom"
        style={{
          backgroundColor: "white",
          border: "none",
          borderRadius: "20px 20px 0px 0px",
          boxShadow: "15px 15px 15px 15px black",
        }}
        open={showNav}
        onClose={() => setShowNav(false)}
      >
        <NavMenu isInline={true} closeNavMenu={closeNavMenu} />
      </Drawer>
    </>
  );
};

export default Navbar;

// eslint-disable-next-line react/prop-types
function NavMenu({ isInline = false, closeNavMenu = null }) {
  const mobileStyle = {
    listStyle: "none",
    flexDirection: "column",
    fontWeight: 700,
    color: "#505050",
  };
  const style = isInline ? mobileStyle : {};
  function scrollWithOffset(el) {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -90;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  }
  return (
    <ul className="menu" style={style}>
      <li>
        <a href="https://dscnsec.com/" target="_blank" rel="noreferrer">
          GDSC NSEC
        </a>
      </li>
      <li onClick={closeNavMenu}>
        <Link to="/team">Team</Link>
      </li>
      <li onClick={closeNavMenu}>
        <HashLink
          smooth
          to="/#organization"
          scroll={(el) => scrollWithOffset(el)}
        >
          Organization
        </HashLink>
      </li>
      <li onClick={closeNavMenu}>
        <HashLink smooth to="/#timeline" scroll={(el) => scrollWithOffset(el)}>
          Timeline
        </HashLink>
      </li>
      <li onClick={closeNavMenu}>
        <HashLink smooth to="/#faq" scroll={(el) => scrollWithOffset(el)}>
          FAQ
        </HashLink>
      </li>
    </ul>
  );
}
