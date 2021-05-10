import React from 'react'
import { HashLink } from 'react-router-hash-link';

// CSS
import "../styles/Page404.css";

function Page404() {
    return (
        <div className="Page404">
            <h1>Oops!</h1>
            <h1 className="subtitle">404 - Page Not Found</h1>
            <p>Sorry, the page you're looking for might've been removed, had its name changed, or is temporarily unavailable.</p>
            <HashLink className="projectLink" to="/#home">Go Home</HashLink>
        </div>
    )
}

export default Page404;