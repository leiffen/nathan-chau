import React, { Component } from 'react';

import './App.css';

import Navbar from './components/Navigation/NavBar/NavBar';
import Navbutton from './components/Navigation/NavButton/NavButton';
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Covers from './components/Covers/Covers';

class App extends Component {
  state = {
    topDrawerOpen: false
  };
  
  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {topDrawerOpen: !prevState.topDrawerOpen}
    });
  };

  render() {
    return (
    <div className="App">
      <Navbar/>
      <Navbutton drawerClickHandler={this.drawerToggleClickHandler} show={this.state.topDrawerOpen}/>
      
      <Home/>
      <About/>
      <Projects/>
      <Covers/>
    </div>
    );
  }
}

export default App;
