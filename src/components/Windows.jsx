import React from 'react';
import '../App.css';

import Image1 from '../imgs/windowsdoors/windowsdoors2.jpg';
import Image2 from '../imgs/windowsdoors/windowsdoors3.jpg';
import Image3 from '../imgs/windowsdoors/windowsdoors1.jpg';
import Image4 from '../imgs/remodel/remodel8.jpg';
import Image5 from '../imgs/windowsdoors/windowsdoors4.jpg';
import Image6 from '../imgs/remodel/remodel7.jpg';

function Windows(props) {
  return (
    <div className="section-container">
      <div className="row">
        <img
          className="small-grid-img"
          alt="worcester-county-carpentry-windows-doors"
          src={Image1}
          onClick={(e) => props.imageSelect(e)}
        />
        <img
          className="small-grid-img"
          alt="worcester-county-carpentry-windows-doors"
          src={Image2}
          onClick={(e) => props.imageSelect(e)}
        />
        <img
          className="small-grid-img"
          alt="worcester-county-carpentry-windows-doors"
          src={Image3}
          onClick={(e) => props.imageSelect(e)}
        />
      </div>
      <div className="row">
        <img
          className="small-grid-img"
          alt="worcester-county-carpentry-windows-doors"
          src={Image4}
          onClick={(e) => props.imageSelect(e)}
        />
        <img
          className="small-grid-img"
          alt="worcester-county-carpentry-windows-doors"
          src={Image5}
          onClick={(e) => props.imageSelect(e)}
        />
        <img
          className="small-grid-img"
          alt="worcester-county-carpentry-windows-doors"
          src={Image6}
          onClick={(e) => props.imageSelect(e)}
        />
      </div>
    </div>
  );
}

export default Windows;
