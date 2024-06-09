// src/components/BackgroundWrapper.jsx
import React from 'react';
import './Background.css';

const BackgroundWrapper = ({ children }) => {
  return (
  <div className="background-wrapper">
    <div className="content-wrapper">
      {children}
    </div>
  </div>
);
};

export default BackgroundWrapper;
