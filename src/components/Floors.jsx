import React from 'react';
import '../App.css';

import Image1 from '../imgs/flooring/flooring3.jpg';
import Image2 from '../imgs/flooring/flooring1.jpg';
import Image3 from '../imgs/flooring/flooring6.jpg';
import Image4 from '../imgs/flooring/flooring4.jpg';
import Image5 from '../imgs/flooring/flooring2.jpg';
import Image6 from '../imgs/flooring/flooring5.jpg';

function Floors() {
  return (
    <div className="section-container">
      <div className="row">
        <img
          className="small-grid-img"
          alt="worcester-county-carpentry-floors"
          src={Image1}
        />
        <img
          className="small-grid-img"
          alt="worcester-county-carpentry-floors"
          src={Image2}
        />
        <img
          className="small-grid-img"
          alt="worcester-county-carpentry-floors"
          src={Image3}
        />
      </div>
      <div className="row">
        <img
          className="small-grid-img"
          alt="worcester-county-carpentry-floors"
          src={Image4}
        />
        <img
          className="small-grid-img"
          alt="worcester-county-carpentry-floors"
          src={Image5}
        />
        <img
          className="small-grid-img"
          alt="worcester-county-carpentry-floors"
          src={Image6}
        />
      </div>
    </div>
  );
}

export default Floors;
