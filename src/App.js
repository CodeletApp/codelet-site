import React, { Component } from 'react';

import logo from "./logo.svg";
import "./App.css";
import { IPhoneX, Pixel3XL } from "react-device-frames";
const q = require("./questions.png");
const mobile = require('./mobile.png');
const bird = require('./bird.png');
const analytics = require('./analytics.png');
const screenShot1 = require('./ScreenShot1.png');
const screenShot2 = require('./ScreenShot2.png');
const screenShot3 = require('./ScreenShot3.png');
const screenShot4 = require('./ScreenShot4.png');
const googlePlay = require('./google_play.png');
const appStore = require('./app_store.png');

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      screen:1
    }
  }
  changeScreens(num){
    this.setState({screen:num})
  }
  render(){
    return (
      <div className="App">
        <div className="section1">
          <div className="container">
            <div className="leftSection1">
              <div className="phoneframe">
                <IPhoneX screenshot={q} />
                <div className="stores">
                  <img src={googlePlay}/>
                  <img src={appStore}/>
                </div>
              </div>
            </div>
            <div className="rightSection1">
              <div className="rightSection1Box">
                <h1>CODELET</h1>
                <h2>Beat Coding Interviews</h2>
                <p>An interactive mobile platform designed to quickly prepare software engineers for technical interviews on the go.</p>
                <button>Join the Beta</button>
              </div>
            </div>
          </div>
        </div>
        <div className="section2">
          <div className="container">
            <div className="innerSection2">
              <div className="innerSectionBox">
                <h1>Mobile</h1>
                <img src={mobile}/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
            </div>
            <div className="innerSection2">
              <div className="innerSectionBox">
                <h1>Speed and Breadth</h1>
                <img src={bird}/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
            </div>
            <div className="innerSection2">
              <div className="innerSectionBox">
                <h1>Analytics</h1>
                <img src={analytics}/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="section3">
          <div className="container">
            <div className="leftSection3">
              <div className="phoneframe2">
                <br/><br/><br/><br/>
                <img src={this.state.screen === 1? screenShot1: 
                          this.state.screen === 2 ? screenShot2:
                          this.state.screen === 3 ? screenShot3:
                          screenShot4
                        }/>
              </div>
            </div>
            <div className="rightSection3">
              <div className="rightSection3Box">
                <h2 style={{color:this.state.screen === 1 ? '#397AC2' : 'white'}} onClick={()=>this.changeScreens(1)}>Choose Your Approach</h2>
                <h2 style={{color:this.state.screen === 2 ? '#397AC2' : 'white'}} onClick={()=>this.changeScreens(2)}>Find Your Algorithm</h2>
                <h2 style={{color:this.state.screen === 3 ? '#397AC2' : 'white'}} onClick={()=>this.changeScreens(3)}>Analize Your Algorithm</h2>
                <h2 style={{color:this.state.screen === 4 ? '#397AC2' : 'white'}} onClick={()=>this.changeScreens(4)}>Learn From Your Results</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="section4">
          <div className="container2">
            <h1>Beat Technical Interviews, Join the Beta!</h1>
            <form>
              <div className='formTop'>
                <input className="input1" placeholder="Name"/>
                <input className="input2" placeholder="Email"/>
              </div>
              <textarea placeholder="Why do you want to join the beta"/>
              <button>Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
