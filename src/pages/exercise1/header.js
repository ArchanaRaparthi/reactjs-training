import React from "react";
import { Link } from "react-router-dom";
import "./header.scss";

const Header = () => {
  return (
        <div className="topnav">
            <img
              className="logo"
              src="https://www.nineleaps.com/wp-content/themes/nineleaps/assets/img/nineleaps-logo-footer.svg"
              alt="logo"
            ></img>
          <Link to="/signin">
            <button className="nav-button">Sign in</button>
          </Link>
        </div>
  );
};

export default Header;
