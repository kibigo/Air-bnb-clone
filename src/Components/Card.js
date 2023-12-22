import React from "react";
import swimming from "../Images/manswimming.jpg"
import mountain from "../Images/mountainBike.jpg"
import wedding from "../Images/wedding.jpg"
import star from "../Images/red-star-1.svg"

function Card (){

    return(
        <div className="card">
            <img 
                className="card-image" 
                src={swimming}
                alt="Image of Katie Zaferes"
            />
            <div className="card-stats">
                <img 
                    className="card-star" 
                    src={star}
                    alt="star icon"
                />
                <span>5.0</span>
                <span className="gray">(6) </span>
                <span className="gray">USA</span>
            </div>
            <h2>Life lessons with Katie Zaferes</h2>
            <p> <span className="bold">From $ 136 </span>/ person </p>

        </div>
    )
}

export default Card