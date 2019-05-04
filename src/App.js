import React, { Component } from 'react';
import './App.css';

import Blurb from './components/Blurb';
import Sidebar from './components/Sidebar';
import Decks from './components/Decks';
import Floors from './components/Floors';
import Remodel from './components/Remodel';
import Roofing from './components/Roofing';
import Siding from './components/Siding';
import Windows from './components/Windows';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
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

  imageSelect(e) {
    e.preventDefault();
    console.log('clicked')
  }

  pageSelector(e, page) {
    e.preventDefault();
    this.setState({ selectedPage: page });
  };

  pageRenderer() {
    const { showDialog } = this.state;

    switch(this.state.selectedPage) {
      case 'decks':
        return <Decks
          handleShowDialog={this.handleShowDialog}
          imageSelect={this.imageSelect}
          showDialog={showDialog}          
        />;
      case 'floors':
        return <Floors
          handleShowDialog={this.handleShowDialog}
          imageSelect={this.imageSelect}
          showDialog={showDialog}          
        />;
      case 'remodeling':
        return <Remodel
          handleShowDialog={this.handleShowDialog}
          imageSelect={this.imageSelect}
          showDialog={showDialog}          
        />
      case 'roofing':
        return <Roofing
          handleShowDialog={this.handleShowDialog}
          imageSelect={this.imageSelect}
          showDialog={showDialog}          
        />;
      case 'siding':
        return <Siding
          handleShowDialog={this.handleShowDialog}
          imageSelect={this.imageSelect}
          showDialog={showDialog}          
        />;
      case 'windows':
        return <Windows
          handleShowDialog={this.handleShowDialog}
          imageSelect={this.imageSelect}
          showDialog={showDialog}          
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
