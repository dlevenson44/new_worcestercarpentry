import React from 'react';
import '../App.css';

import Image1 from '../imgs/decksporches/customdeckstairs1.jpg';
import Image2 from '../imgs/decksporches/decksporches4.jpg';
import Image3 from '../imgs/decksporches/decksporches9.jpg';
import Image4 from '../imgs/decksporches/decksporches6.jpg';
import Image5 from '../imgs/decksporches/decksporches2.jpg';
import Image6 from '../imgs/decksporches/decksporches7.jpg';

function Decks(props) {
  return (
    <div className="section-container">
      <div className="row">
        <img
          className="small-grid-img"
          alt="worcester-county-carpentry-decks"
          src={Image1}
          onClick={(e) => props.imageSelect(e)}
        />
        <img
          className="small-grid-img"
          alt="worcester-county-carpentry-decks"
          src={Image2}
          onClick={(e) => props.imageSelect(e)}
        />
        <img
          className="small-grid-img"
          alt="worcester-county-carpentry-decks"
          src={Image3}
          onClick={(e) => props.imageSelect(e)}
        />
      </div>
      <div className="row">
        <img
          className="small-grid-img"
          alt="worcester-county-carpentry-decks"
          src={Image4}
          onClick={(e) => props.imageSelect(e)}
        />
        <img
          className="small-grid-img"
          alt="worcester-county-carpentry-decks"
          src={Image5}
          onClick={(e) => props.imageSelect(e)}
        />
        <img
          className="small-grid-img"
          alt="worcester-county-carpentry-decks"
          src={Image6}
          onClick={(e) => props.imageSelect(e)}
        />
      </div>
    </div>
  );
}

export default Decks;
