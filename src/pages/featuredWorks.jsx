import React from 'react'

// CSS
import "../styles/animations.css";
import "../styles/featuredWorks.css";

// Images
import myPujaThumbnail from "../images/projectThumbnails/MyPuja_Laptop.png";
import weRecyclePhone from "../images/projectThumbnails/WeRecycle_Phone_Preview_Cropped.png";
import tcsThumbnail from "../images/projectThumbnails/TenantComplaintSystem_Desktop.png";

// Icons
import { InlineIcon } from '@iconify/react';
import githubIcon from '@iconify-icons/mdi/github';
import baselineWeb from '@iconify-icons/ic/baseline-web';
import bxlPlayStore from '@iconify-icons/bx/bxl-play-store';

const projects = [
    {
        name: "My Puja",
        linkName: "MyPuja",
        description: "A full stack web app using React and Firebase with an organized directory of events / pujas and livestreams directed toward Hindu temple-goers, specifically patrons of the Toronto Kalibari temple. The intention of the web app is to assist with the transitioning to online services due to the COVID-19 pandemic.",
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
        image: myPujaThumbnail,
        year: "2020/2021",
        tagline: "Quick Access to Temples Online"
    },
    {
        name: "Tenant Complaint System",
        linkName: "TenantComplaintSystem",
        description: "A set of full-stack websites using JQuery, Bootstrap 4, and Firebase that allows for the filing and management of complaints from tenants in a modern fashion.",
        projectRedirects: [
            {
                siteName: "GitHub",
                url: "https://github.com/AritroSaha10/Tenant-Complaint-System",
                icon: <InlineIcon className="icon" icon={githubIcon} />,
                color: "#1976d2"
            }
        ],
        image: tcsThumbnail,
        year: "2020",
        tagline: "Stress-Free Complaint Filing and Management"
    },
    {
        name: "WeRecycle",
        linkName: "WeRecycle",
        description: "An Android app utilizing AndroidX APIs and Firebase that helps you learn to sort your waste with an index of items, a finetuned search tool, and an Machine Learning camera scanner that recognizes the respective bin of an item in an instant.",
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
        image: weRecyclePhone,
        year: "2019/2020",
        tagline: "Recycling Made Simple"
    }
]

const bgColors = [
    "var(--bg-blue)",
    // "var(--bg-light-blue)",
    "var(--bg-cyan)",
    "var(--bg-teal)",
    "var(--bg-green)",
    // "var(--bg-light-green)"
]

function FeaturedWorks() {
    return (
        <section className="featuredWorks">
            <div className="projectSlides">
                {projects.map(({ name, linkName, description, projectRedirects, image, year, tagline }, i) => (
                    // Alternate slide direction based on order
                    <div className={`slide ${i % 2 ? "left" : "right"}`} key={i} style={{ backgroundColor: bgColors[i % bgColors.length] }}>
                        <div className={`preview animate fadeIn${i % 2 ? "Right" : "Left"}`}>
                            <img src={image} alt={`${name} Preview`} />
                        </div>

                        <div className={`content`}>
                            <h1>{name}</h1>
                            <h2>{tagline}</h2>
                            <p>{description}</p>

                            <div className="redirects">
                                {projectRedirects.map(({ siteName, url, icon, color }) => (
                                    <a className="projectLink" target="_blank" rel="noreferrer" href={url} key={name + siteName} style={{ backgroundColor: color }}>
                                        {icon}
                                        {siteName}
                                    </a>
                                ))}
                            </div>

                            {/*

                            <div className="projectViewContainer">
                                <a className="viewProject projectLink" href={`/projects/${linkName}`}>View Project ➜</a>
                            </div>
                            
                            */}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default FeaturedWorks;