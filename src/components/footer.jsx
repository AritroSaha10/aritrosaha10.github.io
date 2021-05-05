import React from 'react';

// Icons
import { InlineIcon } from '@iconify/react';
import instagramIcon from '@iconify-icons/mdi/instagram';
import githubIcon from '@iconify-icons/mdi/github';
import emailIcon from '@iconify-icons/mdi/email';
import stackoverflowIcon from '@iconify-icons/cib/stackoverflow';

import "../styles/footer.css";

const links = [
    {
        name: "Instagram",
        image: instagramIcon,
        link: "https://www.instagram.com/saha.aritro/"
    },
    {
        name: "GitHub",
        image: githubIcon,
        link: "https://github.com/AritroSaha10"
    },
    {
        name: "StackOverflow",
        image: stackoverflowIcon,
        link: "https://stackoverflow.com/users/7363404/axiumin?tab=profile"
    },
    {
        name: "Email",
        image: emailIcon,
        link: "mailto:aritro.saha729@gmail.com"
    }
];

function Footer() {
    return (
        <footer>
            <nav className="items">
                {links.map(({ name, image, link }) => (
                    <p>
                        <a href={link} title={name + " Profile"}>
                            {image &&
                                <InlineIcon icon={image} style={{ "fontSize": "20px" }} />
                            }

                            {
                                (name && !image) &&
                                name
                            }
                        </a>
                    </p>
                ))}
            </nav>

            
        </footer>
    );
}

export default Footer;