import React from 'react';
import '../App.css';

import Image1 from '../imgs/siding/siding16.JPG';
import Image2 from '../imgs/siding/siding9.jpg';
import Image3 from '../imgs/siding/siding11.JPG';
import Image4 from '../imgs/siding/siding4.JPG';
import Image5 from '../imgs/siding/siding8.jpg';
import Image6 from '../imgs/siding/siding14.JPG';

function Siding() {
  return (
    <div className="section-container">
      <div className="row">
        <img
          className="small-grid-img"
          alt="worcester-county-carpentry-siding"
          src={Image1}
        />
        <img
          className="small-grid-img"
          alt="worcester-county-carpentry-siding"
          src={Image2}
        />
        <img
          className="small-grid-img"
          alt="worcester-county-carpentry-siding"
          src={Image3}
        />
      </div>
      <div className="row">
        <img
          className="small-grid-img"
          alt="worcester-county-carpentry-siding"
          src={Image4}
        />
        <img
          className="small-grid-img"
          alt="worcester-county-carpentry-siding"
          src={Image5}
        />
        <img
          className="small-grid-img"
          alt="worcester-county-carpentry-siding"
          src={Image6}
        />
      </div>
    </div>
  );
}

export default Siding;
