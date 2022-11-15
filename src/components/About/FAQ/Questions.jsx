import React from 'react';
import { Question } from './Question';
import './Questions.css';

const questions = [
  { text: 'Learn more about pricing', link: '/pricing' },
  { text: 'Frequently asked questions', link: '/questions' },
  { text: 'On how we treat your data', link: '/privacy' },
  { text: 'Check out our blog', link: '/blog' },
];

export const Questions = () => (
  <div className="faq-questions-container">
    {questions.map((question, key) => <Question key={key} {...question} />)}
  </div>
)
