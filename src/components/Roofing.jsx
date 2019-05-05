import React from 'react';
import PropTypes from 'prop-types';
import Lightbox from 'react-image-lightbox';
import '../App.css';

import Image1 from '../imgs/roofing/roofing2.JPG';
import Image2 from '../imgs/roofing/roofing4.JPG';
import Image3 from '../imgs/roofing/roofing5.JPG';
import Image4 from '../imgs/roofing/roofing8.JPG';
import Image5 from '../imgs/roofing/roofing1.JPG';
import Image6 from '../imgs/roofing/roofing7.JPG';

function Roofing(props) {
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
            alt="worcester-county-carpentry-roofing"
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
            alt="worcester-county-carpentry-roofing"
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

Roofing.propTypes = {
  handleShowDialog: PropTypes.func.isRequired,
  imageSelect: PropTypes.func.isRequired,
  photoIndex: PropTypes.number.isRequired,
  showDialog: PropTypes.bool.isRequired,
};


export default Roofing;
