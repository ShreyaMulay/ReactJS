import React from 'react'
import {Link} from 'react-router-dom'


export default function Nav() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light "  style={{backgroundColor: "#e3f2fd"}}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="">Home</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-collapse1" id="navbarText">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="about">About</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link active" to="services">Services</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link active" to="contact">Contact</Link>
                    </li>
                  
                </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}
