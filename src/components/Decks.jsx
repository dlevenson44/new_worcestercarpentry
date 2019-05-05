import React from 'react';
import PropTypes from 'prop-types';
import Lightbox from 'react-image-lightbox';
import '../App.css';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app


import Image1 from '../imgs/decksporches/customdeckstairs1.jpg';
import Image2 from '../imgs/decksporches/decksporches4.jpg';
import Image3 from '../imgs/decksporches/decksporches9.jpg';
import Image4 from '../imgs/decksporches/decksporches6.jpg';
import Image5 from '../imgs/decksporches/decksporches2.jpg';
import Image6 from '../imgs/decksporches/decksporches7.jpg';

function Decks(props) {
  const { 
    handleShowDialog,
    imageSelect,
    photoIndex,
    showDialog
  } = props;

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

  const allImages = topRowImages.concat(bottomRowImages);

  return (
    <div className="section-container">
      <div className="row">
        {topRowImages.map(row =>
          <img
            className="small-grid-img"
            src={row}
            key={row}
            alt="worcester-county-carpentry-decks"
            onClick={() => handleShowDialog()}
          />
        )}
        {showDialog && (
          <Lightbox
            mainSrc={allImages[photoIndex]}
            nextSrc={allImages[(photoIndex + 1) % allImages.length]}
            prevSrc={allImages[(photoIndex + allImages.length - 1) % allImages.length]}
            onCloseRequest={() => handleShowDialog()}
            onMovePrevRequest={() => imageSelect('prev')}
            onMoveNextRequest={() => imageSelect('next')}
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
            onClick={() => handleShowDialog()}
          />  
        )}
        {showDialog && (
          <Lightbox
            mainSrc={allImages[photoIndex]}
            nextSrc={allImages[(photoIndex + 1) % allImages.length]}
            prevSrc={allImages[(photoIndex + allImages.length - 1) % allImages.length]}
            onCloseRequest={() => handleShowDialog()}
            onMovePrevRequest={() => imageSelect('prev')}
            onMoveNextRequest={() => imageSelect('next')}
          />
        )}
      </div>
    </div>
  );
}

Decks.propTypes = {
  handleShowDialog: PropTypes.func.isRequired,
  imageSelect: PropTypes.func.isRequired,
  photoIndex: PropTypes.number.isRequired,
  showDialog: PropTypes.bool.isRequired,
};

export default Decks;
