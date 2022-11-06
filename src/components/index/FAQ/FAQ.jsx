import React from 'react';
import { Question } from './Question';
import './FAQ.css';

export const FAQ = ({ questions }) => (
  <div className="faq-questions-container">
    {questions.map((question, key) => <Question key={key} {...question} />)}
  </div>
)
