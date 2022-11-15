import React from 'react';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import '../base.css';
import './Layout.css';
import { Theme } from '../../hooks/useTheme';

export const Layout = ({ current, children }) => (
  <>
    <Theme>
      <div className="layout-wrapper">
        <Header current={current} />
        <div className="layout-content">
          {children}
        </div>
        <Footer />
      </div>
    </Theme>
  </>
)
