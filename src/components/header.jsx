import React from 'react';
import { HashLink } from 'react-router-hash-link';

import "../styles/header.css";

const links = [
    {
        name: "About",
        link: "/#home"
    },
    {
        name: "Projects",
        link: "/#projects",
    },
    /*
    {
        name: "Blog",
        link: "#",
        homeSection: false
    },
    */
    {
        name: "Contact",
        link: "/#contact"
    },
    {
        name: "Resume",
        link: "/resume.pdf",
        external: true
    }
];

function Header() {
    return (
        <header>
            <div className="logo">
                <HashLink smooth to={links[0].link}>
                    A.S
                </HashLink>
            </div>
            <nav className="items">
                {links.map(({ name, link, external }) => (
                    <p key={name}>
                        {external ?
                            (
                                <a href={link}>
                                    {name}
                                </a>
                            ) :
                            (
                                <HashLink smooth to={link}>
                                    {name}
                                </HashLink>
                            )
                        }
                    </p>
                ))}
            </nav>
        </header >
    );
}

export default Header;