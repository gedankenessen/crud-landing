import React from 'react';
import './Button.css';

export const Button = ({ title, style, onClick = () => { } }) => (
  <button className='button' style={style} onClick={onClick}>{title}</button>
)
