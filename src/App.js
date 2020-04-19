import React, { Component } from 'react';
import "./App.scss";
import {SectionOne} from './components/sectionOne';
import {SectionTwo} from './components/sectionTwo';
import SectionThree from './components/sectionThree';

class App extends Component {
  render(){
    return (
      <div className="App">
        <SectionOne/>
        {/* <SectionTwo/>
        <SectionThree/> */}
      </div>
    );
  }
}

export default App;
