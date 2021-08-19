import React from 'react'

// CSS
import "../styles/aboutMe.css";

// Images
import pfp from "../images/pfp.png";

function AboutMe() {
    return (
        <div className="aboutMe">
            <div className="content">
                <div className="introduction">
                    <div className="self-photo">
                        <img src={pfp} alt="A portrait" />
                    </div>

                    <div className="text">
                        <h1>Hello!</h1>
                        <h2>I'm Aritro Saha, a self-taught software developer based in Toronto, Canada. I enjoy crafting products from the ground up to make daily life easier. If you like what you see here, don't hesitate to reach out!</h2>
                    </div>
                </div>

                <div className="ecs">
                    <div className="text hobbies">
                        <h1>My Hobbies</h1>
                        <p>My hobbies include:
                            <ul>
                                <li>Programming</li>
                                <li>Gaming</li>
                                <li>Photography</li>
                                <li>Playing Piano</li>
                            </ul>
                        </p>
                    </div>

                    <div className="text hobbies">
                        <h1>My Extracurriculars</h1>
                        <p>My hobbies include:
                            <ul>
                                <li>Programming</li>
                                <li>Gaming</li>
                                <li>Photography</li>
                                <li>Playing Piano</li>
                            </ul>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;