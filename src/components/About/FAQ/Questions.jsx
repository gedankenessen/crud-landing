import React from 'react';
import { Question } from './Question';
import './Questions.css';

const questions = [
  { text: 'What can crud do?', link: '/wiki/what' },
  { text: 'How do install crud?', link: '/wiki/installation' },
  { text: 'What does the API offer?', link: '/wiki/api' },
  { text: 'Check out our blog', link: '/blog' },
];

export const Questions = () => (
  <div className="questions-wrapper">
    {questions.map((question, key) => <Question key={key} {...question} />)}
  </div>
)
