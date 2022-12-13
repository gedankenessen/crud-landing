import React from 'react';
import { AnnouncementBox } from '../../AnnouncementBox/AnnouncementBox';
import './Options.css';

const options = [{
  headline: 'Self-Hosted',
  subline: 'Learn more',
  link: '/wiki/installation'
},
{
  headline: 'Crud-As-A-Service',
  subline: 'Coming Soon',
  disabled: true,
}];

export const Options = () => (
  <div className="about-options-container">
    {options.map((option, index) => <AnnouncementBox key={index} {...option} />)}
  </div>
)
