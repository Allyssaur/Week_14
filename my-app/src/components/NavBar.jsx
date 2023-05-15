import React from 'react';
import Links from './Links';

//NavBar HTML  NOTE: None of the organization options are functional yet and will establish functionality soon

export default class NavBar extends React.Component {
    render() {
        return(
            <nav className="navbar bg-dark navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
                <div className="container-fluid">
                    <a className="navbar-brand">GHIBLI++</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <Links />
                </div>
            </nav>
        )
    }
}