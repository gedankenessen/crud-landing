import React from 'react';
import { Link } from 'gatsby';
import './Question.css';

export const Question = ({ text, link }) => (
  <Link to={link}>
    <div className="faq-question-container">
      <h3>{text}</h3>
      <hr className="faq-question-line" />
    </div>
  </Link>
)
