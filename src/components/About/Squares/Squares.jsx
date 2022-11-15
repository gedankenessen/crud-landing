import React from 'react';
import { Square } from './Square';
import './Squares.css';

const squares = [
  {
    title: <h3>Build <span className="highlight">faster</span></h3>,
    description: <p>Quickly iterate over your types - all you need is a POST request.</p>
  },
  {
    title: <h3>Don't mock data, <span className="highlight">prototype</span> it</h3>,
    description: <p>Don't implement twice by instead getting your data from a backend right from the start.</p>
  },
  {
    title: <h3><span className="highlight">Share</span> your progress easily</h3>,
    description: <p>No need for complicated deploy strategies. Everything is online and ready for you and your team.</p>
  },
];

export const Squares = () => (
  <div className="squares-container">
    {squares.map((square, key) =>
      <div key={key} className="squares-item-container">
        <Square {...square} />
      </div>
    )}
  </div>
)
