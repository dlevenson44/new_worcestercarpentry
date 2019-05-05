import React from 'react';
import PropTypes from 'prop-types';
import Lightbox from 'react-image-lightbox';
import '../App.css';

import Image1 from '../imgs/remodel/remodel10.jpg';
import Image2 from '../imgs/restoration/restoration_1.JPG';
import Image3 from '../imgs/remodel/remodel11.jpg';
import Image4 from '../imgs/restoration/restoration_2.JPG';
import Image5 from '../imgs/repair/repair1.JPG';
import Image6 from '../imgs/repair/repair2.JPG';

function Remodel(props) {
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
            alt="worcester-county-carpentry-remodeling-restoration"
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
            alt="worcester-county-carpentry-remodeling-restoration"
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

Remodel.propTypes = {
  handleShowDialog: PropTypes.func.isRequired,
  imageSelect: PropTypes.func.isRequired,
  photoIndex: PropTypes.number.isRequired,
  showDialog: PropTypes.bool.isRequired,
};


export default Remodel;
