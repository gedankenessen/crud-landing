import React from 'react';
import { Square } from './Square';
import './Squares.css';

export const Squares = ({ squares }) => (
  <div className="squares-container">
    {squares.map((square, key) => <Square key={key} {...square} />)}
  </div>
)
