import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';


import ColorWrapper from "./pages/random-color/color-page";
import NavBar from "./nav-bar"
import Homepage from "./pages/homepage/homepage"
import MonthlyPage from "./pages/monthlypromps/monthlyPage"
import EmojiPage from "./pages/emoji/emoji-page"
import CharacterChallenge from "./pages/character-challenge/character-challenge-page"
import EnvironmentChallenge from "./pages/environment/environment-challenge"
import RandomShape from "./pages/shape/shape-challenge"
import CharacterFusion from "./pages/fusion/fusion-challenge"


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
          <Route path="/monthly-prompts">
            <MonthlyPage />
          </Route>
          <Route path="/emoji-challenge">
            <EmojiPage />
          </Route>
          <Route path="/character-challenge">
            <CharacterChallenge />
          </Route>
          <Route path="/environment-challenge">
            <EnvironmentChallenge />
          </Route>
          <Route path="/random-shape">
            <RandomShape />
          </Route>
          <Route path="/character-fusion">
            <CharacterFusion />
          </Route>
        </BrowserRouter>
      </div>
    );
  }
}
