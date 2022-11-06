import React from 'react';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import '../base.css';
import './Layout.css';

export const Layout = ({ children }) => (
  <>
    <Header />
    <div className="layout-content">
      {children}
    </div>
    <Footer />
  </>
)
