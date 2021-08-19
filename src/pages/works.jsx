import React, { useState, useEffect } from 'react';

// Icons
import { InlineIcon } from '@iconify/react';
import githubIcon from '@iconify-icons/mdi/github';
import baselineWeb from '@iconify-icons/ic/baseline-web';
import bxlPlayStore from '@iconify-icons/bx/bxl-play-store';
import youtubeIcon from '@iconify-icons/mdi/youtube';

// CSS
import "../styles/animations.css";
import "../styles/works.css";

const cards = [
    {
        name: "Blind-Spot Monitoring using Machine Learning",
        description: "A lightweight camera-based solution for monitoring a car's blind spot programmatically using TensorFlow and Python on a Raspberry Pi that serves as a cheap alternative to using RADAR or ultrasonic sensors. Using transfer learning on MobileNetV2, an accuracy of ~98% was reached for blind spot detection with blazing fast prediction times.",
        projectRedirects: [
            {
                siteName: "GitHub",
                url: "https://github.com/AritroSaha10/BlindSpotDetection",
                icon: <InlineIcon className="icon" icon={githubIcon} />,
                color: "#1976d2"
            },
            {
                siteName: "YouTube Demo",
                url: "https://youtu.be/gVqHdGIRrTY",
                icon: <InlineIcon className="icon" icon={youtubeIcon} />,
                color: "#d32f2f"
            }
        ],
        image: null,
        year: "2021"
    },
    {
        name: "My Puja",
        description: "A full stack web app using React and Firebase with an organized directory of events / pujas and livestreams directed toward Hindu temple-goers, specifically patrons of the Toronto Kalibari temple.",
        projectRedirects: [
            {
                siteName: "GitHub",
                url: "https://github.com/AritroSaha10/MyPuja-Website",
                icon: <InlineIcon className="icon" icon={githubIcon} />,
                color: "#1976d2"
            },
            {
                siteName: "Website",
                url: "https://my-puja-production.web.app",
                icon: <InlineIcon className="icon" icon={baselineWeb} />,
                color: "#673ab7"
            },
        ],
        image: null,
        year: "2020/2021"
    },
    {
        name: "Distributed Data Labelling Platform",
        description: "A web app utilizing React and Firebase to allow for simple, collabarative, and distributed labelling of datasets, with the ability for self-hosting.",
        projectRedirects: [
            {
                siteName: "GitHub",
                url: "https://github.com/AritroSaha10/distributed_labelling",
                icon: <InlineIcon className="icon" icon={githubIcon} />,
                color: "#1976d2"
            },
        ],
        image: null,
        year: "2021"
    },
    {
        name: "Tenant Complaint System",
        description: "A website using JQuery and Firebase that allows for the filing and management of complaints from tenants.",
        projectRedirects: [
            {
                siteName: "GitHub",
                url: "https://github.com/AritroSaha10/Tenant-Complaint-System",
                icon: <InlineIcon className="icon" icon={githubIcon} />,
                color: "#1976d2"
            }
        ],
        image: null,
        year: "2020"
    },
    {
        name: "WeRecycle",
        description: "An Android app utilizing AndroidX and Firebase that helps you learn to sort your waste with an index of items and an AI scanner.",
        projectRedirects: [
            {
                siteName: "GitHub",
                url: "https://github.com/AritroSaha10/WeRecycle",
                icon: <InlineIcon className="icon" icon={githubIcon} />,
                color: "#1976d2"
            },
            {
                siteName: "Google Play",
                url: "https://play.google.com/store/apps/details?id=com.aritrosaha.aritr.werecycleapp",
                icon: <InlineIcon className="icon" icon={bxlPlayStore} />,
                color: "#00796b"
            }
        ],
        image: null,
        year: "2019/2020"
    },
    {
        name: "React To-Do List",
        description: "A basic to-do list using React that supports adding tasks with a due date and marking them as complete.",
        projectRedirects: [
            {
                siteName: "GitHub",
                url: "https://github.com/AritroSaha10/React-ToDoList",
                icon: <InlineIcon className="icon" icon={githubIcon} />,
                color: "#1976d2"
            },
            {
                siteName: "Website",
                url: "https://to-do-list-development.web.app/",
                icon: <InlineIcon className="icon" icon={baselineWeb} />,
                color: "#673ab7"
            },
        ],
        image: null,
        year: "2020"
    },
    {
        name: "Smart Garage Door Module",
        description: "A small module using the Particle Photon that can be added to an old garage door system which will allow for integration with Home Assistant using MQTT.",
        projectRedirects: [
            {
                siteName: "GitHub",
                url: "https://github.com/AritroSaha10/MQTT-Garage-Door-Module",
                icon: <InlineIcon className="icon" icon={githubIcon} />,
                color: "#1976d2"
            },
        ],
        image: null,
        year: "2020/2021"
    },
    {
        name: "MMAL Camera",
        description: "A C++ library that allows for direct control and display of the Raspberry Pi by using low-level hardware libraries to offload intensive tasks onto the GPU.",
        projectRedirects: [
            {
                siteName: "GitHub",
                url: "https://github.com/AritroSaha10/MMALCamera",
                icon: <InlineIcon className="icon" icon={githubIcon} />,
                color: "#1976d2"
            },
        ],
        image: null,
        year: "2021"
    },
    {
        name: "VEX Robotics Bootstrapped Project",
        description: "A VEX Robotics codebase that serves as a base project with elements commonly required per each season. These include control systems, self-documentation, and more.",
        projectRedirects: [
            {
                siteName: "GitHub",
                url: "https://github.com/AritroSaha10/bootstrapped-vex-v5",
                icon: <InlineIcon className="icon" icon={githubIcon} />,
                color: "#1976d2"
            },
        ],
        image: null,
        year: "2021"
    },
    {
        name: "VEX V5 Continuous Integration Plugin (GitHub)",
        description: "A Continuous Integration (C.I.) plugin that allows for automated testing of a codebase utilizing the VEX PROS for V5 APIs.",
        projectRedirects: [
            {
                siteName: "GitHub",
                url: "https://github.com/AritroSaha10/vex-build",
                icon: <InlineIcon className="icon" icon={githubIcon} />,
                color: "#1976d2"
            },
        ],
        image: null,
        year: "2021"
    },
]

