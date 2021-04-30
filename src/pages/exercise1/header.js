import React from "react";
import "./header.scss";
import { useState } from "react";

const Header = () => {
  const [toggle, setToggle] = useState("Sign In");
  const handleToggle = () => {
    setToggle("Sign Out");
  };
  return (
    <div className="header">
      <img
        src="https://www.nineleaps.com/wp-content/themes/nineleaps/assets/img/nineleaps-logo-footer.svg"
        alt="Logo"
        className="logo"
      />
      <button className="button" onClick={handleToggle}>
        {toggle}
      </button>
    </div>
  );
};

export default Header;
