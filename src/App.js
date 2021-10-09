import React,{useState} from 'react';
import './App.css';
import Card from './components/card';
import flapy  from "./images/flapy.png";
import pixSearch  from "./images/pixSearch.jpg";
import recipo  from "./images/recipo.jpg";
import quizzy  from "./images/quizzy.jpg";
import flutterLogo from "./images/flutterLogo.png";
import reactLogo from "./images/reactLogo.png";
import mountain from "./images/mountain.png";
import birds from "./images/birds.png";
import reactjs from './images/reactjs.png';
import flutterSkill from './images/flutter-skill.png';
import mysql from './images/mysql.png';
import node from './images/node.png';
import mongodb from './images/mongo.png';
import git  from './images/git.png';
import github from './images/github1.png';

function App() {
  const [offset,setOffset]=useState();
  function handleScroll(){
    setOffset(window.pageYOffset);

  }
  window.addEventListener("scroll",handleScroll);
  const projectData =[
   {
    name:"Flappy X",
    img:flapy,
    demo:"ffff",
    source:"fffff",
    about:"An extended Flappy Bird game with attractive UI , can track scores ,level.To be published on Play/App stores.",
    tech:flutterLogo,
  },
   {
    name:"pixSearch",
    img:pixSearch,
    demo:"",
    source:"",
    about:"An Image Search and download app like Unsplash developed using REACTJS and PIXABAY API hosted on Netlify.",
    tech:reactLogo,
   },
   {
    name:"Recipo",
    img:recipo,
    demo:"",
    source:"",
    about:"A static app to help the Food lovers and noob cooks to get the recipes of their favorite dishes in hand.",
    tech:flutterLogo,
   },
   {
    name:"Quizzy",
    img:quizzy,
    demo:"",
    source:"",
    about:"A simple UI based app intended to create awareness about COVID among peoplely. It can run on all the platforms using single codebase.",
    tech:flutterLogo,
   },
  ];
  return (
    <>
    
    <div className="row">
      <div className="col">
        <strong id="logo">LOGO</strong>
      </div>
      <header>
        <nav>
          <ul>
            <a href="/"><li>Home</li></a>
            <a href="#projects"><li>Projects</li></a>
            <a href="#skills"><li >Skills</li></a>
            <a href="#socials"><li>Socials</li></a>
            <a href="#more"><li>More</li></a>
          </ul>
        </nav>
      </header>
    </div>

    <div className="animation">
      <div className="my-name" 
      style={{
        
        top: `-${ + offset *0.1+'%'}`
      
      }}>
          <center><h1>Mohammad Bilal!</h1></center>
      </div>
      
      <img id="birds-img" src={birds}
            
            style={{
              
              top: `-${ + offset *0.1+'%'}`
            
            }}>
      
      </img>
      <div className="i-build"
            
            style={{
              
              top: `-${ + offset *0.3+'%'}`
            
            }}>
            
      
            <h2>I build things for Web & Mobile !</h2>
      </div>
      <img id="mountain-img" src={mountain}/>
        <p id="intro">
          I Work with REACT JS and Flutter to build Web and Mobile Apps!<br/><br/>
          Lets see some of my projects...
        </p>
    </div>

    <div className="below-mountain">
        <section id="projects">
        <strong className="sec-heading">&lt;PROJECTS&gt;</strong>
            <div class = "card-container">
            <div className="card">
              <Card  data={projectData[0]}/>
            </div>
            <div className="card">
              <Card data={projectData[1]}/>
            </div>
            <div className="card">
              <Card data={projectData[2]}/>
            </div>
            <div className="card">
              <Card data={projectData[3]}/>
            </div>
            </div>
            <strong className="sec-heading">&lt;PROJECTS/&gt;</strong>
          </section>


          <section id="skills">
            <strong className="sec-heading">&lt;SKILLS && TOOLS&gt;</strong>
              <div id="skills-container">
                 <div className="single-skill">
                   <img className="skills-img" src={reactjs}
                   style={{height:"5rem"}}
                   >
                   </img>
                   <img className="skills-img" src={flutterSkill}
                   style={{height:"5rem"}}
                   >
                   </img>
                   <img className="skills-img" src={node}
                   style={{height:"5rem"}}
                   >
                   </img>
                   <img className="skills-img" src={mysql}
                   style={{height:"5rem"}}
                   >
                   </img>
                   <img className="skills-img" src={mongodb}
                   style={{height:"5rem"}}
                   >
                   </img>
                   <img className="skills-img" src={git}
                   style={{height:"5rem"}}
                   >
                   </img>
                   <img className="skills-img" src={github}
                   style={{height:"5rem"}}
                   >
                   </img>
                 </div>
              </div>
            <strong className="sec-heading">&lt;SKILLS && TOOLS/&gt;</strong>
          </section>
    </div>
    </>

  );

        
}

export default App;
