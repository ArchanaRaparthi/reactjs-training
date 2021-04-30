import React from 'react';
// import './menu-items.styles.css';

const MenuItem = ({ title }) => (
  <div className="imageContainer">
    <div className="content">
      <h1>{title}</h1>
    </div>
  </div>
);

export default MenuItem;
