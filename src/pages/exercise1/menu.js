import React from "react";
import "./menu.scss";

const MenuItem = (props) => {
  return (
    <div className="menu-item">
      <div className="content">
        <img src={props.imageUrl} alt="img"></img>
        <h1 className="title">{props.title}</h1>
        <span className="subtitle">{props.subtitle}</span>
        <br></br>
        <button className="redirect-button">Click</button>
      </div>
    </div>
  );
};

export default MenuItem;
