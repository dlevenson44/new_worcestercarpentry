import React from 'react';

import '../App.css'
import Logo from '../imgs/logo.jpg'

function Sidebar() {
  return (
    <div className="sidebar-container">
      <img src={Logo} className="logo" alt="worcester-county-carpentry-logo" />
    </div>
  );
}

export default Sidebar;
