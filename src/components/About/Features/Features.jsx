import React from 'react';
import { Feature } from './Feature';
import './Features.css';

const features = [
  {
    title: <h2>Build <span className="highlight">faster</span></h2>,
    description: <p>
      Quickly iterate over your types by sending a POST Request to our server.
      Operate over the latest version of your mock data via simple REST methods.
      Validate ideas in hours - instead of days.
    </p>,
  },
  {
    title: <h2>Don't mock data, <span className="highlight">prototype</span> it</h2>,
    description: <p>Don’t implement twice by instead getting your data from a backend right from the start.</p>,
  },
  {
    title: <h2><span className="highlight">Share</span> your progress easily</h2>,
    description: <p>No need for complicated deploy strategies. Everything is online and ready for you and your team.</p>,

  },
  {
    title: <h2>And <span className="highlight">more</span> coming soon</h2>,
    description: <ul className="feature-list">
      <li className="feature-list-item">Generate OpenId schemas from your prototypes</li>
      <li className="feature-list-item">Generate mock-data automatically</li>
    </ul>
  }
];

export const Features = () => (
  <div className="features-wrapper">
    {features.map((feature, key) => <Feature key={key} {...feature} />)}
  </div>
)
