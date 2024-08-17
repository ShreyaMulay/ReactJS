import React from 'react'
import {Link} from "react-router-dom";

export default function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg  navbar-dark bg-dark">

        <div className="container-fluid" style={{display: 'flex',flexDirection: 'column',color:'white',alignItems: 'center',justifyContent: 'center'}}>
            <h2>React Tutorials</h2>
         
            <ul className="navbar-nav mb-2 mb-lg-0">
                <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Current Date</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/orderlist">Order List</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/greet">Greeting Msg</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/calculator">Calculator</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/netflix">Netflix</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/slotmachine">Slot Machine Game</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/onclick">Onclick example</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/time">Current Time</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/digital">Digital Clock</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/events">Update Page</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/form">Form Example</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/basicform">Form </Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/todo">TODO</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/formbuilder">Form Builder</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/incdesc">Inc & DEsc</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/accordian">Accordian Ex.</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/cards">Cards</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/notes">Notes</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/context">createContext & useContext() Ex</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/effect">useEffect() Ex</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/covid">Covid ex</Link>
                </li>
               
            </ul>
        
        </div>
    </nav>
    </>
  )
}
