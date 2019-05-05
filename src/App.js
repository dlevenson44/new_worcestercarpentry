import React, { Component } from 'react';
import './App.css';
import 'react-image-lightbox/style.css';

import {
  deckImages,
  flooringImages,
  remodelImages,
  roofingImages,
  sidingImages,
  windowsImages,
} from './photos'

import Blurb from './components/Blurb';
import Sectional from './components/Sectional';
import Sidebar from './components/Sidebar';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      selectedPage: 'decks',
      showDialog: false,
    };

    this.handleShowDialog = this.handleShowDialog.bind(this);
    this.imageSelect = this.imageSelect.bind(this);
    this.pageSelector = this.pageSelector.bind(this);
  }

  handleShowDialog() {
    console.log('handling dialog')
    this.setState({ showDialog: !this.state.showDialog });
  };

  imageSelect(x) {
    const { photoIndex } = this.state;

    if (x === 'next') {
      this.setState({
        photoIndex: (photoIndex + 1) % 6,
      })
    } else {
      this.setState({
        photoIndex: (photoIndex + 6 - 1) % 6,
      })
    }
  }

  pageSelector(page) {
    this.setState({ selectedPage: page });
  };

  pageRenderer() {
    const { photoIndex, showDialog } = this.state;

    switch(this.state.selectedPage) {
      case 'decks':
        return <Sectional
          handleShowDialog={this.handleShowDialog}
          imageSelect={this.imageSelect}
          photoIndex={photoIndex}
          showDialog={showDialog}       
          allImages={deckImages}
        />;
      case 'floors':
        return <Sectional
          handleShowDialog={this.handleShowDialog}
          imageSelect={this.imageSelect}
          photoIndex={photoIndex}
          showDialog={showDialog}         
          allImages={flooringImages}
        />;
      case 'remodeling':
        return <Sectional
          handleShowDialog={this.handleShowDialog}
          imageSelect={this.imageSelect}
          photoIndex={photoIndex}
          showDialog={showDialog}         
          allImages={remodelImages}
        />
      case 'roofing':
        return <Sectional
          handleShowDialog={this.handleShowDialog}
          imageSelect={this.imageSelect}
          photoIndex={photoIndex}
          showDialog={showDialog}         
          allImages={roofingImages}
        />;
      case 'siding':
        return <Sectional
          handleShowDialog={this.handleShowDialog}
          imageSelect={this.imageSelect}
          photoIndex={photoIndex}
          showDialog={showDialog}         
          allImages={sidingImages}
        />;
      case 'windows':
        return <Sectional
          handleShowDialog={this.handleShowDialog}
          imageSelect={this.imageSelect}
          photoIndex={photoIndex}
          showDialog={showDialog}         
          allImages={windowsImages}
        />;
      default:
        console.log('unrecognized page');
    }
  };

  render() {
    return (
      <div className="app-container">
        <Sidebar />
        <div>
          <Blurb pageSelector={this.pageSelector} />
          {this.pageRenderer()}
        </div>
      </div>
    );
  }
}

export default App;
