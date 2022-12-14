import React from 'react';
import { Feature } from './Feature';
import './Features.css';

const features = [
  {
    title: <h2>Build <span className="highlight">faster</span></h2>,
    description: <p>
      Easily create a full CRUD endpoint by POSTing your JSON to crud.
      Query, add, delete and iterate your data - all by using HTTP methods.
    </p>,
  },
  {
    title: <h2>Don't mock data, <span className="highlight">prototype</span> it</h2>,
    description: <p>
      Don’t implement twice - get your data from a backend right from the start.
      No need to add state transition wiring after the fact - design with it in mind.
    </p>,
  },
  {
    title: <h2><span className="highlight">Share</span> your progress easily</h2>,
    description: <p>No need for complicated deploy strategies. Everything is online and ready for you and your team.</p>,
  },
  {
    title: <h2>And <span className="highlight">more</span> coming soon</h2>,
    description: <ul className="feature-list">
      <li className="feature-list-item">Generate OpenAPI schemas from your prototypes</li>
      <li className="feature-list-item">Generate mock-data automatically</li>
    </ul>
  }
];

export const Features = () => (
  <div className="features-wrapper">
    {features.map((feature, key) => <Feature key={key} {...feature} />)}
  </div>
)
