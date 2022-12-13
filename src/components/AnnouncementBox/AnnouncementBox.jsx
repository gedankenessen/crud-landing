import React from 'react';
import { Link } from 'gatsby';
import './AnnouncementBox.css';

export const AnnouncementBox = ({ headline, subline, disabled = false, link }) => {
  const Wrap = (disabled) ? 'div' : Link;
  return (
    <Wrap to={link} className="announcement-box-wrapper">
      <div className={disabled ? "announcement-box-container-disabled" : "announcement-box-container"}>
        <div className="announcement-box-headline-container">
          <p className="announcement-box-headline">{headline}</p>
        </div>
        <div className="announcement-box-subline-container">
          <p className="announcement-box-subline">{subline}</p>
        </div>
      </div>
    </Wrap>
  )
}
