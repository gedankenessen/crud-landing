import React from 'react';
import { Link } from "gatsby";
import './BreadCrumps.css';

export const BreadCrumps = ({ crumps = [] }) => (
  <div className="crumps-wrapper">
    {
      /* Show at least `/` if crumps is empty */
      (crumps.length > 0)
        ? crumps.map(({ crump, link }, index) =>
          <div key={index} className="crumps-container">
            <p className="crumps-chain">/</p>
            <Link className="crumps-link" to={link}>{crump}</Link>
          </div>
        )
        : <p className="crumps-chain">/</p>
    }
  </div>
)
