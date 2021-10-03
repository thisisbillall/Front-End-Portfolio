import './App.css';
import Card from './components/card';
import flapy  from "./images/flapy.png";
import pixSearch  from "./images/pixSearch.jpg";
import recipo  from "./images/recipo.jpg";
import quizzy  from "./images/quizzy.jpg";
import flutterLogo from "./images/flutterLogo.png";
import reactLogo from "./images/reactLogo.png";

function App() {
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
      <header className="col">
        <nav>
          <ul>
            <li>Home</li>
            <a href="#projects"><li>Projects</li></a>
            <li>Skills</li>
            <li>Socials</li>
            <li>More</li>
          </ul>
        </nav>
      </header>
    </div>
    <section id="projects">
    <strong className="sec-heading">PROJECTS</strong>
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
      </section>
    </>
  );
}

export default App;
