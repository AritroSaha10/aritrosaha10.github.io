import React from 'react'

// CSS
import "../styles/aboutMe.css";

// Images
import pfp from "../images/pfp.png";

function AboutMe() {
    return (
        <div className="aboutMe">
            <div className="content">
                <div className="self-photo">
                    <img src={pfp} alt="A portrait" />
                </div>

                <div className="text">
                    <h2>How do you do?</h2>
                    <p>I'm Aritro Saha, a self-taught software developer based in Toronto, Canada. I enjoy crafting products from the ground up to make daily life easier.</p>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;