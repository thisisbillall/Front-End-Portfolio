import React from "react";
import "../styles/skills.css";
const Skills = () => {
    return ( 
        <div className="skills-container">
            <div className="tech-details">
                <h2>REACT</h2>
                <p>
                    I am proefficient with REACTJS: A Javascript framework developed by Facebook.
                    I use this framework for creating and designing responsive web apps. I have 
                    built couple of personal projects using REACTJS and also contributing to an 
                    open source Website as my HACKTOBERFEST-21 contribution check it    
                    <a href="https://github.com/Eaglion-Programmers/Eaglion-Programmers.github.io"> here</a>!
                </p>
            </div>
            <div className="tech-logo">
                <img src="/images/reactLogo.png" alt="react-logo"/>
            </div>

            <div className="tech-details">
                <h2>FLUTTER</h2>
                <p>
                    For App development ,I am Exploring with FLUTTER: A DART framework developed 
                    by Google.I use this framework for developing NATIVE apps which can be on 
                    all the platform with a same codebase.I have built couple of basic Apps using
                    FLUTTER like A Quiz App,Recipe App and a Game like Flappy Bird, you can look it
                    <a href="https://github.com/thisisbillall/flappy_bird"> here</a>!
                </p>
            </div>
            <div className="tech-logo">
                <img src="/images/flutter-skill.png" alt="react-logo"/>
            </div>


            
            
            
        </div>
     );
}
 
export default Skills;