import React, { Component }  from 'react';
const screenShot1 = require('../ScreenShot1.png');
const screenShot2 = require('../ScreenShot2.png');
const screenShot3 = require('../ScreenShot3.png');
const screenShot4 = require('../ScreenShot4.png');

class SectionThree extends Component{
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
        return(
        <div className="section3">
            <div className="leftSection3">
              <div className="phoneframe2">
                <img src={this.state.screen === 1? screenShot1: 
                          this.state.screen === 2 ? screenShot2:
                          this.state.screen === 3 ? screenShot3:
                          screenShot4
                        }/>
              </div>
            </div>
            <div className="rightSection3">
                <h2 style={{color:this.state.screen === 1 ? '#397AC2' : 'white'}} onClick={()=>this.changeScreens(1)}>Choose Your Approach</h2>
                <h2 style={{color:this.state.screen === 2 ? '#397AC2' : 'white'}} onClick={()=>this.changeScreens(2)}>Find Your Algorithm</h2>
                <h2 style={{color:this.state.screen === 3 ? '#397AC2' : 'white'}} onClick={()=>this.changeScreens(3)}>Analize Your Algorithm</h2>
                <h2 style={{color:this.state.screen === 4 ? '#397AC2' : 'white'}} onClick={()=>this.changeScreens(4)}>Learn From Your Results</h2>
            </div>
        </div>
        )
    }

}

export default SectionThree