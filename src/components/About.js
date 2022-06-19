import { Link } from "react-router-dom";
import "./About.css";

const About = () => {

    return (
        <div className="about">
            <div>
                <section className="project">
                <h1>The Project</h1>
                <p>Our Pursuit instructors tasked us with creating a clone of a popular video sharing website called YouTube. Using the JS, HTML, CSS and React knowledge we have gained thus far we were asked to create a React application that lets you search for YouTube videos using the YouTube API, then choose a video from a list to watch and comment on. We hope you enjoy our version of YouTube!</p>
                </section>
            </div>
            <div className="fellows">
            <section className="fellow-one">
                <img src alt=''></img>
                <h3>Thierry Ankoue </h3>
                <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
                <a href="https://github.com/KingAnkoue">
                <img src='https://cdn4.iconfinder.com/data/icons/geomicons/32/672344-github-512.png' id="github" alt='github-logo' className='link'/>
                </a>
            </section>
            <section className="fellow-two">
                <img src alt=''></img>
                <h3>Samantha Figueroa</h3>
                <p>Hi! My name is Sam and I am currently working with the World Day of Prayer International Committee as their Administrative & Communications Associate. I am Puerto Rican but have lived in NY my whole life. I love the city but enjoy visting my island as much as possible. I graduated Hunter College with a BA in Psychology but am now developing my web development skills in Javascript, HTML, CSS and React as a Pursuit fellow. In my free time I enjoy roller skating, playing video games, reading, and binge-watching my favorite tv shows or having move marathons.</p>
                <a href="https://github.com/samfigueroa92">
                    <img src='https://cdn4.iconfinder.com/data/icons/geomicons/32/672344-github-512.png' id="github" alt='github-logo' className='link'/>
                </a>
                <a href="https://www.linkedin.com/in/samantha-figueroa-b00336a4/">
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/800px-LinkedIn_logo_initials.png' id="linkedin" alt='linkedin-logo' className='link'/>
                </a>
                <a href="mailto: samanthafigueroa@pursuit.org">
                    <img src='https://www.kindpng.com/picc/m/588-5889138_cute-email-icon-png-transparent-png.png' id="email" alt='email' className='link'/>
                </a>
            </section>
            <section className="fellow-three">
                <img src alt=""></img>
                <h3>Tom LaTulipe</h3>
                <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
                <a href="https://github.com/Tetracell">
                <img src='https://cdn4.iconfinder.com/data/icons/geomicons/32/672344-github-512.png' id="github" alt='github-logo' className='link'/>
                </a> 
            </section>
            </div>
        </div>
    )
};

export default About;