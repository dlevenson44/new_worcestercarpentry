import React from 'react';
import '../App.css';

import Image1 from '../imgs/roofing/roofing2.JPG';
import Image2 from '../imgs/roofing/roofing4.JPG';
import Image3 from '../imgs/roofing/roofing5.JPG';
import Image4 from '../imgs/roofing/roofing8.JPG';
import Image5 from '../imgs/roofing/roofing1.JPG';
import Image6 from '../imgs/roofing/roofing7.JPG';

function Roofing(props) {
  const topRowImages = [
    Image1,
    Image2,
    Image3,
  ];

  const bottomRowImages = [
    Image4,
    Image5,
    Image6,
  ];

  return (
    <div className="section-container">
      <div className="row">
        {topRowImages.map(row =>
          <img
            className="small-grid-img"
            src={row}
            key={row}
            alt="worcester-county-carpentry-roofing"
            onClick={() => props.imageSelect()}
          />
        )}
      </div>
      <div className="row">
        {bottomRowImages.map(row =>
          <img
            className="small-grid-img"
            src={row}
            key={row}
            alt="worcester-county-carpentry-roofing"
            onClick={() => props.imageSelect()}
          />  
        )}
      </div>
    </div>
  );
}

export default Roofing;