// Component that fades the card in when it becomes visisble
function FadeCardOnScroll(props) {
    const [cardVisisble, setCardVisisble] = useState(false);
    const domRef = React.useRef();

    // Create interaction observer
    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                // Can sometimes be null (??)
                if (domRef.current !== null) {
                    // Make sure the class is not taken off, to make sure it only fades in
                    if (!domRef.current.classList.contains("is-visible")) {
                        setCardVisisble(entry.isIntersecting);
                    }
                }
            });
        });

        observer.observe(domRef.current);
    }, []);

    return (
        <div className={`card-anim ${cardVisisble ? "is-visible" : ""}`} ref={domRef}>
            {props.children}
        </div>
    );
}

function About() {
    return (
        <section className="works">
            <div className="title">
                <h1>Other Projects</h1>
            </div>

            <div className="cards">
                {cards.map(({ name, description, projectRedirects, image, year }) => (
                    <FadeCardOnScroll key={name}>
                        <div className="card">
                            {image && <img className="thumbnail" src={image} alt="Project preview" />}
                            <div className="content">
                                <h3>{name}</h3>

                                {year && <p className="year">{year}</p>}

                                <p>{description}</p>
                            </div>

                            <div className="redirects">
                                {projectRedirects.map(({ siteName, url, icon, color }) => (
                                    <a className="projectLink" target="_blank" rel="noreferrer" href={url} key={name + siteName} style={{ backgroundColor: color }}>
                                        {icon}
                                        {siteName}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </FadeCardOnScroll>
                ))}
            </div>
        </section>
    )
}

export default About;