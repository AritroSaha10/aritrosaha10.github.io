import React from 'react';
import { HashLink } from 'react-router-hash-link';

import "../styles/header.css";

const links = [
    {
        name: "Projects",
        link: "/#home",
    },
    {
        name: "About",
        link: "/about"
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
                {links.map(({ name, link }) => (
                    <p key={name}>
                        <HashLink smooth to={link}>
                            {name}
                        </HashLink>
                    </p>
                ))}
            </nav>
        </header>
    );
}

export default Header;