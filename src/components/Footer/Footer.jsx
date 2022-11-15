import { Link } from 'gatsby';
import React from 'react';
import Logo from '../../assets/logo-type-a.svg';
import './Footer.css';

export const Footer = () => (
  <footer className="footer-container">
    <Link to='/'>
      <Logo className="footer-logo" />
    </Link>
    <div className="footer-access-container">
      <Link to='/login' className="footer-link"><p className="footer-text">Login</p></Link>
      <Link to='/login' className="footer-link"><p className="footer-text">Register</p></Link>
    </div>
    <div className="footer-interest-container">
      <Link to='/login' className="footer-link"><p className="footer-text">Pricing</p></Link>
      <Link to='/login' className="footer-link"><p className="footer-text">Features</p></Link>
      <Link to='/login' className="footer-link"><p className="footer-text">FAQ</p></Link>
    </div>
    <div className="footer-service-container">
      <Link to='/login' className="footer-link"><p className="footer-text">Blog</p></Link>
      <Link to='/login' className="footer-link"><p className="footer-text">Privacy</p></Link>
      <Link to='/login' className="footer-link"><p className="footer-text">Terms</p></Link>
      <Link to='/login' className="footer-link"><p className="footer-text">Contact</p></Link>
    </div>
  </footer>
)
