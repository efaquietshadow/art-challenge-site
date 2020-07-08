import React, { Component } from 'react';
import ColorWrapper from "./random-color-page/color-page";

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <ColorWrapper />
      </div>
    );
  }
}
