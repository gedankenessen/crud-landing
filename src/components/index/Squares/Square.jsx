import React from 'react';
import '../../base.css';
import './Square.css';

export const Square = ({ title, description }) => (
  <div className="square-container">
    {title}
    {description}
  </div>
)
