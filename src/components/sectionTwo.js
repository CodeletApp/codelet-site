import React from 'react';
const mobile = require('../mobile.png');
const bird = require('../bird.png');
const analytics = require('../analytics.png');
export function SectionTwo (){
    return(
        <div className="section2">
          <div className="innerSectionBox">
            <h1>Mobile</h1>
            <img src={mobile}/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
          <div className="innerSectionBox">
            <h1>Speed and Breadth</h1>
              <img src={bird}/>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
          <div className="innerSectionBox">
            <h1>Analytics</h1>
            <img src={analytics}/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        </div>
    )
}