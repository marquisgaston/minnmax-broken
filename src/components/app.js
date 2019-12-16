import React, { Component } from 'react';

import {Router, Route, Switch} from 'react-router';
import history from '../history';

import Navbar from './navbar';
import HomePage from './Homepage/homePage';
import Footer from './footer/footer';

export default class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div className='app'>
          <Navbar/>
            <Switch>
              <Route path='/' exact component={HomePage}/>
            </Switch>
          <Footer/>
        </div>
      </Router>
    );
  }
}
