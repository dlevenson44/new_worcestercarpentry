import React from 'react';
import '../App.css';

function Blurb(props) {
  return (
    <div className="blurb-container">
      <h5 className="blurb-text">
        At Worcester County Carpentry, our top priority is doing the right job for you.  With top notch customer service, we will work with you to make sure that every detail of our work is up to your liking and our standards.  With over 15 years experience of building, repairing, and remodeling, we do work on decks, floors, siding, windows, doors.
      </h5>
      <ul className="nav-bar">
        <li
          className="nav-item"
          onClick={(e) => props.pageSelector(e, 'decks')}
          id="left-edge"
        >
          Decks
        </li>
        <li
          className="nav-item"
          onClick={(e) => props.pageSelector(e, 'floors')}
        >
          Floors
        </li>
        <li
          className="nav-item"
          onClick={(e) => props.pageSelector(e, 'remodeling')}
        >
          Remodeling & Restoration
        </li>
        <li
          className="nav-item"
          onClick={(e) => props.pageSelector(e, 'roofing')}
        >
          Roofing
        </li>
        <li
          className="nav-item"
          onClick={(e) => props.pageSelector(e, 'siding')}
        >
          Siding
        </li>
        <li
          className="nav-item"
          onClick={(e) => props.pageSelector(e, 'windows')}
          id="right-edge"
        >
          Windows & Doors
        </li>
      </ul>
    </div>
  );
}

export default Blurb;
