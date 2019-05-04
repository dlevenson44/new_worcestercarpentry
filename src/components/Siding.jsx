import React from 'react';
import '../App.css';

import Image1 from '../imgs/siding/siding16.JPG';
import Image2 from '../imgs/siding/siding9.jpg';
import Image3 from '../imgs/siding/siding11.JPG';
import Image4 from '../imgs/siding/siding4.JPG';
import Image5 from '../imgs/siding/siding8.jpg';
import Image6 from '../imgs/siding/siding14.JPG';

function Siding(props) {
  return (
    <div className="section-container">
      <div className="row">
        <img
          className="small-grid-img"
          alt="worcester-county-carpentry-siding"
          src={Image1}
          onClick={(e) => props.imageSelect(e)}
        />
        <img
          className="small-grid-img"
          alt="worcester-county-carpentry-siding"
          src={Image2}
          onClick={(e) => props.imageSelect(e)}
        />
        <img
          className="small-grid-img"
          alt="worcester-county-carpentry-siding"
          src={Image3}
          onClick={(e) => props.imageSelect(e)}
        />
      </div>
      <div className="row">
        <img
          className="small-grid-img"
          alt="worcester-county-carpentry-siding"
          src={Image4}
          onClick={(e) => props.imageSelect(e)}
        />
        <img
          className="small-grid-img"
          alt="worcester-county-carpentry-siding"
          src={Image5}
          onClick={(e) => props.imageSelect(e)}
        />
        <img
          className="small-grid-img"
          alt="worcester-county-carpentry-siding"
          src={Image6}
          onClick={(e) => props.imageSelect(e)}
        />
      </div>
    </div>
  );
}

export default Siding;
