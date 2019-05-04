import React from 'react';
import Lightbox from 'react-image-lightbox';
import '../App.css';

import Image1 from '../imgs/decksporches/customdeckstairs1.jpg';
import Image2 from '../imgs/decksporches/decksporches4.jpg';
import Image3 from '../imgs/decksporches/decksporches9.jpg';
import Image4 from '../imgs/decksporches/decksporches6.jpg';
import Image5 from '../imgs/decksporches/decksporches2.jpg';
import Image6 from '../imgs/decksporches/decksporches7.jpg';

function Decks(props) {
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
            alt="worcester-county-carpentry-decks"
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
            alt="worcester-county-carpentry-decks"
            onClick={() => props.imageSelect()}
          />  
        )}
      </div>
    </div>
  );
}

export default Decks;
