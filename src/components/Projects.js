import React from "react";
import "../styles/projects.css";
import Card from "./card";

const Projects = () => {

  const projData = [
        {
            "img":"/images/eagLogo.jpeg",
            "name":"Eaglion`s Site",
            "desc":"An Open soucre website for Eaglion developers Organization developed using REACTJS!",
            "demo":"http://eaglionprogrammers.rocks/",
            "source":"https://github.com/Eaglion-Programmers/Eaglion-Programmers.github.io",
        },
        {
            "img":"/images/@thisisbillall.jpg",
            "name":"My Portfolio",
            "desc":"My PORTFOLIO site developed using REACTJS and pure CSS to reflect my FRONTEND SKILLS!",
            "demo":"http://portfolio-thisisbillall.netlify.app/",
            "source":"https://github.com/thisisbillall/Front-End-Portfolio",
        },
        {
            "img":"/images/flapy.png",
            "name":"Flappy X",
            "desc":"An extended version of FLAPPY BIRD game with enrich UI developed using FLUTTER can run on all the plateform with signle CODEBASE!",
            "demo":"https://github.com/thisisbillall/flappy_bird",
            "source":"https://github.com/thisisbillall/flappy_bird",

        },
        {
            "img":"/images/pixSearch.jpg",
            "name":"pixSearch",
            "desc":"Image Search and Download site developed using REACTJS,CSS and PIXABAY API no external DATABASE used!",
            "demo":"https://pixsearch1.netlify.app/",
            "source":"https://github.com/thisisbillall/pixsearch",        
        },
  ];


    return (  
        <div className="proj-main">       
         <strong id="proj-txt">Projects</strong>
        <div className="projects-container">
           <Card  proj={projData[0]}/>
           <Card  proj={projData[1]}/>
           <Card  proj={projData[2]}/>
           <Card  proj={projData[3]}/>
        </div>
        </div>

    );
}
 
export default Projects;