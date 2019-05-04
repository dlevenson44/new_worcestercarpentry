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
        return <Decks />;
      case 'floors':
        return <Floors />;
      case 'remodeling':
        return <Remodel />
      case 'roofing':
        return <Roofing />;
      case 'siding':
        return <Siding />;
      case 'windows':
        return <Windows />;
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
