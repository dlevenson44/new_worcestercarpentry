import React, { Component } from 'react';
import './App.css';

import Blurb from './components/Blurb';
import Sidebar from './components/Sidebar';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedPage: 'decks',
    }
    this.pageSelector = this.pageSelector.bind(this);
  }

  pageSelector(e, page) {
    e.preventDefault();
    this.setState({ selectedPage: page })
  }

  pageRenderer() {
    switch(this.state.selectedPage) {
      case 'decks':
        console.log('decks');
        break;
      case 'floors':
        console.log('floors');
        break;
      case 'remodeling':
        console.log('remodeling');
        break;
      case 'roofing':
        console.log('roofing');
        break;
      case 'siding':
        console.log('siding');
        break;
      case 'windows':
        console.log('windows');
        break;
      default:
        console.log('unrecognized page');
    }
  }

  render() {
    return (
      <div className="app-container">
        <Sidebar />
        <Blurb pageSelector={this.pageSelector} />
        {this.pageRenderer()}
      </div>
    );
  }
}

export default App;
