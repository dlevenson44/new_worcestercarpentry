import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../App.css'

function MobileNavBar(props) {
  console.log(props.displayMobileNav)
  return (
    <div className="top-nav">
      {!!props.displayMobileNav && (
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

      )}

      <p
        className="icon"
        onClick={props.toggleMobileNav}
      >
        <div className="hamburger" />
        <div className="hamburger" />
        <div className="hamburger" />
      </p>
    </div>
  );
}

export default MobileNavBar;
