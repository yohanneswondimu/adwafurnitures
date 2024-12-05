import React from 'react';
import 'animate.css'; // Ensure animate.css is imported
import './About.css'; // Ensure your styles are correct
import wifiSignal from './image/wifi-signal.png';
import brifcase from './image/brifcase.png';
import diamond from './image/diamond.png';

function About() {
  return (
    <div className="about-section about" >
   
      <div className="about-content animate__animated animate__backInUp animate__duration-5s">
        <div className="about-image">
          <img src={wifiSignal} alt="WiFi Signal" />
        </div>
        <div className="about-text">
          <h3>Vision</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.?</p>
        </div>
        <div className="about-image">
          <img src={diamond} alt="Diamond" />
        </div>
        <div className="about-text">
          <h3>About</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.?<br />
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis, in, quo modi ex quibusdam beatae<br />
            asperiores nesciunt dolore eveniet similique placeat rem tenetur magnam consectetur, est unde veritatis quae. Architecto?
          </p>
        </div>
      </div>

      <div className="about-content animate__animated animate__backInUp">
        <div className="about-image">
          <img src={brifcase} alt="Briefcase" />
        </div>
        <div className="about-text">
          <h3>Vision</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.?</p>
        </div>
        <div className="about-image">
          <img src={wifiSignal} alt="WiFi Signal" />
        </div>
        <div className="about-text">
          <h3>About</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.?<br />
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis, in, quo modi ex quibusdam beatae<br />
            asperiores nesciunt dolore eveniet similique placeat rem tenetur magnam consectetur, est unde veritatis quae. Architecto?
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
