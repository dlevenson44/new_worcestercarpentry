import React from 'react';
import '../App.css';

import Image1 from '../imgs/remodel/remodel7.jpg';
import Image2 from '../imgs/restoration/restoration_1.JPG';
import Image3 from '../imgs/remodel/remodel11.jpg';
import Image4 from '../imgs/restoration/restoration_2.JPG';
import Image5 from '../imgs/remodel/remodel9.jpg';
import Image6 from '../imgs/remodel/remodel3.jpg';

function Remodel() {
  return (
    <div className="section-container">
      <div className="row">
        <img
          className="small-grid-img"
          alt="worcester-county-carpentry-remodeling"
          src={Image1}
        />
        <img
          className="small-grid-img"
          alt="worcester-county-carpentry-remodeling"
          src={Image2}
        />
        <img
          className="small-grid-img"
          alt="worcester-county-carpentry-remodeling"
          src={Image3}
        />
      </div>
      <div className="row">
        <img
          className="small-grid-img"
          alt="worcester-county-carpentry-remodeling"
          src={Image4}
        />
        <img
          className="small-grid-img"
          alt="worcester-county-carpentry-remodeling"
          src={Image5}
        />
        <img
          className="small-grid-img"
          alt="worcester-county-carpentry-remodeling"
          src={Image6}
        />
      </div>
    </div>
  );
}

export default Remodel;
