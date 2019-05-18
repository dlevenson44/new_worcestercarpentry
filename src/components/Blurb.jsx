import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

import MobileNavBar from './MobileNavBar';

function Blurb(props) {
  return (
    <div className="blurb-container">
      <h5 className="blurb-text">
        At Worcester County Carpentry, our top priority is doing the right job for you.  With top notch customer service, we will work with you to make sure that every detail of our work is up to your liking and our standards.  With over 15 years experience of building, repairing, and remodeling, we do work on decks, floors, siding, windows, doors.
      </h5>
      <ul className="nav-bar">
        <li
          className="nav-item"
          onClick={() => props.pageSelector('decks')}
          id="left-edge"
        >
          Decks
        </li>
        <li
          className="nav-item"
          onClick={() => props.pageSelector('floors')}
        >
          Floors
        </li>
        <li
          className="nav-item"
          onClick={() => props.pageSelector('remodeling')}
        >
          Remodeling & Restoration
        </li>
        <li
          className="nav-item"
          onClick={() => props.pageSelector('roofing')}
        >
          Roofing
        </li>
        <li
          className="nav-item"
          onClick={() => props.pageSelector('siding')}
        >
          Siding
        </li>
        <li
          className="nav-item"
          onClick={() => props.pageSelector('windows')}
          id="right-edge"
        >
          Windows & Doors
        </li>
      </ul>
      <MobileNavBar
        pageSelector={props.pageSelector}
        displayMobileNav={props.displayMobileNav}
        toggleMobileNav={props.toggleMobileNav}
      />
    </div>
  );
}

Blurb.propTypes = {
  pageSelector: PropTypes.func.isRequired,
};

export default Blurb;
