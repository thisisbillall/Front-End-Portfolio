import React from "react";
import '../styles/about.css';
import ExpCard from "./ExpCard";

const About = () => {

    const compData =[
        {
            "name":"Upcloud Technology",
            "role":"Frontend developer Intern",
            "stack":"React JS / CSS",
            "start":"Jan'22",
            "end":"Apr'22"
        },
        {
            "name":"Hacktoberfest",
            "role":"Contributer and Project Maintainer",
            "stack":"React JS / CSS",
            "start":"Oct'21",
            "end":"Oct'21"
        },
        {
            "name":"AJ Softwares",
            "role":".NET developer Intern",
            "stack":"ASP.NET and Bootstrap",
            "start":"Mar'19",
            "end":"May'19"
        },
        {
            "name":"Core T n P",
            "role":"Full Stack Trainee",
            "stack":"HTML/CSS/JS/PHP/MySQL",
            "start":"Nov'18",
            "end":"Feb'19"
        },
        
    ];
    return ( 
        <>
        <div className="about-div">
           <div>
               <center>
                    <span id="my-name">Mohammad Bilal !</span>
                    <img src="/images/thisisbillall-rem.png" alt="my-pic"></img>
               </center>
           </div>
           <div className="div-i-built">
                <center>
                    <span id="i-build">I build things for Web & Apps!</span>
                </center>
           </div>
         
           
        </div>

        <div className="exp-div">
            <strong className="exp-text ">Experience</strong>
            <ExpCard data={compData[0]}/>
            <ExpCard data={compData[1]} />
            <ExpCard data={compData[2]} />
            <ExpCard data={compData[3]} />
           </div>

       </>


     );
}
 
export default About;
<div>

</div>