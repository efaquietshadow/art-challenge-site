import React, { Component } from 'react';
import RandomColor from "./random-color";

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <RandomColor />
      </div>
    );
  }
}
