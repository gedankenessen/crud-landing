import React from 'react';
import { Link } from 'gatsby';
import './Question.css';

export const Question = ({ text, link }) => (
  <Link to={link} style={{ textDecoration: 'none' }}>
    <div className="faq-question-container">
      <p className="faq-question-text">{text}</p>
      <hr className="faq-question-line" />
    </div>
  </Link>
)
