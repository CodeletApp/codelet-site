import React, { Component } from 'react';
import "./App.css";
import {SectionOne} from './components/sectionOne';
import {SectionTwo} from './components/sectionTwo';
import SectionThree from './components/sectionThree';
import {SectionFour} from './components/sectionFour';

class App extends Component {
  render(){
    return (
      <div className="App">
        <SectionOne/>
        <SectionTwo/>
        <SectionThree/>
        <SectionFour/>
      </div>
    );
  }
}

export default App;
