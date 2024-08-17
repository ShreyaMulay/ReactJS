import React from 'react'

export default function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg  navbar-dark bg-dark">

        <div className="container-fluid" style={{display: 'flex',flexDirection: 'column',color:'white',alignItems: 'center',justifyContent: 'center'}}>
            <h2>My Portfolio</h2>
         
            <ul className="navbar-nav mb-2 mb-lg-0">
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">About</a>
                </li>
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Projects</a>
                </li>
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Contact Us</a>
                </li>
               
            </ul>
        
        </div>
    </nav>
    </>
  )
}
