import React, { Component } from 'react';
import './App.css';
import RouteList from './components/Route-list/Route-list';
import Map from './components/Map/Map';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="App-header">
          <RouteList/>
          <Map/>
        </header>
      </div>
    );
  }
}

export default App;
