import React from 'react';
import profilePicture from "../images/pfp.png";

import "../styles/animations.css";
import "../styles/introduction.css";

function Home() {
    return (
        <section className="home">
            <div className="content">
                <div className="title">
                    <h1 className="animate fadeInLeft one">Hi, I'm Aritro. </h1>
                    <h2 className="animate fadeInLeft two">
                        I'm a high school student and a self-taught
                        software developer in Toronto, Ontario.
                    </h2>
                </div>

                <p className="animate fadeInLeft two" style={{fontSize: "15px"}}>
                    I've been a passionate programmer for over 5 years 
                    and want to use technology to make daily life easier, 
                    whether that's by making intuitively designed websites
                    or creating embedded smart devices that become a daily
                    part of life.   
                </p>

                <p className="animate fadeInLeft two">I don't do freelance right now, but am planning to do so in the future.</p>

                <br />

                <a className="call-to-action animate fadeInLeft three" href="#contact">Get in Touch <span className="arrow">➜</span></a>
            </div>

            <div className="picture animate fadeInRight one">
                <img src={profilePicture} alt="Portrait" title="Portrait" />
            </div>
        </section>
    );
}

export default Home;