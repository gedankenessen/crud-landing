import React from 'react';
import { Link } from "gatsby";
import './BreadCrumps.css';

export const BreadCrumps = ({ crumps = [] }) => (
  <div className="crumps-container">
    {
      /* Show at least `/` if crumps is empty */
      (crumps.length > 0)
        ? crumps.map(({ crump, link }, index) =>
          <>
            <p key={`${index}/chain`} className="crumps-chain">/</p>
            <Link key={`${index}/crump`} className="crumps-link" to={link}>{crump}</Link>
          </>
        )
        : <p className="crumps-chain">/</p>
    }
  </div>
)
