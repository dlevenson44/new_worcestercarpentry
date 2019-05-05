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
    { id: 0, img: allImages[0]},
    { id: 1, img: allImages[1]},
    { id: 2, img: allImages[2]},
  ];

  const bottomRowImages = [
    { id: 3, img: allImages[3]},
    { id: 4, img: allImages[4]},
    { id: 5, img: allImages[5]},
  ]

  return (
    <div className="section-container">
      <div className="row">
        {topRowImages.map(({img, id}) => 
          <div key={img}>
            <img
              className="small-grid-img"
              src={img}
              key={img}
              alt="worcester-county-carpentry-decks"
              onClick={() => handleShowDialog(id)}
            />
            {showDialog && (
              <Lightbox
                mainSrc={allImages[photoIndex]}
                nextSrc={allImages[(photoIndex + 1) % allImages.length]}
                prevSrc={allImages[(photoIndex + allImages.length - 1) % allImages.length]}
                onCloseRequest={() => handleShowDialog(null)}
                onMovePrevRequest={() => imageSelect('prev')}
                onMoveNextRequest={() => imageSelect('next')}
                key={id}
              />
            )}
          </div>
        )}
      </div>
      <div className="row">
        {bottomRowImages.map(({img, id}) =>
          <div key={id}>
            {console.log('id:', id)}
            {console.log('id type:', typeof id)}
            {console.log('img:', img)}
            {console.log('img type:', typeof img)}
            <img
              className="small-grid-img"
              src={img}
              key={id}
              alt="worcester-county-carpentry-decks"
              onClick={() => handleShowDialog(id)}
            />
            {showDialog && (
            <Lightbox
              mainSrc={allImages[photoIndex]}
              nextSrc={(allImages[(photoIndex + 1) % allImages.length])}
              prevSrc={allImages[(photoIndex + allImages.length - 1) % allImages.length]}
              onCloseRequest={() => handleShowDialog(null)}
              onMovePrevRequest={() => imageSelect('prev')}
              onMoveNextRequest={() => imageSelect('next')}
              key={img}
            />
            )}
          </div>
        )}

      </div>
    </div>
  );
}

Sectional.propTypes = {
  handleShowDialog: PropTypes.func.isRequired,
  imageSelect: PropTypes.func.isRequired,
  photoIndex: PropTypes.number,
  showDialog: PropTypes.bool.isRequired,
  allImages: PropTypes.array.isRequired,
};

Sectional.defaultProps = {
  photoIndex: null,
}

export default Sectional;
