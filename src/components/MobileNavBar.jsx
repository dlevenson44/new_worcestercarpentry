import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../App.css'

function MobileNavBar(props) {
  const [displayMenu, toggleMenu] = useState(false);

  return (
    <div className="top-nav">
      <ul className="mobile-nav-container">
        <li
          className="mobile-nav"
          onClick={() => props.pageSelector('decks')}
        >
          Decks
        </li>
        <li
          className="mobile-nav"
          onClick={() => props.pageSelector('floors')}
        >
          Floors
        </li>
        <li
          className="mobile-nav"
          onClick={() => props.pageSelector('remodeling')}
        >
          Remodeling & Restoration
        </li>
        <li
          className="mobile-nav"
          onClick={() => props.pageSelector('roofing')}
        >
          Roofing
        </li>
        <li
          className="mobile-nav"
          onClick={() => props.pageSelector('siding')}
        >
          Siding
        </li>
        <li
          className="mobile-nav"
          onClick={() => props.pageSelector('windows')}
        >
          Windows & Doors
        </li>
      </ul>
      <a
        className="icon"
        onClick={() => console.log('open nav bar')}
      >
        <div className="hamburger" />
        <div className="hamburger" />
        <div className="hamburger" />
      </a>
    </div>
  );
}

export default MobileNavBar;
