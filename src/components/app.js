import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';


import ColorWrapper from "./pages/random-color/color-page";
import NavBar from "./nav-bar"
import Homepage from "./pages/homepage/homepage"

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <BrowserRouter>
          <NavBar />
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route path="/color-challenge">
            <ColorWrapper />
          </Route>
        </BrowserRouter>
      </div>
    );
  }
}
