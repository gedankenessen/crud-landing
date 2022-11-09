import React from 'react';
import Logo from '../../assets/logo-type-b.svg';
import './Header.css';

export const Header = () => (
  <header className="header-container">
    <Logo className="header-logo" alt="Logo" />
    <div className="burger-menu-container">
      <span className="burger-menu-item" />
      <span className="burger-menu-item" />
      <span className="burger-menu-item" />
    </div>
  </header>
)
