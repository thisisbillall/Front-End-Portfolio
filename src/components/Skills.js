import React from "react";
import "../styles/skills.css";


const Skills = () => {
    return ( 
        <div className="skills-main">
        <strong id="skills-txt">Skills & Tools</strong>
        <div className="skills-container">
            
           <img src="/images/html.png" alt="html"/>
           <img src="/images/tailwind.png" alt="tailwind"/>
           <img src="/images/reactLogo.png" alt="react"/>
           <img src="/images/node.png" alt="node"/>
           {/* <img src="/images/flutter-skill.png" alt="flutter"/> */}
           <img src="/images/kuber.png" alt="kubernetes"/>
           <img src="/images/docker.png" alt="docker"/>
           <img src="/images/mongo.png" alt="mongo"/>
           <img src="/images/mysql.png" alt="mysql"/>
        </div>
        </div>

     );
}
 
export default Skills;