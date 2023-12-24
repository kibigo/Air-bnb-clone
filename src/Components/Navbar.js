import React, { useState } from "react";
import airbnb from "../Images/airbnb-1.svg"
import {Link} from 'react-router-dom'



function Navbar(){
    const [showNav, setShowNav] = useState(false)

    const toggleNav = () => {
        setShowNav(!showNav)
    }
    

    return (
        <nav className="navbar">
            <img className="nav-logo" src={airbnb} alt="airbnb"/>

            <button className="nav-toggle" onClick={toggleNav}>
                Menu
            </button>
            <ul className={`nav-links ${showNav ? 'active' : ''}`}>
                <li>
                    <a href="/#">Home</a>
                </li>

                <li>
                    <a href="/#">About</a>
                </li>
                
                <li>
                    <a href="/#">Services</a>
                </li>
            </ul>
        </nav>
    
    )
}

export default Navbar