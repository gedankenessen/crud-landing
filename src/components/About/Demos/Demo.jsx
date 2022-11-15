import React from 'react';
import './Demo.css';

export const Demo = ({ text, code }) => (
  <div className="demo-wrapper">
    <div className="demo-text">
      {text}
    </div>
    <div className="demo-code">
      {code}
    </div>
  </div>
)
