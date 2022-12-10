import { Link } from "gatsby";
import React from "react";
import Logo from '../../assets/logo-type-b.svg';
import { ThemeSwitcher } from '../ThemeSwitcher/ThemeSwitcher';
import './HeaderMobile.css';

export const HeaderMobile = ({ current, links }) => (
  <div className="header-mobile-burger-wrapper">
    <input className="header-mobile-burger-toggle" type="checkbox" labe="burger-menu-toggle" />
    <div className="header-mobile-burger-logo">
      <Link to='/'>
        <Logo className="header-mobile-burger-logo-image" />
      </Link>
    </div>
    <span className="header-mobile-burger-icon"></span>
    <span style={{ marginTop: 12 }} className="header-mobile-burger-icon"></span>
    <span style={{ marginTop: 24 }} className="header-mobile-burger-icon"></span>
    <div className="header-mobile-burger-nav">
      <div className="header-mobile-burger-item">
        {
          links.map((item, key) =>
            <Link
              key={key}
              className={
                current?.toLowerCase() === item?.title?.toLowerCase()
                  ? 'header-mobile-item-active'
                  : 'header-mobile-item-inactive'
              }
              target={item?.asNewTab ? '_blank' : '_self'}
              to={item?.link ?? `/${item?.title.toLowerCase()}`}>
              {item?.title}
            </Link>
          )
        }
        <div className="header-mobile-item-inactive">
          <ThemeSwitcher />
        </div>
        <hr className="header-mobile-burger-divider" />
        <p className="header-mobile-burger-subline">team@gedankenessen.de</p>
      </div>
    </div>
  </div>
)

export default HeaderMobile;
