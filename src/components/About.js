import { Link } from "react-router-dom";
import React from "react";

const tom = require('../images/Tom_LaTulipe.jpg');
const samantha = require('../images/Samantha_Figueroa.jpg');
const thierry = require('../images/Thierry_Ankoue.jpg');

const About = () => {
    return (
        <div className="about">
            <div className="fellows">
            <h1>The Fellows</h1>
            <section className="fellow-one">
                <img src={thierry} alt='Thierry'></img>
                <h3>Thierry Ankoue </h3>
                <p>This is who I am...</p>
                <a href="https://github.com/KingAnkoue">
                <img src='https://cdn4.iconfinder.com/data/icons/geomicons/32/672344-github-512.png' id="gitlogo" alt='github-logo' className='link'/>
                </a>
            </section>
            <section className="fellow-two">
                <img src={samantha} alt='Samantha'></img>
                <h3>Samantha Figueroa</h3>
                <p>This is who I am...</p>
                <a href="https://github.com/samfigueroa92">
                    <img src='https://cdn4.iconfinder.com/data/icons/geomicons/32/672344-github-512.png' id="gitlogo" alt='github-logo' className='link'/>
                </a>
            </section>
            <section className="fellow-three">
                <img src={tom} alt="Tom"></img>
                <h3>Tom LaTulipe</h3>
                <p>I'm an avid pinball player who participates in competition at local and state levels.</p>
                <p>A lifelong gamer, I primarily play on PC and have been an enthusiast of emulation for over 20 years</p>
                <p>My path in programming has lead me through a variety of languages, including Python, C#, and Javascript</p>
                <a href="https://github.com/Tetracell">
                <img src='https://cdn4.iconfinder.com/data/icons/geomicons/32/672344-github-512.png' id="gitlogo" alt='github-logo' className='link'/>
                </a> 
            </section>
            </div>
            <div className="project">
                <h1>The Project</h1>
                <p>Our Pursuit instructors tasked us with creating a clone of a popular video sharing website called YouTube. Using the JS, HTML, CSS and React knowledge we have gained thus far we were asked to create a React application that lets you search for YouTube videos using the YouTube API, then choose a video from a list to watch and comment on. We hope you enjoy our version of YouTube!</p>
            </div>
        </div>
    )
};

export default About;