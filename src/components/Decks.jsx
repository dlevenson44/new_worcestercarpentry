import React from 'react';
import '../App.css';

import Image1 from '../imgs/decksporches/customdeckstairs1.jpg';
import Image2 from '../imgs/decksporches/decksporches4.jpg';
import Image3 from '../imgs/decksporches/decksporches9.jpg';
import Image4 from '../imgs/decksporches/decksporches6.jpg';
import Image5 from '../imgs/decksporches/decksporches2.jpg';
import Image6 from '../imgs/decksporches/decksporches7.jpg';

function Decks() {
  return (
    <div className="section-container">
      <div className="row">
        <img
          className="small-grid-img"
          alt="worcester-county-carpentry-decks"
          src={Image1}
        />
        <img
          className="small-grid-img"
          alt="worcester-county-carpentry-decks"
          src={Image2}
        />
        <img
          className="small-grid-img"
          alt="worcester-county-carpentry-decks"
          src={Image3}
        />
      </div>
      <div className="row">
        <img
          className="small-grid-img"
          alt="worcester-county-carpentry-decks"
          src={Image4}
        />
        <img
          className="small-grid-img"
          alt="worcester-county-carpentry-decks"
          src={Image5}
        />
        <img
          className="small-grid-img"
          alt="worcester-county-carpentry-decks"
          src={Image6}
        />
      </div>
    </div>
  );
}

export default Decks;
