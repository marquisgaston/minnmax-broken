import React, { Component } from 'react';
import Navbar from './navbar';
import HomePage from './Homepage/homePage';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Navbar/>
        <HomePage/>
      </div>
    );
  }
}
