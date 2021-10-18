import React from "react";
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import "../styles/card.css";
const Card = () => {
    return ( 
        <div className="single-card">
            <Flippy
                flipOnHover={true} // default false
                flipOnClick={true} // default false
                flipDirection="horizontal"
                style={{ width: '200px', height: '200px' }}
            >
               <FrontSide style={{ backgroundColor: '#41669d'}} >
                        RICK <br />
                </FrontSide>
            
                <BackSide style={{ backgroundColor: '#175852'}}>
                        ROCKS
                </BackSide>
            </Flippy>
        </div>
     );
}
 
export default Card;