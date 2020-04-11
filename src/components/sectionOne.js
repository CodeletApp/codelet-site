import React from 'react';
import { IPhoneX, Pixel3XL } from "react-device-frames";
const questionListImg = require("../questions.png");
const googlePlay = require('../google_play.png');
const appStore = require('../app_store.png');
export function SectionOne (){
    function scrollToBottom(){
        window.scrollTo(0,document.querySelector(".App").scrollHeight);
    }
    return(
        <div className="section1">
            <div className="leftSection1">
                <div className="phone-frames">
                    <Pixel3XL screenshot={questionListImg}/>
                    <IPhoneX screenshot={questionListImg} />
                </div>
                <div className="stores">
                    <img src={googlePlay}/>
                    <img src={appStore}/>
                </div>
            </div>
            <div className="rightSection1">
                <div className="rightSection1Box">
                <h1>CODELET</h1>
                <h2>Beat Coding Interviews</h2>
                <p>An interactive mobile platform designed to quickly prepare software engineers for technical interviews on the go.</p>
                <button onClick={()=> scrollToBottom()}>Join the Beta</button>
                </div>
            </div>
        </div>
    )
}