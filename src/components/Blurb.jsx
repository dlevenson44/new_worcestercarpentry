import React from 'react';
import '../App.css';

function Blurb() {
  return (
    <div className="blurb-container">
      <h5 className="blurb-text">
        At Worcester County Carpentry, our top priority is doing the right job for you.  With top notch customer service, we will work with you to make sure that every detail of our work is up to your liking and our standards.  With over 15 years experience of building, repairing, and remodeling, we do work on decks, floors, siding, windows, doors.
      </h5>
      <ul className="nav-bar">
        <li className="nav-item" onClick={() => console.log('clicked')}>
          Decks
        </li>
        <li className="nav-item" onClick={() => console.log('clicked')}>
          Floors
        </li>
        <li className="nav-item" onClick={() => console.log('clicked')}>
          Remodeling & Restoration
        </li>
        <li className="nav-item" onClick={() => console.log('clicked')}>
          Roofing
        </li>
        <li className="nav-item" onClick={() => console.log('clicked')}>
          Siding
        </li>
        <li className="nav-item" onClick={() => console.log('clicked')}>
          Windows & Doors
        </li>
      </ul>
    </div>
  );
}

export default Blurb;
