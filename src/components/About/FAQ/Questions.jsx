import React from 'react';
import { Question } from './Question';
import './Questions.css';

export const Questions = ({ questions }) => (
  <div className="faq-questions-container">
    {questions.map((question, key) => <Question key={key} {...question} />)}
  </div>
)
