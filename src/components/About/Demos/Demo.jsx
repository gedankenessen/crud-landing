import React from 'react';
import './Demo.css';

export const Demo = ({ text, code }) => (
  <div className="demo-wrapper">
    {text}
    {code}
  </div>
)
