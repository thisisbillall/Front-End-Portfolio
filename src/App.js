import './App.css';
import stars from './images/stars.png';
import Card from './components/card';
function App() {

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
            <li>Projects</li>
            <li>Socials</li>
            <li>Others</li>
          </ul>
        </nav>
      </header>
    </div>
    <section id="projects">
        <div class = "card-container" >
          <Card/>
        </div>
      </section>
    </>
  );
}

export default App;
