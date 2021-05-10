import React from 'react'

// CSS
import "../styles/animations.css";
import "../styles/topHeader.css";

function TopHeader() {
    return (
        <div className="topHeader">
            <div className="content">
                <h1>Aritro Saha</h1>
                <h2 className="animate fadeInLeft one">A high school student striving to design and build software that makes life easier.</h2>
            </div>
        </div>
    );
}

export default TopHeader;