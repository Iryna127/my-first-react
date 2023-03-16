import React from 'react';
import logo from './logo.svg';
import flover from './flover.jpg';
import './App.css';
import ClockComponent from './components/clock';

function App() {
  return (
    <div className="App">
      <header className="App-header">      
        <ClockComponent src={flover} nameofimg="flovers" /* date={this.state.date} *//>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
