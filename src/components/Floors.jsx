import React from 'react';
import '../App.css';

import Image1 from '../imgs/flooring/flooring3.jpg';
import Image2 from '../imgs/flooring/flooring1.jpg';
import Image3 from '../imgs/flooring/flooring6.jpg';
import Image4 from '../imgs/flooring/flooring4.jpg';
import Image5 from '../imgs/flooring/flooring2.jpg';
import Image6 from '../imgs/flooring/flooring5.jpg';

function Floors(props) {
  return (
    <div className="section-container">
      <div className="row">
        <img
          className="small-grid-img"
          alt="worcester-county-carpentry-floors"
          src={Image1}
          onClick={(e) => props.imageSelect(e)}
        />
        <img
          className="small-grid-img"
          alt="worcester-county-carpentry-floors"
          src={Image2}
          onClick={(e) => props.imageSelect(e)}
        />
        <img
          className="small-grid-img"
          alt="worcester-county-carpentry-floors"
          src={Image3}
          onClick={(e) => props.imageSelect(e)}
        />
      </div>
      <div className="row">
        <img
          className="small-grid-img"
          alt="worcester-county-carpentry-floors"
          src={Image4}
          onClick={(e) => props.imageSelect(e)}
        />
        <img
          className="small-grid-img"
          alt="worcester-county-carpentry-floors"
          src={Image5}
          onClick={(e) => props.imageSelect(e)}
        />
        <img
          className="small-grid-img"
          alt="worcester-county-carpentry-floors"
          src={Image6}
          onClick={(e) => props.imageSelect(e)}
        />
      </div>
    </div>
  );
}

export default Floors;
