import React from 'react';
import { Link } from 'gatsby';
import './Question.css';

export const Question = ({ text, link }) => (
  <Link to={link} style={{ textDecoration: 'none' }}>
    <div className="question-wrapper">
      <p className="question-text">{text}</p>
      <hr className="question-line" />
    </div>
  </Link>
)
