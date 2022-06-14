const About = () => {
    return (
        <div className="about">
            <div className="fellows">
            <h1>The Fellows</h1>
            <section className="fellow-one">
                <img></img>
                <h3>Thierry Ankoue </h3>
                <p>This is who I am...</p>
                <p>Links</p>
            </section>
            <section className="fellow-two">
                <img></img>
                <h3>Samantha Figueroa</h3>
                <p>This is who I am...</p>
                <p>Links</p>
            </section>
            <section className="fellow-three">
                <img></img>
                <h3>Tom LaTulipe</h3>
                <p>This is who I am...</p>
                <p>Links</p>
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