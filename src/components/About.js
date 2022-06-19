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
                <img src='https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F5a453b39-16fd-4a67-bc46-df9162d5356f%2FThierry_Ankoue.jpg?table=block&id=ece71c90-68af-4c5b-b31b-7ed8565f458d&spaceId=e2735e9b-8fe9-4c16-bdc1-be142cd1014e&width=2000&userId=508bb533-cfe0-4929-b1f8-94995b637846&cache=v2' alt=''></img>
                <h3>Thierry Ankoue </h3>
                <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
                <a href="https://github.com/KingAnkoue">
                <img src='https://cdn4.iconfinder.com/data/icons/geomicons/32/672344-github-512.png' id="github" alt='github-logo' className='link'/>
                </a>
            </section>
            <section className="fellow-two">
                <img src='https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F1d9ba706-bc48-4313-bf08-d143716962fa%2FSamantha_Figueroa.jpg?table=block&id=d2b9542b-c3ba-45dd-9a8f-b57785a5e384&spaceId=e2735e9b-8fe9-4c16-bdc1-be142cd1014e&width=2000&userId=508bb533-cfe0-4929-b1f8-94995b637846&cache=v2' alt=''></img>
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
                <img src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F594e1b89-fc3b-424c-ad8a-6b05da64c66f%2FTom_LaTulipe.jpg?table=block&id=e74fea20-bb4a-4812-b3bf-3c608dfe5991&spaceId=e2735e9b-8fe9-4c16-bdc1-be142cd1014e&width=2000&userId=508bb533-cfe0-4929-b1f8-94995b637846&cache=v2" alt=""></img>
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