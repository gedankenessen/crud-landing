import { Link } from "gatsby";
import React from "react";
import Logo from '../../assets/logo-type-b.svg';
import { ThemeSwitcher } from '../ThemeSwitcher/ThemeSwitcher';
import './HeaderDesktop.css';

export const HeaderDesktop = ({ current, links }) => (
  <div className="header-desktop-wrapper">
    <div className="header-desktop-logo">
      <Link to='/'>
        <Logo className="header-desktop-logo-image" />
      </Link>
    </div>
    <div className="header-desktop-links">
      {
        links.map((item, key) =>
          <Link
            key={key}
            className={
              current?.toLowerCase() === item?.title?.toLowerCase()
                ? 'header-desktop-item-active'
                : 'header-desktop-item-inactive'
            }
            style={item?.asNewTab ? { textDecoration: 'underline' } : {}}
            target={item?.asNewTab ? '_blank' : '_self'}
            to={item?.link ?? `/${item?.title.toLowerCase()}`}>
            {item?.title}
          </Link>
        )
      }
      <div className="header-destop-item-inactive">
        <ThemeSwitcher />
      </div>
    </div>
  </div>
)

export default HeaderDesktop;
