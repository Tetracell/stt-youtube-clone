import "./About.css";
import React from "react";

const tom = require("../images/Tom_LaTulipe.jpg");
const samantha = require("../images/Samantha_Figueroa.jpg");
const thierry = require("../images/Thierry_Ankoue.jpg");

const About = () => {
  return (
    <div className="about">
      <div>
        <section className="project">
          <h1>The Project</h1>
          <p>
            Our Pursuit instructors tasked us with creating a clone of a popular
            video sharing website called YouTube. Using the JS, HTML, CSS and
            React knowledge we have gained thus far we were asked to create a
            React application that lets you search for YouTube videos using the
            YouTube API, then choose a video from a list to watch and comment
            on. We hope you enjoy our version of YouTube!
          </p>
        </section>
      </div>
      <div className="fellows">
        <section className="fellow-one">
          <img src={thierry} alt=""></img>
          <h3>Thierry Ankoue </h3>
          <p>
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
            ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam
            egestas semper. Aenean ultricies mi vitae est. Mauris placerat
            eleifend leo. Pellentesque habitant morbi tristique senectus et
            netus et malesuada fames ac turpis egestas. Vestibulum tortor quam,
            feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu
            libero sit amet quam egestas semper. Aenean ultricies mi vitae est.
            Mauris placerat eleifend leo.
          </p>
          <a href="https://github.com/KingAnkoue">
            <img
              src="https://cdn4.iconfinder.com/data/icons/geomicons/32/672344-github-512.png"
              id="github"
              alt="github-logo"
              className="link"
            />
          </a>
          <a href="">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/800px-LinkedIn_logo_initials.png"
              id="linkedin"
              alt="linkedin-logo"
              className="link"
            />
          </a>
          <a href="mailto: ">
            <img
              src="https://www.kindpng.com/picc/m/588-5889138_cute-email-icon-png-transparent-png.png"
              id="email"
              alt="email"
              className="link"
            />
          </a>
        </section>
        <section className="fellow-two">
          <img src={samantha} alt=""></img>
          <h3>Samantha Figueroa</h3>
          <p>
            Hi! My name is Sam and I am currently working with the World Day of
            Prayer International Committee as their Administrative &
            Communications Associate. I am Puerto Rican but have lived in NY my
            whole life. I love the city but enjoy visting my island as much as
            possible. I graduated Hunter College with a BA in Psychology but am
            now developing my web development skills in Javascript, HTML, CSS
            and React as a Pursuit fellow. In my free time I enjoy roller
            skating, playing video games, reading, and binge-watching my
            favorite tv shows or having move marathons.
          </p>
          <a href="https://github.com/samfigueroa92">
            <img
              src="https://cdn4.iconfinder.com/data/icons/geomicons/32/672344-github-512.png"
              id="github"
              alt="github-logo"
              className="link"
            />
          </a>
          <a href="https://www.linkedin.com/in/samantha-figueroa-b00336a4/">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/800px-LinkedIn_logo_initials.png"
              id="linkedin"
              alt="linkedin-logo"
              className="link"
            />
          </a>
          <a href="mailto: samanthafigueroa@pursuit.org">
            <img
              src="https://www.kindpng.com/picc/m/588-5889138_cute-email-icon-png-transparent-png.png"
              id="email"
              alt="email"
              className="link"
            />
          </a>
        </section>
        <section className="fellow-three">
          <img src={tom} alt=""></img>
          <h3>Tom LaTulipe</h3>
          <p>
            My name is Tom. I currently work as a delivery coordinator for
            Lowe's. I've lived in Connecticut my whole life, really only
            bouncing between two towns. I have an associates degree in
            Information Technology, and plan on going back to school to round
            out my education in programming. Throughout my life I have dabbled
            with programming in languages such as QBASIC, C++, C# and Python.
            Joining Pursuit has allowed me to develop new skills in web
            development, along with giving me a path to making use of them to
            begin a new career. I am a serial video gamer, and my main 'outside
            the house' hobby is playing competitive pinball in local leagues and
            state / regional events. My brain is primarily filled with Star Trek
            minutae from endlessly rewatchng episodes of the various series. I
            once marathoned all extended editions of Lord of the Rings twice in
            one day.
          </p>
          <a href="https://github.com/Tetracell">
            <img
              src="https://cdn4.iconfinder.com/data/icons/geomicons/32/672344-github-512.png"
              id="github"
              alt="github-logo"
              className="link"
            />
          </a>
          <a href="https://www.linkedin.com/in/tom-latulipe-a6835120/">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/800px-LinkedIn_logo_initials.png"
              id="linkedin"
              alt="linkedin-logo"
              className="link"
            />
          </a>
          <a href="mailto:tomlatulipe@pursuit.org ">
            <img
              src="https://www.kindpng.com/picc/m/588-5889138_cute-email-icon-png-transparent-png.png"
              id="email"
              alt="email"
              className="link"
            />
          </a>
        </section>
      </div>
    </div>
  );
};

export default About;
