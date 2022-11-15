import React from 'react';
import { Square } from './Square';
import './Squares.css';

export const Squares = ({ squares }) => (
  <div className="squares-container">
    {squares.map((square, key) =>
      <div key={key} className="squares-item-container">
        <Square {...square} />
      </div>
    )}
  </div>
)
