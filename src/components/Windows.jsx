import React from 'react';
import '../App.css';

import Image1 from '../imgs/windowsdoors/windowsdoors2.jpg';
import Image2 from '../imgs/windowsdoors/windowsdoors3.jpg';
import Image3 from '../imgs/windowsdoors/windowsdoors1.jpg';
import Image4 from '../imgs/remodel/remodel8.jpg';
import Image5 from '../imgs/windowsdoors/windowsdoors4.jpg';
import Image6 from '../imgs/remodel/remodel7.jpg';

function Windows() {
  return (
    <div className="section-container">
      <div className="row">
        <img
          className="small-grid-img"
          alt="worcester-county-carpentry-windows-doors"
          src={Image1}
        />
        <img
          className="small-grid-img"
          alt="worcester-county-carpentry-windows-doors"
          src={Image2}
        />
        <img
          className="small-grid-img"
          alt="worcester-county-carpentry-windows-doors"
          src={Image3}
        />
      </div>
      <div className="row">
        <img
          className="small-grid-img"
          alt="worcester-county-carpentry-windows-doors"
          src={Image4}
        />
        <img
          className="small-grid-img"
          alt="worcester-county-carpentry-windows-doors"
          src={Image5}
        />
        <img
          className="small-grid-img"
          alt="worcester-county-carpentry-windows-doors"
          src={Image6}
        />
      </div>
    </div>
  );
}

export default Windows;
