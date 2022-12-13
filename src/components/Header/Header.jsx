import React from 'react';
import { HeaderMobile } from './HeaderMobile';
import { HeaderDesktop } from './HeaderDesktop';

import './Header.css';

const links = [
  {
    title: 'About',
  },
  {
    title: 'Wiki',
  },
  {
    title: 'Blog',
  },
  {
    title: 'Github',
    link: 'https://github.com/gedankenessen/crud',
    asNewTab: true,
  },
];

export const Header = ({ current }) => (
  <div className="header-container">
    <div className="header-mobile">
      <HeaderMobile current={current} links={links} />
    </div>
    <div className="header-desktop">
      <HeaderDesktop current={current} links={links} />
    </div>
  </div>
)
