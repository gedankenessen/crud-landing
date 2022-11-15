import React from 'react';
import '../../base.css';
import './Square.css';

export const Square = ({ title, description }) => (
  <div className="square-wrapper">
    <div className="square-title-wrapper">
      {title}
    </div>
    <div className="square-description-wrapper">
      {description}
    </div>
  </div>
)
