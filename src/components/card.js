import React from "react";
import { useRef } from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import './card.css';
// import flapy  from "../images/flapy.png";

const Card = ({data}) => {
  const ref = useRef();
    return (  
     <div className="card-main" style={{ width: '200px', height: '240px',backgroundColor: 'pink', borderRadius:"1rem"}} >
              <Flippy 
                  flipOnHover={true} // default false
                  flipOnClick={true} // default false
                  flipDirection="horizontal" // horizontal or vertical
                  ref={ref} // to use toggle method like ref.curret.toggle()
                  // if you pass isFlipped prop component will be controlled component.
                  // and other props, which will go to div
                  style={{ width: '200px', height: '200px' }} /// these are optional style, it is not necessary
        >
          <FrontSide style={{backgroundColor: 'seashell', borderRadius:"1rem",overflow:"hidden",}} >
                  <strong>{data.name}</strong>
                  <img className="main-img" src={data.img}/>
          </FrontSide>
          <BackSide style={{ backgroundColor: 'seashell',borderRadius:"0rem",overflow:"hidden"}}>
                <strong>About</strong>
                <p>{data.about}</p>
            <div className="tech-stack">
                  <h6 className="tech-headings">Tech-stack used:</h6>
                  <img className="tech-logo" src={data.tech} />
            </div>
          </BackSide>
        </Flippy>
        <div className="bottom-sec">
          <a href={data.demo}>Demo</a>
          <a href={data.source}>Source</a>
        </div>
    </div>
    );
}
 
export default Card;