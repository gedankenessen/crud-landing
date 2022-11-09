import React from 'react';
import '../../base.css';
import './Square.css';

export const Square = ({ title, description }) => (
  <div className="square-container">
    <div className="square-title-container">
      {title}
    </div>
    <div className="square-description-container">
      {description}
    </div>
  </div>
)
