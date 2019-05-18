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
      photoIndex: null,
      selectedPage: 'decks',
      showDialog: false,
      displayMobileNav: false,
    };

    this.handleShowDialog = this.handleShowDialog.bind(this);
    this.imageSelect = this.imageSelect.bind(this);
    this.pageSelector = this.pageSelector.bind(this);
    this.toggleMobileNav = this.toggleMobileNav.bind(this);
    this.mobilePageSelector = this.mobilePageSelector.bind(this);
  }

  handleShowDialog(x) {
    this.setState({ showDialog: !this.state.showDialog, photoIndex: x });
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

  toggleMobileNav() {
    this.setState({ displayMobileNav: !this.state.displayMobileNav })
  }

  mobilePageSelector(page) {
    this.setState({
      selectedPage: page,
      displayMobileNav: false,
    })
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
          type={'decks-patios'}
        />;
      case 'floors':
        return <Sectional
          handleShowDialog={this.handleShowDialog}
          imageSelect={this.imageSelect}
          photoIndex={photoIndex}
          showDialog={showDialog}         
          allImages={flooringImages}
          type={'floors'}
        />;
      case 'remodeling':
        return <Sectional
          handleShowDialog={this.handleShowDialog}
          imageSelect={this.imageSelect}
          photoIndex={photoIndex}
          showDialog={showDialog}         
          allImages={remodelImages}
          type={'remodeling-restoration'}
        />
      case 'roofing':
        return <Sectional
          handleShowDialog={this.handleShowDialog}
          imageSelect={this.imageSelect}
          photoIndex={photoIndex}
          showDialog={showDialog}         
          allImages={roofingImages}
          type={'roofing'}
        />;
      case 'siding':
        return <Sectional
          handleShowDialog={this.handleShowDialog}
          imageSelect={this.imageSelect}
          photoIndex={photoIndex}
          showDialog={showDialog}         
          allImages={sidingImages}
          type={'siding'}
        />;
      case 'windows':
        return <Sectional
          handleShowDialog={this.handleShowDialog}
          imageSelect={this.imageSelect}
          photoIndex={photoIndex}
          showDialog={showDialog}         
          allImages={windowsImages}
          type={'windows-doors'}
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
          <Blurb
            pageSelector={this.pageSelector}
            displayMobileNav={this.state.displayMobileNav}
            toggleMobileNav={this.toggleMobileNav}
            mobilePageSelector={this.mobilePageSelector}
          />
          {this.pageRenderer()}
        </div>
      </div>
    );
  }
}

export default App;
