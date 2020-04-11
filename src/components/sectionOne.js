import React from 'react';
import { IPhoneX, Pixel3XL } from "react-device-frames";
const questionListImg = require("../questions.png");
const googlePlay = require('../google_play.png');
const appStore = require('../app_store.png');
const codeletLogoLarge = require('../logo-large-blue.png')
export function SectionOne (){
    function scrollToBottom(){
        window.scrollTo(0,document.querySelector(".App").scrollHeight);
    }
    function scrollToMiddle(){
        window.scrollTo({
            'behavior': 'smooth',
            'left': 0,
            'top': document.querySelector(".section2").offsetTop 
          })
    }
    return(
        <div className="section1">
            <div className="leftSection1">
                <div className="phone-frames">
                    <Pixel3XL className="android-phone" screenshot={questionListImg}/>
                    <IPhoneX className="iphone" screenshot={questionListImg} />
                </div>
                <div className="stores">
                    <img src={googlePlay} alt='google-play'/>
                    <img src={appStore} alt='apple-store'/>
                </div>
            </div>
            <div className="rightSection1Box">
                <img width={450} src={codeletLogoLarge} alt="logo-large"/>
                <h2 className="headline-h2">Beat Coding Interviews</h2>
                <p className="headline-p">An interactive mobile platform designed to quickly prepare software engineers for technical interviews on the go.</p>
                <button className="primary-btn-section1" onClick={()=> scrollToBottom()}>Join the Beta</button>
                <button className="secondary-btn" onClick={()=> scrollToMiddle()}>See How</button>
            </div>
        </div>
    )
}