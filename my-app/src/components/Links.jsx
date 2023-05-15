import React from 'react';

//Links for the NavBar

export default class Links extends React.Component {
    render() {
        return(
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page">HOME</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  SORT
                </a>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item">A ▹ Z</a></li>
                    <li><a className="dropdown-item">YEAR</a></li>
                    <li><a className="dropdown-item">DIRECTOR</a></li>
                </ul>
              </li>
            </ul>
          </div>
        )
    }
}