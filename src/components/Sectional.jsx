import React from 'react';
import PropTypes from 'prop-types';
import Lightbox from 'react-image-lightbox';
import '../App.css';

function Sectional(props) {
  const { 
    handleShowDialog,
    imageSelect,
    photoIndex,
    showDialog,
    allImages,
  } = props;

  const topRowImages = [
    allImages[0],
    allImages[1],
    allImages[2],
  ];

  const bottomRowImages = [
    allImages[3],
    allImages[4],
    allImages[5],
  ]

  return (
    <div className="section-container">
      <div className="row">
        {topRowImages.map((row, index) =>
          // {console.log('index:', index)}
          <img
            className="small-grid-img"
            src={row}
            key={index}
            alt="worcester-county-carpentry-decks"
            onClick={() => handleShowDialog()}
          />
          // {console.log('index:', index)}
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

Sectional.propTypes = {
  handleShowDialog: PropTypes.func.isRequired,
  imageSelect: PropTypes.func.isRequired,
  photoIndex: PropTypes.number.isRequired,
  showDialog: PropTypes.bool.isRequired,
  allImages: PropTypes.array.isRequired,
};

export default Sectional;
