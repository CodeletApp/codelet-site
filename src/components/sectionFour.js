import React from 'react';

export function SectionFour (){
    return(
        <div className="section4">
            <h1>Beat Technical Interviews, Join the Beta!</h1>
            <form id="form">
              <div className='formTop'>
                <input className="input1" placeholder="Name"/>
                <input className="input2" placeholder="Email"/>
              </div>
              <textarea placeholder="Why do you want to join the beta"/>
              <button>Submit</button>
            </form>
        </div>
    )
}