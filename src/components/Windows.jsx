import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

import Image1 from '../imgs/windowsdoors/windowsdoors2.jpg';
import Image2 from '../imgs/windowsdoors/windowsdoors3.jpg';
import Image3 from '../imgs/windowsdoors/windowsdoors1.jpg';
import Image4 from '../imgs/remodel/remodel8.jpg';
import Image5 from '../imgs/windowsdoors/windowsdoors4.jpg';
import Image6 from '../imgs/remodel/remodel7.jpg';

function Windows(props) {
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
            alt="worcester-county-carpentry-windows-doors"
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
            alt="worcester-county-carpentry-windows-doors"
            onClick={() => props.imageSelect()}
          />  
        )}
      </div>
    </div>
  );
}

Windows.propTypes = {
  handleShowDialog: PropTypes.func.isRequired,
  imageSelect: PropTypes.func.isRequired,
  photoIndex: PropTypes.number.isRequired,
  showDialog: PropTypes.bool.isRequired,
};


export default Windows;
