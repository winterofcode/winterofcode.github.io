import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return <div onClick={() => navigate("/team")}>Navbar</div>;
};

export default Navbar;
