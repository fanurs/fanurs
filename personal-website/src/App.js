import React, { Component } from 'react';
import Header from './Components/Header';
import Home from './Components/Home';
import About from './Components/About';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Home />
        <About />
      </div>
    );
  }
}

export default App;