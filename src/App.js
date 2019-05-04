import React from 'react';
import './App.css';

import Blurb from './components/Blurb';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <Blurb />
    </div>
  );
}

export default App;
