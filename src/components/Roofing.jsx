import React from 'react';
import '../App.css';

import Image1 from '../imgs/roofing/roofing2.JPG';
import Image2 from '../imgs/roofing/roofing4.JPG';
import Image3 from '../imgs/roofing/roofing5.JPG';
import Image4 from '../imgs/roofing/roofing8.JPG';
import Image5 from '../imgs/roofing/roofing1.JPG';
import Image6 from '../imgs/roofing/roofing7.JPG';

function Roofing() {
  return (
    <div className="section-container">
      <div className="row">
        <img
          className="small-grid-img"
          alt="worcester-county-carpentry-roofing"
          src={Image1}
        />
        <img
          className="small-grid-img"
          alt="worcester-county-carpentry-roofing"
          src={Image2}
        />
        <img
          className="small-grid-img"
          alt="worcester-county-carpentry-roofing"
          src={Image3}
        />
      </div>
      <div className="row">
        <img
          className="small-grid-img"
          alt="worcester-county-carpentry-roofing"
          src={Image4}
        />
        <img
          className="small-grid-img"
          alt="worcester-county-carpentry-roofing"
          src={Image5}
        />
        <img
          className="small-grid-img"
          alt="worcester-county-carpentry-roofing"
          src={Image6}
        />
      </div>
    </div>
  );
}

export default Roofing;
