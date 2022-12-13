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
      <Link to='/wiki/what#why' className="footer-link"><p className="footer-text">Why crud?</p></Link>
      <Link to='/wiki/first-steps' className="footer-link"><p className="footer-text">Getting started</p></Link>
      <Link to='/wiki/installation' className="footer-link"><p className="footer-text">Installation</p></Link>
    </div>
    <div className="footer-interest-container">
      <Link to='/wiki' className="footer-link"><p className="footer-text">Wiki</p></Link>
      <Link to='/blog' className="footer-link"><p className="footer-text">Blog</p></Link>
    </div>
    <div className="footer-service-container">
      <Link to='/contact' className="footer-link"><p className="footer-text">Contact</p></Link>
      <Link to='www.github.com/gedankenessen/crud' target='_blank' className="footer-link-ext"><p className="footer-text">Github</p></Link>
      <Link to='https://hub.docker.com/r/gedankenessen/crud' target='_blank' className="footer-link-ext"><p className="footer-text">Dockerhub</p></Link>
    </div>
  </footer>
)


