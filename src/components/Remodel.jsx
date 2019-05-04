import React from 'react';
import '../App.css';

import Image1 from '../imgs/remodel/remodel10.jpg';
import Image2 from '../imgs/restoration/restoration_1.JPG';
import Image3 from '../imgs/remodel/remodel11.jpg';
import Image4 from '../imgs/restoration/restoration_2.JPG';
import Image5 from '../imgs/repair/repair1.JPG';
import Image6 from '../imgs/repair/repair2.JPG';

function Remodel(props) {
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
            alt="worcester-county-carpentry-remodeling-restoration"
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
            alt="worcester-county-carpentry-remodeling-restoration"
            onClick={() => props.imageSelect()}
          />  
        )}
      </div>
    </div>
  );
}

export default Remodel;
