import React from "react";
import airbnb from "../Images/airbnb-1.svg"

function Navbar(){

    return (
        <nav>
            <img className="nav-logo" src={airbnb} alt="airbnb"/>
        </nav>
    )
}

export default Navbar