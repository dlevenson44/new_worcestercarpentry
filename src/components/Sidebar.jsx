import React from 'react';

import '../App.css'
import Logo from '../imgs/logo.jpg'

function Sidebar() {
  return (
    <div className="sidebar-container">
      <img src={Logo} className="logo" alt="worcester-county-carpentry-logo" />
      <h1 className="sidebar-header">Worcester County</h1>
      <h1 className="sidebar-header" id="header2">Carpentry</h1>
      <h3 className="sidebar-subheader">Over 15 Years Experience</h3>     
      <p class="sidebar-text">
        Next time you're thinking of having work done to your home give us a call.  Whether it's an addition, remodel, or a restoration, we will get the job done right for you.
      </p>
      <p class="sidebar-text">    
        Call us today:  <a class="sidebar-link" href="tel:508-523-6797">508-523-6797</a>
      </p>
      <p class="sidebar-text">
        Need masonry work done? <a class="sidebar-link" href="http://worcesterchimneys.com/">Click here!</a>
      </p>
    </div>
  );
}

export default Sidebar;
