import React from "react";
import '../styles/navbar.css';
import About from "./About";
// import Contact from "./Contact";
// import Projects from "./Projects";
import Skills from "./Skills";

const Navbar = () => {
    return ( 
    <>
        <nav>
            <div className="logo">
                <strong>LOGO</strong>
            </div>
            <input type="checkbox" id="click"/>
            <label className="menu-btn" for="click">
                <i class="fas fa-bars"></i>
            </label>
            
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Socials</a></li>
            </ul>
        </nav>

        <section id="about">
            <About/>
        </section>

        <section id="skills">
            <Skills/>
        </section>
{/* 
        <section id="projects">
            <Projects/>
        </section> */}

        {/* <section id="contact">
            <Contact/>
        </section> */}
    </>
     );
}
 
export default Navbar;
<div>

</div>