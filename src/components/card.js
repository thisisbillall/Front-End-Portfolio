import React from "react";
import "../styles/card.css";
import Flippy, { FrontSide, BackSide } from 'react-flippy';

const Card = ({proj}) => {
    return ( 
    <div className="single-card">
        <Flippy id="flippy-main"
      flipOnHover={true} // default false
      flipOnClick={true} // default false
      flipDirection="horizontal" // horizontal or vertical
      // if you pass isFlipped prop component will be controlled component.
      // and other props, which will go to div
      style={{ width: '200px', height: '200px' }} /// these are optional style, it is not necessary
  >
    <FrontSide id="front">
        <img src={proj.img} alt="project-thumbnail"/>
        <span>{proj.name}</span>
    </FrontSide>
    <BackSide id="back">
        <p>{proj.desc}</p>
    </BackSide>
    <div className="proj-links">
        <strong><a href={proj.demo} target="_blank" rel="noopener noreferrer">Demo</a></strong>
        <strong><a href={proj.source} target="_blank" rel="noopener noreferrer">Source</a></strong>
    </div>
  </Flippy>
    </div>
     );
}
 
export default Card;